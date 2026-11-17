import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/router";
import type { ReactNode } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { SkeletonSuspense } from "skullet/react";
import { BoundaryErrorFallback } from "./BoundaryErrorFallback";

interface SkeletonBoundaryProps {
  children: ReactNode;
  /**
   * 로딩 중 skullet 이 재서 스켈레톤으로 바꿀 마크업 — 실제 컴포넌트를 샘플 데이터로 그린 것.
   * 생략하면 같은 `id` 로 마지막에 보인 모양, 그것도 없으면 일반 줄 몇 개를 그린다.
   */
  skeleton?: ReactNode;
  /** 로딩 중 스크린리더에 읽힐 문구 (예: 「베스트 상품을 불러오는 중」) */
  label: string;
  /** 다음 방문 때 같은 모양을 쓰도록 기억할 키 */
  id?: string;
  /** 에러 화면을 직접 그릴 때 */
  errorFallback?: (props: { error: unknown; retry: () => void }) => ReactNode;
  /** 이 값이 바뀌면 에러 상태를 풀고 다시 시도한다 (경로 변경은 기본 포함) */
  resetKeys?: unknown[];
  /** skullet 이 감싸는 div 의 클래스 — 부모 flex/grid 안에서 폭·간격을 맞출 때 */
  className?: string;
}

/**
 * API 한 단위(섹션)를 감싸는 경계 — 로딩은 측정 스켈레톤, 실패는 섹션 에러 화면.
 *
 * 안에서 바깥 순서: skullet `SkeletonSuspense` → `ErrorBoundary`.
 * 「다시 시도」는 `queryClient.resetQueries()` 로 실패 쿼리를 지워 실제로 다시 요청한다.
 * (RQ v4 에는 `QueryErrorResetBoundary` 가 없어 이 방식으로 대체한다.)
 */
export function SkeletonBoundary({
  children,
  skeleton,
  label,
  id,
  errorFallback,
  resetKeys = [],
  className,
}: SkeletonBoundaryProps) {
  const router = useRouter();
  const queryClient = useQueryClient();

  return (
    <ErrorBoundary
      onReset={() => {
        void queryClient.resetQueries({
          predicate: (query) => query.state.status === "error",
        });
      }}
      resetKeys={[router.asPath, ...resetKeys]}
      onError={(error) => {
        console.error(error);
      }}
      fallbackRender={({ error, resetErrorBoundary: handleRetry }) =>
        errorFallback ? (
          errorFallback({ error, retry: handleRetry })
        ) : (
          <BoundaryErrorFallback error={error} onRetry={handleRetry} />
        )
      }
    >
      <SkeletonSuspense
        skeleton={skeleton}
        label={label}
        id={id}
        className={className}
      >
        {children}
      </SkeletonSuspense>
    </ErrorBoundary>
  );
}

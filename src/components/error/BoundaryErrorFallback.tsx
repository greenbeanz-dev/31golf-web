import { Button } from "@nextui-org/react";
import { MdOutlineRunningWithErrors } from "react-icons/md";

interface BoundaryErrorFallbackProps {
  error: unknown;
  /** 쿼리 에러 상태를 지우고 다시 렌더한다 */
  onRetry: () => void;
}

/** 섹션 자리용 — 문구 + 「다시 시도」. 다른 섹션은 그대로 쓸 수 있다. */
export function BoundaryErrorFallback({
  onRetry: handleRetry,
}: BoundaryErrorFallbackProps) {
  return (
    <div className="flex w-full min-h-40 flex-col items-center justify-center gap-3 py-8">
      <MdOutlineRunningWithErrors className="size-12" />
      <div className="text-[16px] font-bold text-red-400">
        불러오지 못했습니다.
      </div>
      <div className="text-[14px] font-bold text-red-400 opacity-80">
        잠시 후 다시 시도해주세요.
      </div>
      <Button
        size="sm"
        variant="bordered"
        className="mt-2 border-[#004964] text-[#004964]"
        onPress={handleRetry}
      >
        다시 시도
      </Button>
    </div>
  );
}

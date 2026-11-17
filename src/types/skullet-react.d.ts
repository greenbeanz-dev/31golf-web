declare module "skullet/react" {
  import type { CSSProperties, ReactElement, ReactNode } from "react";

  export type SkeletonSuspenseProps = {
    children: ReactNode;
    skeleton?: ReactNode;
    id?: string;
    label?: string;
    onReveal?: () => void;
    className?: string;
    style?: CSSProperties;
  };

  export function SkeletonSuspense(props: SkeletonSuspenseProps): ReactElement;

  export type SkulletConfig = {
    nonce?: string;
    mode?: "system" | "light" | "dark";
    debug?: boolean;
  };

  export function SkulletProvider(
    props: SkulletConfig & { children: ReactNode }
  ): ReactElement;

  export function Skeleton(props: {
    children: ReactNode;
    loading?: boolean;
    label?: string;
    skeleton?: ReactNode;
    id?: string;
    className?: string;
    style?: CSSProperties;
  }): ReactElement;
}

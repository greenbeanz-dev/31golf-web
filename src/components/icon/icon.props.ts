import { IconTypes } from ".";

export interface IconProps {
  /**
   * Style overrides for the icon image
   */
  style?: React.CSSProperties;

  /**
   * The name of the icon
   */
  icon: IconTypes;

  /**
   * The size of the icon
   */
  size?: number;

  /**
   * makeStyle className override
   */
  className?: string;

  /**
   * next image 프리 랜더링 관련
   * true면 로딩 되지마자 가져옴
   */
  priority?: boolean;

  /**
   * onClick Icon
   */
  onClick?: () => void;
}

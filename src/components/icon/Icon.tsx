import * as React from "react";
import Image from "next/image";
import { icons } from ".";
import { IconProps } from "./icon.props";

export function Icon(props: IconProps) {
  const { icon, size, className, priority = false, onClick } = props;
  const iconSize = {
    width: size ? size : 24,
    height: size ? size : 24,
  };

  return (
    <div
      className={className}
      onClick={onClick}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        objectFit: "contain",
      }}
    >
      <Image
        alt={icon}
        src={icons[icon]}
        width={iconSize.width}
        height={iconSize.height}
        priority={priority}
      />
      {/* <img style={{ ...iconSize, ...styleOverride }} /> */}
    </div>
  );
}

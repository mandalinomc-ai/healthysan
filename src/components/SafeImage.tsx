"use client";

import Image from "next/image";
import type { StaticImageData } from "next/image";
import { useState, type ReactNode } from "react";
import { IMAGE_POLISH } from "@/lib/imageStyles";

type Props = {
  src: string | StaticImageData;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  sizes?: string;
  className?: string;
  priority?: boolean;
  fallback: ReactNode;
};

export function SafeImage({
  src,
  alt,
  fill,
  width,
  height,
  sizes,
  className = "",
  priority,
  fallback,
}: Props) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return <>{fallback}</>;
  }

  const polish = `${className} ${IMAGE_POLISH}`.trim();

  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        className={polish}
        priority={priority}
        onError={() => setFailed(true)}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={polish}
      priority={priority}
      onError={() => setFailed(true)}
    />
  );
}

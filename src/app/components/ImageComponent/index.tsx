import React, { Suspense } from "react";
import { list } from "@vercel/blob";
import * as process from "process";
import Image from "next/image";

export async function ImageComponent({
  fileName,
  className,
  height,
  width,
  alt,
  style,
  loading,
}) {
  const { blobs } = await list({
    prefix: fileName,
    limit: 1,
    token: process.env.BLOB_READ_WRITE_TOKEN,
  });
  const { url } = blobs[0];
  return (
    <Suspense fallback={<p>Loading image...</p>}>
      <Image
        loading={loading}
        src={url}
        className={className}
        height={height}
        width={width}
        alt={alt}
        style={style}
      />
    </Suspense>
  );
}

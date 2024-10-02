"use client";
import { CldImage } from "next-cloudinary";
import { Stack } from "@mui/material";

/** @param {import('next-cloudinary').CldImageProps} props  */

export default function CloudinaryImage({
  url,
  height,
  width,
}: {
  url: string;
  height: number;
  width: number;
}) {
  return (
    <Stack>
      <CldImage
        className={"rounded-full fit-cover w-18 h-18"}
        alt={"hero photo"}
        src={new URL(url).href} // Use this sample image or upload your own via the Media Explorer
        width={width} // Transform the image: auto-crop to square aspect_ratio
        height={height}
        crop={{
          type: "auto",
          source: true,
        }}
      />
      {/*<CldImageDefault {...props} />*/}
      {/*<CldUploadWidget/>*/}
      {/*<CldUploadButton className={"btn p-5"}>Upload Cloudinary</CldUploadButton>*/}
    </Stack>
  );
}

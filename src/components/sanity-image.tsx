import Image from "next/image";
import { ReactElement } from "react";
import { getImageDimensions } from "@sanity/asset-utils";
import { urlFor } from "@/sanity/lib/image";

export const NextImage = ({
  image,
  className,
}: {
  image: any;
  className?: string;
}): ReactElement => {
  const alt = image?.alt ?? "An image without an alt, whoops.";
  return (
    <div>
      ...
      {image?.asset && (
        <Image
          className={className}
          src={urlFor(image).url()}
          alt={alt}
          width={getImageDimensions(image).width}
          height={getImageDimensions(image).height}
          placeholder="blur"
          blurDataURL={urlFor(image).width(24).height(24).blur(10).url()}
          sizes="
            (max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            40vw"
        />
      )}
      ...
    </div>
  );
};

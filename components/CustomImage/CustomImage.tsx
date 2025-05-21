import { isValidUrl } from "@/utils/url-utils";
import Image from "next/image";


type CustomImageProps = {
    src: string
    alt: string
    width: number
    height: number
    className: string
}

export default function CustomImage(props: CustomImageProps) {
    let image = props.src;
    if (!image || !isValidUrl(image as string)) image = "/logo.svg";
    const newProps = { ...props, src: image as string }

    return <Image {...newProps}  />;
}

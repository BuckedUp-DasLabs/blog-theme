import Image from "next/image";
export default function ImageComponent(props) {
  return (
    <Image
      src={props.src}
      alt={props.alt}
      className={props.className}
      width={props.width}
      height={props.height}
      quality={80}
      loading="lazy"
    />
  );
}

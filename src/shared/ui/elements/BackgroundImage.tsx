import Image, { type StaticImageData } from 'next/image';

type BackgroundImageProps = {
  src: string | StaticImageData;
};

export const BackgroundImage = (props: BackgroundImageProps) => {
  const { src } = props;

  return (
    <>
      <Image className="scale-101 object-cover opacity-75 blur-xs" src={src} alt="" fill priority />
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(5,0,5,0.75)] to-[rgba(5,0,5,0.75)]" />
    </>
  );
};

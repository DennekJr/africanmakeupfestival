import Image from "next/image";

export const ArrowDownImage = () => {
  return (
    <Image
      alt="arrow-round-down"
      loading="lazy"
      width="238"
      height="157"
      decoding="async"
      data-nimg="1"
      className="absolute -top-3 lg:top-0 -right-8 lg:left-1/2 lg:-translate-x-1/2 h-[121.68px] w-[183.81px] lg:w-auto lg:h-auto"
      style={{color: 'transparent'}}
      src="/images/arrow-round-down.svg"
    />
  );
};

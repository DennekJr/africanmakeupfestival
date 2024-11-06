import Box from "@mui/material/Box";
import Image from "next/image";
export const InvestorsMedia = () => {
  return (
    <section className={"w-full px-6 xl:px-0 py-20 mx-auto max-w-[1320px]"}>
      <Box
        className={
          "font-sans w-full break-words whitespace-pre-wrap min-h-6 font-medium heading text-[23px] leading-[27.6px] lg:text-5xl lg:leading-[52.8px]"
        }
      >
        <span
          className={
            "relative max-w-full break-words inline-block tracking-tight"
          }
        >
          <Box
            className={
              "sm:inline-block align-bottom pb-4 w-[253px] lg:w-[490px] self-start"
            }
          >
            <Image
              alt={"about investors 1"}
              loading={"lazy"}
              width={1280}
              height={1280}
              unoptimized
              decoding={"async"}
              className="w-full h-full object-cover object-center aspect-[16/12] rounded-lg"
              src={"/images/investor.webp"}
            />
          </Box>
          <span className={"text-[#09090b]"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
            quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
            mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
            Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad
            litora torquent per conubia nostra, per inceptos himenaeos.
          </span>
          <Box
            className={
              "sm:inline-block w-[253px] lg:w-[490px] pt-4 align-top sm:ml-0 ml-auto"
            }
          >
            <Image
              alt="About media 2"
              loading="lazy"
              width="1280"
              height="1920"
              decoding="async"
              unoptimized
              className="w-full h-full object-cover object-center aspect-[16/12] rounded-lg"
              style={{ color: "transparent" }}
              src={"/images/investor.webp"}
            />
          </Box>
        </span>
      </Box>
    </section>
  );
};

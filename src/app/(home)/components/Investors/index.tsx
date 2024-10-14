import Box from "@mui/material/Box";
import { ImageComponent } from "@/app/components/ImageComponent";
import React from "react";
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
            <ImageComponent
              fileName={'images/investors1'}
              className={"w-full h-full object-cover object-center aspect-[16/12] rounded-lg"}
              alt={'about investors 1'}
              style={{ color: "transparent" }}
              width={1280}
              height={1280}
              loading={"lazy"}
            />
          </Box>
          <span className={"text-[#09090b]"}>
            The Africa Startup Festival convenes top investors, founders,
            builders and operators to delve into how tech advancements and
            strategic innovations are transforming various industries in Africa.
            As the premier event in the African startup scene, it sets the tone
            for 2025.
          </span>
          <Box
            className={
              "sm:inline-block w-[253px] lg:w-[490px] pt-4 align-top sm:ml-0 ml-auto"
            }
          >
            <ImageComponent
              fileName={'images/investors2'}
              className={"w-full h-full object-cover object-center aspect-[16/12] rounded-lg"}
              alt={'about investors 2'}
              style={{ color: "transparent" }}
              width="1280"
              height="1920"
              loading={"lazy"}
            />
          </Box>
        </span>
      </Box>
    </section>
  );
};

import Box from "@mui/material/Box";
import { useMemo } from "react";
import { BENEFITSCONSTANTSMENU } from "@/app/(home)/exhibit/Benefits/benefits.constants";

export const Benefits = () => {
  const benefits = useMemo(() => Object.values(BENEFITSCONSTANTSMENU), []);
  return (
    <Box className={"w-full py-24 lg:py-32 bg-[#F2F2F2]"}>
      <Box className={"max-w-[1320px] mx-auto grid gap-6 px-6 lg:gap-16"}>
        <Box>
          <pre
            id="undefined-0"
            className="font-sans w-full break-words whitespace-pre-wrap min-h-6 font-medium heading text-[23px] leading-[27.6px] lg:text-5xl lg:leading-[52.8px]"
          >
            <span className="relative max-w-full break-words">
              Exhibition Benefits
            </span>
          </pre>
        </Box>
        <Box className={'rounded-3xl lg:py-8 grid x:grid-cols-1 gap-4 relative border border-[#504E56]'}>
          {benefits.map((benefit, index) => {
            const lastIndex = index === benefits.length -1;
            return (
              <Box
                key={index}
                className={'grid sm:grid-cols-2 md:px-16 px-4 grid-cols-1 gap-6 lg:gap-8 md:py-8 py-6 border-[#504E56]' + `${!lastIndex ? ' border-b' : ''}`}>
                <Box className="col-span-1"><p
                  className="text-[23px] leading-[27.6px] md:text-5xl lg:leading-normal text-xl font-medium text-[#0A090B]">{benefit.title}</p>
                </Box>
                <ol className="col-span-1 list-disc grid gap-4 text-[#504E56] pl-4 lg:pl-0">
                  {benefit.list.map((listItem, index) => (
                    <li className="text-xl" key={index}>{listItem}</li>
                  ))}
                </ol>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

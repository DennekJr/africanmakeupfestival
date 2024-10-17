import Box from "@mui/material/Box";
import { ScheduleDropdown } from "./ScheduleDropdown";
import { useEffect } from "react";

export const ProgramSchedule = () => {
  useEffect(() => {
    console.log('UseEffect');
  }, []);
  console.log('in program page');
  return (
    <Box className={"w-full"}>
      <section className={"w-full sm:py-6 lg:py-32 sm:px-6"}>
        <Box
          className={
            "text-white bg-[#0A090B] mx-auto max-w-[1320px] min-h-[907px] flex flex-col sm:rounded-3xl"
          }
        >
          <Box className={"space-y-3 px-6 pt-8 pb-4 lg:px-12 lg:pb-6 lg:pt-14"}>
            <pre
              id="undefined-0"
              className="font-sans w-full break-words whitespace-pre-wrap min-h-6 font-medium heading text-[32px] leading-[35.2px] lg:text-6xl lg:leading-[66px] tracking-[-1px]"
            >
              <span className="relative max-w-full break-words">Program</span>
            </pre>
            <Box className="text-gray-1100 space-y-3">
              <Box>
                <Box
                  role="tablist"
                  className="h-10 items-center rounded-md p-1 text-muted-foreground flex gap-3 justify-start bg-transparent"
                  tabIndex={0}
                  style={{ outline: "none" }}
                >
                  <button
                    type="button"
                    role="tab"
                    id="radix"
                    className="bg-[#fff] text-[#09090B] inline-flex items-center justify-center whitespace-nowrap rounded-[12px] px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                    tabIndex={-1}
                  >
                    16th
                  </button>
                </Box>
              </Box>
            </Box>
          </Box>
          <div
            className="shrink-0 bg-border h-[1px] w-full bg-[#E4E4E7]"
          ></div>
          <Box className={"flex-1 grid gap-8 p-6 lg:p-12"}>
            <div
              data-state="active"
              data-orientation="horizontal"
              role="tabpanel"
              aria-labelledby="radix-:r4:-trigger-66ce29531434f40964fdab43"
              id="radix-:r4:-content-66ce29531434f40964fdab43"
              tabIndex={0}
              className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 space-y-8"
              style={{ animationDuration: "0s" }}
            >
              <ScheduleDropdown />
            </div>
          </Box>
        </Box>
      </section>
    </Box>
  );
};

import * as React from "react";
import Box from "@mui/material/Box";
import { RegisterBoothForm } from "@/app/(home)/exhibit/register/RegisterBoothForm";


const Register: () => Promise<React.JSX.Element> = async () => {
  return (
    <section className={"w-full mt-16"}>
      <Box className={"w-full py-12 px-6 xl:py-24 2xl:py-32"}>
        <Box className={"w-full max-w-[1320px] mx-auto space-y-6 lg:space-y-8"}>
          <Box className={'w-full lg:flex space-y-3 lg:space-y-0'}>
            <Box
              className={"lg:max-w-[373.5px] flex-1 [&>pre.heading>span]:mb-6"}
            >
            <pre
              id="undefined-0"
              className="font-sans w-full break-words whitespace-pre-wrap min-h-6 font-medium heading text-[32px] leading-[35.2px] lg:text-6xl lg:leading-[66px] tracking-[-1px]"
            >
              <span className="relative max-w-full break-words">
                Exhibition Form
              </span>
            </pre>
            </Box>
            <Box className={"pl-4 w-full max-w-screen-form mr-auto flex-1"}>
            <pre
              id="undefined-0"
              className="font-sans w-full break-words whitespace-pre-wrap min-h-6 heading text-xl font-normal"
            >
              <span className="relative max-w-full break-words">
                Please fill out the form below, and a representative from the
                Africa Startup Festival will get across to you you via email
                about your exhibition options and help you achieve your goals.
              </span>
            </pre>
            </Box>
          </Box>
          <Box className={'max-w-[573px] mx-auto w-full'}>
            <RegisterBoothForm />
          </Box>
        </Box>
      </Box>
    </section>
  );
};

export default Register;

import Box from "@mui/material/Box";
import { Grid } from "@mui/system";
import { FOOTER_MENULINKS } from "./footer.constants";
import { useMemo } from "react";
import Link from "next/link";
import { Divider, Typography } from "@mui/material";
import Image from "next/image";

export const Footer = () => {
  const links = useMemo(() => Object.values(FOOTER_MENULINKS), []);

  return (
    <Box>
      <footer
        className={
          "border-t border-t-border-secondary w-full py-6 px-6 lg:px-0"
        }
      >
        <Box className={"mx-auto max-w-[1320px] flex flex-col gap-14"}>
          <Box className={"flex flex-col lg:flex-row gap-8 py-8"}>
            <div className="">
              <Image
                alt="ASF Logo Full"
                loading="lazy"
                width="5207"
                height="2365"
                decoding="async"
                className="!invert dark:invert-0 w-[337px] h-[139px] object-contain object-left"
                style={{ color: "transparent" }}
                src="/images/festivalLogo.png"
              />
            </div>
            <Box
              className={
                "flex justify-center md:justify-between w-full lg:w-[70%]"
              }
            >
              <Grid
                container
                className={
                  "!md:gap-4 mb-6 md:mb-0 flex-1 !grid sm:grid-cols-2 lg:grid-cols-4 !gap-6"
                }
              >
                {links.map((link, index) => (
                  <Grid key={index} container direction={"column"}>
                    <Box
                      className={
                        "col-span-1 lg:justify-self-center flex flex-col gap-4 lg:gap-6"
                      }
                    >
                      <Link key={index} href={link.route} className="nav-link">
                        <Typography
                          className={
                            "pb-2 lg:pb-4 hover:cursor-pointer text-[#0A090B] !text-[1.25rem]"
                          }
                        >
                          {link.name}
                        </Typography>
                      </Link>
                      <Box className={"grid gap-3 text-xl font-medium"}>
                        {link.subLinks?.map((subLink, index) => {
                          return (
                            <Link
                              key={index}
                              href={subLink.route}
                              className="nav-link"
                            >
                              <Typography
                                className={
                                  "!text-[1.25rem] text-[#0A090B] pb-1 md:pb-2 text-xl !font-bold hover:cursor-pointer"
                                }
                                key={subLink.id}
                              >
                                {subLink.name}
                              </Typography>
                            </Link>
                          );
                        })}
                      </Box>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Box>
          <Box>
            <Divider
              orientation={"horizontal"}
              className={"shrink-0 h-[1px] w-full !bg-[#C8C8CB]"}
            />
          </Box>
          <Box className={"flex items-center justify-between pb-6"}>
            <Box className="flex gap-2 items-center">
              <a href="/en/privacy-policy">
                <Typography className={"text-[#0A090B]"}>
                  Privacy Policy
                </Typography>
              </a>
            </Box>
            <Link href="https://sparkafrica.co/">
              <Image
                alt="Spark Monogram"
                loading="lazy"
                width="127"
                height="18"
                decoding="async"
                style={{ color: "transparent" }}
                src="/images/SPARK.svg"
              />
            </Link>
          </Box>
        </Box>
      </footer>
    </Box>
  );
};

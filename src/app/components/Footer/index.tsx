import Box from "@mui/material/Box";
import { Grid } from "@mui/system";
import { FOOTER_MENULINKS } from "./footer.constants";
import { useMemo, useState } from "react";
import Link from "next/link";
import { Collapse, Divider, Typography } from "@mui/material";
import Image from "next/image";
import {
  KeyboardArrowDown,
  KeyboardArrowUp,
} from "@mui/icons-material";

export const Footer = () => {
  const collapsibleFooterItems = [
    { name: "Navigate", isOpen: false },
    { name: "Event Guide", isOpen: false },
    { name: "Our Events", isOpen: false },
    { name: "Connect", isOpen: false },
  ];
  const [collapsedFooterHeader, setCollapsedFooterHeader] = useState<
    { name: string; isOpen: boolean }[]
  >(collapsibleFooterItems);
  const links = useMemo(() => Object.values(FOOTER_MENULINKS), []);
  const handleSetCollapsed = (name: string) => {
    const newState = collapsedFooterHeader.map((item) => {
      if (item.name !== name) {
        return item;
      } else {
        return {
          ...item,
          isOpen: !item.isOpen,
        };
      }
    });
    setCollapsedFooterHeader(newState);
  };

  return (
    <Box>
      <footer
        className={
          "bg-lightGrey w-full py-6 px-6 lg:px-0"
        }
      >
        <Box className={"mx-auto max-w-[1320px] flex flex-col gap-2"}>
          <Box className={"flex flex-col lg:flex-row gap-8 lg:py-8"}>
            <Link href={"/"} className={"hover:cursor-pointer"}>
              <Image
                alt="ASF Logo Full"
                loading="lazy"
                width="6207"
                height="3365"
                decoding="async"
                className="md:w-[337px] w-[500px] h-full object-contain object-left"
                style={{ color: "black", transition: "all 0.3s ease" }}
                src="/images/footer.svg"
              />
            </Link>
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
                {links.map((link, index) => {
                  const footerHeader = collapsedFooterHeader.find((item) => {
                    if (item.name === link.name) {
                      return item.isOpen;
                    }
                    return false;
                  });
                  return (
                    <Grid key={index} container direction={"column"}>
                      <Box
                        className={
                          "col-span-1 lg:justify-self-center flex flex-col gap-4 lg:gap-6"
                        }
                      >
                        <Box
                          key={index}
                          className="nav-link flex justify-between text-[#0A090B]"
                          onClick={() => handleSetCollapsed(link.name)}
                        >
                          <h5
                            className={
                              "pb-2 lg:pb-4 hover:cursor-pointer font-extrabold hover:text-primary !text-[1.25rem]"
                            }
                          >
                            {link.name}
                          </h5>
                          {footerHeader?.isOpen ? (
                            <KeyboardArrowUp className={'lg:!hidden'} />
                          ) : (
                            <KeyboardArrowDown className={'lg:!hidden'} />
                          )}
                        </Box>
                        <Collapse
                          in={footerHeader?.isOpen}
                          timeout="auto"
                          unmountOnExit
                          className={"grid gap-3 text-xl font-medium lg:hidden"}
                        >
                          {link.subLinks?.map((subLink, index) => {
                            return (
                              <Link
                                key={index}
                                href={subLink.route}
                                className="nav-link"
                              >
                                <p
                                  className={
                                    "!text-[1.25rem] hover:text-primary text-[#0A090B] pb-1 md:pb-2 text-xl hover:cursor-pointer"
                                  }
                                  key={subLink.id}
                                >
                                  {subLink.name}
                                </p>
                              </Link>
                            );
                          })}
                        </Collapse>
                        <Box
                          className={"lg:grid gap-3 text-xl hidden"}
                        >
                          {link.subLinks?.map((subLink, index) => {
                            return (
                              <Link
                                key={index}
                                href={subLink.route}
                                className="nav-link"
                              >
                                <p
                                  className={
                                    "!text-[1.25rem] hover:text-primary text-[#0A090B] pb-1 md:pb-2 text-xl hover:cursor-pointer"
                                  }
                                  key={subLink.id}
                                >
                                  {subLink.name}
                                </p>
                              </Link>
                            );
                          })}
                        </Box>
                      </Box>
                    </Grid>
                  );
                })}
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
            <Link href="https://www.piggyvest.com/">
              <Image
                alt="Spark Monogram"
                loading="lazy"
                width={127}
                height={18}
                decoding="async"
                style={{ color: "transparent" }}
                src="/images/piggyvest.webp"
              />
            </Link>
          </Box>
        </Box>
      </footer>
    </Box>
  );
};

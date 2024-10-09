"use client";
import * as React from "react";
import { useMemo } from "react";
import Box from "@mui/material/Box";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import { useRouter, usePathname } from "next/navigation";
import {
  NAV_BUTTONS,
  NAV_MENU,
} from "@/app/components/NavBar/navbar.constants";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "@mui/material/styles";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import { RightArrowButton, WhiteBGButton } from "@/app/utils";
import { useWindowSize } from "@/hooks/useWindowSize";
import { MenuDialog } from "@/app/components/MenuDialog";

export default function NavBar() {
  const router = useRouter();
  const path = usePathname();
  const theme = useTheme();
  const windowSize = useWindowSize();
  const navBarItems = useMemo(() => Object.values(NAV_MENU), []);
  const navBarButtons = useMemo(() => Object.values(NAV_BUTTONS), []);

  const width = useMemo(() => {
    return windowSize;
  }, [windowSize]);

  const redirectToHome = (route: string) => {
    if (path !== "/") {
      router.push("/#" + route);
    }
  };

  const openDialog = () => {};
  return (
    <Box
      className={
        "flex justify-center border-b border-border-secondary bg-transparent w-full p-4 text-white z-10 absolute top-0 left-0"
      }
    >
      <Box
        className={
          "w-full flex items-center justify-between transition-colors ease-in-out duration-200 max-w-[1320px]"
        }
      >
        <Box>
          <Link to={"home"} href={"/home"}>
            <Image
              alt={"Makeup Festival logo"}
              src={"/images/logo.png"}
              width={80}
              height={30}
            />
          </Link>
        </Box>
        {width! > 970 && (
          <Box>
            <List
              component={"nav"}
              className={"flex flex-1 items-center justify-between"}
            >
              {navBarItems.map(({ name, id, disabled, route }) => (
                <ListItem key={id} disablePadding sx={{ display: "block" }}>
                  <Link
                    onClick={() => redirectToHome(route)}
                    key={id}
                    disabled={disabled}
                    className="nav-link"
                    activeClass="Mui-selected"
                    href={route}
                  >
                    <ListItemButton className={"w-max !py-0"}>
                      <ListItemText
                        primary={name}
                        primaryTypographyProps={{ fontWeight: "600" }}
                        className={"itemText"}
                      />
                    </ListItemButton>
                  </Link>
                </ListItem>
              ))}
            </List>
          </Box>
        )}
        {width! > 970 && (
          <Box>
            <List
              component={"nav"}
              className={"flex flex-1 items-center justify-between gap-4 !py-0"}
            >
              {navBarButtons.map(({ name, id, disabled, route }) => (
                <ListItem key={id} disablePadding sx={{ display: "block" }}>
                  <Link
                    onClick={() => redirectToHome(route)}
                    key={id}
                    disabled={disabled}
                    className="nav-link"
                    activeClass="Mui-selected"
                    href={route}
                  >
                    {id === "getTicket" ? (
                      <WhiteBGButton
                        className={`!rounded-full whitespace-nowrap`}
                        variant="contained"
                        endIcon={<ConfirmationNumberIcon />}
                      >
                        <ListItemButton className={"w-max !p-0"}>
                          <ListItemText
                            primary={name}
                            primaryTypographyProps={{ fontWeight: "600" }}
                            className={"itemText"}
                          />
                        </ListItemButton>
                      </WhiteBGButton>
                    ) : (
                      <RightArrowButton
                        className={`!rounded-full whitespace-nowrap`}
                        variant="outlined"
                        endIcon={<ArrowOutwardIcon />}
                      >
                        <ListItemButton className={"w-max !p-0"}>
                          <ListItemText
                            primary={name}
                            primaryTypographyProps={{ fontWeight: "600" }}
                            className={"itemText"}
                          />
                        </ListItemButton>
                      </RightArrowButton>
                    )}
                  </Link>
                </ListItem>
              ))}
            </List>
          </Box>
        )}
        {width! < 970 && <MenuDialog />}
      </Box>
    </Box>
  );
}

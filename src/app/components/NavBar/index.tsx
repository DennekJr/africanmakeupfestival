"use client";
import * as React from "react";
import { useMemo, useState } from "react";
import Box from "@mui/material/Box";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import { useRouter, usePathname } from "next/navigation";
import { NAV_BUTTONS, NAV_MENU } from "./navbar.constants";
import Link from "next/link";
import Image from "next/image";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import { RightArrowButton, WhiteBGButton } from "../../utils";
import { MenuDialog } from "../MenuDialog";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

export default function NavBar() {
  const initialState = [
    { name: "Exhibitors", isOpen: false },
    { name: "Travel", isOpen: false },
  ];
  const router = useRouter();
  const path = usePathname();
  const [isOpen, setIsOpen] = useState(initialState);
  const navBarItems = useMemo(() => Object.values(NAV_MENU), []);
  const navBarButtons = useMemo(() => Object.values(NAV_BUTTONS), []);

  const redirectToHome = (route: string) => {
    if (path !== "/") {
      router.push("/" + route);
    }
  };

  const handleMouseEnter = (name: string) => {
    const newState = isOpen.map((item) => {
      if (item.name !== name) {
        return item;
      } else {
        return {
          ...item,
          isOpen: true,
        };
      }
    });
    setIsOpen(newState);
  };
  const handleMouseLeave = () => {
    setIsOpen(initialState);
  };

  const exhibitorIcon = (route: string) => {
    const open = isOpen.find((item) => item.name === route)?.isOpen;
    if (!open) {
      return <ExpandMoreIcon />;
    }
    return <ExpandLessIcon />;
  };

  return (
    <Box
      className={
        `${path == "/" ? "!bg-transparent " : "!bg-[#000000] "}` +
        "flex justify-center border-b border-border-secondary bg-transparent w-full p-4 text-white z-10 static lg:absolute top-0 left-0"
      }
    >
      <Box
        className={
          "w-full flex items-center justify-between transition-colors ease-in-out duration-200 max-w-[1320px]"
        }
      >
        <Box>
          <Link href={"/"}>
            <Image
              alt={"Makeup Festival logo"}
              src={"/images/logo.webp"}
              width={80}
              height={30}
            />
          </Link>
        </Box>
        <Box className={"min-[1183px]:visible max-[1182px]:hidden"}>
          <List
            component={"nav"}
            className={"flex flex-1 items-center justify-between"}
          >
            {navBarItems.map(({ name, id, route, subRoute }, index) => {
              return (
                <ListItem
                  onMouseEnter={() => {
                    if (name !== "Exhibitors" && name !== "Travel") {
                      handleMouseLeave();
                    }
                  }}
                  onMouseLeave={handleMouseLeave}
                  key={index}
                  className={"relative"}
                  disablePadding
                  id={id}
                  sx={{ display: "block" }}
                >
                  <Link
                    onClick={() => redirectToHome(route)}
                    className="nav-link"
                    href={route}
                  >
                    <ListItemButton
                      className={"w-max !py-0"}
                      aria-haspopup="true"
                      onMouseEnter={() => handleMouseEnter(name)}
                    >
                      <ListItemText
                        primary={name}
                        primaryTypographyProps={{ fontWeight: "600" }}
                        className={"itemText"}
                      />
                      {name === "Exhibitors" && exhibitorIcon(name)}
                      {name === "Travel" && exhibitorIcon(name)}
                    </ListItemButton>
                  </Link>
                  <Box
                    onMouseLeave={handleMouseLeave}
                    className={
                      "absolute bg-white py-3 m-[-1px] left-0 top-full justify-center rounded-xl" +
                      `${isOpen.find((route) => route.name === name)?.isOpen ? " flex flex-col" : " invisible"}`
                    }
                  >
                    {subRoute?.map((hoverRoute, index) => (
                      <Link key={index} href={hoverRoute}>
                        <ListItemText
                          primary={hoverRoute}
                          primaryTypographyProps={{ fontWeight: "600" }}
                          className={
                            "capitalize itemText px-3 text-[#C8C8CB] hover:text-black hover:cursor-pointer"
                          }
                        />
                      </Link>
                    ))}
                  </Box>
                </ListItem>
              );
            })}
          </List>
        </Box>
        <Box className={"min-[1183px]:visible max-[1182px]:hidden"}>
          <List
            component={"nav"}
            className={"flex flex-1 items-center justify-between gap-4 !py-0"}
          >
            {navBarButtons.map(({ name, id, route }) => (
              <ListItem
                key={id}
                className={"hover:cursor-pointer"}
                disablePadding
                sx={{ display: "block" }}
              >
                <Link
                  onClick={() => redirectToHome(route)}
                  key={id}
                  className="nav-link"
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
        <Box className={"max-[1182px]:visible min-[1183px]:hidden"}>
          <MenuDialog />
        </Box>
      </Box>
    </Box>
  );
}

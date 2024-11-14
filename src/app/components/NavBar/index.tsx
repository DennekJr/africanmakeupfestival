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
import { TransparentArrowButton, WhiteTicketButton } from "../../utils";
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
  const getPath = (route: string) => {
    return path === route;
  }

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
        `${path == "/" ? "!bg-transparent " : "!bg-black "}` +
        "flex justify-center w-full p-4 text-white z-10 absolute top-0 left-0"
      }
    >
      <Box
        className={
          "w-full relative flex items-center justify-between transition-colors ease-in-out duration-200 max-w-[1320px]"
        }
      >
        <Box className={'absolute left-0'}>
          <Link href={"/"}>
            <Image
              alt={"Makeup Festival logo"}
              src={"/images/logos/ASF Logo_Full Colour.svg"}
              width={463}
              height={270}
              style={{color: 'white'}}
              className={'text-white h-auto w-[150px] max-w-[100%]'}
            />
          </Link>
        </Box>
        <Box className={'invisible w-[150px]'}>
          <Link href={"/"}>
            <Image
              alt={"Makeup Festival logo"}
              src={"/images/navlogo.svg"}
              width={463}
              height={270}
              style={{color: 'white', filter: 'invert(100%) sepia(100%) saturate(0%) hue-rotate(86deg) brightness(109%) contrast(100%)'}}
              className={'text-white h-[20px] w-full'}
            />
          </Link>
        </Box>
        <Box className={"min-[1230px]:visible max-[1230px]:hidden"}>
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
                  className={"relative hover:cursor-pointer"}
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
                      className={"w-max !px-[9px] !py-0 hover:!bg-transparent"}
                      aria-haspopup="true"
                      onMouseEnter={() => handleMouseEnter(name)}
                    >
                      <ListItemText
                        primary={name}
                        primaryTypographyProps={{ fontWeight: "400" }}
                        className={'itemText ' + getPath(path?.toLowerCase() as string) ? '' : 'text-[#ADACAF]'}
                      />
                      {name === "Exhibitors" && exhibitorIcon(name)}
                      {name === "Travel" && exhibitorIcon(name)}
                    </ListItemButton>
                  </Link>
                  <Box
                    onMouseLeave={handleMouseLeave}
                    className={
                      "absolute w-max bg-white py-3 m-[-1px] left-0 top-full justify-center rounded-xl" +
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
        <Box className={"min-[1183px]:visible max-[1230px]:hidden"}>
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
                    <WhiteTicketButton name={name} />
                  ) : (
                    <TransparentArrowButton name={name} />
                  )}
                </Link>
              </ListItem>
            ))}
          </List>
        </Box>
        <Box className={"max-[1230px]:visible min-[1230px]:hidden"}>
          <MenuDialog />
        </Box>
      </Box>
    </Box>
  );
}

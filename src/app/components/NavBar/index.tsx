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
import Popover from '@mui/material/Popover';


export default function NavBar() {
  const initialState = [
    { name: "Exhibitors", isOpen: false },
    { name: "Travel", isOpen: false },
  ];
  const router = useRouter();
  const path = usePathname();
  const [isOpen, setIsOpen] = useState(initialState);
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
  const navBarItems = useMemo(() => Object.values(NAV_MENU), []);
  const navBarButtons = useMemo(() => Object.values(NAV_BUTTONS), []);

  const redirectToHome = (route: string) => {
    if (path !== "/") {
      router.push("/" + route);
    }
  };

  const handleMouseEnter = (name: string, event: React.MouseEvent<HTMLElement>) => {
    if(event.currentTarget.innerText === "Exhibitors" || event.currentTarget.innerText === "Travel"){
      setAnchorEl(event.currentTarget);
    }
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
    console.log('left');
    setIsOpen(initialState);
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

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
            {navBarItems.map(({ name, id, route, subRoute }, index) => (
              <ListItem
                key={index}
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
                    aria-owns={open ? 'mouse-over-popover' : undefined}
                    aria-haspopup="true"
                    onMouseEnter={(e) => handleMouseEnter(name, e)}
                  >
                    <ListItemText
                      primary={name}
                      primaryTypographyProps={{ fontWeight: "600" }}
                      className={"itemText"}
                    />
                    {name === "Exhibitors" && exhibitorIcon(name)}
                    {name === "Travel" && exhibitorIcon(name)}
                  </ListItemButton>
                  <Popover
                    id="mouse-over-popover"
                    sx={{ pointerEvents: 'none' }}
                    open={open}
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'left',
                    }}
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'left',
                    }}
                    onClose={handleMouseLeave}
                    disableRestoreFocus
                  >
                    {/*{subRoute !== 'undefined' && >}*/}
                    {subRoute?.map((route, index) => (
                      <ListItemText
                        key={index}
                        primary={route}
                        primaryTypographyProps={{ fontWeight: "600" }}
                        className={"itemText bg-white text-black p-3"}
                        />
                    ))}
                  </Popover>
                </Link>
              </ListItem>
            ))}
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

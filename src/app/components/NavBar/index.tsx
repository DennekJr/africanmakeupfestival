import * as React from "react";
import {useEffect, useMemo, useState} from "react";
import Box from "@mui/material/Box";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import { useRouter, usePathname } from "next/navigation";
import { NAV_BUTTONS, NAV_MENU } from "./navbar.constants";
import Link from "next/link";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import { RightArrowButton, WhiteBGButton } from "../../utils";
import { MenuDialog } from "../MenuDialog";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { ImageComponent } from "../../components/ImageComponent";

export default function NavBar() {
  const router = useRouter();
  const path = usePathname();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const navBarItems = useMemo(() => Object.values(NAV_MENU), []);
  const navBarButtons = useMemo(() => Object.values(NAV_BUTTONS), []);
  useEffect(() => {
    if(document){
      const el = document.querySelector('#exhibitor');
      console.log(el);
    }
  }, []);
  const redirectToHome = (route: string) => {
    if (path !== "/") {
      router.push("/" + route);
    }
  };
  const exhibitorIcon = () => {
    if (!isOpen) {
      return (
        <ExpandMoreIcon />
      );
    }
    return <ExpandLessIcon />;
  };

  return (
    <Box
      className={
        `${path == "/" ? "!bg-transparent " : "!bg-[#000000] "}` +
        "flex justify-center border-b border-border-secondary w-full p-4 text-white z-10 absolute top-0 left-0"
      }
    >
      <Box
        className={
          "w-full flex items-center justify-between transition-colors ease-in-out duration-200 max-w-[1320px]"
        }
      >
        <Box>
          <Link href={"/"}>
            <ImageComponent
              fileName={"images/logo"}
              alt={"Makeup Festival logo"}
              width={80}
              loading={"eager"}
              className={"visible"}
              height={30}
              style={{ visibility: "visible" }}
            />
          </Link>
        </Box>
        <Box className={"min-[1183px]:visible max-[1182px]:hidden"}>
          <List
            component={"nav"}
            className={"flex flex-1 items-center justify-between"}
          >
            {navBarItems.map(({ name, id, route }, index) => (
              <ListItem
                onMouseEnter={() => setIsOpen(true)}
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
                  <ListItemButton className={"w-max !py-0"}>
                    <ListItemText
                      primary={name}
                      primaryTypographyProps={{ fontWeight: "600" }}
                      className={"itemText"}
                    />
                    {name === "Exhibitors" && exhibitorIcon()}
                    {name === "Travel" && exhibitorIcon()}
                  </ListItemButton>
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
              <ListItem key={id} disablePadding sx={{ display: "block" }}>
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

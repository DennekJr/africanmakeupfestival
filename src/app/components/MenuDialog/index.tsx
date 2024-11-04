import { Collapse, Dialog, IconButton, Slide } from "@mui/material";
import React, { useMemo, useState } from "react";
import { TransitionProps } from "@mui/material/transitions";
import { CloseIcon } from "next/dist/client/components/react-dev-overlay/internal/icons/CloseIcon";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";
import { NAV_BUTTONS, NAV_MENU } from "../NavBar/navbar.constants";
import ListItem from "@mui/material/ListItem";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { RightArrowButton, WhiteBGButton } from "../../utils";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import Image from "next/image";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

const useStyles = makeStyles({
  dialog: {
    position: "absolute",
    left: 0,
    top: 0,
    right: 0,
    margin: 0,
    minWidth: "100vw",
    background: "hsl(270 10% 4%)",
  },
});
const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    /* eslint-disable  @typescript-eslint/no-explicit-any */
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  // return <Slide direction="down" ref={ref} {...props} />;
  return <Slide direction="down" ref={ref} {...props} />;
});

export const MenuDialog = () => {
  const initialState = [
    { slide: "exhibitors", isOpen: false },
    { slide: "travel", isOpen: false },
  ];
  const [openSlide, setOpenSlide] = useState(initialState);
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  const navBarItems = useMemo(() => Object.values(NAV_MENU), []);
  const navBarButtons = useMemo(() => Object.values(NAV_BUTTONS), []);
  const path = usePathname();
  const router = useRouter();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const redirectToHome = (route: string) => {
    if (path !== "/") {
      router.push("/#" + route);
    }
    handleClose();
  };

  const handleToggleDropdown = (id: string) => {
    const newState = openSlide.map((item) => {
      if (item.slide !== id) {
        return item;
      } else {
        return {
          ...item,
          isOpen: !item.isOpen,
        };
      }
    });
    setOpenSlide(newState);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <React.Fragment>
      <Box className={"flex"} onClick={handleClickOpen}>
        <ListItemButton className={"w-max !p-0"}>
          <ListItemText
            primary={"Menu"}
            primaryTypographyProps={{ fontWeight: "600" }}
            className={"itemText underline"}
          />
        </ListItemButton>
      </Box>
      <Dialog
        open={open}
        classes={{
          paper: classes.dialog,
        }}
        fullWidth
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <Box className={"float-right"}>
          <IconButton
            edge="start"
            color="inherit"
            className={"float-right"}
            onClick={handleClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
        </Box>
        <List className={"!py-12"}>
          {navBarItems.map(({ name, id, route, subRoute }, index) => {
            const open = openSlide.find((item) => {
              if (item.slide === id) {
                return item.isOpen;
              }
              return false;
            });
            if (subRoute !== undefined) {
              return (
                <Box key={index} className={"border-b !mx-4"}>
                  <button
                    onClick={() => handleToggleDropdown(id)}
                    className={
                      "flex flex-1 items-center justify-between font-medium transition-all hover:underline"
                    }
                  >
                    <ListItemText
                      primary={name}
                      primaryTypographyProps={{
                        fontWeight: "600",
                        fontSize: "1.5rem",
                      }}
                      className={"itemText !m-0 py-4"}
                    />
                    {open?.isOpen ? <ExpandLess /> : <ExpandMore />}
                  </button>
                  <Collapse in={open?.isOpen} timeout="auto" unmountOnExit>
                    <List
                      component="div"
                      disablePadding
                      className={
                        "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
                      }
                    >
                      {subRoute?.map((route, index) => {
                        return (
                          <ListItemButton
                            key={index}
                            className={"pb-4 pt-0 space-y-1.5 text-base"}
                            sx={{ paddingX: 0 }}
                            href={route}
                          >
                            <ListItemText
                              primary={route}
                              primaryTypographyProps={{
                                fontWeight: "600",
                                fontSize: "1rem",
                                lineHeight: '1.5rem',
                                textTransform: 'capitalize',
                              }}
                              className={"itemText !m-0"}
                            />
                          </ListItemButton>
                        );
                      })}
                    </List>
                  </Collapse>
                </Box>
              );
            }
            return (
              <ListItem key={index} disablePadding sx={{ display: "block" }}>
                <Link
                  onClick={() => redirectToHome(route)}
                  key={id}
                  className="nav-link"
                  href={route}
                >
                  <ListItemButton className={"w-max !py-0"}>
                    <ListItemText
                      primary={name}
                      primaryTypographyProps={{
                        fontWeight: "600",
                        fontSize: "1.5rem",
                      }}
                      className={"itemText !m-0 py-4"}
                    />
                  </ListItemButton>
                </Link>
              </ListItem>
            );
          })}
        </List>
        <List
          component={"nav"}
          className={"flex justify-end flex-1 !m-4 gap-4 !py-0"}
        >
          {navBarButtons.map(({ name, id, route }, index) => (
            <ListItem
              key={index}
              disablePadding
              sx={{ display: "block", width: "fit-content" }}
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
      </Dialog>
    </React.Fragment>
  );
};

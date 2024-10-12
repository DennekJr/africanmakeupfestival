import { Dialog, IconButton, Slide } from "@mui/material";
import React, { useMemo } from "react";
import { TransitionProps } from "@mui/material/transitions";
import { CloseIcon } from "next/dist/client/components/react-dev-overlay/internal/icons/CloseIcon";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";
import {
  NAV_BUTTONS,
  NAV_MENU,
} from "../NavBar/navbar.constants";
import ListItem from "@mui/material/ListItem";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { RightArrowButton, WhiteBGButton } from "../../utils";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

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
          {navBarItems.map(({ name, id, route }, index) => (
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
          ))}
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

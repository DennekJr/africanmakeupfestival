import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { FormControl, InputLabel, MenuItem } from "@mui/material";
import React, { useEffect, useMemo } from "react";
import Box from "@mui/material/Box";
import {
  CssSelectField,
} from "../../../checkout/components/utils";
import { connect } from "react-redux";
import { useAppDispatch, useAppSelector } from "../../../../lib/hooks";
import {
  setLeftoverTickets,
  setLeftOverTicketsForms,
  setMyTicket,
  setBillingInfo
} from "../../../../lib/features/checkout/checkoutSlice";
import { BillingForm } from "../../../checkout/components/Form/Form";

export const HiddenFormDropdown = ({
  title,
  subTitle,
  displayTicketDropdown,
}: {
  title: string;
  subTitle: string;
  displayTicketDropdown: boolean;
}) => {
  const [displaySelectMenu, setDisplaySelectMenu] = React.useState(true);
  const [tickets, setTickets] = React.useState<{ ticketName: string; value: number; }[]>([]);
  const [displaySelectTicketError, setDisplaySelectTicketError] =
    React.useState("true");
  const {
    tickets: Tickets,
    myTicket,
    leftOverTickets,
    billingInfo,
  } = useAppSelector((state) => state.checkout);
  const dispatch = useAppDispatch();
  const currentLeftOverTickets = useMemo(() => {
    return leftOverTickets;
  }, [leftOverTickets, tickets]);
  useEffect(() => {
    setTickets(Tickets);
  }, [tickets]);
  const handleDisplaySelectMenu = () => {
    // if (title.includes("Assign")) {
    //   if (!displaySelectMenu) {
    //     if (displaySelectTicketError == "true") {
    //       setDisplaySelectTicketError("false");
    //     } else {
    setDisplaySelectTicketError("true");
    //     }
    //   }
    // } else {
    setDisplaySelectMenu(true);
    // }
  };
  const handleChange = (e) => {
    dispatch(setMyTicket({ ticketName: e.target.value, value: 1 }));
    dispatch(setBillingInfo({ticket: e.target.value, data: Object.values(billingInfo)}));
    const leftOverTickets = tickets.map((ticket) => {
      if (ticket.ticketName === e.target.value) {
        return {
          ...ticket,
          value: ticket.value - 1,
        };
      } else return ticket;
    });
    const newArr:unknown[] = [];
    leftOverTickets.map((ticket) => {
      if (ticket.value > 0) {
        for (let i = 0; i < ticket.value; i++) {
          newArr.push({ [`${ticket.ticketName}${i}`]: [] });
        }
      }
    });
    setTickets(leftOverTickets);
    dispatch(setLeftoverTickets(leftOverTickets));
    dispatch(setLeftOverTicketsForms(newArr));
  };

  return (
    <Box className="space-y-6 px-6 xl:px-0">
      <div className="space-y-2">
        <button
          onClick={handleDisplaySelectMenu}
          type="button"
          className="items-center gap-2 flex w-full justify-between text-xl !lg:text-3xl xl:text-4xl 2xl:text-5xl font-medium text-[#0A090B] text-left lg:text-center"
        >
          <span>{title}</span>
          {(displaySelectMenu || displaySelectTicketError == "true") ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </button>
        <p className="text-[#504E56]">{subTitle}</p>
      </div>
      {displayTicketDropdown && (
        <div
          className={"grid lg:grid-cols-11"}
          style={{
            position: "relative",
            transitionDuration: "0",
            animationName: "",
            display: "block"
          }}
        >
          <div
            className="space-y-2 lg:col-span-6"
            style={{ position: "relative" }}
          >
            <label
              className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-base leading-[22.4px] font-normal text-[#1E1C21]"
              htmlFor=":rh:-form-item"
            >
              Select the ticket that belongs to you
            </label>
            <FormControl fullWidth>
              <CssSelectField
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                  sx={{
                  input: {
                    color: "#1E1C21",
                    borderColor: "#D0D4DD",
                  },
                }}
                MenuProps={{
                  sx: {
                    "&& .MuiList-root": {
                      color: 'black',
                      backgroundColor: 'white',
                    },
                  }
                }}
                value={myTicket.ticketName}
                onChange={handleChange}
              >
                {Tickets.flatMap(
                  (ticket) => Array(ticket.value).fill(ticket), // Repeat each ticket based on its value
                ).map((ticket, index) => {
                  return (
                    <MenuItem
                      key={index}
                      className={"capitalize hover:!bg-gray-100 px-4"}
                      value={ticket.ticketName}
                    >
                      {ticket.ticketName.toUpperCase()}
                    </MenuItem>
                  );
                })}
              </CssSelectField>
            </FormControl>
          </div>
        </div>
      )}
      <div className="space-y-2 lg:col-span-6" style={{ position: "relative" }}>
        {title.includes("Assign") &&
          myTicket.value == 0 &&
          displaySelectTicketError == "true" && (
            <label className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-base leading-[22.4px] font-normal text-[#1E1C21]">
              Select your ticket
            </label>
          )}
        {title.includes("Assign") &&
          myTicket.value > 0 &&
          displaySelectTicketError == "true" && (
            <Box className={"relative grid lg:grid-cols-11"}>
              <Box className={"lg:col-span-6 space-y-16"}>
                  {currentLeftOverTickets.flatMap((ticket) => {
                    return Array.from(
                      { length: ticket.value },
                      (_, ticketIndex) => {
                        return (
                          <Box
                            key={`${ticket.ticketName}-${ticketIndex}`}
                          >
                            <Box className={"space-y-2 lg:col-span-2"}>
                              <FormControl fullWidth>
                                <InputLabel
                                  sx={{ color: "#1E1C21" }}
                                  id={`demo-simple-select-label-${ticket.ticketName}-${ticketIndex}`}
                                >
                                  Ticket Type
                                </InputLabel>
                                <CssSelectField
                                  labelId={`demo-simple-select-label-${ticket.ticketName}-${ticketIndex}`}
                                  id={`demo-simple-select-${ticket.ticketName}-${ticketIndex}`}
                                  sx={{
                                    input: {
                                      color: "#1E1C21",
                                      borderColor: "#D0D4DD",
                                    },
                                  }}
                                  className={"!text-black capitalize"}
                                  value={ticket.ticketName}
                                  label="Ticket Type"
                                  onChange={handleChange}
                                >
                                  <MenuItem
                                    key={ticketIndex}
                                    className={"capitalize"}
                                    value={ticket.ticketName}
                                  >
                                    {ticket.ticketName.toUpperCase()}
                                  </MenuItem>
                                </CssSelectField>
                              </FormControl>
                            </Box>
                            <BillingForm ticket={`${ticket.ticketName}-${ticketIndex}`}/>
                          </Box>
                        );
                      },
                    );
                  })}
              </Box>
            </Box>
          )}
      </div>
    </Box>
  );
};

const mapStateToProps = (state) => {
  return { tickets: state.checkout.tickets };
};

export default connect(mapStateToProps)(HiddenFormDropdown);

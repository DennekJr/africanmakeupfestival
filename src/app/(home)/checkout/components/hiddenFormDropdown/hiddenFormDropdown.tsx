import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { FormControl, InputLabel, MenuItem } from "@mui/material";
import React, { useEffect, useMemo } from "react";
import Box from "@mui/material/Box";
import {
  CssSelectField,
} from "@/app/(home)/checkout/components/utils";
import { connect, useSelector } from "react-redux";
import { useAppDispatch } from "@/app/lib/hooks";
import {
  setLeftoverTickets,
  setLeftOverTicketsForms,
  setMyTicket,
  setBillingForm
} from "@/app/lib/features/checkout/checkoutSlice";
import { BillingForm } from "@/app/(home)/checkout/components/Form/Form";

export const HiddenFormDropdown = ({
  title,
  subTitle,
  displayTicketDropdown,
}: {
  title: string;
  subTitle: string;
  displayTicketDropdown: boolean;
}) => {
  const [displaySelectMenu, setDisplaySelectMenu] = React.useState(false);
  const [tickets, setTickets] = React.useState();
  const [displaySelectTicketError, setDisplaySelectTicketError] =
    React.useState("");
  const {
    tickets: Tickets,
    myTicket,
    leftOverTickets,
    billingForm,
  } = useSelector((state) => state.checkout);
  const dispatch = useAppDispatch();
  const currentLeftOverTickets = useMemo(() => {
    return leftOverTickets;
  }, [leftOverTickets, tickets]);
  useEffect(() => {
    setTickets(Tickets);
  }, [tickets]);
  const handleDisplaySelectMenu = () => {
    if (title.includes("Assign")) {
      if (!displaySelectMenu) {
        if (displaySelectTicketError == "true") {
          setDisplaySelectTicketError("false");
        } else {
          setDisplaySelectTicketError("true");
        }
      }
    } else {
      setDisplaySelectMenu(!displaySelectMenu);
    }
  };
  const handleChange = (e) => {
    dispatch(setMyTicket({ ticketName: e.target.value, value: 1 }));
    dispatch(setBillingForm({ticket: e.target.value, data: Object.values(billingForm)}));
    const leftOverTickets = tickets.map((ticket) => {
      if (ticket.ticketName === e.target.value) {
        return {
          ...ticket,
          value: ticket.value - 1,
        };
      } else return ticket;
    });
    const newArr = [];
    leftOverTickets.map((ticket) => {
      if (ticket.value > 0) {
        for (let i = 0; i < ticket.value; i++) {
          newArr.push({ [`${ticket.ticketName}${i}`]: [] });
        }
      }
    });
    setTickets(leftOverTickets);
    setDisplaySelectTicketError("true");
    dispatch(setLeftoverTickets(leftOverTickets));
    dispatch(setLeftOverTicketsForms(newArr));
  };

  return (
    <div className="space-y-6 px-6 lg:px-0">
      <div className="space-y-2">
        <button
          onClick={handleDisplaySelectMenu}
          type="button"
          className="items-center gap-2 flex w-full justify-between text-xl !lg:text-3xl xl:text-4xl 2xl:text-5xl font-medium text-[#0A090B] text-left lg:text-center"
        >
          <span>{title}</span>
          <KeyboardArrowDownIcon />
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
            display: displaySelectMenu ? "block" : "none",
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
                value={myTicket.ticketName}
                onChange={handleChange}
              >
                {Tickets.flatMap(
                  (ticket) => Array(ticket.value).fill(ticket), // Repeat each ticket based on its value
                ).map((ticket, index) => {
                  return (
                    <MenuItem
                      key={index}
                      className={"capitalize"}
                      value={ticket.ticketName}
                    >
                      {ticket.ticketName}
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
                            className={"grid lg:grid-cols-2 gap-5"}
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
                                    {ticket.ticketName}
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
    </div>
  );
};

const mapStateToProps = (state) => {
  return { tickets: state.checkout.tickets };
};

export default connect(mapStateToProps)(HiddenFormDropdown);
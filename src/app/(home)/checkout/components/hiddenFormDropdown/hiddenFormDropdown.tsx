import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { FormControl, InputLabel, MenuItem } from "@mui/material";
import React, { useMemo, useState } from "react";
import Box from "@mui/material/Box";
import { CssSelectField, CssTextField } from "@/app/(home)/checkout/components/utils";
import { useMyContext } from "@/app/components/CheckoutContext";

export const HiddenFormDropdown = ({
  title,
  subTitle,
  displayTicketDropdown,
}: {
  title: string;
  subTitle: string;
  displayTicketDropdown: boolean;
}) => {
  const initialValues = [
    { name: "First Name", value: "" },
    { name: "Last Name", value: "" },
    { name: "Phone Number", value: "" },
    { name: "Country", value: "" },
    { name: "Email", value: "" },
    { name: "Confirm Email", value: "" },
    { name: "Organisation", value: "" },
    { name: "Organisation Website", value: "" },
    { name: "Organisation Role", value: "" },
  ];
  const [values, setValues] = useState(initialValues);
  const [displaySelectMenu, setDisplaySelectMenu] = React.useState(false);
  const [myTicket, setMyTicket] = React.useState({ticketName: '', value: 0});
  const [displaySelectTicketError, setDisplaySelectTicketError] =
    React.useState(true);
  const {data} = useMyContext();
  console.log("Data from context", data);
  const Tickets = useMemo(() => Object.values(data), [data]);
  const handleDisplaySelectMenu = () => {
    if (title.includes("Assign")) {
      if (!displaySelectMenu) {
        setDisplaySelectTicketError(true);
      }
    } else {
      setDisplaySelectMenu(!displaySelectMenu);
    }
  };
  const handleChange = (e) => {
    console.log(e);
    setMyTicket({ ticketName: e.target.value, value: 1 });
  };

  const handleInputChange = (e, name) => {
    const newState = values.map((item) => {
      if (item.name !== name.name) {
        return item;
      } else {
        return {
          ...item,
          value: e.target.value,
        };
      }
    });
    setValues(newState);
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
              <InputLabel sx={{color: "#1E1C21"}} id="demo-simple-select-label">Age</InputLabel>
              <CssSelectField
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                sx={{
                  input: { color: "#1E1C21", borderColor: "#D0D4DD", backgroundColor: 'red' },
                }}
                value={myTicket.ticketName}
                label="Age"
                onChange={handleChange}
              >
                {Tickets.flatMap((ticket) =>
                  Array(ticket.value).fill(ticket) // Repeat each ticket based on its value
                ).map((ticket, index) => {
                  return <MenuItem key={index} className={'capitalize'} value={ticket.ticketName}>{ticket.ticketName}</MenuItem>
                })}
              </CssSelectField>
            </FormControl>
          </div>
        </div>
      )}
      <div className="space-y-2 lg:col-span-6" style={{ position: "relative" }}>
        {title.includes("Assign") && displaySelectTicketError && (
          <label
            className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-base leading-[22.4px] font-normal text-[#1E1C21]"
            htmlFor=":rh:-form-item"
          >
            Select your ticket
          </label>
        )}
        {title.includes("Assign") && !displaySelectTicketError && (
          <Box className={"space-y-5"}>
            <Box className={"grid lg:grid-cols-2 gap-5 fields"}>
              {values.map((field, index) => {
                if (field.name === "Phone Number") {
                  return (
                    <CssTextField
                      className={
                        "margin-top: calc(.5rem*calc(1-0))" +
                        " margin-bottom: calc(.5rem*0) rounded-[6px] border border-input"
                      }
                      sx={{
                        input: { color: "#1E1C21", borderColor: "#D0D4DD" },
                      }}
                      value={field.value}
                      onChange={(e) => handleInputChange(e, field)}
                      name={field.name}
                      label={field.name}
                      key={index}
                    />
                  );
                }
                return (
                  <CssTextField
                    className={
                      "margin-top: calc(.5rem*calc(1-0))" +
                      " margin-bottom: calc(.5rem*0) rounded-[6px] border border-input"
                    }
                    sx={{ input: { color: "#1E1C21", borderColor: "#D0D4DD" } }}
                    value={field.value}
                    onChange={(e) => handleInputChange(e, field)}
                    name={field.name}
                    label={field.name}
                    key={index}
                  />
                );
              })}
            </Box>
          </Box>
        )}
      </div>
    </div>
  );
};

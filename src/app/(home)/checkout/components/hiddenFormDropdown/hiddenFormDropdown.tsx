import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import React, { useState } from "react";
import Box from "@mui/material/Box";

export const HiddenFormDropdown = ({
  title,
  subTitle, displayTicketDropdown
}: {
  title: string;
  subTitle: string;
  displayTicketDropdown: boolean
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
    { name: "How did you hear about the event", value: "" },
  ];
  const [values, setValues] = useState(initialValues);  const [displaySelectMenu, setDisplaySelectMenu] = React.useState(false);
  const [displaySelectTicketError, setDisplaySelectTicketError] = React.useState(false);
  const handleDisplaySelectMenu = () => {
    if(title.includes('Assign')){
      if(!displaySelectMenu){
        setDisplaySelectTicketError(!displaySelectTicketError);
      }
    }
    setDisplaySelectMenu(!displaySelectMenu);
  }
  const handleChange = () => {
    console.log('select triggered')
    // setAge(event.target.value as string);
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
      {displayTicketDropdown && <div
        className={"grid lg:grid-cols-11"}
        style={{
          position: "relative",
          transitionDuration: "0",
          animationName: "",
          display: displaySelectMenu ? 'block' : 'none',
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
          <button
            type="button"
            dir="ltr"
            className="flex h-14 transition-shadow ease-linear duration-200 w-full items-center justify-between rounded-[6px] border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring/10 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&amp;>span]:line-clamp-1"
            id=":rh:-form-item"
          >
            <span style={{ pointerEvents: "none" }}>Input Field</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-chevron-down h-4 w-4 opacity-50"
              aria-hidden="true"
            >
              <path d="m6 9 6 6 6-6"></path>
            </svg>
          </button>
          <Select
            tabIndex="-1"
            value={age}
            label="Age"
            onClick={handleChange}
            style={{
              position: "absolute",
              border: "0px",
              width: "1px",
              height: "1px",
              padding: "0px",
              margin: "-1px",
              overflow: "hidden",
              clip: "rect(0px, 0px, 0px, 0px)",
              whiteSpace: "nowrap",
              overflowWrap: "normal"
            }}
          >
            <MenuItem value="0-16-Investor">Investor</MenuItem>
            <MenuItem value="0-16-Investor">Investor</MenuItem>
            <MenuItem value="0-16-Investor">Investor</MenuItem>
            <MenuItem value="0-16-Investor">Investor</MenuItem>
            <MenuItem value="1-16-Investor">Investor</MenuItem>
          </Select>
        </div>
      </div>}
      {displaySelectTicketError && <div
        className="space-y-2 lg:col-span-6"
        style={{ position: "relative" }}
      >
        <label
          className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-base leading-[22.4px] font-normal text-[#1E1C21]"
          htmlFor=":rh:-form-item"
        >
          Select your ticket
      </label>
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
      </div>
      }
    </div>
  );
};

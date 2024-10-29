import { styled } from "@mui/system";
import { Select, TextareaAutosize, TextField } from "@mui/material";
import {
  DelegateTicket,
  ExplorerTicket,
  FounderTicket,
  InvestorTicket
} from "@/app/lib/features/checkout/checkoutSlice";

export const CssTextField = styled(TextField)({
  "& label": {
    color: "#1E1C21",
  },
  "& fieldset": {
    borderColor: "#D0D4DD",
  },

  "&:hover": {
    "&& fieldset": {
      borderColor: "#D0D4DD",
      borderWidth: "2px",
    },
  },
  "& textarea": {
    color: "#000000",
  },
  "& .mui-rg9sn3-MuiInputBase-input-MuiOutlinedInput-input:-webkit-autofill": {
    "-webkit-box-shadow": "0 0 0 100px white inset",
    "-webkit-text-fill-color": "black",
  },
});

export const CssTextArea = styled(TextareaAutosize)({
  "& label": {
    color: "#1E1C21",
  },
  "& fieldset": {
    borderColor: "#D0D4DD",
  },

  "&:hover": {
    "&& fieldset": {
      borderColor: "#D0D4DD",
      borderWidth: "2px",
    },
  },
});

export const CssSelectField = styled(Select)({
  "& label": {
    color: "#1E1C21",
  },
  "& fieldset": {
    borderColor: "#D0D4DD",
  },
  "&:hover": {
    "&& fieldset": {
      borderColor: "#D0D4DD",
      borderWidth: "1.5px",
    },
  },
  "& #demo-simple-select": {
    color: "#1E1C21",
    textTransform: "capitalize",
  },

  ".mui-99wn1p-MuiList-root-MuiMenu-list": {
    background: "#ffffff !important",
  },
  "& .mui-rg9sn3-MuiInputBase-input-MuiOutlinedInput-input:-webkit-autofill": {
    "-webkit-box-shadow": "0 0 0 100px white inset",
    "-webkit-text-fill-color": "black",
  },
});

export const getTicketCost = (ticket) => {
  return ticket.ticketName === "investor"
    ? InvestorTicket * ticket.value
    : ticket.ticketName === "founder"
      ? FounderTicket * ticket.value
      : ticket.ticketName === "explorer"
        ? ExplorerTicket * ticket.value
        : DelegateTicket * ticket.value;
}
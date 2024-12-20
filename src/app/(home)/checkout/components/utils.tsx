import { styled } from "@mui/system";
import { Select, TextareaAutosize, TextField } from "@mui/material";
import {
  VIPTicket,
  RegularTicket
} from "@/app/lib/features/checkout/checkoutSlice";

export const CssTextField = styled(TextField)({
  color: "#000000",
  "& label": {
    color: "#1E1C21"
  },
  "& fieldset": {
    borderColor: "#D0D4DD"
  },

  "&:hover": {
    "&& fieldset": {
      borderColor: "#D0D4DD",
      borderWidth: "2px"
    }
  },
  "& textarea": {
    color: "#000000"
  },
  "& .mui-rg9sn3-MuiInputBase-input-MuiOutlinedInput-input:-webkit-autofill": {
    WebkitBoxShadow: "0 0 0 100px white inset",
    WebkitTextFillColor: "black"
  },
  " .mui-rg9sn3-MuiInputBase-input-MuiOutlinedInput-input": {
    color: "#000000"
  },
  "&:-webkit-autofill": {
    WebkitBoxShadow: "0 0 0 100px white inset", // Matches background
    WebkitTextFillColor: "black"
  }
});
export const CssValidateTicketField = styled(TextField)({
  color: "#000000",
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
    WebkitBoxShadow: "0 0 0 100px white inset",
    WebkitTextFillColor: "black"
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
    WebkitBoxShadow: "0 0 0 100px white inset",
    WebkitTextFillColor: "black"
  },
});

export const getTicketCost = (ticket) => {
  return ticket.ticketName === "regular"
    ? RegularTicket * ticket.value
    : VIPTicket * ticket.value;
};
export const getTicketValue = (ticket) => {
  return ticket.ticketName === "regular"
    ? RegularTicket
    : VIPTicket;
};

export const formatCurrency = (x: number) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

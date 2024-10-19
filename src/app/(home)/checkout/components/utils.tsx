import { styled } from "@mui/system";
import { Select, TextField } from "@mui/material";

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
      borderWidth: '2px',
    }
  }
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
      borderWidth: '1.5px',
    }
  },
  '& #demo-simple-select': {
    color: "#1E1C21",
    textTransform: 'capitalize',
  },
});
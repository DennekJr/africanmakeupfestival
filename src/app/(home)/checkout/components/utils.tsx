import { styled } from "@mui/system";
import { Select, TextareaAutosize, TextField } from "@mui/material";

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
  },
  "& textarea": {
    color: '#000000',
  }
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

  ".mui-99wn1p-MuiList-root-MuiMenu-list": {
    background: '#ffffff !important'
  },
  // '& .mui-hv4rbq-MuiInputBase-root-MuiOutlinedInput-root.Mui-error' : {
  //   borderColor: '#D0D4DD !important',
  // }
});
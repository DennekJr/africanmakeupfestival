import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import'./countryPhoneInput.styles.css';
import { styled } from "@mui/system";
import { useState } from "react";

const StyledPhoneInput = styled(PhoneInput)({
  '.invalid-number-message': {
    bottom: '-20px',
    left: 0,
    top: '62px',
  },
  '.form-control.invalid-number': {
    backgroundColor: 'transparent !important',
    border: '1px solid #f44336'
  },
})
export const CountryPhoneInput = (props) => {
  const [isTyping, setIsTyping] = useState(false)
  return (
    <StyledPhoneInput
      {...props}
      className={
        "text-[#1E1C21] w-full PhoneInputInput"
      }
      country={"Nigeria"}
      onBlur={() => {
        setIsTyping(true);
      }}
      isValid={(value) => {
        const phoneRegex = /^(\+|\d)[0-9]{7,16}$/;
        if(!isTyping) return true;
        return phoneRegex.test(value);
      }}
    />
  );
};

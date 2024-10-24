import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import'./countryPhoneInput.styles.css';
import { styled } from "@mui/system";

const StyledPhoneInput = styled(PhoneInput)({
  '.invalid-number-message': {
    bottom: '-20px',
    left: 0,
    top: '62px',
  },
  '.form-control.invalid-number': {
    backgroundColor: 'transparent',
    border: '1px solid #f44336'
  },
  // '.flag-dropdown.invalid-number': {
  //   borderColor: '#D0D4DD',
  // }
})
export const CountryPhoneInput = (props) => {
  return (
    <StyledPhoneInput
      {...props}
      className={
        "text-[#1E1C21] w-full PhoneInputInput"
      }
      country={"Nigeria"}
      isValid={(value, country) => {
        const phoneRegex = /^(\+|\d)[0-9]{7,16}$/;
        if (phoneRegex.test(value)) {
          return true;
        } else {
          return false;
        }
      }}
    />
  );
};

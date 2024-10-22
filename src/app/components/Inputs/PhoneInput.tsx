import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import'./countryPhoneInput.styles.css';
export const CountryPhoneInput = (props) => {
  return (
    <PhoneInput
      {...props}
      placeholder={'Phone Number'}
      className={
        "text-[#1E1C21] w-full PhoneInputInput"
      }
      country={"Nigeria"}
    />
  );
};

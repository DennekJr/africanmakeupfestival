import Select from "react-select";
import countryList from "react-select-country-list";
import { useMemo } from "react";
import { styled } from "@mui/system";
import'./countryPhoneInput.styles.css';

const StyledCountrySelect = styled(Select)({
  '&:focus-visible': {
    borderColor: 'inherit'
  }
})
export const CountryDropdown = (props) => {
  const options = useMemo(() => countryList().getData(), []);
  return <StyledCountrySelect className={'selectCountryContainer'} {...props} options={options} />;
};

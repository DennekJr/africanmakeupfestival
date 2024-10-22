import Select from "react-select";
import countryList from "react-select-country-list";
import { useMemo } from "react";

export const CountryDropdown = (props) => {
  const options = useMemo(() => countryList().getData(), []);
  return <Select placeholder={'Country'} className={'selectCountryContainer'} {...props} options={options} />;
};

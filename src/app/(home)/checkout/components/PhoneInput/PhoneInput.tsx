import { forwardRef } from 'react'
import { TextField } from "@mui/material";

const PhoneInput = (props, ref) => {

  return (

    <TextField
      {...props}
      inputRef={ref}
    />
  )
}
export default forwardRef(PhoneInput)
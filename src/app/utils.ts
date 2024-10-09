import {styled} from "@mui/system";
import {Button} from "@mui/material";

export const WhiteBGButton = styled(Button)({
    background: 'hsl(0 0% 100%)',
    color: 'hsl(240 10% 3.9%)',
    borderRadius: '1rem',
});

export const RightArrowButton = styled(Button)({
    background: 'transparent',
    color: 'hsl(0 0% 100%)',
    borderRadius: '1rem',
    borderWidth: '1px',
    borderColor: 'hsl(0 0% 100%)'
});
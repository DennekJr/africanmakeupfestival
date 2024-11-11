import { Box } from "@mui/material";
import { styled } from "@mui/system";

export const AgoraBox = styled(Box)({
  animationName: "agora-fadeinup",
  animationDuration: "750ms",
  animationFillMode: "both",
  visibility: "visible",
});

export const AgoraTransitionBox = styled(Box)({
  transition:
    "background .3s, border .3s, border-radius .3s, box-shadow .3s, transform .4s",
});

export const AgoraTransitionNoTransformBox = styled(Box)({
  transition:
    "background .3s, border .3s, border-radius .3s, box-shadow .3s",
});
export const AboutUsImageWithTransition = styled(Box)({
  backgroundImage:
    "url(/images/homeHeroFour.webp)",
  backgroundPosition: "top center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  transition:
    "background .3s, border .3s, border-radius .3s, box-shadow .3s",
});

export const HomeButton = styled("a")({
  fontSize: "14px",
  fontWeight: 500,
  fontStyle: "normal",
  lineHeight: "21px",
  textDecoration: "none",
  textTransform: "uppercase",
  letterSpacing: "1.5px",
  cursor: "pointer",
  display: "inline-flex",
  alignItems: "center",
  verticalAlign: "top",
  padding: "18px 40px",
  borderWidth: "0 !important",
  boxShadow: "none",
});

export const CheckmarkLi = styled("li")({
  "&::before": {
    fontFamily: "fontello",
    fontSize: "11px",
    left: -"30px",
  },
});

import { Box } from "@mui/material";
import { styled } from "@mui/system";

export const AgoraBox = styled(Box)({
  animationName: "agora-fadeinup",
  animationDuration: "750ms",
  animationFillMode: "both",
  visibility: "visible",
  "& .imageContainer:hover .speakerLink": {
    opacity: 1,
    top: 0,
  },
  "& .imageContainer:hover .speakerImg": {
    transform: 'scale(1.05, 1.05)'
  },
  "& .imageContainer:hover a:nth-child(1)": {
    transitionDelay: "0.1s",
  },
  "& .imageContainer:hover a:nth-child(2)": {
    transitionDelay: "0.15s",
  },
  "& .imageContainer:hover a:nth-child(3)": {
    transitionDelay: "0.2s",
  },
  "& .imageContainer:hover a:nth-child(4)": {
    transitionDelay: "0.25s",
  },
});

export const AgoraTransitionBox = styled(Box)({
  transition:
    "background .3s, border .3s, border-radius .3s, box-shadow .3s, transform .4s",
});

export const AgoraTransitionNoTransformBox = styled(Box)({
  transition: "background .3s, border .3s, border-radius .3s, box-shadow .3s",
});
export const AgoraTransitionNoTransformSpan = styled("span")({
  transition: "background .3s, border .3s, border-radius .3s, box-shadow .3s",
});
export const AboutUsImageWithTransition = styled(Box)({
  backgroundImage: "url(/images/aboutUs.webp)",
  backgroundPosition: "top center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  transition: "background .3s, border .3s, border-radius .3s, box-shadow .3s",
});
export const AboutUsHoverMaskWithTransition = styled(Box)({
  position: "absolute",
  zIndex: 10,
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  overflow: "hidden",
  opacity: 0,
  backgroundColor: "rgba(239, 167, 88, 0.8)",
  transition: "all 0.3s 0.1s ease-out",
  pointerEvents: "none",
});
export const AboutUsLinkWithTransition = styled(Box)({
  position: "absolute",
  zIndex: 2,
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: "transparent",
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

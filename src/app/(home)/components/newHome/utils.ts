import { Box } from "@mui/material";
import { styled, keyframes } from "@mui/system";

// Keyframes for the move animation (translate)
const rotate = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(-11deg);
    }
`;

// Styled component using move and rotate animations
export const AnimatedBox = styled(Box)`
  animation: ${rotate} 4s infinite linear;
`;
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
    transform: "scale(1.05, 1.05)",
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

  "& .sponsorContainer:hover .animateReadMore": {
    transition:
      "visibility 0.4s ease, margin-right 0.3s ease-out, text-indent 0.4s ease-out, opacity 0.4s ease",
    textIndent: 0,
    opacity: 1,
    marginRight: "6px",
    visibility: "visible",
  },
  "& .sponsorContainer:hover": {
    cursor: "pointer"
  },
  "& .sponsorContainer:hover .sponsorImage": {
    opacity: 1,
  },
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
export const ContactUsBackgroundImageBox = styled("section")({
  backgroundImage: "url(/images/speaker2.webp)",
  backgroundPosition: "top center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundAttachment: "scroll",
  transition:
    "background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s",
  "& input::-webkit-input-placeholder": {
    color: "black",
  },
  "& input": {
    color: "black",
  },
  "& input::after": {
    borderBottom: "none !important",
  },
});
export const SkinCareAdventuresImageWithTransition = styled("section")({
  backgroundImage: "url(/images/skinCareAdventure.webp)",
  backgroundPosition: "center center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  transition:
    "background .3s, border .3s, border-radius .3s, box-shadow .3s, transform .4s",
});
export const AgoraTransitionWithThreeDashSVG = styled(Box)({
  backgroundImage: "url(/images/newHomeBuild/threeDash.svg)",
  backgroundPosition: "top right",
  backgroundRepeat: "no-repeat",
  backgroundSize: "3vw auto",
  transition:
    "background .3s, border .3s, border-radius .3s, box-shadow .3s, transform .4s",
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
  "@media (max-width: 790px)": {
    padding: "13px 34px",
    fontSize: "13px",
    lineHeight: "20px",
  },
});

export const ContactUsCheckBox = styled("span")({
  "&::before": {
    content: '" "',
    fontFamily: "fontello",
    fontSize: "7px",
    letterSpacing: "-0.7px",
    display: "block",
    textAlign: "center",
    border: "1px solid #FCD9CE",
    width: "16px",
    height: "16px",
    lineHeight: "15px",
    position: "absolute",
    zIndex: 1,
    top: "0.45em",
    left: 0,
    boxSizing: "border-box",
    borderRadius: "4px",
    color: "#C43C2A",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
});

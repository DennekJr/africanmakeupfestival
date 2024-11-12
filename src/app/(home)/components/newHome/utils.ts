import { Box } from "@mui/material";
import { styled, keyframes } from "@mui/system";

// Keyframes for the move animation (translate)
const move = keyframes`
    //0% {
    //    transform: rotate(-11deg); /* Start at the top-left corner */
    //}
    //100% {
    //    transform: translateX(100%) translateY(calc(100% * tan(-11deg))) rotate(-11deg); /* Move diagonally at 11deg */
        //transform: translate(100vw, calc(100vw * tan(-11deg))) rotate(-11deg); /* Move diagonally at 11deg */
    //}
    0% {
        transform: translate3d(-50vw, calc(-50vw * tan(-11deg)), 0) rotate(-11deg);
    }
    100% {
        transform: translate3d(100vw, calc(100vw * tan(-11deg)), 0) rotate(-11deg);
    }
`;

// Keyframes for the rotate animation
const moveWithDelay = keyframes`
    0% {
        transform: translate(0, 0); /* Start at the top-left corner */
    }
    100% {
        transform: translate(100vw, calc(100vw * tan(-11deg))); /* Move diagonally at 11deg */
        animation-delay: 8s;
    }
`;

// Styled component using move and rotate animations
export const AnimatedSection = styled("section")`
  animation: ${move} 7s infinite linear;
`;
export const AnimatedDelayDiv = styled(Box)`
  animation: ${moveWithDelay} 4s infinite linear;
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

  '& .sponsorContainer:hover .animateReadMore': {
    transition: 'visibility 0.4s ease, margin-right 0.3s ease-out, text-indent 0.4s ease-out, opacity 0.4s ease',
    textIndent: 0,
    opacity: 1,
    marginRight: '6px',
    visibility: 'visible'
  },
  '& .sponsorContainer:hover .sponsorImage': {
    opacity: 1,
  }
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

export const CheckmarkLi = styled("li")({
  "&::before": {
    fontFamily: "fontello",
    fontSize: "11px",
    left: -"30px",
  },
});

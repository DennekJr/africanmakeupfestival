import { StagesTypes } from "./stages.types";
import { StageOneImage, StageThreeImage, StageTwoImage } from "./utils";


export const STAGESMENU: Record<string, StagesTypes> = {
  stageOne: {
    id: "stage01",
    background: "#efefef",
    image: StageOneImage,
    textColor: '#000000',
    order: "01",
    stageName: 'Main Stage',
    stageBody: 'Panels and Industry conversations',
    orderColor: "hsla(270,10%,4%,0.2)",
    stageTitleColor: "#0A090B",
    stageBodyTextColor: "lightSecondary"
  },
  stageTwo: {
    id: "stage02",
    background: "#e6e6e6",
    image: StageTwoImage,
    order: "02",
    textColor: '#000000',
    stageName: 'Startup Stage',
    stageBody: 'Forum for Skincare Startups',
    orderColor: "hsla(270,10%,4%,0.2)",
    stageTitleColor: "#0A090B",
    stageBodyTextColor: "lightSecondary"
  },
  stageThree: {
    id: "stage03",
    background: "#0A090B",
    image: StageThreeImage,
    order: "03",
    stageName: 'Investor Stage',
    stageBody: 'Forum for Investors and Ecosystem Enablers',
    textColor: '#ffffff',
    orderColor: "#F5F5F5",
    stageTitleColor: "#F5F5F5",
    stageBodyTextColor: "lightSecondary"
  },
};

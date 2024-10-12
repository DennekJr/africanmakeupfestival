import { StagesTypes } from "./stages.types";
import { StageOneImage, StageThreeImage, StageTwoImage } from "./utils";

export const STAGESMENU: Record<string, StagesTypes> = {
  stageOne: {
    id: "stage01",
    background: "#F2F2F2",
    image: StageOneImage,
    textColor: '#000000',
    order: "01",
    stageName: 'Main Stage',
    stageBody: 'Panels and Industry conversations',
    orderColor: "#0A090B",
    stageTitleColor: "#0A090B",
    stageBodyTextColor: "#2C2A32",
  },
  stageTwo: {
    id: "stage02",
    background: "#E6E6E6",
    image: StageTwoImage,
    order: "02",
    textColor: '#000000',
    stageName: 'Startup Stage',
    stageBody: 'Forum for Startups and Builders',
    orderColor: "#0A090B",
    stageTitleColor: "#0A090B",
    stageBodyTextColor: "#2C2A32",
  },
  stageThree: {
    id: "stage03",
    background: "#0A090B",
    image: StageThreeImage,
    order: "03",
    stageName: 'Investor Stage',
    stageBody: 'Forum for Investors and Ecosystem Enablers',
    textColor: '#ffffff',
    orderColor: "#FCFCFC",
    stageTitleColor: "#FCFCFC",
    stageBodyTextColor: "#DDDDDF",
  },
};

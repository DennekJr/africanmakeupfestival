import React from "react";

export type StagesTypes = {
  id: string;
  background: string;
  image:  () => React.ReactElement;
  order: string;
  stageName: string;
  stageBody: string;
  orderColor: string;
  textColor: string;
  stageTitleColor?: string;
  stageBodyTextColor: string;
}
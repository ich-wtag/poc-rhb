import React from "react";
import {
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { Trains } from "@/data/trains.json";
import { useState } from "react";
import Timeline from "../Timeline-component/timeline-component";
import BlackBaseLineTrain from "../../assets/icons/black-baseline-train.svg";
import "./station-route.css";
const StationRoutes = () => {
  const [trains] = useState([...Trains]);
  const train18 = trains.find((train) => train.trainNumber === "T018");

  return (
    <SheetContent side="left">
      <SheetHeader>
        <SheetTitle className="mx-auto">Route details</SheetTitle>
        <SheetDescription>
          <div className="my-10 flex justify-center items-center gap-5">
            <div className="train flex justify-center items-center">
              <img src={BlackBaseLineTrain} />
            </div>
            <div>
              <h3 className="train-name">1041/RE38-0758</h3>
              <p className="train-sub-name">Chur to Disentis/Mustér</p>
            </div>
          </div>
          <Timeline route={train18.route} />
        </SheetDescription>
      </SheetHeader>
    </SheetContent>
  );
};
export default StationRoutes;

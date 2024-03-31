/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import FlexChild from "./FlexChild";

const FlexLayout: React.FC<FlexLayoutI> = ({
  valign = "none",
  valignTab = "none",
  valignMob = "none",
  halign = "none",
  halignTab = "none",
  halignMob = "none",
  spacing = "none",
  direction = "none",
  directionTab = "none",
  directionMob = "none",
  wrap = "wrap",
  wrapTab = "none",
  wrapMob = "none",
  children = <></>,
  childWidth = "none",
  tabWidth = "",
  desktopWidth = "",
  mobileWidth = "",
}: FlexLayoutI) => {
  const getClassForVAlign = (valign: string) => {
    switch (valign) {
      case "end":
        return "d-flex--align-end";
      case "start":
        return "d-flex--align-start";
      case "center":
        return "d-flex--align-center";
      case "stretch":
        return "d-flex--align-stretch";
      case "baseline":
        return "d-flex--align-baseline";
      default:
        return "";
    }
  };
  const getClassForVAlignTab = (valignTab: string) => {
    switch (valignTab) {
      case "end":
        return "d-flex--align-endTab";
      case "start":
        return "d-flex--align-startTab";
      case "center":
        return "d-flex--align-centerTab";
      case "stretch":
        return "d-flex--align-stretchTab";
      case "baseline":
        return "d-flex--align-baselineTab";
      default:
        return "";
    }
  };
  const getClassForVAlignMob = (valignMob: string) => {
    switch (valignMob) {
      case "end":
        return "d-flex--align-endMob";
      case "start":
        return "d-flex--align-startMob";
      case "center":
        return "d-flex--align-centerMob";
      case "stretch":
        return "d-flex--align-stretchMob";
      case "baseline":
        return "d-flex--align-baselineMob";
      default:
        return "";
    }
  };

  const getClassForHAlign = (halign: string) => {
    switch (halign) {
      case "start":
        return "d-flex--distribute-start";
      case "center":
        return "d-flex--distribute-center";
      case "end":
        return "d-flex--distribute-end";
      case "fill":
        return "d-flex--distribute-spaceBetween";
      case "around":
        return "d-flex--distribute-spaceAround";
      case "evenly":
        return "d-flex--distribute-spaceEvenly";
      default:
        return "";
    }
  };
  const getClassForHAlignTab = (halignTab: string) => {
    switch (halignTab) {
      case "start":
        return "d-flex--distribute-startTab";
      case "center":
        return "d-flex--distribute-centerTab";
      case "end":
        return "d-flex--distribute-endTab";
      case "fill":
        return "d-flex--distribute-spaceBetweenTab";
      case "around":
        return "d-flex--distribute-spaceAroundTab";
      case "evenly":
        return "d-flex--distribute-spaceEvenlyTab";
      default:
        return "";
    }
  };
  const getClassForHAlignMob = (halignMob: string) => {
    switch (halignMob) {
      case "start":
        return "d-flex--distribute-startMob";
      case "center":
        return "d-flex--distribute-centerMob";
      case "end":
        return "d-flex--distribute-endMob";
      case "fill":
        return "d-flex--distribute-spaceBetweenMob";
      case "around":
        return "d-flex--distribute-spaceAroundMob";
      case "evenly":
        return "d-flex--distribute-spaceEvenlyMob";
      default:
        return "";
    }
  };

  const getClassForDirection = (direction: string) => {
    switch (direction) {
      case "vertical":
        return "d-flex--vertical";
      case "vertical-reverse":
        return "d-flex--vertical-reverse";
      case "row-reverse":
        return "d-flex--row-reverse";
      default:
        return "";
    }
  };
  const getClassForDirectionTab = (directionTab: string) => {
    switch (directionTab) {
      case "vertical":
        return "d-flex--verticalTab";
      case "vertical-reverse":
        return "d-flex--vertical-reverseTab";
      case "row-reverse":
        return "d-flex--row-reverseTab";
      default:
        return "";
    }
  };
  const getClassForDirectionMob = (directionMob: string) => {
    switch (directionMob) {
      case "vertical":
        return "d-flex--verticalMob";
      case "vertical-reverse":
        return "d-flex--vertical-reverseMob";
      case "row-reverse":
        return "d-flex--row-reverseMob";
      default:
        return "";
    }
  };

  const getClassForSpacing = (spacing: string) => {
    switch (spacing) {
      case "extraTight":
        return "d-flex--spacing-ExtraTight";
      case "mediumTight":
        return "d-flex--spacing-MediumTight";
      case "tight":
        return "d-flex--spacing-tight";
      case "loose":
        return "d-flex--spacing-loose";
      case "mediumLoose":
        return "d-flex--spacing-Mediumloose";
      case "extraLoose":
        return "d-flex--spacing-Extraloose";
      default:
        return "";
    }
  };
  const getClassForWrap = (wrap: string) => {
    switch (wrap) {
      case "wrap":
        return "d-flex--wrap";
      case "noWrap":
        return "d-flex--noWrap";
      default:
        return "";
    }
  };
  const getClassForWrapTab = (wrapTab: string) => {
    switch (wrapTab) {
      case "wrap":
        return "d-flex--wrapTab";
      case "noWrap":
        return "d-flex--noWrapTab";
      default:
        return "";
    }
  };
  const getClassForWrapMob = (wrapMob: string) => {
    switch (wrapMob) {
      case "wrap":
        return "d-flex--wrapMob";
      case "noWrap":
        return "d-flex--noWrapMob";
      default:
        return "";
    }
  };

  /*Case for setting desktop widths for child elements*/
  const getClassForDesktopWidth = (desktopWidth: string) => {
    switch (desktopWidth) {
      case "100":
        return "d-flex--D100";
      case "80":
        return "d-flex--D80";
      case "75":
        return "d-flex--D75";
      case "66":
        return "d-flex--D66";
      case "50":
        return "d-flex--D50";
      case "33":
        return "d-flex--D33";
      case "25":
        return "d-flex--D25";
      case "20":
        return "d-flex--D20";
      default:
        return "";
    }
  };

  /*Case for setting tab widths for child elements*/
  const getClassForTabWidth = (tabWidth: string) => {
    switch (tabWidth) {
      case "100":
        return "d-flex--T100";
      case "80":
        return "d-flex--T80";
      case "75":
        return "d-flex--T75";
      case "66":
        return "d-flex--T66";
      case "50":
        return "d-flex--T50";
      case "33":
        return "d-flex--T33";
      case "25":
        return "d-flex--T25";
      case "20":
        return "d-flex--T20";
      default:
        return "";
    }
  };

  /*Case for setting mobile widths for child elements*/
  const getClassForMobWidth = (mobileWidth: string) => {
    switch (mobileWidth) {
      case "100":
        return "d-flex--M100";
      case "80":
        return "d-flex--M80";
      case "75":
        return "d-flex--M75";
      case "66":
        return "d-flex--M66";
      case "50":
        return "d-flex--M50";
      case "33":
        return "d-flex--M33";
      case "25":
        return "d-flex--M25";
      case "20":
        return "d-flex--M20";
      default:
        return "";
    }
  };

  const getClassForChildWidth = () => {
    switch (childWidth) {
      case "fullWidth":
        return "d-flex--fill";
      default:
        return "";
    }
  };
  const VAlign = getClassForVAlign(valign);
  const VAlignTab = getClassForVAlignTab(valignTab);
  const VAlignMob = getClassForVAlignMob(valignMob);

  const HAlign = getClassForHAlign(halign);
  const HAlignTab = getClassForHAlignTab(halignTab);
  const HAlignMob = getClassForHAlignMob(halignMob);

  const Direction = getClassForDirection(direction);
  const DirectionTab = getClassForDirectionTab(directionTab);
  const DirectionMob = getClassForDirectionMob(directionMob);

  const Wrap = getClassForWrap(wrap);
  const WrapTab = getClassForWrapTab(wrapTab);
  const WrapMob = getClassForWrapMob(wrapMob);

  const Spacing = getClassForSpacing(spacing);
  const Fill = getClassForChildWidth();
  const Dwidth = getClassForDesktopWidth(desktopWidth);
  const Twidth = getClassForTabWidth(tabWidth);
  const Mwidth = getClassForMobWidth(mobileWidth);

  const childrens: any = React.Children.toArray(children);
  const newChildrens = childrens.map((children: any, index: string) => {
    if (children.props && children.props?.__TYPE === "FlexChild") {
      return children;
    } else {
      return <FlexChild key={index}>{children}</FlexChild>;
    }
  });

  return (
    <div
      className={`d-flex ${Wrap} ${WrapTab} ${WrapMob} ${VAlign} ${VAlignTab} ${VAlignMob}  ${HAlign} ${HAlignTab} ${HAlignMob} ${Spacing} ${Direction} ${DirectionTab} ${DirectionMob}   ${Fill}  ${Dwidth} ${Twidth} ${Mwidth}`.trim()}
    >
      {newChildrens}
    </div>
  );
};

export interface FlexLayoutI {
  valign?: "start" | "center" | "end" | "stretch" | "baseline" | "none";
  valignTab?: "start" | "center" | "end" | "stretch" | "baseline" | "none";
  valignMob?: "start" | "center" | "end" | "stretch" | "baseline" | "none";
  halign?: "start" | "center" | "end" | "fill" | "around" | "evenly" | "none";
  halignTab?:
    | "start"
    | "center"
    | "end"
    | "fill"
    | "around"
    | "evenly"
    | "none";
  halignMob?:
    | "start"
    | "center"
    | "end"
    | "fill"
    | "around"
    | "evenly"
    | "none";
  spacing?:
    | "none"
    | "tight"
    | "mediumTight"
    | "extraTight"
    | "loose"
    | "mediumLoose"
    | "extraLoose";
  direction?: "vertical" | "vertical-reverse" | "row-reverse" | "none";
  directionTab?: "vertical" | "vertical-reverse" | "row-reverse" | "none";
  directionMob?: "vertical" | "vertical-reverse" | "row-reverse" | "none";
  wrap?: "wrap" | "noWrap" | "none";
  wrapTab?: "wrap" | "noWrap" | "none";
  wrapMob?: "wrap" | "noWrap" | "none";
  children?: JSX.Element | React.ReactNode;
  childWidth?: "fullWidth" | "none";
  mobileWidth?: "100" | "80" | "75" | "66" | "50" | "33" | "25" | "20" | "";
  tabWidth?: "100" | "80" | "75" | "66" | "50" | "33" | "25" | "20" | "";
  desktopWidth?: "100" | "80" | "75" | "66" | "50" | "33" | "25" | "20" | "";
}

export default FlexLayout;
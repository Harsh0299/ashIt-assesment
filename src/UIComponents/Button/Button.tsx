/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

const Button = ({
    type,
    thickness = "thin",
    halign = "Center",
    noHover = false,
    ...props
}: ButtonI): JSX.Element => {
    const checkType = (): string => {
        switch (type) {
            case "Primary":
                return "inte-btn--Primary";
            case "Plain":
                if (noHover) return "inte__plain-btn inte__plain-btn--noHover"
                return "inte__plain-btn";
            default:
                return "inte-btn--Primary";
        }
    };

    const getThickness = (): string => {
        switch (thickness) {
            case "extraThin":
                return "inte-btnExtraNarrow";
            case "thin":
                return "inte-btnNarrow";
            case "large":
                return "inte-btnLarge";
            default:
                return "";
        }
    };
    const checkForForHAlign = (): string => {
        switch (halign) {
            case "Equal":
                return "inte-btn--distributionEqualSpacing";
            case "End":
                return "inte-btn--distributionEnd";
            case "Start":
                return "inte-btn--distributionStart";
            case "Between":
                return "inte-btn--distributionBetween";
            case "Center":
                return "inte-btn--distributionCenter";
            default:
                return "";
        }
    };

    const bType = checkType();
    let iconClass = "";
    let icon = <></>;
    const thicknessCss = getThickness();
    const halignCss = checkForForHAlign();

    const { iconAlign = "left", iconRound = false } = props;

    if (props.icon) {
        iconClass = "inte-btn--hasIcon";

        const style = iconAlign !== "left" ? { paddingLeft: "1rem" } : { paddingRight: "1rem" };
        const round = iconRound ? "inte-btn__icon--round" : "";
        icon = (
            <span style={style} className={`inte-btn__icon ${round}`}>
                {props.icon}
            </span>
        );
    }

    const content = props.content ? props.content : props.children;

    return (
        <button
            tabIndex={props.tabIndex}
            className={
                `inte-btn ${bType} ${iconClass} ${halignCss} ${thicknessCss} ${props.content === undefined && props.children === undefined
                    ? "inte-btn--onlyIcon"
                    : ""
                }`
            }
            onClick={() => {
                props?.onAction?.();
                props.onClick?.();
            }}
        >
            {iconAlign === "left" && icon}
            {props.children ? <span className={"inte__text"}>{content}</span> : ""}
            {props.content ? <span className={"inte__text"}>{content}</span> : ""}
            {iconAlign === "right" && icon}
        </button>
    );
};
export interface ButtonI {
    children?: string | React.ReactNode | JSX.Element | any;
    content?: string;
    type?:
    | "Primary"
    | "Plain";
    thickness?: "extraThin" | "thin" | "large";
    halign?: "Equal" | "End" | "Start" | "Between" | "Center";
    icon?: React.ReactNode;
    onAction?: () => void;
    onClick?: () => void;
    iconAlign?: "left" | "right";
    iconRound?: boolean;
    tabIndex?: number;
    noHover?: boolean
}
export default Button;
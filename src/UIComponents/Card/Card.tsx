import React from 'react'
interface PropsI {
    boxShadow?: string;
    padding?: string;
    children?: React.ReactElement | React.ReactElement[];
    appendClass?: string
}
const Card = (props: PropsI) => {
    return (
        <div className={`card ${props?.appendClass && props?.appendClass}`} style={{
            boxShadow: props?.boxShadow || 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px',
            padding: props?.padding || '20px'
        }}>
            {props?.children}
        </div>
    )
}

export default Card;

// let a = "box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;"
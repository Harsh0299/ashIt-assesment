import React from "react";

const List: React.FC<ListI> = ({ children = <></>, type = 'none', imageSrc = "", horizontal = false, gap = 0 }: ListI) => {
    const childrens = React.Children.toArray(children);
    const newChildrens = childrens.map((children, index) => {
        return <li key={index}>{children}</li>;
    });
    return (
        <>
            {type === "disc" || type === "circle" || type === "square" || type === 'none' ? (
                <ul style={{ listStyleType: type, gap: gap }} className={`inte__List ${horizontal ? 'inte_List--horizontal' : ''}`}>
                    <>{newChildrens}</>
                </ul>
            ) : type === "image" ? (
                <ul style={{ listStyleImage: "url('" + imageSrc + "')", gap: gap }} className={`inte__List inte__List--WithImage ${horizontal ? 'inte_List--horizontal' : ''}`}>
                    <>{newChildrens}</>
                </ul>
            ) : <ol style={{ listStyleType: type, gap: gap }} className={`inte__List ${horizontal ? 'inte_List--horizontal' : ''}`}>
                <>{newChildrens}</>
            </ol>}
        </>
    );
};

export interface ListI {
    children: React.ReactNode;
    type?: "disc" | "circle" | "square" | "lower-roman" | "decimal" | "image" | "none";
    imageSrc?: string;
    horizontal?: boolean;
    gap?: number;
}
export default List;
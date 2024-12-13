import React from "react";

const TableHeaderCells = ({cells}) => {
    return (
        <li className="table__row table__row--header">
            {
                cells.map((cell, index) => {
                    return <div className={"table__cell table__cell--" + (index + 1)} key={index}>{cell}</div>;
                })
            }
        </li>
    )
};
export default TableHeaderCells;

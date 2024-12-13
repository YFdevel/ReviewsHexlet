import React from "react";

const TableContentCells = ({cell}) => {
    return (
        <li className="table__row">
            <div data-label="Рейтинг" className="table__cell table__cell--1">{cell.rating}</div>
            <div data-label="Отзыв" className="table__cell table__cell--2">{cell.text}</div>
            <div data-label="Дата" className="table__cell table__cell--3">{cell.date}</div>
            <div data-label="Платформа" className="table__cell table__cell--4">{cell.platform}</div>

        </li>
    )
};
export default TableContentCells;

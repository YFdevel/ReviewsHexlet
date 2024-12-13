import "./Table.css";
import React, {useState} from "react";
import TableHeaderCells from "../TableHeaderCells/TableHeaderCells";
import TableContentCells from "../TableContentCells/TableContentCells";
import {useDispatch, useSelector} from "react-redux";
import Sort from "../Sort/Sort";
import Filter from "../Filter/Filter";

const Table = () => {
    const dispatch = useDispatch();
    const reviews = useSelector(state => state.reviews);
    const selectOptions = useSelector(state => state.initialReviews);
    const sort = ({isDecrease, target}) => {
        const payload = {
            isDecrease,
            target
        };
        if (isDecrease) {
            dispatch({
                type: "SORT_DECREASE",
                payload
            });
        } else {
            dispatch({
                type: "SORT",
                payload
            });
        }
    };
    const filterByValue = ({target,value}) => {
        const payload = {target,value};
        dispatch({
            type: "FILTER_BY_VALUE",
            payload
        });
    };
    const filterByRange = ({target, min, max,reset}) => {
        const payload = {
            target,
            min,
            max
        };
        if(!reset){
            dispatch({
                type: "FILTER_BY_RANGE",
                payload
            });
        }else{
            dispatch({
                type: "RESET_RATING_FILTER"
            });
        }
    };
    return (
        <div className="table">
            <div className="table__settings">
                <Sort sort={sort}/>
                <Filter platforms={selectOptions.map((i)=>({id:i.id,platform:i.platform}))} filterByRange={filterByRange} filterByValue={filterByValue}/>
            </div>
            <h2 className="table__title">Таблица отзывов</h2>
            <ul className="table__list">
                <TableHeaderCells cells={['Рейтинг', 'Отзыв', 'Дата', 'Платформа']}/>
                {
                    reviews.map((review) => (
                            <TableContentCells cell={{
                                rating: review.rating,
                                date: review.date,
                                text: review.text,
                                platform: review.platform
                            }} key={review.id}/>
                        )
                    )
                }
            </ul>
        </div>
    )
};
export default Table;

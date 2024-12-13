import React, {useState} from "react";
import "./Sort.css";

const Sort = ({sort}) => {
    const [isDecrease, setIsDecrease] = useState(false);
    return (
        <div className="table__sort sort">
            <h4 className="sort__title">Сортировать</h4>
            <label htmlFor="desc" className="sort_label sort__label--desc">
                <span className="sort__tip">По уменьшению</span>
                <input type="checkbox" id="desc" className="sort__input" value="decrease" onChange={() => {
                    setIsDecrease(prev => !prev)
                }}/>
            </label>
            <div className="sort__wrapper">
                <label className="sort_label">
                    <span className="sort__tip">По времени</span>
                    <input type="radio" className="sort_input sort__input--time" name="sort" value="date"
                           onChange={(evt) => {
                               sort({
                                   isDecrease,
                                   target: evt.target.value
                               });
                           }}/>
                </label>
                <label className="sort_label">
                    <span className="sort__tip">По оценке</span>
                    <input type="radio" className="sort_input sort__input--time" name="sort" value="rating"
                           onChange={(evt) => {
                               sort({
                                   isDecrease,
                                   target: evt.target.value
                               });
                           }}/>
                </label>
            </div>
        </div>
    )
};

export default Sort;

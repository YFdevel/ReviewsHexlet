import React, {useState} from "react";
import "./Filter.css";

const Filter = ({platforms,filterByValue, filterByRange}) => {
    const [isPlatform, setIsPlatform] = useState(false);
    const [isRating, setIsRating] = useState(false);
    const [min, setMin] = useState(1);
    const [max, setMax] = useState(5);
    const [isRatingDisable, setIsRatingDisable] = useState(false);
    return (
        <div className="table__filter filter">
            <h4 className="filter__title">Фильтр</h4>
            <label htmlFor="is-platform" className="filter_label filter__label--is-platform">
                <span className="filter__tip">По платформе</span>
                <input type="radio" id="is-platform" className="filter__input" name="filter" onChange={() => {
                    setIsPlatform(prev => !prev);
                    if(isPlatform){
                        setIsRating(false);
                    }
                }}/>
            </label>
            {
                isPlatform &&
                <label htmlFor="platform" className="filter_label filter__label--platform">
                <select name="platform" id="platform" className="filter__select"  onChange={(evt) => {
                    filterByValue({
                        target: "platform",
                        value: evt.target.value,
                    });
                 }
                }
                >
                    <option name="platform" value="all">Все</option>
                    {
                      platforms.map((item)=>(
                          <option name="platform" value={item.platform} key={item.id}>{item.platform}</option>
                      ))
                    }
                </select>
            </label>
            }
            <label htmlFor="is-rating" className="filter_label filter__label--is-platform">
                <span className="filter__tip">По рейтингу</span>
                <input type="radio" id="is-rating" className="filter__input"  name="filter" onChange={() => {
                    setIsRating(prev => !prev);
                    if(isRating){
                        setIsPlatform(false);
                    }
                }}/>
            </label>
            {
                isRating &&  <form className="filter__wrapper" onSubmit={(evt) => {
                    evt.preventDefault();
                    if(min<=max){
                        filterByRange({
                            target: "rating",
                            reset:isRatingDisable,
                            min,
                            max
                        });
                        setIsRatingDisable(prev=>!prev);
                    }

                }}>
                    <label className="filter_label">
                        <span className="filter__tip">От</span>
                        <input type="number" className="filter_input filter__input--number" name="min" min="0" max="7" value={min} onChange={(evt)=>{
                            setMin(Number(evt.target.value));
                        }} required disabled={isRatingDisable}/>
                    </label>
                    <label className="filter_label">
                        <span className="filter__tip">До</span>
                        <input type="number" className="filter_input filter__input--number" name="max" min="0" max="7" value={max} onChange={(evt)=>{
                            setMax(Number(evt.target.value));
                        }}  disabled={isRatingDisable}/>
                    </label>
                    <button className="filter__submit">{isRatingDisable?"Сбросить":"Обновить"}</button>
                </form>
            }
        </div>
    )
};

export default Filter;

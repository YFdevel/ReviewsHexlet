import {GET_ALL_REVIEWS, SORT, SORT_DECREASE, FILTER_BY_VALUE, FILTER_BY_RANGE,RESET_RATING_FILTER} from "./actions";

const initialState = {
    reviews: [
        {
            id: 1,
            platform: "Google",
            rating: 4,
            date: "2023-11-15T10:00:00Z",
            text: "Отличный сервис!",
        },
        {
            id: 2,
            platform: "Яндекс",
            rating: 3,
            date: "2023-11-14T09:00:00Z",
            text: "Хорошо, но есть недочеты.",
        },
        {
            id: 3,
            platform: "2ГИС",
            rating: 5,
            date: "2023-11-13T08:00:00Z",
            text: "Прекрасно!",
        },
    ],
    initialReviews: [
        {
            id: 1,
            platform: "Google",
            rating: 4,
            date: "2023-11-15T10:00:00Z",
            text: "Отличный сервис!",
        },
        {
            id: 2,
            platform: "Яндекс",
            rating: 3,
            date: "2023-11-14T09:00:00Z",
            text: "Хорошо, но есть недочеты.",
        },
        {
            id: 3,
            platform: "2ГИС",
            rating: 5,
            date: "2023-11-13T08:00:00Z",
            text: "Прекрасно!",
        },
    ],
};
export const reducer = (state = initialState, action) => {
    const sort = (flag = "increase") => {
        let sorted;
        if (action.payload.target === "date") {
            sorted = state.reviews.sort(function (a, b) {
                const dateA = new Date(a[action.payload.target]).getTime();
                const dateB = new Date(b[action.payload.target]).getTime();
                if (flag === "decrease") {
                    return dateB - dateA;
                }
                return dateA - dateB;
            });
        } else {
            sorted = state.reviews.sort(function (a, b) {
                if (flag === "decrease") {
                    return b[action.payload.target] - a[action.payload.target];
                }
                return a[action.payload.target] - b[action.payload.target];
            });
        }
        return sorted;
    };
    const filterByValue = (target) => {
        let filtered;
        if (action.payload.value === "all") {
            filtered = state.initialReviews;
        } else {
            filtered = state.initialReviews.filter(function (review) {
                return review[target] === action.payload.value;
            });
        }
        return filtered;
    };
    const filterByRange = (target, min, max) => {
        let filtered;
        filtered = state.reviews.filter(function (review) {
            return review[target] <= max && review[target] >= min;
        });
        return filtered;
    };
    switch (action.type) {
        case GET_ALL_REVIEWS: {
            return state;
        }
        case SORT: {
            const sorted = sort();
            return {
                ...state,
                reviews: [...sorted]

            }
        }
        case SORT_DECREASE: {
            const sorted = sort("decrease");
            return {
                ...state,
                reviews: [...sorted]

            }
        }
        case FILTER_BY_VALUE: {
            const filtered = filterByValue(action.payload.target);
            return {
                ...state,
                reviews: [...filtered]

            }
        }
        case FILTER_BY_RANGE: {
            const filtered = filterByRange(action.payload.target, action.payload.min, action.payload.max);
            return {
                ...state,
                reviews: [...filtered]

            }
        }
        case RESET_RATING_FILTER: {
            return {
                ...state,
                reviews: [...state.initialReviews]

            }
        }
        default: {
            return state;
        }
    }
};

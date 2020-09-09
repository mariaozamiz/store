import React from 'react';

function Filters(props) {
    const handleFilterName = (ev) => {
        props.handleFilters({
            key: 'filterName',
            value: ev.target.value,
        });
    };

    const handleFilterPrice = (ev) => {
        props.handleFilters({
            key: 'filterPrice',
            value: parseInt(ev.target.value),
        });
    };

    return (
        <form className="border--medium m-0 mt-1 col2">
            <div>
                <label htmlFor="filterName" className="form__label">
                    Filtrar por nombre
                </label>
                <input
                    type="text"
                    className="form__input-text"
                    id="filterName"
                    value={props.filterName}
                    onChange={handleFilterName}
                />
            </div>
            <div>
                <label htmlFor="filterPrice" className="form__label">
                    Filtrar por precio menor que
                </label>
                <select
                    className="form__input-text"
                    id="filterPrice"
                    onChange={handleFilterPrice}
                >
                    <option value="5">5€</option>
                    <option value="10">10€</option>
                    <option value="15">15€</option>
                </select>
            </div>
        </form>
    );
}

export default Filters;

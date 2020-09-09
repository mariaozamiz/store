import React from 'react';

function Product() {
    return (
        <article className="card">
            <img src="" className="card__img" alt="" />
            <h3 className="card__title">texto</h3>
            <p className="card__description">€</p>
            <button className="js-add-product card__btn">
                Ver detalle del producto
            </button>
        </article>
    );
}

export default Product;

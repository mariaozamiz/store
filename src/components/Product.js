import React from 'react';

function Product(props) {
    return (
        <article className="card">
            <img src={props.imageUrl} className="card__img" alt={props.name} />
            <h3 className="card__title">{props.name}</h3>
            <p className="card__description">{props.price} €</p>
            <button className="js-add-product card__btn">
                Ver detalle del producto
            </button>
        </article>
    );
}

export default Product;

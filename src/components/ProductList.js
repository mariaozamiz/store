import React from 'react';
import Product from './Product';

function ProductList(props) {
    const productsInfo = props.products.map((product, index) => {
        return (
            <Product
                key={index}
                id={product.id}
                name={product.name}
                price={product.price}
                imageUrl={product.imageUrl}
            />
        );
    });
    return <section className="cards">{productsInfo}</section>;
}

export default ProductList;

import React, { useEffect, useState } from 'react';
import Filters from './Filters';
import ProductList from './ProductList';
import ProductDetail from './ProductDetail';
import getDataFromApi from '../services/api';

function App() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getDataFromApi().then((data) => {
            setProducts(data);
        });
    }, []);

    const renderProductDetail = () => {
        const product = products[1];
        if (product) {
            return (
                <ProductDetail
                    name={product.name}
                    imageUrl={product.imageUrl}
                    price={product.price}
                    description={product.description}
                    sizes={product.sizes}
                />
            );
        }
    };

    return (
        <div>
            <h1 className="title--big">Catálogo de camisetas</h1>
            <Filters />
            <ProductList products={products} />
            {renderProductDetail()}
        </div>
    );
}

export default App;

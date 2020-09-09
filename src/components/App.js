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

    return (
        <div>
            <h1 className="title--big">Catálogo de camisetas</h1>
            <Filters />
            <ProductList products={products} />
            <ProductDetail />
        </div>
    );
}

export default App;

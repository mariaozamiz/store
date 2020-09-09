import React, { useEffect, useState } from 'react';
import Filters from './Filters';
import Product from './Product';
import ProductDetail from './ProductDetail';
import '../stylesheets/App.css';
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
            <section className="cards">
                <Product />
                <Product />
                <Product />
            </section>
        </div>
    );
}

export default App;

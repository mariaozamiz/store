import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
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

    const renderProductDetail = (props) => {
        const routeProductId = props.match.params.productId;
        const product = products.find(
            (product) => product.id === routeProductId
        );
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
        } else {
            return <p>Producto no encontrado</p>;
        }
    };

    return (
        <div>
            <h1 className="title--big">Catálogo de camisetas</h1>
            <Filters />
            <ProductList products={products} />
            <Switch>
                <Route
                    path="/product/:productId"
                    render={renderProductDetail}
                />
            </Switch>
        </div>
    );
}

export default App;

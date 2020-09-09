import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Filters from './Filters';
import ProductList from './ProductList';
import ProductDetail from './ProductDetail';
import getDataFromApi from '../services/api';

function App() {
    const [products, setProducts] = useState([]);
    const [filterName, setFilterName] = useState('');
    const [filterPrice, setFilterPrice] = useState(10);

    useEffect(() => {
        getDataFromApi().then((data) => {
            setProducts(data);
        });
    }, []);

    const handleFilters = (data) => {
        if (data.key === 'filterName') {
            setFilterName(data.value);
        } else if (data.key === 'filterPrice') {
            setFilterPrice(data.value);
        }
    };

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

    const renderFilterProducts = () => {
        return products
            .filter((product) => {
                return product.name.includes(filterName);
            })
            .filter((product) => {
                return product.price > filterPrice;
            });
    };

    return (
        <div>
            <h1 className="title--big">Catálogo de camisetas</h1>
            <Filters
                filterName={filterName}
                filterPrice={filterPrice}
                handleFilters={handleFilters}
            />
            <ProductList products={renderFilterProducts()} />
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

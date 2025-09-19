import React from 'react';
import { useGetProductByCategory } from '../hooks/useGetProductsByCategory';
import { Loader } from '../components';
import { ItemListContainer } from '../components';
import { useParams } from 'react-router';

export const Category = () => {
    const { id } = useParams();

    const { loading, products } = useGetProductByCategory(id);

    if (loading) {
        return <Loader />;
    }

    return (
        <div>
            {products.length === 0 ? (
                <p>No se encontraron coincidencias :(</p>
            ) : (
                <ItemListContainer products={products} />
            )}
        </div>
    );
};

import React, { useState, useEffect } from 'react';
import Category from '../components/Category/Category';
import CategoryTable from '../components/Category/Table';
import Order from '../components/Order/Order';
import OrderTable from '../components/Order/Table';
import Product from '../components/Product/Product';
import ProductTable from '../components/Product/Table';
import { getCategory, getOrder, getProduct } from '../api/Get';

const HomePage = () => {
  const [category, setCategory] = useState([]);
  const [product, setProduct] = useState([]);
  const [order, setOrder] = useState([]);

  const getAll = async () => {
    const categoryData = await getCategory();
    const productData = await getProduct();
    const orderData = await getOrder();
    setCategory(categoryData);
    setProduct(productData);
    setOrder(orderData);
  };

  useEffect(() => {
    getAll();
  }, []);
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-md'>
          <Category/>
        </div>
        <div className='col-md'>
          <Product categories={category} />
        </div>
      </div>
      {/* Tables */}
      <div className='row'>
        <div className='col-md mt-3'>
          <CategoryTable
            categories={category}
          />
        </div>
        <div className='col-md mt-3'>
          <ProductTable products={product} />
        </div>
      </div>
      <div className='row justify-content-center mt-5'>
        <h2>Create Order</h2>
      </div>
      <div className='row justify-content-center'>
        <Order products={product} />
      </div>
      <div className='row'>
        <div className='col-md mt-3'>
          <OrderTable orders={order} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;

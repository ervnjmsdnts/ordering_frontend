import React, { useState } from 'react';
import { postProduct } from '../../api/Post';

const Product = ({ categories }) => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  
  const handleSubmit = async () => await postProduct({ name, category });

  return (
    <>
      <h2>Create Product</h2>
      <div className='card card-body'>
        <form onSubmit={handleSubmit}>
          <div className='form-row'>
            <div className='form-group col-md'>
              <label htmlFor='inputProductName'>Product Name</label>
              <input
                type='text'
                className='form-control'
                id='inputProductName'
                placeholder='Enter product name'
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className='form-group col-md'>
              <label htmlFor='inputCategorySelect'>Category</label>
              <select
                id='inputCategorySelect'
                className='form-control'
                onChange={(e) => setCategory(e.target.value)}>
                <option selected>Choose...</option>
                {categories.map((category) => {
                  return <option key={category.id} value={category.name}>{category.name}</option>;
                })}
              </select>
            </div>
          </div>
          <button type='submit' className='btn btn-primary'>
            Add
          </button>
        </form>
      </div>
    </>
  );
};

export default Product;

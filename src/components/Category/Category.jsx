import React, { useState } from 'react';
import { postCategory } from '../../api/Post';

const Category = () => {
  const [name, setName] = useState('');

  const handleSubmit = async () => await postCategory({ name });
  return (
    <>
      <h2>Create Category</h2>
      <div className='card card-body'>
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <label htmlFor='inputCategoryName'>Category Name</label>
            <input
              type='text'
              className='form-control'
              id='inputCategoryName'
              placeholder='Enter category name'
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <button type='submit' className='btn btn-primary'>
            Add
          </button>
        </form>
      </div>
    </>
  );
};

export default Category;

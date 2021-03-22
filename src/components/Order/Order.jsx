import React, { useState } from 'react';
import { postOrder } from '../../api/Post';

const Order = ({ products }) => {
  const [product, setProduct] = useState('');
  const [amount, setAmount] = useState(1);
  const [backStocks, setBackStocks] = useState('');
  const [note, setNote] = useState('');

  const handleSubmit = async () =>
    await postOrder({ product, amount, back_stock: backStocks, note });

  return (
    <div className='card w-50'>
      <div className='card-body'>
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <label htmlFor='inputOrderProduct'>Product</label>
            <select
              className='form-control'
              id='inputOrderProduct'
              onChange={(e) => setProduct(e.target.value)}>
              <option selected>Choose...</option>
              {products.map((product) => {
                return <option key={product.id} value={product.name}>{product.name}</option>;
              })}
            </select>
          </div>
          <div className='form-group'>
            <label htmlFor='inputKilograms'>Amount</label>
            <input
              type='number'
              className='form-control'
              id='inputKilograms'
              min='1'
              placeholder='Enter amounts'
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <div className='form-group'>
            <p>Back Stocks</p>
            <div className='form-check form-check-inline'>
              <input
                className='form-check-input'
                type='radio'
                name='inlineRadioOptions'
                id='inlineRadio1'
                value='Yes'
                onChange={(e) => setBackStocks(e.target.value)}
              />
              <label className='form-check-label' htmlFor='inlineRadio1'>
                Yes
              </label>
            </div>
            <div className='form-check form-check-inline'>
              <input
                className='form-check-input'
                type='radio'
                name='inlineRadioOptions'
                id='inlineRadio2'
                value='No'
                onChange={(e) => setBackStocks(e.target.value)}
              />
              <label className='form-check-label' htmlFor='inlineRadio2'>
                No
              </label>
            </div>
          </div>
          <div className='form-group'>
            <label htmlFor='inputNotes'>Notes</label>
            <textarea
              id='inputNotes'
              className='form-control'
              placeholder='Enter notes'
              onChange={(e) => setNote(e.target.value)}></textarea>
          </div>
          <button type='submit' className='btn btn-primary'>
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default Order;

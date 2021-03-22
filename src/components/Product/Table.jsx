import React from 'react'
import { deleteItem } from '../../api/Delete';

const ProductTable = ({products}) => {
    return (
      <div className='card card-body table-responsive'>
        <table className='table' style={{ maxHeight: '10rem' }}>
          <thead>
            <th>Name</th>
            <th>Category</th>
          </thead>
          <tbody>
            {products.map(product => {
              return (
                <tr key={product.id}>
                  <td>{product.name}</td>
                  <td className='d-flex justify-content-between'>
                    {product.category}
                    <div>
                      <button className='btn btn-danger' onClick={() => deleteItem('product', product.id)}>Delete</button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
}

export default ProductTable

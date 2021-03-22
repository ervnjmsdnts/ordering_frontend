import React from 'react';
import { deleteItem } from '../../api/Delete';

const CategoryTable = ({ categories }) => {
  return (
    <div className='card card-body table-responsive'>
      <table className='table' style={{ maxHeight: '10rem' }}>
        <thead>
          <tr>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => {
            return (
              <tr key={category.id}>
                <td className='d-flex justify-content-between'>
                  {category.name}
                  <div>
                    <button
                      className='btn btn-danger'
                      onClick={() => deleteItem('category', category.id)}>
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CategoryTable;

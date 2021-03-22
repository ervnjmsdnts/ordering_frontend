import React from 'react';
import Moment from 'moment';
import ReactMoment from 'react-moment';
import ExcelFile from 'react-data-export/dist/ExcelPlugin/components/ExcelFile';
import ExcelSheet from 'react-data-export/dist/ExcelPlugin/elements/ExcelSheet';

const OrderTable = ({ orders }) => {
  const DataSet = [
    {
      columns: [
        {
          title: 'Date Ordered',
          style: { font: { sz: 16, bold: true } },
          width: { wpx: 200 },
        },
        {
          title: 'Category',
          style: { font: { sz: 16, bold: true } },
          width: { wpx: 200 },
        },
        {
          title: 'Product',
          style: { font: { sz: 16, bold: true } },
          width: { wpx: 200 },
        },
        {
          title: 'Amount',
          style: { font: { sz: 16, bold: true } },
          width: { wpx: 200 },
        },
        {
          title: 'Back Stocks',
          style: { font: { sz: 16, bold: true } },
          width: { wpx: 200 },
        },
        {
          title: 'Notes',
          style: { font: { sz: 16, bold: true } },
          width: { wpx: 200 },
        },
      ],
      data: orders.map((order) => [
        {
          value: Moment(order.order_date).format('dddd, MMMM Do YYYY'),
          style: { font: { sz: 14 } },
        },
        { value: order.product.category.name, style: { font: { sz: 14 } } },
        { value: order.product.name, style: { font: { sz: 14 } } },
        { value: `${order.amount} kg`, style: { font: { sz: 14 } } },
        { value: order.back_stock, style: { font: { sz: 14 } } },
        { value: order.note, style: { font: { sz: 14 } } },
      ]),
    },
  ];
  return (
    <div className='card card-body table-responsive'>
      <ExcelFile
        filename='Orders'
        element={
          <button
            type='button'
            className='btn btn-success float-right mb-3'>Export Orders</button>
        }>
        <ExcelSheet dataSet={DataSet} name='Orders Data'/>
      </ExcelFile>
      <table className='table'>
        <thead>
          <th>Date Ordered</th>
          <th>Category</th>
          <th>Product</th>
          <th>Amount</th>
          <th>Back Stocks</th>
          <th>Notes</th>
        </thead>
        <tbody>
          {orders.map((order) => {
            return (
              <tr key={order.id}>
                <td>
                  <ReactMoment format='dddd, MMMM Do YYYY'>
                    {order.order_date}
                  </ReactMoment>
                </td>
                <td>{order.product.category.name}</td>
                <td>{order.product.name}</td>
                <td>{`${order.amount} kg`}</td>
                <td>{order.back_stock}</td>
                <td>{order.note}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ListAllOrder() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await axios.get('/api/orders');
      setOrders(response.data.orders);
    } catch (error) {
      console.error('Error fetching orders:', error);
      // Handle error, show message to the user, etc.
    }
  };

  return (
    <div>
      <h2>All Orders</h2>
      <table>
        <thead>
          <tr>
            
            <th> Name</th>
            <th>Phone Number</th>
            <th>Priority</th>
            <th>Product</th>
            
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              
              <td>{order.customer_name}</td>
              <td>{order.phone_number}</td>
              <td>{order.priority}</td>
              <td>{order.product_name}</td>
             
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListAllOrder;

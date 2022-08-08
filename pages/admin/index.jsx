import styles from "../../styles/Admin.module.css";
import Image from "next/image";
import axiosInstance from "../../util/axios";
import { useState } from "react";
const index = ({ orders, products }) => {
  const [pizzaList, setPizzaList] = useState(products);
  const [orderList, setOrderList] = useState(orders);
  const status = ["Preparing", "On the way", "Delivered"];
  const handleDelete = async (id) => {
    try {
      await axiosInstance.delete(`products/${id}`);
      setPizzaList(pizzaList.filter((pizza) => pizza._id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  const handleStatus = async (id) => {
    const item = orderList.filter((order) => order._id === id)[0];
    const currentStatus = item.status;
    try{
      const res = await axiosInstance.put(`orders/${id}`, {status: currentStatus + 1 });
      setOrderList([
        res.data,
        ...orderList.filter((order) => order._id !== id),
      ])
    }
    catch(err){
      console.log(err);
    }
  }
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Products</h1>
        <table className={styles.table}>
          <tbody>
            <tr className={styles.trTitle}>
              <th>Image</th>
              <th>Id</th>
              <th>Title</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </tbody>
          {pizzaList.map((product) => (
            <tbody key={product._id}>
              <tr className={styles.trTitle}>
                <Image
                  src={product.img}
                  width={50}
                  height={50}
                  objectFit="cover"
                  alt="pizza"
                />
                <td>{product._id.slice(0, 5)}...</td>
                <td>{product.title}</td>
                <td>{product.price[0]}</td>
                <td>
                  <button className={styles.button}>Edit</button>
                  <button
                    className={styles.button}
                    onClick={() => handleDelete(product._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
      <div className={styles.item}>
        <h1 className={styles.title}>Orders</h1>
        <table className={styles.table}>
          <tbody>
            <tr className={styles.trTitle}>
              <th>Id</th>
              <th>Customer </th>
              <th>Total</th>
              <th>Payment</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </tbody>
          {orderList.map((order) => (
          <tbody key={order._id}>
            <tr className={styles.trTitle}>
              <td>{order._id.slice(0, 5)}...</td>
              <td>{order.customer}</td>
              <td>${order.total}</td>
              <td>{order.method  === 0 ? (<span>Cash</span>): (<span>Paid</span>)}</td>
              <td>{status[order.status]}</td>
              <td>
                <button onClick={() => handleStatus(order._id)}>Next Stage</button>
              </td>
            </tr>
          </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export const getServerSideProps = async (ctx) => {
  const myCookie = ctx.req?.cookies || "";
  console.log(myCookie)
  if(myCookie.token !== process.env.TOKEN){
    return{
      redirect:{
        destination:'/admin/login',
        permanent:false
      }
    }
  }
  const productRes = await axiosInstance.get("products");
  const orderRes = await axiosInstance.get("orders");
  return {
    props: {
      orders: orderRes.data,
      products: productRes.data,
    },
  };
};
export default index;

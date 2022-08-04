import styles from "../../styles/Admin.module.css";
import Image from "next/image";
import axios from "axios";
import axiosInstance from "../../util/axios";
const index = ({ orders, products }) => {
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
          {products.map((product) => (
            <tbody key={product._id}>
              <tr className={styles.trTitle}>
                <Image
                  src={product.img}
                  width={50}
                  height={50}
                  objectFit="cover"
                  alt="pizza"
                />
                <td>{product._id.slice(0,5)}...</td>
                <td>{product.title}</td>
                <td>{product.price[0]}</td>
                <td>
                  <button className={styles.button}>Edit</button>
                  <button className={styles.button}>Delete</button>
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
          <tbody>
            <tr className={styles.trTitle}>
              <td>{"5346593465986349".slice(0, 5)}...</td>
              <td>Smeet Patel</td>
              <td>$50</td>
              <td>Paid</td>
              <td>Preparing</td>
              <td>
                <button>Next Stage</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export const getServerSideProps = async () => {
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

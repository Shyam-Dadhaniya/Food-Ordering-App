import styles from "../../styles/Product.module.css";
import Image from "next/image";
import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/cartSlice";
import axiosInstance from "../../util/axios";
import { useToasts } from "react-toast-notifications";

const Product = ({ pizza }) => {
  const { addToast } = useToasts();
  const [price, setPrice] = useState(pizza.price[0]);
  const [size, setSize] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [extra, setExtra] = useState([]);
  const dispatch = useDispatch();
  const changePrice = (number) => {
    // console.log(price);
    setPrice(price + number);
    // console.log(price);
  };
  const handleSize = (sizeIndex) => {
    const difference = pizza.price[sizeIndex] - pizza.price[size];
    setSize(sizeIndex);
    changePrice(difference);
  };
  const handleChange = (e, option) => {
    const checked = e.target.checked;
    // console.log(checked);

    if (checked) {
      changePrice(option.price);
      setExtra([...extra, option]);
    } else {
      changePrice(-option.price);
      setExtra(extra.filter((item) => item.id !== option.id));
    }
  };
  const handleClick = () => {
    dispatch(addProduct({ ...pizza, price, quantity, extra }));
    addToast("Product added to cart", {
      appearance: "success",
    });
  };
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image src={pizza.img} alt="" layout="fill" objectFit="contain" />
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.title}>{pizza.title}</div>
        <span className={styles.price}>&#8377;{price}</span>
        <p className={styles.desc}>{pizza.desc}</p>
        <h3 className={styles.choose}>Choose the size</h3>
        <div className={styles.sizes}>
          <div className={styles.size} onClick={() => handleSize(0)}>
            <Image src="/img/size.png" alt="" layout="fill" />
            <span className={styles.number}>Small</span>
          </div>
          <div className={styles.size} onClick={() => handleSize(1)}>
            <Image src="/img/size.png" alt="" layout="fill" />
            <span className={styles.number}>Medium</span>
          </div>
          <div className={styles.size} onClick={() => handleSize(2)}>
            <Image src="/img/size.png" alt="" layout="fill" />
            <span className={styles.number}>Large</span>
          </div>
        </div>
        <h3 className={styles.choose}>Choose additional ingredients</h3>
        <div className={styles.ingredients}>
          {pizza.extraOptions.map((option) => (
            <div className={styles.option} key={option._id}>
              <input
                type="checkbox"
                id={option.text}
                name={option.text}
                className={styles.checkbox}
                onChange={(e) => handleChange(e, option)}
              />
              <label htmlFor="double" className={styles.label}>
                {option.text}
              </label>
            </div>
          ))}
        </div>
        <div className={styles.add}>
          <input
            onChange={(e) => setQuantity(e.target.value)}
            type="number"
            min={1}
            defaultValue={1}
            className={styles.quantity}
          />
          <button className={styles.button} onClick={handleClick}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;

export const getServerSideProps = async ({ params }) => {
  const res = await axiosInstance.get(`products/${params.id}`);
  // const res = await axios.get(
  //   `/api/products/${params.id}`
  // );
  return {
    props: {
      pizza: res.data,
    },
  };
};

import Head from "next/head";
import Image from "next/image";
import Featured from "../components/Featured";
import PizzaList from "../components/PizzaList";
import axios from "axios";
import axiosInstance from "../util/axios";

export default function Home({ pizzaList }) {
  // console.log(process.env.MONGO_URL);
  return (
    <div>
      <Head>
        <title>Pizza Restaurant in India</title>
        <meta name="description" content="Best pizza shop in town." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      <PizzaList pizzaList={pizzaList} />
    </div>
  );
}

export const getServerSideProps = async () => {
  const res = await axiosInstance.get("products");
  // const res = await axios.get("/api/products");
  // console.log(res);
  return {
    props: {
      pizzaList: res.data,
    },
  };
};

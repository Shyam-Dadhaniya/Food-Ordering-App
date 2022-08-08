import Head from "next/head";
import Image from "next/image";
import Featured from "../components/Featured";
import PizzaList from "../components/PizzaList";
import axios from "axios";
import axiosInstance from "../util/axios";
import AddButton from "../components/AddButton";
import { useState } from "react";
import Add from "../components/Add";
export default function Home({ pizzaList, admin }) {
  const [close, setClose] = useState(true);
  return (
    <div>
      <Head>
        <title>Pizza Restaurant in India</title>
        <meta name="description" content="Best pizza shop in town." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      {admin && <AddButton setClose={setClose} />}
      <PizzaList pizzaList={pizzaList} />
      {!close && <Add setClose={setClose} />}
    </div>
  );
}

export const getServerSideProps = async (ctx) => {
  const myCookie = ctx.req?.cookies || "";
  let admin = false;
  if (myCookie.token === process.env.TOKEN) {
    admin = true;
  }
  const res = await axiosInstance.get("products");
  // const res = await axios.get("/api/products");
  // console.log(res);
  return {
    props: {
      pizzaList: res.data,
      admin,
    },
  };
};

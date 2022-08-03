import Head from "next/head";
import Image from "next/image";
import Featured from "../components/Featured";
import PizzaList from "../components/PizzaList";
import axios from "axios";

export default function Home({pizzaList}) {
  return (
    <div>
      <Head>
        <title>Pizza Restaurant in India</title>
        <meta name="description" content="Best pizza shop in town." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured/>
      <PizzaList pizzaList={pizzaList}/>
    </div>
  );
}

export const  getServerSideProps = async () => {
  const res = await axios.get("http://localhost:3000/api/products");
  // console.log(res);
  return {
    props: {
      pizzaList: res.data ,
    }
  }
} 



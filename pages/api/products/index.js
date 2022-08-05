import dbConnect from "../../../util/mongo";
// const Product=require("../../../models/Product");
import Product from "../../../models/Product";
export default async function handler(req, res) {
  const { method , cookies} = req;
  const token = cookies.token;
  await dbConnect();
  if (method === "GET") {
    try {
      const products = await Product.find({});
      // console.log(products);
      res.status(200).json(products);
    } catch (err) {
      res.status(500).json({
        message: err.message,
      });
    }
  }
  if (method === "POST") {
    if (token !== process.env.TOKEN) {
      res.status(401).json("Unauthorized");
    }
    try {
      const product = await Product.create(req.body);
      res.status(201).json(product);
    } catch (err) {
      res.status(500).json({ err });
    }
  }
}

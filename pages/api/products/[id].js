import dbConnect from "../../../util/mongo";
// const Product=require("../../../models/Product");
import Product from "../../../models/Product";
export default async function handler(req, res) {
  const { method, query:{id}, cookies} = req;
  const token = cookies.token
  await dbConnect();
  if (method === "GET") {
    try {
      const product = await Product.findById(id);
      res.status(200).json(product);
    } catch (err) {
      res.status(500).json({
        message: err.message,
      });
    }
  }
  if (method === "PUT") {
    if (token !== process.env.TOKEN) {
      res.status(401).json("Unauthorized");
    }
    try {
      const product = await Product.find(req.body);
      res.status(201).json(product);
    } catch (err) {
      res.status(500).json({ err });
    }
  }
  if (method === "DELETE") {
    if (token !== process.env.TOKEN) {
      res.status(401).json("Unauthorized");
    }
      try {
        await Product.findByIdAndDelete(id);
        res.status(200).json("The product has been deleted!");
      } catch (err) {
        res.status(500).json({ err });
      }
    }
}



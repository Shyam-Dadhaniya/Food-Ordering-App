import cookie from "cookie";

const handler = (req, res) => {
  if (req.method === "POST") {
    const { username, password } = req.body;
    console.log(username);
    console.log(process.env.ADMIN_USERNAME);
    if (
      username === process.env.ADMIN_USERNAME &&
      password === process.env.ADMIN_PASSWORD
    ) {
      res.setHeader(
        "Set-Cookie",
        cookie.serialize("token",process.env.TOKEN, {
          maxAge: 60 * 60,
          sameSite: "strict",
          path: "/",
        })
      );
        res.status(200).json("Login successful!");
    }else{
        res.status(401).json("Login failed!");
    }
  }
};

export default handler;

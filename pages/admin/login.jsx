import { useRouter } from "next/router";
import { useState } from "react";
import styles from "../../styles/Login.module.css";
import axiosInstance from "../../util/axios";
const Login = () => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleClick = async (e) => {
    try {
      await axiosInstance.post("/login", { username, password });
      router.push("/admin");
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1>Admin Dashboard</h1>
        <input
          placeholder="Username"
          className={styles.input}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          placeholder="Password"
          className={styles.input}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className={styles.button} onClick={handleClick}>
          Sign In
        </button>
        {error && <p className={styles.error}>Invalid username or password</p>}
      </div>
    </div>
  );
};

export default Login;

import { useState } from "react";
import { validar } from "../../helpers/index";
import styles from "../Login/Form.module.css";
// import rimage from "../../assets/morty.gif";

function Login({ login }) {
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [shown, setShown] = useState(false);

  const switchShown = () => setShown(!shown);

  function handleChange(e) {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validar({
        ...userData,
      })
    );
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (errors.email || errors.password) {
      login(userData);
    } else {
      alert("Password Invalid");
    }
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <div className={styles.tituloForm}>
          <h1>RICK & MORTY</h1>
        </div>
        <div className={styles.contenedorInput}>
          <label className={styles.textoLogin}> ✉ EMAIL </label>
          <br />
          <input
            type="text"
            placeholder="@email.com"
            name="email"
            value={userData.email}
            onChange={handleChange}
          />
          {errors.email && <p className={styles.error}>{errors.email}</p>}
        </div>

        <div className={styles.contenedorInput}>
          <label className={styles.textoLogin}>
            {" "}
            🗝 PASSWORD
            <span className={styles.mostrar} onClick={switchShown}>
              {shown ? " ( Hide )" : " ( Show )"}
            </span>
          </label>
          <br />
          <input
            type={shown ? "text" : "password"}
            name="password"
            placeholder="Password"
            value={userData.password}
            onChange={handleChange}
          />
          {errors.password && <p className={styles.error}>{errors.password}</p>}
        </div>
        <button className={styles.boton} type="submit">
          SUBMIT
        </button>
      </form>
    </div>
  );
}

export default Login;

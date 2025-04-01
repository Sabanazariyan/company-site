import styles from "./Customers.module.css";

function Customers() {
  return (
    <div className={styles.container}>
      <img
        src="./customers/Vector (5).png"
        alt=""
        style={{ width: "70px", height: "80px" }}
      />
      <img
        src="./customers/Vector (4).png"
        alt=""
        style={{ width: "68px", height: "70px" }}
      />
      <img
        src="./customers/Vector (3).png"
        alt=""
        style={{ width: "68px", height: "70px" }}
      />
      <img
        src="./customers/Vector (2).png"
        alt=""
        style={{ height: "55px", marginTop: "10px" }}
      />
      <img src="./customers/Vector (1).png" alt="" style={{ height: "65px" ,marginTop: "10px" }} />
      <img
        src="./customers/1.png"
        alt=""
        style={{ width: "116px", height: "85px" }}
      />
      <p>: برخی از مشتریان ما </p>
    </div>
  );
}

export default Customers;

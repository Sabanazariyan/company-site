import styles from "./Descriptiontwo.module.css";
import { IoIosArrowBack } from "react-icons/io";

function Descriptiontwo() {
  return (
    <div className={styles.container}>
      <img src="./Description/descriptiontwo.png" alt="" />
      <div className={styles.line}></div>
      <div className={styles.text}>
        <p>معرفی تیم دیمالند</p>{" "}
        <span>
          آژانس دیجیتال مارکتینگ دیمالند با بهره گیری از متخصصین بازاریابی
          دیجیتال که تجربه کار به صورت بازاریابی سنتی رانیز داشته اند، شکل گرفت.
          ما مشتری مداری را سرلوحه خود قرار دادیم تا بتوانیم با ادغام این دو مدل
          بازاریابی به کسب و کارهای کوچک و متوسط کمک کنیم تا به رشد و بالندگی
          سریعی برسند.
        </span>
        <div className={styles.desc}>
          <p>اعضای تیم دیمالند</p>
          <span>
            <IoIosArrowBack />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Descriptiontwo;

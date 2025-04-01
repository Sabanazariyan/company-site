import styles from "./Introduction.module.css";
import { CgPhone } from "react-icons/cg";

function Introduction() {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.photo}>
          {/* <div className={styles.photobg}></div> */}
          <img src="./images/photomain.png" alt="" />
          {/* <div className={styles.icons}>
            <img src="./images/2.png" alt="" className={styles.iconone} />
            <img src="./images/4.png" alt="" className={styles.icontwo} />
            <img src="./images/3.png" alt="" className={styles.iconthree} />
          </div>
          <div className={styles.square}></div>
          <div className={styles.history}>
            <p>۱۰+ سال</p>
            <p>سابقه فعالیت</p>
          </div> */}
          <div className={styles.line}></div>
        </div>
      </div>
      <div className={styles.text}>
        <p>
          با خدمات بازاریابی اینترنتی دیمالند <br />
          فروش شما
          <span> ۱۰ بــــــــرابـــــــــر</span>
          می شود
        </p>
        <p>
          آژانس دیجیتال مارکتینگ دیمالند با خدمات بازاریابی اینترنتی خود، باعث
          رشد کسب و کار، افزایش مشتری و فروش چند برابری شما می شود
        </p>
        <div className={styles.bottmontext}>
          <div className={styles.phone}>
            <p>شماره تماس ۰۹۰۲۱۰۲۹۲۳۴</p>
            <span>
              <CgPhone />
            </span>
          </div>
          <p>تحلیل رایگان وبسایت شما</p>
        </div>
      </div>
    </div>
  );
}

export default Introduction;

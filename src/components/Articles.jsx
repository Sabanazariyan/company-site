import styles from "./Articles.module.css";
import { MdArrowBackIos } from "react-icons/md";

function Articles() {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <div>
          <img src="./Articles/icon.png" alt="" />
          <p>آخرین مقالات</p>
        </div>
        <div>
          <p>مشاهده همه</p>
          <span>
            <MdArrowBackIos />
          </span>
        </div>
      </div>
      <div className={styles.cards}>
        <div className={styles.card1}>
          <div className={styles.photo1}>
            <img src="./Articles/image1.png" alt="" />
            <div>
              <span>مقاله</span>
              <p>تولید محتوا</p>
            </div>
          </div>
          <div className={styles.text1}>
            <p>لینک شکسته چیست؟</p>
            <span>
              همواره تجربه کاربری یکی از مهم‌ترین مولفه‌های تاثیرگذار در افزایش
              رتبه وب سایت‌ها و مدت زمان ماندگاری کاربران می‌باشد که در...
            </span>
            <div className={styles.date}>
              <div>
                <img src="./Articles/icon1.png" alt="" />
                <p>۲۳ شهریور ۱۴۰۲</p>
              </div>
              <img src="./Articles/icon2.png" alt="" />
            </div>
          </div>
        </div>
        <div className={styles.card2}>
          <div className={styles.photo2}>
            <img src="./Articles/image2.png" alt="" />
            <div>
              <span>مقاله</span>
              <p>سئو</p>
            </div>
          </div>
          <div className={styles.text2}>
            <p>آموزش سئو سایت فروشگاهی</p>{" "}
            <span>
              در محتواهای گذشته به بررسی سئو دسته بندی سایت فروشگاهی پرداختیم.در
              همین راستا در این محتوا قصد داریم به صورت تخصصی...
            </span>
            <div className={styles.date}>
              <div>
                <img src="./Articles/icon1.png" alt="" />
                <p>۱۲ مرداد ۱۴۰۲</p>
              </div>
              <img src="./Articles/icon2.png" alt="" />
            </div>
          </div>
        </div>
        <div className={styles.card3}>
          <div className={styles.photo3}>
            <img src="./Articles/image3.png" alt="" />
            <div>
              <span>مقاله</span>
              <p>ترفند</p>
            </div>
          </div>
          <div className={styles.text3}>
            <p>14 تکنیک افزایش فوری ترافیک سایت</p>
            <span>
              همواره تجربه کاربری یکی از مهم‌ترین مولفه‌های تاثیرگذار در افزایش
              رتبه وب سایت‌ها و مدت زمان ماندگاری کاربران می‌باشد که در...
            </span>
            <div className={styles.date}>
              <div>
                <img src="./Articles/icon1.png" alt="" />
                <p>۱۰ مرداد ۱۴۰۲</p>
              </div>
              <img src="./Articles/icon2.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Articles;

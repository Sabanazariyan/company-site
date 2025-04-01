import styles from "./CustomersReviews.module.css";
import { IoIosArrowBack } from "react-icons/io";

function CustomersReviews() {
  return (
    <div className={styles.container}>
      <img src="./Reviews/line1.png" alt="" />
      <div className={styles.text}>
        <img src="./Reviews/icon.png" alt="" />
        <p>نظرات مشتریان ما</p>
      </div>
      <div className={styles.cards}>
        <div className={styles.card1}>
          <img src="./Reviews/photo1.png" alt="" />
          <div>
            <p>احمدرضا حسینی</p>
            <span>مدیر وبسایت آموزشی</span>
          </div>
          <span>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است.
          </span>
          <img src="./Reviews/stars.png" alt="" />
        </div>
        <div className={styles.card2}>
          <img src="./Reviews/photo1.png" alt="" />
          <div>
            <p>احمدرضا حسینی</p>
            <span>مدیر وبسایت آموزشی</span>
          </div>
          <span>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است.
          </span>
          <img src="./Reviews/stars.png" alt="" />
        </div>
        <div className={styles.card3}>
          <img src="./Reviews/photo2.png" alt="" />
          <div>
            <p>احمدرضا حسینی</p>
            <span>مدیر وبسایت آموزشی</span>
          </div>
          <span>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است.
          </span>
          <img src="./Reviews/stars.png" alt="" />
        </div>
      </div>
      <div className={styles.text2}>
        <p>مشاهده همه</p>
        <span>
          <IoIosArrowBack />
        </span>
      </div>
      <img src="./Reviews/line2.png" alt="" />
    </div>
  );
}

export default CustomersReviews;

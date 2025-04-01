import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.footer}>
        <div className={styles.aboutus}>
          <p>درباره ما</p>
          <span>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و لازم است.
          </span>
          <p>عضویت در خبرنامه</p>
          <input type="text" placeholder="موبایل خود را وارد کنید" />
          <button>عضو شوید</button>
        </div>
        <div className={styles.pages}>
          <p>صفحات کاربردی</p>
          <span>فروشگاه</span>
          <span>پنل کاربری</span>
          <span>سبد خرید</span>
          <span>راهنمای خرید</span>
          <span>نحوه پرداخت</span>
          <span>درباره ما</span>
        </div>
        <div className={styles.contactus}>
          <p>ارتباط با ما</p>
          <span>شیراز - خیابان ملاصدرا - پلاک ۰</span>
          <p>
            {" "}
            ۲۱۳۲ ۳۲۱ <span style={{ color: "#2563EB" }}>۰۲۱</span>
          </p>
            <p>info@dimaland.com</p>
          <div className={styles.icons}>
            <img src="./Footer/icon1.png" alt="" />
            <img src="./Footer/icon2.png" alt="" />
            <img src="./Footer/icon3.png" alt="" />
            <img src="./Footer/icon4.png" alt="" />
            <img src="./Footer/icon5.png" alt="" />
          </div>
        </div>
        <div className={styles.license}>
          <div className={styles.litext}>
            <p>مجوزهای ما</p>
            <span>۱۰۰٪ رسمی</span>
          </div>
          <div className={styles.photo1}>
            <img
              src="./Footer/image2.png"
              alt=""
              style={{ width: "90px", height: "90px" }}
            />
            <img
              src="./Footer/image1.png"
              alt=""
              style={{ width: "90px", height: "90px" }}
            />
          </div>
          <div className={styles.photo2}>
            <img
              src="./Footer/image4.png"
              alt=""
              style={{ width: "90px", height: "90px" }}
            />
            <img
              src="./Footer/image3.png"
              alt=""
              style={{ width: "90px", height: "90px" }}
            />
          </div>
        </div>
      </div>
      <div className={styles.text}>
        <p>
          کلیه حقوق مادی و معنوی متعلق به <span>وبسایت دیمالند</span> می باشد.
        </p>
      </div>
    </div>
  );
}

export default Footer;

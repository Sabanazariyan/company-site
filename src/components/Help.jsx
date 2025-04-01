import styles from "./Help.module.css";

function Help() {
  return (
    <div className={styles.container}>
      <p>
        آژانس دیجیتال مارکتینگ دیمالند، چگونه به توسعه کسب و کار شما کمک می کند؟
      </p>
      <div className={styles.cards}>
        <div className={styles.cards1}>
          <div className={styles.card1}>
            <img src="./Help/2.png" alt="" />
            <p>تدوین استراتژی و مسیر موفقیت</p>
            <span>حرکت به سمت به اهداف با یک ذهنیت درست</span>
          </div>
        </div>
        <div className={styles.cards2}>
          <div className={styles.card2}>
            <img src="./Help/1.png" alt="" />
            <p>ارائه متدهای جدید کسب و کار</p>
            <span>بررسی حوزه فعالیت و ارائه روش‌های نوین</span>
            <img src="./Help/11.png" alt="" />
          </div>
        </div>
        <div className={styles.cards3}>
          <div className={styles.card3}>
            <img src="./Help/3.png" alt="" />
            <p>راهکارهای بهبود تجربه کاربری</p>
            <span>ارائه جدیدترین تکنیک‌های افزایش فروش</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Help;

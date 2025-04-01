import styles from "./Description.module.css";

function Description() {
  return (
    <>
      <div className={styles.container}>
        <img src="./Description/image1.png" alt=""  style={{marginBottom:'80px'}}/>
        <div className={styles.line}></div>
        <div className={styles.text}>
          <p>اولین شرط استفاده از بازاریابی دیجیتال، طراحی سایت است</p>
          <span>
            آژانس دیجیتال مارکتینگ دیمالند با بهره گیری از متخصصین بازاریابی
            دیجیتال که تجربه کار به صورت بازاریابی سنتی رانیز داشته اند، شکل
            گرفت. ما مشتری مداری را سرلوحه خود قرار دادیم تا بتوانیم با ادغام
            این دو مدل بازاریابی به کسب و کارهای کوچک و متوسط کمک کنیم تا به رشد
            و بالندگی سریعی برسند.
          </span>
          <div className={styles.linetwo}></div>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.text2}>
          <p>سئو و بهینه سازی موتورهای جستجوبرای سایت شما</p>
          <span>
            آژانس دیجیتال مارکتینگ دیمالند با بهره گیری از متخصصین بازاریابی
            دیجیتال که تجربه کار به صورت بازاریابی سنتی رانیز داشته اند، شکل
            گرفت. ما مشتری مداری را سرلوحه خود قرار دادیم تا بتوانیم با ادغام
            این دو مدل بازاریابی به کسب و کارهای کوچک و متوسط کمک کنیم تا به رشد
            و بالندگی سریعی برسند.
          </span>
        </div>
        <img src="./Description/image2.png" alt=""  style={{marginTop:'80px' , marginRight:'15px'}} />
      </div>
    </>
  );
}

export default Description;

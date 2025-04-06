import styles from "./Services.module.css";

function Services() {
  return (
    <div>
      <div className={styles.container}>
      <div className={styles.photo}>
          <p>ما در دیمالند چه خدماتی ارائه می دهیم؟</p>
          <img src="./Services/image.png" alt="" />
          <div className={styles.line}></div>
        </div>
        <div className={styles.text}>
          <div className={styles.service}>
            <img
              src="./Services/seo.png"
              alt=""
              style={{ width: "48px", height: "35px" }}
            />
            <p style={{ paddingTop: "5px" }}>خدمات سئو</p>
          </div>
          <div className={styles.seo}>
            <p>تدوین استراتژی سئو</p>
            <p style={{fontSize:'1rem' , color:'#344456' , fontWeight:'400'}}>
              ما از طریق سالها تجربه در طراحی سایت، سایتهایی میسازیم که بسیار
              کاربر پسند بوده و سئو محور نیز باشد.
            </p>
            <img src="./Services/targer.png" alt="" />
            <span>خدمات طراحی سایت</span>
            <div className={styles.linefirst}></div>
            <div className={styles.linesecond}></div>
          </div>
          <div className={styles.service}>
            <img
              src="./Services/service.png"
              alt=""
              style={{ width: "56px", height: "44px" }}
            />
            <p style={{ paddingTop: "10px" }}>طراحی سایت</p>
          </div>
          <div className={styles.service}>
            <img
              src="./Services/support_concultant.png"
              alt=""
              style={{ width: "40px", height: "47px" }}
            />
            <p style={{ paddingTop: "15px" }}>مشاوره سئو</p>
          </div>
          <div className={styles.service}>
            <img
              src="./Services/copywriters_articles.png"
              alt=""
              style={{ width: "48px", height: "62px" }}
            />
            <p style={{ paddingTop: "25px" }}>آنالیز وبسایت</p>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Services;

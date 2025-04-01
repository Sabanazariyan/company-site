import styles from "./Contact.module.css";
function Contact() {
  return (
    <div className={styles.container}>
      <img src="./Contact/image1.png" alt="" />
      <div className={styles.text}>
        <p>دریافت مشاوره رایگان</p>
        <span>
          همین الان در جهت شروع یا بهبود درآمد اینترنتی خودتان اقدام نمایید.
        </span>
        <div>
          <input type="text" placeholder="لطفا شماره موبایل خود را وارد کنید" />
          <button>ارسال</button>
        </div>
      </div>
    </div>
  );
}

export default Contact;

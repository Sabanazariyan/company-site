import styles from "./Header.module.css";

import { LuPhoneCall } from "react-icons/lu";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";

function Header() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.text}>
          <p>
            ! برای دیدن آخرین اخبار و به‌روزرسانی‌های محصولات ما، به کانال
            تلگرام دیمالند بپیوندید
          </p>
          <span>پیشنهاد ویژه</span>
        </div>
      </div>
      <div className={styles.header}>
        <div className={styles.phone}>
          <div>
            <span>
              <LuPhoneCall />
            </span>
            <p>۰۹۲۷ ۵۰۱۷۱۶۱</p>
          </div>
          <span>
            <CiSearch />
          </span>
        </div>
        <div className={styles.features}>
          <ul>
            <li>تماس با ما</li>
            <li>بلاگ</li>
            <li>
              <div>
                <span><IoIosArrowDown /></span>
                خدمات
              </div>
            </li>
            <li className={styles.selected}>صفحه اصلی</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;

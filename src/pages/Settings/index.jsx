import styles from "./Settings.module.scss";
import EditIcon from "@assets/icons/edit.svg";
import VisibleIcon from "@assets/icons/visible_toggle.svg";
import { Tooltip } from "antd";
import { useState } from "react";

const SettingsPage = () => {
  const [passwords, setPasswords] = useState({
    old_password: "",
    new_password: "",
    confirm_password: "",
  });
  const [passNotMatch, setPassNotMatch] = useState(false);
  const [passNotDemanded, setPassNotDemanded] = useState(false);
  const [successfull, setSuccessfull] = useState(false);
  function validatePassword(password) {
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    return regex.test(password);
  }
console.log(validatePassword("12341234"))
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const { old_password, new_password, confirm_password } = passwords;
    if (new_password !== confirm_password) {
      setPassNotMatch(true);
      setPassNotDemanded(false);
      setSuccessfull(false);
    } else if (!validatePassword(new_password)) {
      setPassNotDemanded(true);
      setPassNotMatch(false);
      setSuccessfull(false);
    } else {
      setSuccessfull(true);
      setPassNotDemanded(false);
      setPassNotMatch(false);
    }
  };
  return (
    <div className={styles.settings}>
      <h1>Настройки аккаунта</h1>
      <form action="" onSubmit={(e) => handleFormSubmit(e)}>
        <div>
          <label htmlFor="email">E-mail</label>
          <div className={styles.input_wrapper}>
            <input type="email" id="email" />
          </div>
        </div>
        <div>
          <label htmlFor="contact_number">Контактный номер</label>
          <div className={styles.input_wrapper}>
            <input type="tel" name="" id="contact_number" />
            <img src={EditIcon} alt="" />
          </div>
        </div>
        <div>
          <label htmlFor="name">Имя</label>
          <div className={styles.input_wrapper}>
            <input type="text" name="" id="name" />
            <img src={EditIcon} alt="" />
          </div>
        </div>
        <div>
          <label htmlFor="old_password">
            Старый пароль{" "}
            <Tooltip
              placement="rightTop"
              title="Пароль должен содержать минимум 8 символов. Должна быть одна заглавная и одна строчная буква, а также как минимум одна цифра."
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M8 1C4.13438 1 1 4.13438 1 8C1 11.8656 4.13438 15 8 15C11.8656 15 15 11.8656 15 8C15 4.13438 11.8656 1 8 1ZM8 13.8125C4.79063 13.8125 2.1875 11.2094 2.1875 8C2.1875 4.79063 4.79063 2.1875 8 2.1875C11.2094 2.1875 13.8125 4.79063 13.8125 8C13.8125 11.2094 11.2094 13.8125 8 13.8125Z"
                  fill="#A9A9B9"
                />
                <path
                  d="M9.74375 4.94844C9.275 4.5375 8.65625 4.3125 8 4.3125C7.34375 4.3125 6.725 4.53906 6.25625 4.94844C5.76875 5.375 5.5 5.94844 5.5 6.5625V6.68125C5.5 6.75 5.55625 6.80625 5.625 6.80625H6.375C6.44375 6.80625 6.5 6.75 6.5 6.68125V6.5625C6.5 5.87344 7.17344 5.3125 8 5.3125C8.82656 5.3125 9.5 5.87344 9.5 6.5625C9.5 7.04844 9.15625 7.49375 8.62344 7.69844C8.29219 7.825 8.01094 8.04687 7.80937 8.3375C7.60469 8.63437 7.49844 8.99062 7.49844 9.35156V9.6875C7.49844 9.75625 7.55469 9.8125 7.62344 9.8125H8.37344C8.44219 9.8125 8.49844 9.75625 8.49844 9.6875V9.33281C8.49925 9.18113 8.54574 9.03321 8.63187 8.90834C8.71799 8.78347 8.83975 8.68746 8.98125 8.63281C9.90312 8.27813 10.4984 7.46563 10.4984 6.5625C10.5 5.94844 10.2312 5.375 9.74375 4.94844ZM7.375 11.4375C7.375 11.6033 7.44085 11.7622 7.55806 11.8794C7.67527 11.9967 7.83424 12.0625 8 12.0625C8.16576 12.0625 8.32473 11.9967 8.44194 11.8794C8.55915 11.7622 8.625 11.6033 8.625 11.4375C8.625 11.2717 8.55915 11.1128 8.44194 10.9956C8.32473 10.8783 8.16576 10.8125 8 10.8125C7.83424 10.8125 7.67527 10.8783 7.55806 10.9956C7.44085 11.1128 7.375 11.2717 7.375 11.4375Z"
                  fill="#A9A9B9"
                />
              </svg>
            </Tooltip>
          </label>
          <div className={styles.input_wrapper}>
            <input
              onChange={(e) =>
                setPasswords({ ...passwords, old_password: e.target.value })
              }
              type="password"
              name=""
              id="old_password"
            />
            <img src={VisibleIcon} alt="" />
          </div>
        </div>
        <div>
          <label htmlFor="new_password">
            Новый пароль{" "}
            <Tooltip
              placement="rightTop"
              title="Пароль должен содержать минимум 8 символов. Должна быть одна заглавная и одна строчная буква, а также как минимум одна цифра."
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M8 1C4.13438 1 1 4.13438 1 8C1 11.8656 4.13438 15 8 15C11.8656 15 15 11.8656 15 8C15 4.13438 11.8656 1 8 1ZM8 13.8125C4.79063 13.8125 2.1875 11.2094 2.1875 8C2.1875 4.79063 4.79063 2.1875 8 2.1875C11.2094 2.1875 13.8125 4.79063 13.8125 8C13.8125 11.2094 11.2094 13.8125 8 13.8125Z"
                  fill="#A9A9B9"
                />
                <path
                  d="M9.74375 4.94844C9.275 4.5375 8.65625 4.3125 8 4.3125C7.34375 4.3125 6.725 4.53906 6.25625 4.94844C5.76875 5.375 5.5 5.94844 5.5 6.5625V6.68125C5.5 6.75 5.55625 6.80625 5.625 6.80625H6.375C6.44375 6.80625 6.5 6.75 6.5 6.68125V6.5625C6.5 5.87344 7.17344 5.3125 8 5.3125C8.82656 5.3125 9.5 5.87344 9.5 6.5625C9.5 7.04844 9.15625 7.49375 8.62344 7.69844C8.29219 7.825 8.01094 8.04687 7.80937 8.3375C7.60469 8.63437 7.49844 8.99062 7.49844 9.35156V9.6875C7.49844 9.75625 7.55469 9.8125 7.62344 9.8125H8.37344C8.44219 9.8125 8.49844 9.75625 8.49844 9.6875V9.33281C8.49925 9.18113 8.54574 9.03321 8.63187 8.90834C8.71799 8.78347 8.83975 8.68746 8.98125 8.63281C9.90312 8.27813 10.4984 7.46563 10.4984 6.5625C10.5 5.94844 10.2312 5.375 9.74375 4.94844ZM7.375 11.4375C7.375 11.6033 7.44085 11.7622 7.55806 11.8794C7.67527 11.9967 7.83424 12.0625 8 12.0625C8.16576 12.0625 8.32473 11.9967 8.44194 11.8794C8.55915 11.7622 8.625 11.6033 8.625 11.4375C8.625 11.2717 8.55915 11.1128 8.44194 10.9956C8.32473 10.8783 8.16576 10.8125 8 10.8125C7.83424 10.8125 7.67527 10.8783 7.55806 10.9956C7.44085 11.1128 7.375 11.2717 7.375 11.4375Z"
                  fill="#A9A9B9"
                />
              </svg>
            </Tooltip>
          </label>
          <div className={styles.input_wrapper}>
            <input
              onChange={(e) =>
                setPasswords({ ...passwords, new_password: e.target.value })
              }
              type="password"
              name=""
              id="new_password"
            />
            <img src={VisibleIcon} alt="" />
          </div>
          <p className={passNotDemanded ? styles.visible : ""}>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <circle cx="16" cy="16" r="16" fill="#CC0A2A" />
                <path
                  d="M8 8L24 24M8 24L24 8"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </span>{" "}
            Длина не менее 8 символов
          </p>
          <p className={passNotDemanded ? styles.visible : ""}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <circle cx="16" cy="16" r="16" fill="#CC0A2A" />
              <path
                d="M8 8L24 24M8 24L24 8"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            Содержать заглавные и строчные буквы (например, AbCd)
          </p>
          <p className={passNotDemanded ? styles.visible : ""}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <circle cx="16" cy="16" r="16" fill="#CC0A2A" />
              <path
                d="M8 8L24 24M8 24L24 8"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            Включать цифры и специальные символы (например, !@#$%^&*)
          </p>
        </div>
        <div>
          <label htmlFor="new_password_confirm">
            Введите новый пароль ещё раз{" "}
            <Tooltip
              placement="rightTop"
              title="Пароль должен содержать минимум 8 символов. Должна быть одна заглавная и одна строчная буква, а также как минимум одна цифра."
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M8 1C4.13438 1 1 4.13438 1 8C1 11.8656 4.13438 15 8 15C11.8656 15 15 11.8656 15 8C15 4.13438 11.8656 1 8 1ZM8 13.8125C4.79063 13.8125 2.1875 11.2094 2.1875 8C2.1875 4.79063 4.79063 2.1875 8 2.1875C11.2094 2.1875 13.8125 4.79063 13.8125 8C13.8125 11.2094 11.2094 13.8125 8 13.8125Z"
                  fill="#A9A9B9"
                />
                <path
                  d="M9.74375 4.94844C9.275 4.5375 8.65625 4.3125 8 4.3125C7.34375 4.3125 6.725 4.53906 6.25625 4.94844C5.76875 5.375 5.5 5.94844 5.5 6.5625V6.68125C5.5 6.75 5.55625 6.80625 5.625 6.80625H6.375C6.44375 6.80625 6.5 6.75 6.5 6.68125V6.5625C6.5 5.87344 7.17344 5.3125 8 5.3125C8.82656 5.3125 9.5 5.87344 9.5 6.5625C9.5 7.04844 9.15625 7.49375 8.62344 7.69844C8.29219 7.825 8.01094 8.04687 7.80937 8.3375C7.60469 8.63437 7.49844 8.99062 7.49844 9.35156V9.6875C7.49844 9.75625 7.55469 9.8125 7.62344 9.8125H8.37344C8.44219 9.8125 8.49844 9.75625 8.49844 9.6875V9.33281C8.49925 9.18113 8.54574 9.03321 8.63187 8.90834C8.71799 8.78347 8.83975 8.68746 8.98125 8.63281C9.90312 8.27813 10.4984 7.46563 10.4984 6.5625C10.5 5.94844 10.2312 5.375 9.74375 4.94844ZM7.375 11.4375C7.375 11.6033 7.44085 11.7622 7.55806 11.8794C7.67527 11.9967 7.83424 12.0625 8 12.0625C8.16576 12.0625 8.32473 11.9967 8.44194 11.8794C8.55915 11.7622 8.625 11.6033 8.625 11.4375C8.625 11.2717 8.55915 11.1128 8.44194 10.9956C8.32473 10.8783 8.16576 10.8125 8 10.8125C7.83424 10.8125 7.67527 10.8783 7.55806 10.9956C7.44085 11.1128 7.375 11.2717 7.375 11.4375Z"
                  fill="#A9A9B9"
                />
              </svg>
            </Tooltip>
          </label>
          <div className={styles.input_wrapper}>
            <input
              onChange={(e) =>
                setPasswords({ ...passwords, confirm_password: e.target.value })
              }
              type="password"
              name=""
              id="new_password_confirm"
            />
            <img src={VisibleIcon} alt="" />
          </div>
        </div>
        <span
          className={`${styles.success_bottom} ${
            successfull ? styles.visible : ""
          }`}
        >
          Данные сохранены
        </span>
        <span
          className={`${styles.unsuccess_bottom} ${
            passNotMatch ? styles.visible : ""
          }`}
        >
          Пароли не совпадвют
        </span>
        <span
          className={`${styles.pass_notdemand} ${
            passNotDemanded ? styles.visible : ""
          }`}
        >
          Пароль не соответствует требованиям
        </span>
        <button type="submit">Сохранить изменения</button>
        <button>Удалить аккаунт</button>
      </form>
    </div>
  );
};

export default SettingsPage;

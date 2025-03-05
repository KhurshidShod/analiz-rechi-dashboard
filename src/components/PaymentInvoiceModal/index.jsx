import { toast } from "react-toastify";
import styles from "./PaymentInvoiceModal.module.scss";

const PaymentInvoiceModal = ({ isOpen, setIsOpen, selectedTariff }) => {
  return (
    <div
      style={{
        display: isOpen ? "flex" : "none",
      }}
      className={styles.invoice}
    >
      <div className={styles.invoice_modal}>
        <div className={styles.invoice_modal_header}>
          <h2>Запрос счёта на оплату</h2>
          <svg
            onClick={() => setIsOpen(false)}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
          >
            <path
              d="M3 4.5L20 21.5M20 4.5L3 21.5"
              stroke="#213366"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </div>
        <p>Укажите данные, и мы вышлем счёт на оплату</p>
        <form action="" onSubmit={(e) => {
            e.preventDefault();
            setIsOpen(false);
            toast.success("Счёт успешно отправлен");
        }}>
          <div className={styles.form_group}>
            <label htmlFor="">Тариф</label>
            <input type="text" disabled value={selectedTariff} name="" id="" />
          </div>
          <div className={styles.form_group}>
            <label htmlFor="">Контактный email</label>
            <input
              type="text"
              defaultValue="newemail@gmail.com"
              name=""
              id=""
            />
          </div>
          <div className={styles.form_group}>
            <label htmlFor="">Название компании</label>
            <input type="text" name="" id="" />
          </div>
          <div className={styles.form_group}>
            <label htmlFor="">ИНН</label>
            <input type="text" name="" id="" />
          </div>
          <div className={styles.form_group}>
            <label htmlFor="">Комментарий</label>
            <textarea name="" id=""></textarea>
          </div>
          <button>Отправить запрос</button>
        </form>
      </div>
    </div>
  );
};

export default PaymentInvoiceModal;

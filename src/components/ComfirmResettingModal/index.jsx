import { toast } from "react-toastify";
import styles from "./ConfirmResettingModal.module.scss";

const ConfirmResettingModal = ({ isOpen, setOpen }) => {
  return (
    <div className={`${styles.confirmreset} ${isOpen ? styles.open : ""}`}>
      <div className={styles.confirmreset_modal}>
        <svg
        onClick={() => setOpen(false)}
          className={styles.confirmreset_modal_close}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M3 4L20 21M20 4L3 21"
            stroke="#213366"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
        <h1>Подтверждение сброса</h1>
        <p>
        Вы уверены, что хотите сбросить настройки? Все изменения будут утеряны
        </p>
        <button
          onClick={() => {
            toast.success("Данные успешно сброшены");
            setOpen(false);
          }}
        >
          Подтвердить
        </button>
      </div>
    </div>
  );
};

export default ConfirmResettingModal;

import styles from "./ResettingErrorModal.module.scss";

const ResettingErrorModal = ({ isOpen, setOpen }) => {
  return (
    <div className={`${styles.resettingerror} ${isOpen ? styles.open : ""}`}>
      <div className={styles.resettingerror_modal}>
        <div className={styles.resettingerror_modal_close}>
          <svg
            onClick={() => setOpen(false)}
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="19"
            viewBox="0 0 20 19"
            fill="none"
          >
            <path
              d="M1.5 1L18.5 18M18.5 1L1.5 18"
              stroke="#213366"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </div>
        <svg
          className={styles.resettingerror_modal_icon}
          xmlns="http://www.w3.org/2000/svg"
          width="81"
          height="80"
          viewBox="0 0 81 80"
          fill="none"
        >
          <circle cx="40.5" cy="40" r="40" fill="#CC0A2A" />
          <path
            d="M24.5 24L56.5 56M24.5 56L56.5 24"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
        <h3>Ошибка сброса данных</h3>
        <p>
        Не удалось сбросить данные. Попробуйте снова или обратитесь в поддержку
        </p>
        <button>Повторить попытку</button>
      </div>
    </div>
  );
};

export default ResettingErrorModal;

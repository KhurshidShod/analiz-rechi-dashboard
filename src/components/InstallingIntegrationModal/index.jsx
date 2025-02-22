import styles from "./InstallingIntegrationModal.module.scss";
import CloseIcon from "@assets/icons/closetab.svg";
const InstallingIntegrationModal = ({isOpen, openedIntegration, setModalOpen}) => {
  return (
    <div className={`${styles.installing_modal} ${isOpen ? styles.opened : ""}`}>
      <div className={styles.installing_modal_tab}>
        <img src={CloseIcon} alt="" onClick={() => setModalOpen(false)} />
        <form action="">
          <h3>{openedIntegration} установить</h3>
          <div>
            <label htmlFor="email">Почта</label>
            <input type="email" name="" id="email" />
          </div>
          <div>
            <label htmlFor="number">Номер учетной записи</label>
            <input type="text" name="" id="number" />
          </div>
          <button>Подключить</button>
        </form>
      </div>
    </div>
  );
};

export default InstallingIntegrationModal;

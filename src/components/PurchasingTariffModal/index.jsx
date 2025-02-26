import { toast } from "react-toastify";
import styles from "./PurchasingTariffModal.module.scss";
import CloseIcon from "@assets/icons/closetab.svg";

const PurchasingTariffModal = ({ isOpened, setModalOpen }) => {
  return (
    <div
      className={`${styles.purchasing_modal} ${isOpened ? styles.opened : ""}`}
    >
      <div className={styles.purchasing_modal_tab}>
        <img
          src={CloseIcon}
          alt="close_modal_icon"
          onClick={() => setModalOpen(false)}
        />
        <h1>Выберите способ оплаты</h1>
        <button
          onClick={() => {
            toast.success("Оплата прошла успешно!");
            setModalOpen(false);
          }}
        >
          Оплата картой
        </button>
        <button>Оплата по счету</button>
      </div>
    </div>
  );
};

export default PurchasingTariffModal;

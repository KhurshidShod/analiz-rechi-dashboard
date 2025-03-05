import { toast } from "react-toastify";
import styles from "./ConfirmRemovingEmployeeModal.module.scss";

const ConfirmRemovingEmployeeModal = ({
  isConfirmModalOpen,
  setIsconfirmModalOpen,
}) => {
  return (
    <div
      className={`${styles.confirmremove} ${
        isConfirmModalOpen ? styles.open : ""
      }`}
    >
      <div className={styles.confirmremove_modal}>
        <svg
        onClick={() => setIsconfirmModalOpen(false)}
          className={styles.confirmremove_modal_close}
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
        <h1>Подтверждение удаления</h1>
        <p>
          Вы собираетесь удалить запись сотрудника [ИмяФамилия]. Это действие
          необратимо. Подтвердить удаление?
        </p>
        <button onClick={() => {
          toast.success("Запись успешно удалена");
          setIsconfirmModalOpen(false);
        }}>Подтвердить</button>
      </div>
    </div>
  );
};

export default ConfirmRemovingEmployeeModal;

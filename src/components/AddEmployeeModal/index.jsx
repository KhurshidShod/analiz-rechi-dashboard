import { Switch } from "antd";
import styles from "./AddEmployeeModal.module.scss";
import { toast } from "react-toastify";

const AddEmployeeModal = ({
  isAddEmployeeModalOpen,
  setIsAddEmployeeModalOpen,
  editingEmployee = null,
}) => {
  return (
    <div
      className={`${styles.addEmployee} ${
        isAddEmployeeModalOpen ? styles.open : ""
      }`}
    >
      <div className={styles.addEmployee_modal}>
        <div className={styles.addEmployee_modal_header}>
          <h2>Добавить сотрудника</h2>
          <svg
            onClick={() => setIsAddEmployeeModalOpen(false)}
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
        </div>
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
            setIsAddEmployeeModalOpen(false);
            toast.success("Настройки обновлены");
            toast.error("Ошибка: сотрудник с таким именем уже существует");
          }}
        >
          <div>
            <label htmlFor="">Позиция</label>
            <input
              defaultValue={
                editingEmployee !== null ? editingEmployee.position : ""
              }
              type="text"
              placeholder="Менеджер"
              name=""
              id=""
            />
          </div>
          <div>
            <label htmlFor="">Имя</label>
            <input
              defaultValue={
                editingEmployee !== null ? editingEmployee.name : ""
              }
              type="text"
              placeholder="Александра Беловская "
              name=""
              id=""
            />
          </div>
          <div>
            <label htmlFor="">Почта</label>
            <input
              defaultValue={
                editingEmployee !== null ? editingEmployee.email : ""
              }
              type="email"
              placeholder="alexandrabelovskaya@gmail.com"
              name=""
              id=""
            />
          </div>
          <div>
            <label htmlFor="">Контактный номер</label>
            <input
              defaultValue={
                editingEmployee !== null ? editingEmployee.phone : ""
              }
              type="text"
              placeholder="+7 (961) 999-99-99"
              name=""
              id=""
            />
          </div>
          <div className={styles.processing_records}>
            <h3>Обработка записей</h3>
            <Switch defaultChecked />
            <p>После включения вы сможете обрабатывать записи сотрудника</p>
          </div>
          <button type="submit">Добавить</button>
        </form>
      </div>
    </div>
  );
};

export default AddEmployeeModal;

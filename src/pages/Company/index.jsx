import { useRef, useState } from "react";
import styles from "./Company.module.scss";
import { Select, Switch, Table, Tooltip } from "antd";
import AddEmployeeModal from "../../components/AddEmployeeModal";
import { toast } from "react-toastify";
import ConfirmRemovingEmployeeModal from "../../components/ConfirmRemovingEmployeeModal";
import EditingSettingsErrorModal from "../../components/EditingSettingsErrorModal";
import ConfirmResettingModal from "../../components/ComfirmResettingModal";

const CompanyPage = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [activeInput, setActiveInput] = useState(null);
  const [isAddEmployeeModalOpen, setIsAddEmployeeModalOpen] = useState(false);
  const [editingEmployee, setEditingEmployee] = useState(null);
  const [
    isConfirmRemoveEmployeeModalOpen,
    setIsConfirmRemoveEmployeeModalOpen,
  ] = useState(false);
  const [isEditingSettingsErrorModalOpen, setIsEditingSettingsErrorModalOpen] =
    useState(false);
  const [isResettingComfirmModalOpen, setIsResettingComfirmModalOpen] =
    useState(false);
  const ruleOptions = [
    {
      value: 1,
      label: "возражения",
    },
    {
      value: 2,
      label: "дорого",
    },
    {
      value: 3,
      label: "подумаю",
    },
    {
      value: 4,
      label: "не интересно",
    },
    {
      value: 5,
      label: "перезвоните",
    },
    {
      value: 6,
      label: "возражения",
    },
    {
      value: 7,
      labe: "возражения",
    },
  ];

  const [rules, setRules] = useState([
    { id: 1, who: "manager", what: ["Установление контакта"] },
    { id: 2, who: "client", what: ["Словарь: возражения"] },
    {
      id: 3,
      who: "manager",
      what: ["Установление контакта", "Доброе утро", "Приветствую"],
    },
    {
      id: 4,
      who: "client",
      what: ["Установление контакта", "Доброе утро", "Приветствую"],
    },
  ]);
  const updateRule = (id, key, value) => {
    setRules(
      rules.map((rule) => (rule.id === id ? { ...rule, [key]: value } : rule))
    );
  };

  const handleChange = () => {};

  const firstInputRef = useRef(null);
  const secondInputRef = useRef(null);

  const columnsTable = [
    {
      title: "id",
      dataIndex: "id",
    },
    {
      title: "Имя",
      dataIndex: "name",
    },
    {
      title: "Позиция",
      dataIndex: "position",
    },
    {
      title: "email",
      dataIndex: "email",
    },
    {
      title: "Номер тел.",
      dataIndex: "phone",
    },
    {
      title: "Отдел/Таблица",
      dataIndex: "section",
    },
    {
      title: "Обработка записей",
      dataIndex: "processingRecords",
      render: (text) => (
        <Switch
          onChange={(e) => toast.success("Настройки обновлены")}
          defaultChecked={true}
        />
      ),
    },
    {
      title: "Действия",
      dataIndex: "action",
      render: (text) => (
        <div className={styles.actions}>
          <span
            onClick={() => {
              setEditingEmployee({
                position: "---",
                name: "Александра Беловская ",
                email: "alexandrabelovskaya@gmail.com",
                phone: "---",
                section: "Колл-центр",
              });
              setIsAddEmployeeModalOpen(true);
            }}
          >
            {text[0]}
          </span>
          <span onClick={() => setIsConfirmRemoveEmployeeModalOpen(true)}>
            {text[1]}
          </span>
        </div>
      ),
    },
  ];
  const dataTable = Array.from({ length: 32 }).map((_, i) => ({
    key: i,
    id: 1578,
    name: "Александра Беловская",
    position: "-",
    email: "test@mail.ru",
    phone: "-",
    section: "Коллцентр",
    processingRecords: [true, false][Math.floor(Math.random() * 2)],
    action: [
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="17"
        height="17"
        viewBox="0 0 17 17"
        fill="none"
      >
        <path
          d="M15.5 15.6904H1.5M14.6289 4.52345L7.72222 11.5666L4.61111 12.4999L5.52111 9.3093L12.4278 2.22624C12.7199 1.90195 13.1256 1.70975 13.5557 1.69181C13.9858 1.67386 14.4054 1.83164 14.7222 2.13052C14.8725 2.29224 14.9896 2.48328 15.0664 2.69229C15.1433 2.90131 15.1784 3.12404 15.1697 3.34725C15.161 3.57047 15.1087 3.78961 15.0157 3.99166C14.9228 4.19371 14.7913 4.37456 14.6289 4.52345Z"
          stroke="#C4C4D1"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>,
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 25 25"
        fill="none"
      >
        <path
          opacity="0.4"
          d="M6.5 6.69043L17.5 17.6904M17.5 6.69043L6.5 17.6904"
          stroke="#C4C4D1"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>,
    ],
  }));

  return (
    <div className={styles.company}>
      <ConfirmResettingModal
        isOpen={isResettingComfirmModalOpen}
        setOpen={setIsResettingComfirmModalOpen}
      />
      <EditingSettingsErrorModal
        isOpen={isEditingSettingsErrorModalOpen}
        setOpen={setIsEditingSettingsErrorModalOpen}
      />
      <ConfirmRemovingEmployeeModal
        isConfirmModalOpen={isConfirmRemoveEmployeeModalOpen}
        setIsconfirmModalOpen={setIsConfirmRemoveEmployeeModalOpen}
      />
      <AddEmployeeModal
        editingEmployee={editingEmployee}
        isAddEmployeeModalOpen={isAddEmployeeModalOpen}
        setIsAddEmployeeModalOpen={setIsAddEmployeeModalOpen}
      />
      <h1>Компания</h1>
      <ul className={styles.company_tabs}>
        <li
          onClick={() => setActiveTab(1)}
          className={activeTab === 1 ? styles.active : ""}
        >
          <button>Настройки компании</button>
        </li>
        <li
          onClick={() => setActiveTab(2)}
          className={activeTab === 2 ? styles.active : ""}
        >
          <button>Настройки словарей</button>
        </li>
        <li
          onClick={() => setActiveTab(3)}
          className={activeTab === 3 ? styles.active : ""}
        >
          <button>Правила тегирования</button>
        </li>
        <li
          onClick={() => setActiveTab(4)}
          className={activeTab === 4 ? styles.active : ""}
        >
          <button>Настройки чек-листа</button>
        </li>
      </ul>
      <div className={styles.company_contents}>
        <div
          className={`${styles.content} ${
            activeTab === 1 ? styles.active : ""
          }`}
        >
          <form className={`${styles.content_filter}`}>
            <div>
              <label htmlFor="">Имя компании</label>
              <div>
                <input
                  ref={firstInputRef}
                  disabled={activeInput !== 1}
                  type="text"
                  name=""
                  defaultValue="Алиди"
                  id=""
                />
                <svg
                  onClick={() => {
                    activeInput === 1
                      ? setActiveInput(null)
                      : setActiveInput(1);
                    setTimeout(() => {
                      if (firstInputRef.current) firstInputRef.current.focus();
                    }, 0);
                  }}
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <g opacity="0.4">
                    <path
                      d="M21 21H3M19.88 6.99998L11 15.83L7 17L8.17 13L17.05 4.11998C17.4256 3.71343 17.9471 3.47247 18.5002 3.44997C19.0532 3.42747 19.5926 3.62528 20 3.99998C20.1932 4.20272 20.3437 4.44223 20.4426 4.70427C20.5414 4.96632 20.5866 5.24556 20.5754 5.5254C20.5642 5.80524 20.4968 6.07997 20.3774 6.33329C20.2579 6.5866 20.0888 6.81332 19.88 6.99998Z"
                      stroke="#C4C4D1"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </svg>
              </div>
            </div>
            <div>
              <label htmlFor="">Адрес компании</label>
              <div>
                <input
                  disabled={activeInput !== 2}
                  type="text"
                  defaultValue="​СНТ Простоквашино, д. Богдано"
                  name=""
                  id=""
                  ref={secondInputRef}
                />
                <svg
                  onClick={() => {
                    activeInput === 2
                      ? setActiveInput(null)
                      : setActiveInput(2);
                    setTimeout(() => {
                      if (secondInputRef.current)
                        secondInputRef.current.focus();
                    }, 0);
                  }}
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <g opacity="0.4">
                    <path
                      d="M21 21H3M19.88 6.99998L11 15.83L7 17L8.17 13L17.05 4.11998C17.4256 3.71343 17.9471 3.47247 18.5002 3.44997C19.0532 3.42747 19.5926 3.62528 20 3.99998C20.1932 4.20272 20.3437 4.44223 20.4426 4.70427C20.5414 4.96632 20.5866 5.24556 20.5754 5.5254C20.5642 5.80524 20.4968 6.07997 20.3774 6.33329C20.2579 6.5866 20.0888 6.81332 19.88 6.99998Z"
                      stroke="#C4C4D1"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </svg>
              </div>
            </div>
          </form>
          <h1>Таблица сотрудников. Лимит обработки: 30</h1>
          <button
            onClick={() => setIsAddEmployeeModalOpen(true)}
            className={styles.content_addemployee}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
            >
              <path
                d="M1 7H12.778M6.88901 1.11099V12.889"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>{" "}
            Добавить сотрудника
          </button>
          <div className={styles.content_search}>
            <input
              placeholder="Поиск  по имени или фамилии "
              type="text"
              name=""
              id=""
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <g opacity="0.4">
                <path
                  d="M21.7099 20.2904L17.9999 16.6104C19.44 14.8148 20.1374 12.5357 19.9487 10.2417C19.76 7.94769 18.6996 5.81318 16.9854 4.27704C15.2713 2.7409 13.0337 1.9199 10.7328 1.98286C8.43194 2.04582 6.24263 2.98795 4.61505 4.61553C2.98747 6.24311 2.04534 8.43243 1.98237 10.7333C1.91941 13.0342 2.74041 15.2718 4.27655 16.9859C5.81269 18.7001 7.94721 19.7605 10.2412 19.9492C12.5352 20.1379 14.8143 19.4405 16.6099 18.0004L20.2899 21.6804C20.3829 21.7741 20.4935 21.8485 20.6153 21.8993C20.7372 21.9501 20.8679 21.9762 20.9999 21.9762C21.1319 21.9762 21.2626 21.9501 21.3845 21.8993C21.5063 21.8485 21.6169 21.7741 21.7099 21.6804C21.8901 21.4939 21.9909 21.2447 21.9909 20.9854C21.9909 20.7261 21.8901 20.4769 21.7099 20.2904ZM10.9999 18.0004C9.61544 18.0004 8.26206 17.5899 7.11091 16.8207C5.95977 16.0515 5.06256 14.9583 4.53275 13.6792C4.00293 12.4001 3.86431 10.9926 4.13441 9.63476C4.4045 8.27689 5.07119 7.02961 6.05016 6.05065C7.02912 5.07168 8.27641 4.40499 9.63427 4.1349C10.9921 3.8648 12.3996 4.00342 13.6787 4.53324C14.9578 5.06305 16.051 5.96026 16.8202 7.1114C17.5894 8.26255 17.9999 9.61592 17.9999 11.0004C17.9999 12.8569 17.2624 14.6374 15.9497 15.9501C14.6369 17.2629 12.8564 18.0004 10.9999 18.0004Z"
                  fill="#A9A9B9"
                />
              </g>
            </svg>
          </div>
          <div className={styles.content_table}>
            <Table
              scroll={{ x: true }}
              dataSource={dataTable}
              columns={columnsTable}
            />
          </div>
        </div>
        <div
          className={`${styles.content} ${
            activeTab === 2 ? styles.active : ""
          }`}
        >
          <div className={styles.content_dictionary}>
            <div className={styles.content_dictionary_all}>
              <h1>Все словари</h1>
              <div className={styles.content_dictionary_all_search}>
                <input placeholder="Поиск " type="text" name="" id="" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <g opacity="0.4">
                    <path
                      d="M21.7099 20.2904L17.9999 16.6104C19.44 14.8148 20.1374 12.5357 19.9487 10.2417C19.76 7.94769 18.6996 5.81318 16.9854 4.27704C15.2713 2.7409 13.0337 1.9199 10.7328 1.98286C8.43194 2.04582 6.24263 2.98795 4.61505 4.61553C2.98747 6.24311 2.04534 8.43243 1.98237 10.7333C1.91941 13.0342 2.74041 15.2718 4.27655 16.9859C5.81269 18.7001 7.94721 19.7605 10.2412 19.9492C12.5352 20.1379 14.8143 19.4405 16.6099 18.0004L20.2899 21.6804C20.3829 21.7741 20.4935 21.8485 20.6153 21.8993C20.7372 21.9501 20.8679 21.9762 20.9999 21.9762C21.1319 21.9762 21.2626 21.9501 21.3845 21.8993C21.5063 21.8485 21.6169 21.7741 21.7099 21.6804C21.8901 21.4939 21.9909 21.2447 21.9909 20.9854C21.9909 20.7261 21.8901 20.4769 21.7099 20.2904ZM10.9999 18.0004C9.61544 18.0004 8.26206 17.5899 7.11091 16.8207C5.95977 16.0515 5.06256 14.9583 4.53275 13.6792C4.00293 12.4001 3.86431 10.9926 4.13441 9.63476C4.4045 8.27689 5.07119 7.02961 6.05016 6.05065C7.02912 5.07168 8.27641 4.40499 9.63427 4.1349C10.9921 3.8648 12.3996 4.00342 13.6787 4.53324C14.9578 5.06305 16.051 5.96026 16.8202 7.1114C17.5894 8.26255 17.9999 9.61592 17.9999 11.0004C17.9999 12.8569 17.2624 14.6374 15.9497 15.9501C14.6369 17.2629 12.8564 18.0004 10.9999 18.0004Z"
                      fill="#A9A9B9"
                    />
                  </g>
                </svg>
              </div>
              <button className={styles.content_dictionary_all_add}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="14"
                  viewBox="0 0 15 14"
                  fill="none"
                >
                  <path
                    d="M1.61084 7H13.3889M7.49985 1.11099V12.889"
                    stroke="#C4C4D1"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
                Добавить группу
              </button>
              <div className={styles.content_dictionary_all_groups}>
                <div className={styles.group}>
                  <div className={styles.group_left}>
                    <h3>Словарь 1</h3>
                    <p>7 записей</p>
                  </div>
                  <div className={styles.group_right}>
                    <Switch size="small" defaultChecked />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <g opacity="0.4">
                        <path
                          d="M21 21.001H3M19.88 7.00096L11 15.831L7 17.001L8.17 13.001L17.05 4.12096C17.4256 3.7144 17.9471 3.47344 18.5002 3.45095C19.0532 3.42845 19.5926 3.62625 20 4.00096C20.1932 4.2037 20.3437 4.44321 20.4426 4.70525C20.5414 4.9673 20.5866 5.24653 20.5754 5.52637C20.5642 5.80621 20.4968 6.08095 20.3774 6.33426C20.2579 6.58758 20.0888 6.8143 19.88 7.00096Z"
                          stroke="#C4C4D1"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        opacity="0.4"
                        d="M6.375 6.58008L17.375 17.5801M17.375 6.58008L6.375 17.5801"
                        stroke="#C4C4D1"
                        stroke-width="2"
                        stroke-linecap="round"
                      />
                    </svg>
                  </div>
                </div>
                <div className={styles.group}>
                  <div className={styles.group_left}>
                    <h3>Словарь 1</h3>
                    <p>7 записей</p>
                  </div>
                  <div className={styles.group_right}>
                    <Switch size="small" defaultChecked />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <g opacity="0.4">
                        <path
                          d="M21 21.001H3M19.88 7.00096L11 15.831L7 17.001L8.17 13.001L17.05 4.12096C17.4256 3.7144 17.9471 3.47344 18.5002 3.45095C19.0532 3.42845 19.5926 3.62625 20 4.00096C20.1932 4.2037 20.3437 4.44321 20.4426 4.70525C20.5414 4.9673 20.5866 5.24653 20.5754 5.52637C20.5642 5.80621 20.4968 6.08095 20.3774 6.33426C20.2579 6.58758 20.0888 6.8143 19.88 7.00096Z"
                          stroke="#C4C4D1"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        opacity="0.4"
                        d="M6.375 6.58008L17.375 17.5801M17.375 6.58008L6.375 17.5801"
                        stroke="#C4C4D1"
                        stroke-width="2"
                        stroke-linecap="round"
                      />
                    </svg>
                  </div>
                </div>
                <div className={styles.group}>
                  <div className={styles.group_left}>
                    <h3>Словарь 1</h3>
                    <p>7 записей</p>
                  </div>
                  <div className={styles.group_right}>
                    <Switch size="small" defaultChecked />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <g opacity="0.4">
                        <path
                          d="M21 21.001H3M19.88 7.00096L11 15.831L7 17.001L8.17 13.001L17.05 4.12096C17.4256 3.7144 17.9471 3.47344 18.5002 3.45095C19.0532 3.42845 19.5926 3.62625 20 4.00096C20.1932 4.2037 20.3437 4.44321 20.4426 4.70525C20.5414 4.9673 20.5866 5.24653 20.5754 5.52637C20.5642 5.80621 20.4968 6.08095 20.3774 6.33426C20.2579 6.58758 20.0888 6.8143 19.88 7.00096Z"
                          stroke="#C4C4D1"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        opacity="0.4"
                        d="M6.375 6.58008L17.375 17.5801M17.375 6.58008L6.375 17.5801"
                        stroke="#C4C4D1"
                        stroke-width="2"
                        stroke-linecap="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.content_dictionary_individual}>
              <h1>Словарь 1</h1>
              <div className={styles.content_dictionary_individual_search}>
                <input placeholder="Поиск " type="text" name="" id="" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <g opacity="0.4">
                    <path
                      d="M21.7099 20.2904L17.9999 16.6104C19.44 14.8148 20.1374 12.5357 19.9487 10.2417C19.76 7.94769 18.6996 5.81318 16.9854 4.27704C15.2713 2.7409 13.0337 1.9199 10.7328 1.98286C8.43194 2.04582 6.24263 2.98795 4.61505 4.61553C2.98747 6.24311 2.04534 8.43243 1.98237 10.7333C1.91941 13.0342 2.74041 15.2718 4.27655 16.9859C5.81269 18.7001 7.94721 19.7605 10.2412 19.9492C12.5352 20.1379 14.8143 19.4405 16.6099 18.0004L20.2899 21.6804C20.3829 21.7741 20.4935 21.8485 20.6153 21.8993C20.7372 21.9501 20.8679 21.9762 20.9999 21.9762C21.1319 21.9762 21.2626 21.9501 21.3845 21.8993C21.5063 21.8485 21.6169 21.7741 21.7099 21.6804C21.8901 21.4939 21.9909 21.2447 21.9909 20.9854C21.9909 20.7261 21.8901 20.4769 21.7099 20.2904ZM10.9999 18.0004C9.61544 18.0004 8.26206 17.5899 7.11091 16.8207C5.95977 16.0515 5.06256 14.9583 4.53275 13.6792C4.00293 12.4001 3.86431 10.9926 4.13441 9.63476C4.4045 8.27689 5.07119 7.02961 6.05016 6.05065C7.02912 5.07168 8.27641 4.40499 9.63427 4.1349C10.9921 3.8648 12.3996 4.00342 13.6787 4.53324C14.9578 5.06305 16.051 5.96026 16.8202 7.1114C17.5894 8.26255 17.9999 9.61592 17.9999 11.0004C17.9999 12.8569 17.2624 14.6374 15.9497 15.9501C14.6369 17.2629 12.8564 18.0004 10.9999 18.0004Z"
                      fill="#A9A9B9"
                    />
                  </g>
                </svg>
              </div>
              <button className={styles.content_dictionary_individual_add}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="14"
                  viewBox="0 0 15 14"
                  fill="none"
                >
                  <path
                    d="M1.61084 7H13.3889M7.49985 1.11099V12.889"
                    stroke="#C4C4D1"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
                Добавить словарь
              </button>
              <div className={styles.content_dictionary_individual_dics}>
                <div className={styles.dic}>
                  <div className={styles.dic_top}>
                    <p>Для кого покупка</p>
                    <Switch size="small" defaultChecked />
                  </div>
                  <div className={styles.dic_body}>
                    <span className={styles.dic_body_el}>
                      <p>приветствую</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="15"
                        viewBox="0 0 16 15"
                        fill="none"
                      >
                        <path
                          d="M2.875 2.58008L13.875 13.5801M13.875 2.58008L2.875 13.5801"
                          stroke="#213366"
                          stroke-width="2"
                          stroke-linecap="round"
                        />
                      </svg>
                    </span>
                    <span className={styles.dic_body_el}>
                      <p>Для родителей</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="15"
                        viewBox="0 0 16 15"
                        fill="none"
                      >
                        <path
                          d="M2.875 2.58008L13.875 13.5801M13.875 2.58008L2.875 13.5801"
                          stroke="#213366"
                          stroke-width="2"
                          stroke-linecap="round"
                        />
                      </svg>
                    </span>
                    <span className={styles.dic_body_el}>
                      <p>Для друзей</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="15"
                        viewBox="0 0 16 15"
                        fill="none"
                      >
                        <path
                          d="M2.875 2.58008L13.875 13.5801M13.875 2.58008L2.875 13.5801"
                          stroke="#213366"
                          stroke-width="2"
                          stroke-linecap="round"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
                <div className={styles.dic}>
                  <div className={styles.dic_top}>
                    <p>Для кого покупка</p>
                    <Switch size="small" defaultChecked />
                  </div>
                  <div className={styles.dic_body}>
                    <span className={styles.dic_body_el}>
                      <p>Для себя</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="15"
                        viewBox="0 0 16 15"
                        fill="none"
                      >
                        <path
                          d="M2.875 2.58008L13.875 13.5801M13.875 2.58008L2.875 13.5801"
                          stroke="#213366"
                          stroke-width="2"
                          stroke-linecap="round"
                        />
                      </svg>
                    </span>
                    <span className={styles.dic_body_el}>
                      <p>Для родителей</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="15"
                        viewBox="0 0 16 15"
                        fill="none"
                      >
                        <path
                          d="M2.875 2.58008L13.875 13.5801M13.875 2.58008L2.875 13.5801"
                          stroke="#213366"
                          stroke-width="2"
                          stroke-linecap="round"
                        />
                      </svg>
                    </span>
                    <span className={styles.dic_body_el}>
                      <p>Для друзей</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="15"
                        viewBox="0 0 16 15"
                        fill="none"
                      >
                        <path
                          d="M2.875 2.58008L13.875 13.5801M13.875 2.58008L2.875 13.5801"
                          stroke="#213366"
                          stroke-width="2"
                          stroke-linecap="round"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
                <div className={styles.dic}>
                  <div className={styles.dic_top}>
                    <p>Для кого покупка</p>
                    <Switch size="small" defaultChecked />
                  </div>
                  <div className={styles.dic_body}>
                    <span className={styles.dic_body_el}>
                      <p>Для себя</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="15"
                        viewBox="0 0 16 15"
                        fill="none"
                      >
                        <path
                          d="M2.875 2.58008L13.875 13.5801M13.875 2.58008L2.875 13.5801"
                          stroke="#213366"
                          stroke-width="2"
                          stroke-linecap="round"
                        />
                      </svg>
                    </span>
                    <span className={styles.dic_body_el}>
                      <p>Для родителей</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="15"
                        viewBox="0 0 16 15"
                        fill="none"
                      >
                        <path
                          d="M2.875 2.58008L13.875 13.5801M13.875 2.58008L2.875 13.5801"
                          stroke="#213366"
                          stroke-width="2"
                          stroke-linecap="round"
                        />
                      </svg>
                    </span>
                    <span className={styles.dic_body_el}>
                      <p>Для друзей</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="15"
                        viewBox="0 0 16 15"
                        fill="none"
                      >
                        <path
                          d="M2.875 2.58008L13.875 13.5801M13.875 2.58008L2.875 13.5801"
                          stroke="#213366"
                          stroke-width="2"
                          stroke-linecap="round"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.content_dictionary_settings}>
              <h1>
                Настройки{" "}
                <Tooltip
                  title="Каждая фраза размещается на отдельной строке.
Поиск по содержимому осуществляется по целому слову.
Поиск части слова осуществляется с заменой окончания символом * ( например: в слове интернет* найдет и интернета/интернету/интернетов)."
                  placement="right"
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
              </h1>
              <div className={styles.content_dictionary_settings_filter}>
                <label htmlFor="dic">Название словаря</label>
                <input type="text" defaultValue="Словарь 1" name="" id="dic" />
              </div>
              <div className={styles.content_dictionary_settings_dics}>
                <textarea
                  defaultValue="<Приветствую>, <Доброе утро>, <Добрый вечер>,<Приветствую>, <Доброе утро>, <Добрый вечер>, <Приветствую>, <Доброе утро>, <Приветствую>, <Доброе утро>, <Добрый вечер>,<Приветствую>, <Доброе утро>, <Добрый вечер>, <Приветствую>, <Доброе утро>, <Добрый вечер>,<Приветствую>, <Доброе утро>, <Добрый вечер>,вечер>,<Приветствую>, <Доброе утро>,<Приветствую>, <Доброе утро>, <Добрый вечер>,<Приветствую>, <Доброе утро>, <Добрый вечер>, <Приветствую>, <Доброе утро>, <Добрый вечер>,<Приветствую>, <Доброе утро>, <Добрый вечер>. <Добрый вечер>. "
                  name=""
                  id=""
                ></textarea>
              </div>
              <button className={styles.content_dictionary_settings_button}>
                сохранить
              </button>
            </div>
          </div>
        </div>
        <div
          className={`${styles.content} ${
            activeTab === 3 ? styles.active : ""
          }`}
        >
          <div className={styles.content_tagging}>
            <div className={styles.content_tagging_all}>
              <h1>Правила тегирования</h1>
              <div className={styles.content_tagging_all_search}>
                <input placeholder="Поиск " type="text" name="" id="" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <g opacity="0.4">
                    <path
                      d="M21.7099 20.2904L17.9999 16.6104C19.44 14.8148 20.1374 12.5357 19.9487 10.2417C19.76 7.94769 18.6996 5.81318 16.9854 4.27704C15.2713 2.7409 13.0337 1.9199 10.7328 1.98286C8.43194 2.04582 6.24263 2.98795 4.61505 4.61553C2.98747 6.24311 2.04534 8.43243 1.98237 10.7333C1.91941 13.0342 2.74041 15.2718 4.27655 16.9859C5.81269 18.7001 7.94721 19.7605 10.2412 19.9492C12.5352 20.1379 14.8143 19.4405 16.6099 18.0004L20.2899 21.6804C20.3829 21.7741 20.4935 21.8485 20.6153 21.8993C20.7372 21.9501 20.8679 21.9762 20.9999 21.9762C21.1319 21.9762 21.2626 21.9501 21.3845 21.8993C21.5063 21.8485 21.6169 21.7741 21.7099 21.6804C21.8901 21.4939 21.9909 21.2447 21.9909 20.9854C21.9909 20.7261 21.8901 20.4769 21.7099 20.2904ZM10.9999 18.0004C9.61544 18.0004 8.26206 17.5899 7.11091 16.8207C5.95977 16.0515 5.06256 14.9583 4.53275 13.6792C4.00293 12.4001 3.86431 10.9926 4.13441 9.63476C4.4045 8.27689 5.07119 7.02961 6.05016 6.05065C7.02912 5.07168 8.27641 4.40499 9.63427 4.1349C10.9921 3.8648 12.3996 4.00342 13.6787 4.53324C14.9578 5.06305 16.051 5.96026 16.8202 7.1114C17.5894 8.26255 17.9999 9.61592 17.9999 11.0004C17.9999 12.8569 17.2624 14.6374 15.9497 15.9501C14.6369 17.2629 12.8564 18.0004 10.9999 18.0004Z"
                      fill="#A9A9B9"
                    />
                  </g>
                </svg>
              </div>
              <button className={styles.content_tagging_all_add}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="14"
                  viewBox="0 0 15 14"
                  fill="none"
                >
                  <path
                    d="M1.61084 7H13.3889M7.49985 1.11099V12.889"
                    stroke="#C4C4D1"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
                Добавить группу
              </button>
              <div className={styles.content_tagging_all_groups}>
                <div className={styles.group}>
                  <div className={styles.group_left}>
                    <h3>Правило 1</h3>
                    <p>7 тегов</p>
                  </div>
                  <div className={styles.group_right}>
                    <Switch size="small" defaultChecked />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <g opacity="0.4">
                        <path
                          d="M21 21.001H3M19.88 7.00096L11 15.831L7 17.001L8.17 13.001L17.05 4.12096C17.4256 3.7144 17.9471 3.47344 18.5002 3.45095C19.0532 3.42845 19.5926 3.62625 20 4.00096C20.1932 4.2037 20.3437 4.44321 20.4426 4.70525C20.5414 4.9673 20.5866 5.24653 20.5754 5.52637C20.5642 5.80621 20.4968 6.08095 20.3774 6.33426C20.2579 6.58758 20.0888 6.8143 19.88 7.00096Z"
                          stroke="#C4C4D1"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        opacity="0.4"
                        d="M6.375 6.58008L17.375 17.5801M17.375 6.58008L6.375 17.5801"
                        stroke="#C4C4D1"
                        stroke-width="2"
                        stroke-linecap="round"
                      />
                    </svg>
                  </div>
                </div>
                <div className={styles.group}>
                  <div className={styles.group_left}>
                    <h3>Возражения</h3>
                    <p>7 тегов</p>
                  </div>
                  <div className={styles.group_right}>
                    <Switch size="small" defaultChecked />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <g opacity="0.4">
                        <path
                          d="M21 21.001H3M19.88 7.00096L11 15.831L7 17.001L8.17 13.001L17.05 4.12096C17.4256 3.7144 17.9471 3.47344 18.5002 3.45095C19.0532 3.42845 19.5926 3.62625 20 4.00096C20.1932 4.2037 20.3437 4.44321 20.4426 4.70525C20.5414 4.9673 20.5866 5.24653 20.5754 5.52637C20.5642 5.80621 20.4968 6.08095 20.3774 6.33426C20.2579 6.58758 20.0888 6.8143 19.88 7.00096Z"
                          stroke="#C4C4D1"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        opacity="0.4"
                        d="M6.375 6.58008L17.375 17.5801M17.375 6.58008L6.375 17.5801"
                        stroke="#C4C4D1"
                        stroke-width="2"
                        stroke-linecap="round"
                      />
                    </svg>
                  </div>
                </div>
                <div className={styles.group}>
                  <div className={styles.group_left}>
                    <h3>Слова паразиты</h3>
                    <p>7 тегов</p>
                  </div>
                  <div className={styles.group_right}>
                    <Switch size="small" defaultChecked />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <g opacity="0.4">
                        <path
                          d="M21 21.001H3M19.88 7.00096L11 15.831L7 17.001L8.17 13.001L17.05 4.12096C17.4256 3.7144 17.9471 3.47344 18.5002 3.45095C19.0532 3.42845 19.5926 3.62625 20 4.00096C20.1932 4.2037 20.3437 4.44321 20.4426 4.70525C20.5414 4.9673 20.5866 5.24653 20.5754 5.52637C20.5642 5.80621 20.4968 6.08095 20.3774 6.33426C20.2579 6.58758 20.0888 6.8143 19.88 7.00096Z"
                          stroke="#C4C4D1"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        opacity="0.4"
                        d="M6.375 6.58008L17.375 17.5801M17.375 6.58008L6.375 17.5801"
                        stroke="#C4C4D1"
                        stroke-width="2"
                        stroke-linecap="round"
                      />
                    </svg>
                  </div>
                </div>
                <div className={styles.group}>
                  <div className={styles.group_left}>
                    <h3>Правило 1</h3>
                    <p>7 тегов</p>
                  </div>
                  <div className={styles.group_right}>
                    <Switch size="small" defaultChecked />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <g opacity="0.4">
                        <path
                          d="M21 21.001H3M19.88 7.00096L11 15.831L7 17.001L8.17 13.001L17.05 4.12096C17.4256 3.7144 17.9471 3.47344 18.5002 3.45095C19.0532 3.42845 19.5926 3.62625 20 4.00096C20.1932 4.2037 20.3437 4.44321 20.4426 4.70525C20.5414 4.9673 20.5866 5.24653 20.5754 5.52637C20.5642 5.80621 20.4968 6.08095 20.3774 6.33426C20.2579 6.58758 20.0888 6.8143 19.88 7.00096Z"
                          stroke="#C4C4D1"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        opacity="0.4"
                        d="M6.375 6.58008L17.375 17.5801M17.375 6.58008L6.375 17.5801"
                        stroke="#C4C4D1"
                        stroke-width="2"
                        stroke-linecap="round"
                      />
                    </svg>
                  </div>
                </div>
                <div className={styles.group}>
                  <div className={styles.group_left}>
                    <h3>Правило 1</h3>
                    <p>7 тегов</p>
                  </div>
                  <div className={styles.group_right}>
                    <Switch size="small" defaultChecked />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <g opacity="0.4">
                        <path
                          d="M21 21.001H3M19.88 7.00096L11 15.831L7 17.001L8.17 13.001L17.05 4.12096C17.4256 3.7144 17.9471 3.47344 18.5002 3.45095C19.0532 3.42845 19.5926 3.62625 20 4.00096C20.1932 4.2037 20.3437 4.44321 20.4426 4.70525C20.5414 4.9673 20.5866 5.24653 20.5754 5.52637C20.5642 5.80621 20.4968 6.08095 20.3774 6.33426C20.2579 6.58758 20.0888 6.8143 19.88 7.00096Z"
                          stroke="#C4C4D1"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        opacity="0.4"
                        d="M6.375 6.58008L17.375 17.5801M17.375 6.58008L6.375 17.5801"
                        stroke="#C4C4D1"
                        stroke-width="2"
                        stroke-linecap="round"
                      />
                    </svg>
                  </div>
                </div>
                <div className={styles.group}>
                  <div className={styles.group_left}>
                    <h3>Правило 1</h3>
                    <p>7 тегов</p>
                  </div>
                  <div className={styles.group_right}>
                    <Switch size="small" defaultChecked />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <g opacity="0.4">
                        <path
                          d="M21 21.001H3M19.88 7.00096L11 15.831L7 17.001L8.17 13.001L17.05 4.12096C17.4256 3.7144 17.9471 3.47344 18.5002 3.45095C19.0532 3.42845 19.5926 3.62625 20 4.00096C20.1932 4.2037 20.3437 4.44321 20.4426 4.70525C20.5414 4.9673 20.5866 5.24653 20.5754 5.52637C20.5642 5.80621 20.4968 6.08095 20.3774 6.33426C20.2579 6.58758 20.0888 6.8143 19.88 7.00096Z"
                          stroke="#C4C4D1"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        opacity="0.4"
                        d="M6.375 6.58008L17.375 17.5801M17.375 6.58008L6.375 17.5801"
                        stroke="#C4C4D1"
                        stroke-width="2"
                        stroke-linecap="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.content_tagging_individual}>
              <h1>Правило 1</h1>
              <div className={styles.content_tagging_individual_search}>
                <input placeholder="Поиск " type="text" name="" id="" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <g opacity="0.4">
                    <path
                      d="M21.7099 20.2904L17.9999 16.6104C19.44 14.8148 20.1374 12.5357 19.9487 10.2417C19.76 7.94769 18.6996 5.81318 16.9854 4.27704C15.2713 2.7409 13.0337 1.9199 10.7328 1.98286C8.43194 2.04582 6.24263 2.98795 4.61505 4.61553C2.98747 6.24311 2.04534 8.43243 1.98237 10.7333C1.91941 13.0342 2.74041 15.2718 4.27655 16.9859C5.81269 18.7001 7.94721 19.7605 10.2412 19.9492C12.5352 20.1379 14.8143 19.4405 16.6099 18.0004L20.2899 21.6804C20.3829 21.7741 20.4935 21.8485 20.6153 21.8993C20.7372 21.9501 20.8679 21.9762 20.9999 21.9762C21.1319 21.9762 21.2626 21.9501 21.3845 21.8993C21.5063 21.8485 21.6169 21.7741 21.7099 21.6804C21.8901 21.4939 21.9909 21.2447 21.9909 20.9854C21.9909 20.7261 21.8901 20.4769 21.7099 20.2904ZM10.9999 18.0004C9.61544 18.0004 8.26206 17.5899 7.11091 16.8207C5.95977 16.0515 5.06256 14.9583 4.53275 13.6792C4.00293 12.4001 3.86431 10.9926 4.13441 9.63476C4.4045 8.27689 5.07119 7.02961 6.05016 6.05065C7.02912 5.07168 8.27641 4.40499 9.63427 4.1349C10.9921 3.8648 12.3996 4.00342 13.6787 4.53324C14.9578 5.06305 16.051 5.96026 16.8202 7.1114C17.5894 8.26255 17.9999 9.61592 17.9999 11.0004C17.9999 12.8569 17.2624 14.6374 15.9497 15.9501C14.6369 17.2629 12.8564 18.0004 10.9999 18.0004Z"
                      fill="#A9A9B9"
                    />
                  </g>
                </svg>
              </div>
              <button className={styles.content_tagging_individual_add}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="14"
                  viewBox="0 0 15 14"
                  fill="none"
                >
                  <path
                    d="M1.61084 7H13.3889M7.49985 1.11099V12.889"
                    stroke="#C4C4D1"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
                Добавить словарь
              </button>
              <div className={styles.content_tagging_individual_dics}>
                <div className={styles.dic}>
                  <div className={styles.dic_top}>
                    <p>Для кого покупка</p>
                    <Switch size="small" defaultChecked />
                  </div>
                  <div className={styles.dic_body}>
                    <span className={styles.dic_body_el}>
                      <p>приветствую</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="15"
                        viewBox="0 0 16 15"
                        fill="none"
                      >
                        <path
                          d="M2.875 2.58008L13.875 13.5801M13.875 2.58008L2.875 13.5801"
                          stroke="#213366"
                          stroke-width="2"
                          stroke-linecap="round"
                        />
                      </svg>
                    </span>
                    <span className={styles.dic_body_el}>
                      <p>Для родителей</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="15"
                        viewBox="0 0 16 15"
                        fill="none"
                      >
                        <path
                          d="M2.875 2.58008L13.875 13.5801M13.875 2.58008L2.875 13.5801"
                          stroke="#213366"
                          stroke-width="2"
                          stroke-linecap="round"
                        />
                      </svg>
                    </span>
                    <span className={styles.dic_body_el}>
                      <p>Для друзей</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="15"
                        viewBox="0 0 16 15"
                        fill="none"
                      >
                        <path
                          d="M2.875 2.58008L13.875 13.5801M13.875 2.58008L2.875 13.5801"
                          stroke="#213366"
                          stroke-width="2"
                          stroke-linecap="round"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
                <div className={styles.dic}>
                  <div className={styles.dic_top}>
                    <p>Для кого покупка</p>
                    <Switch size="small" defaultChecked />
                  </div>
                  <div className={styles.dic_body}>
                    <span className={styles.dic_body_el}>
                      <p>Для себя</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="15"
                        viewBox="0 0 16 15"
                        fill="none"
                      >
                        <path
                          d="M2.875 2.58008L13.875 13.5801M13.875 2.58008L2.875 13.5801"
                          stroke="#213366"
                          stroke-width="2"
                          stroke-linecap="round"
                        />
                      </svg>
                    </span>
                    <span className={styles.dic_body_el}>
                      <p>Для родителей</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="15"
                        viewBox="0 0 16 15"
                        fill="none"
                      >
                        <path
                          d="M2.875 2.58008L13.875 13.5801M13.875 2.58008L2.875 13.5801"
                          stroke="#213366"
                          stroke-width="2"
                          stroke-linecap="round"
                        />
                      </svg>
                    </span>
                    <span className={styles.dic_body_el}>
                      <p>Для друзей</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="15"
                        viewBox="0 0 16 15"
                        fill="none"
                      >
                        <path
                          d="M2.875 2.58008L13.875 13.5801M13.875 2.58008L2.875 13.5801"
                          stroke="#213366"
                          stroke-width="2"
                          stroke-linecap="round"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
                <div className={styles.dic}>
                  <div className={styles.dic_top}>
                    <p>Для кого покупка</p>
                    <Switch size="small" defaultChecked />
                  </div>
                  <div className={styles.dic_body}>
                    <span className={styles.dic_body_el}>
                      <p>Для себя</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="15"
                        viewBox="0 0 16 15"
                        fill="none"
                      >
                        <path
                          d="M2.875 2.58008L13.875 13.5801M13.875 2.58008L2.875 13.5801"
                          stroke="#213366"
                          stroke-width="2"
                          stroke-linecap="round"
                        />
                      </svg>
                    </span>
                    <span className={styles.dic_body_el}>
                      <p>Для родителей</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="15"
                        viewBox="0 0 16 15"
                        fill="none"
                      >
                        <path
                          d="M2.875 2.58008L13.875 13.5801M13.875 2.58008L2.875 13.5801"
                          stroke="#213366"
                          stroke-width="2"
                          stroke-linecap="round"
                        />
                      </svg>
                    </span>
                    <span className={styles.dic_body_el}>
                      <p>Для друзей</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="15"
                        viewBox="0 0 16 15"
                        fill="none"
                      >
                        <path
                          d="M2.875 2.58008L13.875 13.5801M13.875 2.58008L2.875 13.5801"
                          stroke="#213366"
                          stroke-width="2"
                          stroke-linecap="round"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.content_tagging_settings}>
              <h1>
                Настройки правил{" "}
                <Tooltip
                  title={
                    <ul>
                      <li
                        style={{
                          listStyle: "dotted",
                        }}
                      >
                        Каждая фраза размещается на отдельной строке.
                      </li>
                      <li
                        style={{
                          listStyle: "dotted",
                        }}
                      >
                        Поиск по содержимому осуществляется по целому слову.
                      </li>
                      <li
                        style={{
                          listStyle: "dotted",
                        }}
                      >
                        Поиск части слова осуществляется с заменой окончания
                        символом * ( например: в слове интернет* найдет и
                        интернета/интернету/интернетов).
                      </li>
                    </ul>
                  }
                  placement="right"
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
              </h1>
              <div className={styles.content_tagging_settings_header}>
                <div className={styles.content_tagging_settings_header_el}>
                  <label htmlFor="">Название правила</label>
                  <input
                    disabled
                    type="text"
                    defaultValue="Словарь 1"
                    name=""
                    id=""
                  />
                </div>
                <div className={styles.content_tagging_settings_header_el}>
                  <label htmlFor="">Название группы</label>
                  <input
                    disabled
                    type="text"
                    defaultValue="Словарь 1"
                    name=""
                    id=""
                  />
                </div>
              </div>
              {rules.map((rule) => {
                return (
                  <div className={styles.content_tagging_settings_group}>
                    <div className={styles.content_tagging_settings_group_el}>
                      <label htmlFor="">Кто сказал?</label>
                      <Select
                        defaultValue={rule.who}
                        style={{
                          width: "100%",
                          height: "38px",
                        }}
                        options={[
                          {
                            value: "manager",
                            label: "Менеджер",
                          },
                          {
                            value: "client",
                            label: "Клиент",
                          },
                          {
                            value: "notManager",
                            label: "Менеджер не сказал",
                          },
                          {
                            value: "notClient",
                            label: "Клиент не сказал",
                          },
                        ]}
                      />
                    </div>
                    <div className={styles.content_tagging_settings_group_el}>
                      <label htmlFor="">Что сказал?</label>
                      <Select
                        mode="multiple"
                        allowClear
                        style={{
                          width: "100%",
                        }}
                        placeholder="Please select"
                        defaultValue={rule.what}
                        onChange={handleChange}
                        options={ruleOptions}
                      />
                    </div>
                    <div
                      className={styles.content_tagging_settings_group_bottom}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M12.0044 3.99902C12.5807 3.99902 13.0479 4.4662 13.0479 5.0425V18.9555C13.0479 19.5318 12.5807 19.999 12.0044 19.999C11.4281 19.999 10.9609 19.5318 10.9609 18.9555V5.0425C10.9609 4.4662 11.4281 3.99902 12.0044 3.99902Z"
                          fill="#213366"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M4 12.0005C4 11.4242 4.46718 10.957 5.04348 10.957H18.9565C19.5328 10.957 20 11.4242 20 12.0005C20 12.5768 19.5328 13.044 18.9565 13.044H5.04348C4.46718 13.044 4 12.5768 4 12.0005Z"
                          fill="#213366"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M4 12.0005C4 11.4242 4.46718 10.957 5.04348 10.957H18.9565C19.5328 10.957 20 11.4242 20 12.0005C20 12.5768 19.5328 13.044 18.9565 13.044H5.04348C4.46718 13.044 4 12.5768 4 12.0005Z"
                          fill="#CC0A2A"
                        />
                      </svg>
                    </div>
                  </div>
                );
              })}
              <div className={styles.content_tagging_settings_bottom}>
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="14"
                    viewBox="0 0 15 14"
                    fill="none"
                  >
                    <path
                      d="M1.60938 7H13.3874M7.49839 1.11099V12.889"
                      stroke="#213366"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </svg>
                  Добавить
                </button>
                <div>
                  <button
                    onClick={() => toast.success("Данные успешно сохранены")}
                  >
                    Сохранить
                  </button>
                  <button onClick={() => setIsResettingComfirmModalOpen(true)}>
                    Сбросить всё
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${styles.content} ${
            activeTab === 4 ? styles.active : ""
          }`}
        >
          <div className={styles.content_checklist}>
            <div className={styles.content_checklist_checklists}>
              <h3>Чек - листы</h3>
              <button className={styles.content_checklist_checklists_add}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                >
                  <path
                    d="M1.10938 7H12.8874M6.99839 1.11099V12.889"
                    stroke="#C4C4D1"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
                Добавить чек-лист
              </button>
              <div className={styles.content_checklist_checklists_group}>
                <div className={styles.content_checklist_checklists_group_el}>
                  <h3>Чек-лист</h3>
                  <div>
                    <Switch defaultChecked />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        opacity="0.4"
                        d="M6.375 6.58008L17.375 17.5801M17.375 6.58008L6.375 17.5801"
                        stroke="#C4C4D1"
                        stroke-width="2"
                        stroke-linecap="round"
                      />
                    </svg>
                  </div>
                </div>
                <div className={styles.content_checklist_checklists_group_el}>
                  <h3>Чек-лист</h3>
                  <div>
                    <Switch defaultChecked />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        opacity="0.4"
                        d="M6.375 6.58008L17.375 17.5801M17.375 6.58008L6.375 17.5801"
                        stroke="#C4C4D1"
                        stroke-width="2"
                        stroke-linecap="round"
                      />
                    </svg>
                  </div>
                </div>
                <div className={styles.content_checklist_checklists_group_el}>
                  <h3>Чек-лист</h3>
                  <div>
                    <Switch defaultChecked />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        opacity="0.4"
                        d="M6.375 6.58008L17.375 17.5801M17.375 6.58008L6.375 17.5801"
                        stroke="#C4C4D1"
                        stroke-width="2"
                        stroke-linecap="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.content_checklist_settings}>
              <h3>
                Настройки{" "}
                <Tooltip title="Настройте ваш чек-лист.">
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
              </h3>
              <div className={styles.content_checklist_settings_name}>
                <label htmlFor="">Название чек-листа</label>
                <input type="text" defaultValue="Чек-лист" name="" id="" />
              </div>
              <div className={styles.content_checklist_settings_group}>
                <div className={styles.content_checklist_settings_group_ques}>
                  <label htmlFor="">Вопрос 1</label>
                  <input type="text" defaultValue="Приветствие" name="" id="" />
                </div>
                <div className={styles.content_checklist_settings_group_el}>
                  <label htmlFor="">Ответ 1</label>
                  <input type="text" defaultValue="Да" name="" id="" />
                </div>
                <div
                  className={styles.content_checklist_settings_group_plusminus}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12.0005 3.99902C12.5768 3.99902 13.044 4.4662 13.044 5.0425V18.9555C13.044 19.5318 12.5768 19.999 12.0005 19.999C11.4242 19.999 10.957 19.5318 10.957 18.9555V5.0425C10.957 4.4662 11.4242 3.99902 12.0005 3.99902Z"
                      fill="#213366"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M4 12.0005C4 11.4242 4.46718 10.957 5.04348 10.957H18.9565C19.5328 10.957 20 11.4242 20 12.0005C20 12.5768 19.5328 13.044 18.9565 13.044H5.04348C4.46718 13.044 4 12.5768 4 12.0005Z"
                      fill="#213366"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M4 12.0005C4 11.4242 4.46718 10.957 5.04348 10.957H18.9565C19.5328 10.957 20 11.4242 20 12.0005C20 12.5768 19.5328 13.044 18.9565 13.044H5.04348C4.46718 13.044 4 12.5768 4 12.0005Z"
                      fill="#CC0A2A"
                    />
                  </svg>
                </div>
                <div className={styles.content_checklist_settings_group_dic}>
                  <div>
                    <label htmlFor="">Словарь</label>
                    <Select
                      mode="multiple"
                      allowClear
                      style={{
                        width: "100%",
                      }}
                      placeholder="Please select"
                      onChange={handleChange}
                      options={ruleOptions}
                    />
                  </div>
                  <div className={styles.ball}>
                    <label htmlFor="">Балл</label>
                    <input type="number" defaultValue={0} name="" id="" />
                  </div>
                </div>
                <div
                  className={styles.content_checklist_settings_group_plusminus}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12.0005 3.99902C12.5768 3.99902 13.044 4.4662 13.044 5.0425V18.9555C13.044 19.5318 12.5768 19.999 12.0005 19.999C11.4242 19.999 10.957 19.5318 10.957 18.9555V5.0425C10.957 4.4662 11.4242 3.99902 12.0005 3.99902Z"
                      fill="#213366"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M4 12.0005C4 11.4242 4.46718 10.957 5.04348 10.957H18.9565C19.5328 10.957 20 11.4242 20 12.0005C20 12.5768 19.5328 13.044 18.9565 13.044H5.04348C4.46718 13.044 4 12.5768 4 12.0005Z"
                      fill="#213366"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M4 12.0005C4 11.4242 4.46718 10.957 5.04348 10.957H18.9565C19.5328 10.957 20 11.4242 20 12.0005C20 12.5768 19.5328 13.044 18.9565 13.044H5.04348C4.46718 13.044 4 12.5768 4 12.0005Z"
                      fill="#CC0A2A"
                    />
                  </svg>
                </div>
                <div className={styles.content_checklist_settings_group_el}>
                  <label htmlFor="">Ответ 1</label>
                  <input type="text" defaultValue="Да" name="" id="" />
                </div>
                <div className={styles.content_checklist_settings_group_dic}>
                  <div>
                    <label htmlFor="">Словарь</label>
                    <Select
                      mode="multiple"
                      allowClear
                      style={{
                        width: "100%",
                      }}
                      placeholder="Please select"
                      onChange={handleChange}
                      options={ruleOptions}
                    />
                  </div>
                  <div className={styles.ball}>
                    <label htmlFor="">Балл</label>
                    <input type="number" defaultValue={0} name="" id="" />
                  </div>
                </div>
                <div
                  className={styles.content_checklist_settings_group_plusminus}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12.0005 3.99902C12.5768 3.99902 13.044 4.4662 13.044 5.0425V18.9555C13.044 19.5318 12.5768 19.999 12.0005 19.999C11.4242 19.999 10.957 19.5318 10.957 18.9555V5.0425C10.957 4.4662 11.4242 3.99902 12.0005 3.99902Z"
                      fill="#213366"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M4 12.0005C4 11.4242 4.46718 10.957 5.04348 10.957H18.9565C19.5328 10.957 20 11.4242 20 12.0005C20 12.5768 19.5328 13.044 18.9565 13.044H5.04348C4.46718 13.044 4 12.5768 4 12.0005Z"
                      fill="#213366"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M4 12.0005C4 11.4242 4.46718 10.957 5.04348 10.957H18.9565C19.5328 10.957 20 11.4242 20 12.0005C20 12.5768 19.5328 13.044 18.9565 13.044H5.04348C4.46718 13.044 4 12.5768 4 12.0005Z"
                      fill="#CC0A2A"
                    />
                  </svg>
                </div>
                <div className={styles.content_checklist_settings_group_ques}>
                  <label htmlFor="">Вопрос 1</label>
                  <input type="text" defaultValue="Приветствие" name="" id="" />
                </div>
                <div className={styles.content_checklist_settings_group_el}>
                  <label htmlFor="">Ответ 1</label>
                  <input type="text" defaultValue="Да" name="" id="" />
                </div>
                <div
                  className={styles.content_checklist_settings_group_plusminus}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12.0005 3.99902C12.5768 3.99902 13.044 4.4662 13.044 5.0425V18.9555C13.044 19.5318 12.5768 19.999 12.0005 19.999C11.4242 19.999 10.957 19.5318 10.957 18.9555V5.0425C10.957 4.4662 11.4242 3.99902 12.0005 3.99902Z"
                      fill="#213366"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M4 12.0005C4 11.4242 4.46718 10.957 5.04348 10.957H18.9565C19.5328 10.957 20 11.4242 20 12.0005C20 12.5768 19.5328 13.044 18.9565 13.044H5.04348C4.46718 13.044 4 12.5768 4 12.0005Z"
                      fill="#213366"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M4 12.0005C4 11.4242 4.46718 10.957 5.04348 10.957H18.9565C19.5328 10.957 20 11.4242 20 12.0005C20 12.5768 19.5328 13.044 18.9565 13.044H5.04348C4.46718 13.044 4 12.5768 4 12.0005Z"
                      fill="#CC0A2A"
                    />
                  </svg>
                </div>
                <div className={styles.content_checklist_settings_group_dic}>
                  <div>
                    <label htmlFor="">Словарь</label>
                    <Select
                      mode="multiple"
                      allowClear
                      style={{
                        width: "100%",
                      }}
                      placeholder="Please select"
                      onChange={handleChange}
                      options={ruleOptions}
                    />
                  </div>
                  <div className={styles.ball}>
                    <label htmlFor="">Балл</label>
                    <input type="number" defaultValue={0} name="" id="" />
                  </div>
                </div>
                <div
                  className={styles.content_checklist_settings_group_plusminus}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12.0005 3.99902C12.5768 3.99902 13.044 4.4662 13.044 5.0425V18.9555C13.044 19.5318 12.5768 19.999 12.0005 19.999C11.4242 19.999 10.957 19.5318 10.957 18.9555V5.0425C10.957 4.4662 11.4242 3.99902 12.0005 3.99902Z"
                      fill="#213366"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M4 12.0005C4 11.4242 4.46718 10.957 5.04348 10.957H18.9565C19.5328 10.957 20 11.4242 20 12.0005C20 12.5768 19.5328 13.044 18.9565 13.044H5.04348C4.46718 13.044 4 12.5768 4 12.0005Z"
                      fill="#213366"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M4 12.0005C4 11.4242 4.46718 10.957 5.04348 10.957H18.9565C19.5328 10.957 20 11.4242 20 12.0005C20 12.5768 19.5328 13.044 18.9565 13.044H5.04348C4.46718 13.044 4 12.5768 4 12.0005Z"
                      fill="#CC0A2A"
                    />
                  </svg>
                </div>
                <div className={styles.content_checklist_settings_group_el}>
                  <label htmlFor="">Ответ 1</label>
                  <input type="text" defaultValue="Да" name="" id="" />
                </div>
                <div className={styles.content_checklist_settings_group_dic}>
                  <div>
                    <label htmlFor="">Словарь</label>
                    <Select
                      mode="multiple"
                      allowClear
                      style={{
                        width: "100%",
                      }}
                      placeholder="Please select"
                      onChange={handleChange}
                      options={ruleOptions}
                    />
                  </div>
                  <div className={styles.ball}>
                    <label htmlFor="">Балл</label>
                    <input type="number" defaultValue={0} name="" id="" />
                  </div>
                </div>
                <div
                  className={styles.content_checklist_settings_group_plusminus}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12.0005 3.99902C12.5768 3.99902 13.044 4.4662 13.044 5.0425V18.9555C13.044 19.5318 12.5768 19.999 12.0005 19.999C11.4242 19.999 10.957 19.5318 10.957 18.9555V5.0425C10.957 4.4662 11.4242 3.99902 12.0005 3.99902Z"
                      fill="#213366"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M4 12.0005C4 11.4242 4.46718 10.957 5.04348 10.957H18.9565C19.5328 10.957 20 11.4242 20 12.0005C20 12.5768 19.5328 13.044 18.9565 13.044H5.04348C4.46718 13.044 4 12.5768 4 12.0005Z"
                      fill="#213366"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M4 12.0005C4 11.4242 4.46718 10.957 5.04348 10.957H18.9565C19.5328 10.957 20 11.4242 20 12.0005C20 12.5768 19.5328 13.044 18.9565 13.044H5.04348C4.46718 13.044 4 12.5768 4 12.0005Z"
                      fill="#CC0A2A"
                    />
                  </svg>
                </div>
              </div>
              <div className={styles.content_checklist_settings_buttons}>
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                  >
                    <path
                      d="M1 7H12.778M6.88901 1.11099V12.889"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </svg>
                  <p>Добавить вопрос</p>
                </button>
                <button onClick={() => setIsResettingComfirmModalOpen(true)}>Сбросить всё</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyPage;

import styles from "./Sales.module.scss";
import DiapazonComponent from "../../components/Diapazon";
import { Select, Table, Tooltip } from "antd";
import { render } from "sass";
import UploadRecordModal from "../../components/UploadRecordModal";
import { useState } from "react";
import ExportRecordModal from "../../components/ExportRecordModal";
import FullTransactionModal from "../../components/FullTransactionModal";

const SalesPage = () => {
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [isExportModalOpen, setIsExportModalOpen] = useState(false);
  const [isFirstFullTransactionModalOpen, setFirstIsFullTransactionModalOpen] =
    useState(false);
  const [isSecondFullTransactionModalOpen, setSecondIsFullTransactionModalOpen] =
    useState(false);
  const dicOptions = [
    {
      value: 1,
      label: "Установление контакта",
    },
    {
      value: 2,
      label: "Словарь: возражения",
    },
    {
      value: 3,
      label: "Словарь: дорого",
    },
    {
      value: 4,
      label: "Словарь: подумаю",
    },
    {
      value: 5,
      label: "Словарь: не интересно",
    },
    {
      value: 6,
      label: "Словарь: перезвоните",
    },
  ];
  const columnsTable = [
    {
      title: "Дата создания",
      dataIndex: "date",
    },
    {
      title: "ФИО",
      dataIndex: "fio",
    },
    {
      title: "Расшифровка разговора/ аудио",
      dataIndex: "audioscript",
      render: (text) => (
        <button onClick={() => setFirstIsFullTransactionModalOpen(true)}>
          {text}
        </button>
      ),
    },
    {
      title: "Теги фрагментов",
      dataIndex: "tags",
      render: (tags) => (
        <ul className={styles.table_tag}>
          {tags.map((tag, index) => (
            <li>{tag}</li>
          ))}
        </ul>
      ),
    },
    {
      title: "Сделка.",
      dataIndex: "sdelka",
    },
    {
      title: "Оценка по чек-листу",
      dataIndex: "rating",
      render: (text) => (
        <div>
          <span>{text[0]}%</span>
          <button onClick={() => setSecondIsFullTransactionModalOpen(true)}>{text[1]}</button>
        </div>
      ),
    },
  ];
  const dataTable = Array.from({ length: 32 }).map((_, i) => ({
    key: i,
    date: "12.11.2024, 21:07:00",
    fio: "Александра Беловская",
    audioscript: "Открыть",
    tags: [
      "Приветствие",
      "Установление контакта",
      "Приветствие",
      "Установление контакта",
      "Приветствие",
      "Установление контакта",
      "Приветствие",
      "Установление контакта",
      "Приветствие",
      "Установление контакта",
    ],
    sdelka: ["Да", "Нет"][Math.floor(Math.random() * 2)],
    rating: [35, "Подробнее"],
  }));
  return (
    <div className={styles.sales}>
      <FullTransactionModal
        noCheckList={true}
        noInfos={true}
        isTransactionModalOpen={isFirstFullTransactionModalOpen}
        setIsTransactionModalOpen={setFirstIsFullTransactionModalOpen}
      />
      <FullTransactionModal
        noChat={true}
        noAudio={true}
        isTransactionModalOpen={isSecondFullTransactionModalOpen}
        setIsTransactionModalOpen={setSecondIsFullTransactionModalOpen}
      />
      <UploadRecordModal
        isOpen={isUploadModalOpen}
        setIsOpen={setIsUploadModalOpen}
      />
      <ExportRecordModal
        isOpen={isExportModalOpen}
        setIsOpen={setIsExportModalOpen}
      />
      <h1>Записи</h1>
      <div className={styles.sales_header}>
        <div className={styles.sales_header_actions}>
          <button onClick={() => setIsUploadModalOpen(true)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M13.332 10L9.9987 6.66667L6.66536 10"
                stroke="white"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10.0007 17.5L10.0007 6.66667M15.834 2.5L4.16732 2.5"
                stroke="white"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Загрузить
          </button>
          <button onClick={() => setIsExportModalOpen(true)}>Экспорт</button>
        </div>
        <DiapazonComponent defaultStyle="noPadding" hasBackground={false} />
      </div>
      <div className={styles.sales_filter}>
        <p>
          Выберите словарь
          <Tooltip title="Выберите словари, которые использовались менеджером или клиентом для успешного поиска.">
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
        </p>
        <div>
          <div>
            <Select
              mode="multiple"
              allowClear
              style={{
                width: "100%",
              }}
              placeholder="Please select"
              defaultValue={dicOptions[0].value}
              options={dicOptions}
            />
          </div>
          <div>
            <input type="text" placeholder="Поиск  по имени или фамилии " />
          </div>
        </div>
      </div>
      <div className={styles.sales_table}>
        <Table
          pagination={{ pageSize: 4 }}
          columns={columnsTable}
          dataSource={dataTable}
          scroll={{ x: 1300 }}
        />
      </div>
    </div>
  );
};

export default SalesPage;

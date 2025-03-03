import styles from "./RatingAllManagers.module.scss";
import DiapazonComponent from "../../components/Diapazon";
import { Table } from "antd";
import { Link } from "react-router-dom";

const RatingAllManagersPage = () => {
  const columnsTable = [
    {
      title: "Дата создания",
      dataIndex: "date",
      sorter: (a, b) => a.date - b.date,
    },
    {
      title: "Сотрудник",
      dataIndex: "employee",
      sorter: (a, b) => a.employee - b.employee,
    },
    {
      title: "Отдел",
      dataIndex: "section",
      sorter: (a, b) => a.section - b.section,
    },
    {
      title: "Общая оценка",
      dataIndex: "totalRating",
      render: (text) => <span>{text}%</span>,
      sorter: (a, b) => a.totalRating - b.totalRating,
    },
    {
      title: "Действия",
      dataIndex: "actions",
      render: (text) => <button>{text}</button>,
    },
  ];
  const dataTable = Array.from({ length: 32 }).map((_, i) => ({
    key: i,
    date: "24.11.2024",
    employee: "Александра Беловская",
    section: ["Колл-центр", "Продажи"][Math.floor(Math.random() * 2)],
    totalRating: Math.floor(Math.random() * 100),
    actions: "Подробнее",
  }));
  return (
    <div className={styles.ratingManagers}>
      <Link to="/дашборд?tab=1" className={styles.ratingManagers_goback}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="19"
          height="11"
          viewBox="0 0 19 11"
          fill="none"
        >
          <path
            d="M17.25 5.80885L1.60161 5.80885M1.60161 5.80885L6.07258 10.0669M1.60161 5.80885L6.07258 1.55078"
            stroke="#213366"
            stroke-width="1.65"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </Link>
      <h1>Критичные оценки менеджеров</h1>
      <DiapazonComponent />
      <form action="">
        <div>
          <label htmlFor="callCenter">Колл-центр</label>
          <input type="checkbox" name="ratingType" id="callCenter" />
        </div>
        <div>
          <label htmlFor="sales">Продажи</label>
          <input type="checkbox" name="ratingType" id="sales" />
        </div>
      </form>
      <div className={styles.ratingManagers_search}>
        <input
          type="text"
          placeholder="Поиск  по имени или фамилии "
          name=""
          id=""
        />
      </div>
      <div className={styles.ratingManagers_table}>
        <Table
          scroll={{ x: true }}
          columns={columnsTable}
          dataSource={dataTable}
        />
      </div>
    </div>
  );
};

export default RatingAllManagersPage;

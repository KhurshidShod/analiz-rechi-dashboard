import { Bar, Line } from "react-chartjs-2";
import styles from "./ManagerIndividual.module.scss";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  LineElement,
  LinearScale,
  PointElement,
  Legend,
  Title,
  CategoryScale,
  BarElement,
} from "chart.js";
import Diapazon from "../../components/Diapazon";
import { Table } from "antd";
import { Link } from "react-router-dom";

ChartJS.register(
  ArcElement,
  CategoryScale,
  LineElement,
  PointElement,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ManagerIndividual = () => {
  const labelsBar = [
    "Краткое содержание беседы",
    "Приветствие",
    "Выявление потребностей",
    "Презентация",
    "Закрытие возражений",
    "Закрытие",
  ];

  const generateRandomDate = (startDate, endDate) => {
    const start = new Date(startDate).getTime();
    const end = new Date(endDate).getTime();
    const randomTime = start + Math.random() * (end - start);
    const randomDate = new Date(randomTime);

    const day = String(randomDate.getDate()).padStart(2, "0");
    const month = String(randomDate.getMonth() + 1).padStart(2, "0");
    const year = randomDate.getFullYear();
    const hours = String(randomDate.getHours()).padStart(2, "0");
    const minutes = String(randomDate.getMinutes()).padStart(2, "0");
    const seconds = String(randomDate.getSeconds()).padStart(2, "0");

    return `${day}.${month}.${year} ${hours}:${minutes}:${seconds}`;
  };

  const dataBar = {
    labels: labelsBar,
    datasets: [
      {
        label: "",
        data: [24, 31, 12, 51, 15, 62],
        backgroundColor: [
          "rgba(149, 178, 255, 1)",
          "rgba(255, 149, 151, 1)",
          "rgba(83, 198, 83, 1)",
          "rgba(209, 149, 255, 1)",
          "rgba(255, 211, 149, 1)",
          "rgba(93, 224, 218, 1)",
        ],
      },
    ],
  };
  const dataLine = {
    labels: ["27.10.24", "04.11.24", "20.11.24"],
    datasets: [
      {
        label: "",
        data: [90, 85, 50],
        backgroundColor: "rgba(255, 149, 150, 1)",
        borderColor: "rgba(255, 149, 150, 1)",
        borderWidth: 4,
        tension: 0.4,
      },
      {
        label: "Dataset 2",
        data: [87, 88, 76],
        backgroundColor: "rgba(93, 224, 218, 1)",
        borderColor: "rgba(93, 224, 218, 1)",
        borderWidth: 4,
        tension: 0.4,
      },
      {
        label: "Dataset 3",
        data: [82, 80, 85],
        backgroundColor: "rgba(255, 211, 149, 1)",
        borderColor: "rgba(255, 211, 149, 1)",
        borderWidth: 4,
        tension: 0.4,
      },
      {
        label: "Dataset 4",
        data: [75, 74, 65],
        backgroundColor: "rgba(209, 149, 255, 1)",
        borderColor: "rgba(209, 149, 255, 1)",
        borderWidth: 4,
        tension: 0.4,
      },
      {
        label: "Dataset 5",
        data: [63, 64, 60],
        backgroundColor: "rgba(149, 178, 255, 1)",
        borderColor: "rgba(149, 178, 255, 1)",
        borderWidth: 4,
        tension: 0.4,
      },
      {
        label: "Dataset 6",
        data: [55, 54, 70],
        backgroundColor: "rgba(83, 198, 83, 1)",
        borderColor: "rgba(83, 198, 83, 1)",
        borderWidth: 4,
        tension: 0.4,
      },
    ],
  };
  const optionsBar = {
    indexAxis: "y",
    scales: {
      x: {
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          color: "black",
        },
      },
    },
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  const columnsManagersSection = [
    {
      title: "№ Сделки",
      dataIndex: "number",
      sorter: {
        compare: (a, b) => a.number - b.number,
        multiple: 3,
      },
    },
    {
      title: "Дата создания",
      dataIndex: "timeCreated",
      sorter: {
        compare: (a, b) => {
          const parseDate = (dateStr) => {
            const [datePart, timePart] = dateStr.split(" ");
            const [day, month, year] = datePart.split(".");
            const [hours, minutes, seconds] = timePart.split(":");

            return new Date(
              Number.parseInt(year),
              Number.parseInt(month) - 1,
              Number.parseInt(day),
              Number.parseInt(hours),
              Number.parseInt(minutes),
              Number.parseInt(seconds)
            ).getTime();
          };

          return parseDate(a.timeCreated) - parseDate(b.timeCreated);
        },
        multiple: 3,
      },
    },
    {
      title: "Расшифровка разговора/ аудио",
      dataIndex: "audioChat",
      render: (text) => <button>{text}</button>,
      sorter: {},
    },
    {
      title: "Оценка по чек-листу",
      dataIndex: "ratingChecklist",
      render: (text) => (
        <span
          style={{
            backgroundColor:
              text > 50 ? "rgba(225, 245, 197, 1)" : "rgba(255, 232, 235, 1)",
            color: text > 50 ? "rgba(101, 149, 60, 1)" : "rgba(204, 10, 42, 1)",
          }}
        >
          {text}%
        </span>
      ),
      sorter: {},
    },
    {
      title: "Чек-лист сотрудника",
      dataIndex: "checklistEmployee",
      render: (text) => <button>{text}</button>,
      sorter: {},
    },
  ];
  const dataSourceManagersSection = Array.from({ length: 46 }).map((_, i) => ({
    key: i,
    number: Math.floor(Math.random() * 12) + 1,
    timeCreated: generateRandomDate(
      "2024-11-15T17:55:02",
      "2024-11-18T21:02:24"
    ),
    audioChat: "Открыть",
    ratingChecklist: Math.floor(Math.random() * 100),
    checklistEmployee: "Подробнее",
  }));

  return (
    <div className={styles.manager}>
      <Link to="/дашборд?tab=2" className={styles.close_manager}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="11"
          viewBox="0 0 18 11"
          fill="none"
        >
          <path
            d="M16.75 5.80885L1.10161 5.80885M1.10161 5.80885L5.57258 10.0669M1.10161 5.80885L5.57258 1.55078"
            stroke="#213366"
            stroke-width="1.65"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </Link>
      <div className={styles.manager_top}>
        <div>
          <h1>Александра Беловская</h1>
          <h2>Колл-центр</h2>
        </div>
        <button>
          Скачать отчет{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
          >
            <path
              d="M7.16797 10L10.5013 13.3333L13.8346 10"
              stroke="#171739"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.5013 2.5V13.3333M4.66797 17.5H16.3346"
              stroke="#171739"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      <div className={styles.manager_stats}>
        <div>
          <p>Общая оценка менеджера</p>
          <h2>48%</h2>
        </div>
        <div>
          <p>Сделок совершено</p>
          <h2>220</h2>
        </div>
        <div>
          <p>Сделок прервано</p>
          <h2>140</h2>
        </div>
      </div>
      <div className={styles.manager_graphs}>
        <div>
          <div>
            <h2>Среднее по оценкам</h2>
            <select name="" id="">
              <option value="">За 30 дней</option>
              <option value="">За 30 дней</option>
            </select>
          </div>
          <Bar data={dataBar} options={optionsBar} />
        </div>
        <div>
          <h2>Среднее по оценкам в динамике</h2>
          <Line
            options={{
              plugins: {
                legend: {
                  display: false,
                },
              },
              scales: {
                y: {
                  min: 50,
                  max: 100,
                  ticks: {
                    callback: function (value) {
                      return value + "%";
                    },
                    font: {
                      size: 14,
                      weight: "400",
                    },
                    color: "#213366",
                    padding: 10,
                  },
                },
                x: {
                  ticks: {
                    font: {
                      size: 14,
                      weight: "400",
                    },
                    color: "#213366",
                    padding: 10,
                  },
                },
              },
            }}
            data={dataLine}
          />
        </div>
      </div>
      <Diapazon />
      <div className={styles.manager_table}>
        <Table
          bordered={true}
          columns={columnsManagersSection}
          dataSource={dataSourceManagersSection}
          scroll={{ x: true }}
        />
      </div>
    </div>
  );
};

export default ManagerIndividual;

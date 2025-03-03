import styles from "./EffectivityBySections.module.scss";
import DiapazonComponent from "../../components/Diapazon";
import { Table } from "antd";
import { Line } from "react-chartjs-2";
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
import { Link } from "react-router-dom";
import EffectivityBySectionDetailedModal from "../../components/EffectivityBySectionDetailedModal";
import { useState } from "react";

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

const EffectivityBySectionsPage = () => {

  const [isModalOpened, setIsModalOpened] = useState(false)

  const columnsTable = [
    {
      title: "Дата",
      dataIndex: "date",
    },
    {
      title: "Отдел",
      dataIndex: "section",
    },
    {
      title: "Менеджеры",
      dataIndex: "managers",
    },
    {
      title: "Совершено сделок",
      dataIndex: "completedTransactions",
    },
    {
      title: "Сброшено звонков",
      dataIndex: "droppedCalls",
    },
    {
      title: "Прерван разговор",
      dataIndex: "interruptedConversations",
    },
    {
      title: "Общая оценка",
      dataIndex: "totalRating",
      render: (text) => <span>{text}%</span>,
    },
    {
      title: "",
      dataIndex: "freeSpace",
      render: (text) => <button onClick={() => setIsModalOpened(true)}>{text}</button>,
    },
  ];
  const dataTable = Array.from({ length: 2 }).map((_, i) => ({
    key: i,
    date: "24.11.2024",
    section: "Продажи",
    managers: "15",
    completedTransactions: "35",
    droppedCalls: "2",
    interruptedConversations: "2",
    totalRating: "65",
    freeSpace: "Подробнее",
  }));

  const dataLineChart = {
    labels: [
      "23.10.24",
      "24.10.24",
      "25.10.24",
      "28.10.24",
      "29.10.24",
      "30.10.24",
      "31.10.24",
      "1.11.24",
      "4.11.24",
      "5.11.24",
      "6.11.24",
      "7.11.24",
      "8.11.24",
      "11.11.24",
      "12.11.24",
      "13.11.24",
      "14.11.24",
      "15.11.24",
      "18.11.24",
    ],
    datasets: [
      {
        label: "Продажи",
        data: [
          55, 70, 85, 90, 88, 92, 87, 89, 93, 95, 91, 88, 86, 89, 90, 92, 93,
          95, 98,
        ],
        borderColor: "#101828",
        backgroundColor: "#101828",
        pointBackgroundColor: "#101828",
        pointBorderColor: "#fff",
        borderWidth: 2,
        tension: 0.4,
      },
      {
        label: "Колл-центр",
        data: [
          60, 75, 70, 72, 68, 74, 67, 65, 78, 80, 76, 70, 74, 68, 71, 72, 74,
          70, 72,
        ],
        borderColor: "#6366F1",
        backgroundColor: "#6366F1",
        pointBackgroundColor: "#6366F1",
        pointBorderColor: "#fff",
        borderWidth: 2,
        tension: 0.4,
      },
    ],
  };

  const optionsLineChart = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
        labels: {
          color: "#213366",
          font: {
            size: 14,
            weight: "bold",
          },
        },
      },
    },
    scales: {
      y: {
        min: 50,
        max: 100,
        ticks: {
          stepSize: 5,
          callback: (value) => `${value}%`,
          color: "#213366",
        },
        grid: {
          display: false,
        },
      },
      x: {
        ticks: {
          color: "#213366",
        },
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <div className={styles.effectivity}>
      <EffectivityBySectionDetailedModal isOpened={isModalOpened} setIsOpened={setIsModalOpened} />
      <Link className={styles.go_back} to="/дашборд?tab=1">
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
      <h1>Эффективность по отделам</h1>
      <DiapazonComponent />
      <div className={styles.effectivity_table}>
        <Table
          scroll={{ x: true }}
          columns={columnsTable}
          dataSource={dataTable}
        />
      </div>
      <h1>Динамика эффективности отделов</h1>
      <div className={styles.effectivity_line}>
        <Line data={dataLineChart} options={optionsLineChart} />
      </div>
    </div>
  );
};

export default EffectivityBySectionsPage;

import { useEffect, useState } from "react";
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
import { Table } from "antd";

import { Doughnut, Bar, Line } from "react-chartjs-2";

import styles from "./Dashboard.module.scss";

import FullTransactionModal from "../../components/FullTransactionModal";
import { Link, useSearchParams } from "react-router-dom";
import { render } from "sass";
import DiapazonComponent from "../../components/Diapazon";
import { toast } from "react-toastify";

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

const DashboardPage = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [isTransactionModalOpen, setIsTransactionModalOpen] = useState(false);
  const [searchParams] = useSearchParams();
  const tabParam = searchParams.get("tab");
  
  const columnsManagersSection = [
    {
      title: "ФИО",
      dataIndex: "fio",
    },
    {
      title: "Краткое содержание беседы",
      dataIndex: "shortMeaning",
      render: (text) => <span className={styles.table_span}>{text}%</span>,
    },
    {
      title: "Приветствие",
      dataIndex: "greetings",
      render: (text) => <span>{text}%</span>,
    },
    {
      title: "Выявление потребностей",
      dataIndex: "needsIdentification",
      render: (text) => <span>{text}%</span>,
    },
    {
      title: "Презентация",
      dataIndex: "presentation",
      render: (text) => <span>{text}%</span>,
    },
    {
      title: "Закрытие возражений",
      dataIndex: "closingObjections",
      render: (text) => <span>{text}%</span>,
    },
    {
      title: "Закрытие",
      dataIndex: "closing",
      render: (text) => <span>{text}%</span>,
    },
    {
      title: "",
      dataIndex: "more",
      render: (text) => <Link to="/менежер/александра-белковская">{text}</Link>,
    },
  ];

  const dataSourceManagersSection = Array.from({ length: 46 }).map((_, i) => ({
    key: i,
    fio: "Александра Беловская",
    shortMeaning: "35",
    greetings: "35",
    needsIdentification: "35",
    presentation: "35",
    closingObjections: "35",
    closing: "35",
    more: "Подробнее",
  }));

  const dataObjectionsSecondLine = {
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
        label: "Интерес к списанию долгов",
        data: [
          72, 78, 85, 88, 90, 86, 84, 82, 80, 78, 75, 72, 70, 68, 65, 63, 60,
          58, 55,
        ],
        borderColor: "#6366F1",
        backgroundColor: "#6366F1",
        pointBackgroundColor: "#6366F1",
        borderWidth: 2,
        tension: 0.4,
      },
      {
        label: "Интерес к списанию долгов",
        data: [
          60, 65, 70, 75, 77, 79, 76, 74, 72, 70, 68, 65, 63, 60, 58, 55, 53,
          51, 50,
        ],
        borderColor: "#F43F5E",
        backgroundColor: "#F43F5E",
        pointBackgroundColor: "#F43F5E",
        borderWidth: 2,
        tension: 0.4,
      },
      {
        label: "Интерес к списанию долгов",
        data: [
          85, 88, 84, 82, 80, 78, 76, 75, 73, 71, 70, 68, 67, 65, 63, 62, 60,
          58, 57,
        ],
        borderColor: "#10B981",
        backgroundColor: "#10B981",
        pointBackgroundColor: "#10B981",
        borderWidth: 2,
        tension: 0.4,
      },
      {
        label: "Интерес к списанию долгов",
        data: [
          65, 63, 70, 72, 74, 76, 75, 73, 70, 67, 65, 63, 62, 60, 58, 55, 53,
          51, 50,
        ],
        borderColor: "#A78BFA",
        backgroundColor: "#A78BFA",
        pointBackgroundColor: "#A78BFA",
        borderWidth: 2,
        tension: 0.4,
      },
      {
        label: "Интерес к списанию долгов",
        data: [
          90, 92, 88, 86, 85, 87, 89, 90, 91, 92, 90, 88, 86, 85, 83, 82, 80,
          78, 76,
        ],
        borderColor: "#06B6D4",
        backgroundColor: "#06B6D4",
        pointBackgroundColor: "#06B6D4",
        borderWidth: 2,
        tension: 0.4,
      },
    ],
  };
  const optionsObjectionsFirstLine = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        labels: {
          color: "#101828",
          font: {
            size: 12,
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
          color: "#101828",
        },
        grid: {
          color: "#E5E7EB",
        },
      },
      x: {
        ticks: {
          color: "#101828",
        },
        grid: {
          display: false,
        },
      },
    },
  };
  const dataObjectionsFirstLine = {
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
        label: "Интерес к списанию долгов",
        data: [
          70, 75, 80, 85, 90, 87, 83, 78, 85, 82, 80, 77, 75, 72, 70, 68, 66,
          64, 62,
        ],
        borderColor: "#6366F1",
        backgroundColor: "#6366F1",
        pointBackgroundColor: "#6366F1",
        borderWidth: 2,
        tension: 0.4,
      },
      {
        label: "Интерес к списанию долгов",
        data: [
          60, 65, 70, 75, 78, 80, 77, 74, 72, 70, 67, 65, 63, 60, 58, 55, 53,
          50, 52,
        ],
        borderColor: "#F43F5E",
        backgroundColor: "#F43F5E",
        pointBackgroundColor: "#F43F5E",
        borderWidth: 2,
        tension: 0.4,
      },
      {
        label: "Интерес к списанию долгов",
        data: [
          85, 82, 87, 90, 88, 86, 84, 83, 81, 79, 77, 75, 74, 72, 70, 68, 67,
          65, 63,
        ],
        borderColor: "#10B981",
        backgroundColor: "#10B981",
        pointBackgroundColor: "#10B981",
        borderWidth: 2,
        tension: 0.4,
      },
      {
        label: "Интерес к списанию долгов",
        data: [
          65, 63, 70, 72, 74, 76, 75, 73, 70, 67, 65, 63, 62, 60, 58, 55, 53,
          51, 50,
        ],
        borderColor: "#A78BFA",
        backgroundColor: "#A78BFA",
        pointBackgroundColor: "#A78BFA",
        borderWidth: 2,
        tension: 0.4,
      },
      {
        label: "Интерес к списанию долгов",
        data: [
          90, 92, 88, 86, 85, 87, 89, 90, 91, 92, 90, 88, 86, 85, 83, 82, 80,
          78, 76,
        ],
        borderColor: "#06B6D4",
        backgroundColor: "#06B6D4",
        pointBackgroundColor: "#06B6D4",
        borderWidth: 2,
        tension: 0.4,
      },
    ],
  };
  const optionsObjectionsSecondLine = optionsObjectionsFirstLine;
  const dataDoughnut = {
    datasets: [
      {
        label: "# of Votes",
        data: [35, 65],
        backgroundColor: ["rgba(87, 124, 222, 1)", "rgba(33, 51, 102, 1)"],
        borderWidth: 1,
        borderColor: ["rgba(87, 124, 222, 1)", "rgba(33, 51, 102, 1)"],
      },
    ],
  };
  const optionsManagersBar = {
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
  const labelsBar = [
    "Краткое содержание беседы",
    "Приветствие",
    "Выявление потребностей",
    "Презентация",
    "Закрытие возражений",
    "Закрытие",
  ];
  const labelsManagersBar = [
    "Александра Беловская",
    "Александра Беловская",
    "Александра Беловская",
    "Александра Беловская",
    "Александра Беловская",
    "Александра Беловская",
  ];
  const dataBar = {
    labels: labelsBar,
    datasets: [
      {
        label: "",
        data: [64, 91, 55, 74, 83, 89],
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
  const dataManagersBar = {
    labels: labelsManagersBar,
    datasets: [
      {
        label: "",
        data: [64, 91, 55, 74, 83, 89],
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
  const dataManagersLine = {
    labels: [
      "23.10.24",
      "24.10.24",
      "25.10.24",
      "23.10.24",
      "24.10.24",
      "25.10.24",
      "23.10.24",
      "24.10.24",
      "25.10.24",
      "23.10.24",
      "24.10.24",
      "25.10.24",
      "23.10.24",
      "24.10.24",
      "25.10.24",
      "23.10.24",
      "24.10.24",
      "25.10.24",
      "25.10.24",
    ],
    datasets: [
      {
        label: "Александра Беловская",
        data: [
          80, 85, 95, 86, 95, 85, 93, 90, 88, 97.5, 90, 84, 89, 85, 91, 84, 93,
          84, 90,
        ],
        backgroundColor: "rgba(93, 224, 218, 1)",
        borderColor: "rgba(93, 224, 218, 1)",
        pointBackgroundColor: "rgba(93, 224, 218, 1)",
        pointBorderColor: "#fff",
        borderWidth: 3,
        tension: 0.5,
        radius: 5,
      },
      {
        label: "Александра Беловская",
        data: [
          65, 76, 55, 57, 87, 86, 80, 90, 91, 92.5, 87, 83, 85, 90, 91, 84, 93,
          84, 90,
        ],
        backgroundColor: "rgba(149, 255, 149, 1)",
        borderColor: "rgba(149, 255, 149, 1)",
        pointBackgroundColor: "rgba(149, 255, 149, 1)",
        pointBorderColor: "#fff",
        borderWidth: 3,
        tension: 0.5,
        radius: 5,
      },
      {
        label: "Александра Беловская",
        data: [
          60, 65, 70, 66, 71, 65, 72, 60, 78, 65.5, 76, 65, 78, 60, 78, 58, 76,
          65, 78,
        ],
        backgroundColor: "rgba(149, 178, 255, 1)",
        borderColor: "rgba(149, 178, 255, 1)",
        pointBackgroundColor: "rgba(149, 178, 255, 1)",
        pointBorderColor: "#fff",
        borderWidth: 3,
        tension: 0.5,
        radius: 5,
      },
      {
        label: "Александра Беловская",
        data: [
          50, 55, 60, 63, 56, 64, 55, 60, 50, 65.5, 52, 67, 50, 72, 78, 65, 55,
          65, 78,
        ],
        backgroundColor: "rgba(209, 149, 255, 1)",
        borderColor: "rgba(209, 149, 255, 1)",
        pointBackgroundColor: "rgba(209, 149, 255, 1)",
        pointBorderColor: "#fff",
        borderWidth: 3,
        tension: 0.5,
        radius: 5,
      },
      {
        label: "Александра Беловская",
        data: [
          75, 80, 85, 80, 86, 80, 87, 79, 86, 78.5, 80, 70, 80, 75, 85, 65, 75,
          85, 78,
        ],
        backgroundColor: "rgba(255, 211, 149, 1)",
        borderColor: "rgba(255, 211, 149, 1)",
        backgroundColor: "rgba(255, 211, 149, 1)",
        pointBackgroundColor: "rgba(255, 211, 149, 1)",
        pointBorderColor: "#fff",
        borderWidth: 3,
        tension: 0.5,
        radius: 5,
      },
      {
        label: "Александра Беловская",
        data: [
          50, 55, 60, 65, 70, 75, 70, 65, 60, 55.5, 50, 60, 65, 70, 75, 85, 90,
          85, 78,
        ],
        backgroundColor: "rgba(255, 149, 150, 1)",
        borderColor: "rgba(255, 149, 150, 1)",
        borderColor: "#6366F1",
        backgroundColor: "#6366F1",
        pointBackgroundColor: "#6366F1",
        pointBorderColor: "#fff",
        borderWidth: 3,
        tension: 0.5,
        radius: 5,
      },
    ],
  };
  useEffect(() => {
    setActiveTab(parseInt(tabParam));
  }, [searchParams]);
  return (
    <div className={styles.dashboard}>
      <FullTransactionModal
        isTransactionModalOpen={isTransactionModalOpen}
        setIsTransactionModalOpen={setIsTransactionModalOpen}
      />
      <h1>Дашборд</h1>
      <ul className={styles.dashboard_tabs}>
        <li className={activeTab === 1 ? styles.active : ""}>
          <Link onClick={() => setActiveTab(1)} to="/дашборд?tab=1">
            Все
          </Link>
        </li>
        <li className={activeTab === 2 ? styles.active : ""}>
          <Link onClick={() => setActiveTab(2)} to="/дашборд?tab=2">
            Менеджеры
          </Link>
        </li>
        <li className={activeTab === 3 ? styles.active : ""}>
          <Link onClick={() => setActiveTab(3)} to="/дашборд?tab=3">
            Возражения
          </Link>
        </li>
        <li className={activeTab === 4 ? styles.active : ""}>
          <Link onClick={() => setActiveTab(4)} to="/дашборд?tab=4">
            Потребности
          </Link>
        </li>
        <li className={activeTab === 5 ? styles.active : ""}>
          <Link onClick={() => setActiveTab(5)} to="/дашборд?tab=5">
            Плюсы
          </Link>
        </li>
        <li className={activeTab === 6 ? styles.active : ""}>
          <Link onClick={() => setActiveTab(6)} to="/дашборд?tab=6">
            Минусы
          </Link>
        </li>
      </ul>
      <DiapazonComponent />
      <div className={styles.dashboard_contents}>
        <div
          className={`${styles.content} ${
            activeTab === 1 ? styles.visible : ""
          }`}
        >
          <div className={styles.content_effectiveness}>
            <div className={styles.content_effectiveness_tab}>
              <h3>Эффективность по отделам</h3>
              <div>
                <Doughnut data={dataDoughnut} />
                <div>
                  <div>
                    <span>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M12 6.6C11.7613 6.6 11.5324 6.69482 11.3636 6.8636C11.1948 7.03239 11.1 7.2613 11.1 7.5V16.5C11.1 16.7387 11.1948 16.9676 11.3636 17.1364C11.5324 17.3052 11.7613 17.4 12 17.4C12.2387 17.4 12.4676 17.3052 12.6364 17.1364C12.8052 16.9676 12.9 16.7387 12.9 16.5V7.5C12.9 7.2613 12.8052 7.03239 12.6364 6.8636C12.4676 6.69482 12.2387 6.6 12 6.6ZM7.5 12C7.2613 12 7.03239 12.0948 6.8636 12.2636C6.69482 12.4324 6.6 12.6613 6.6 12.9V16.5C6.6 16.7387 6.69482 16.9676 6.8636 17.1364C7.03239 17.3052 7.2613 17.4 7.5 17.4C7.73869 17.4 7.96761 17.3052 8.1364 17.1364C8.30518 16.9676 8.4 16.7387 8.4 16.5V12.9C8.4 12.6613 8.30518 12.4324 8.1364 12.2636C7.96761 12.0948 7.73869 12 7.5 12ZM16.5 10.2C16.2613 10.2 16.0324 10.2948 15.8636 10.4636C15.6948 10.6324 15.6 10.8613 15.6 11.1V16.5C15.6 16.7387 15.6948 16.9676 15.8636 17.1364C16.0324 17.3052 16.2613 17.4 16.5 17.4C16.7387 17.4 16.9676 17.3052 17.1364 17.1364C17.3052 16.9676 17.4 16.7387 17.4 16.5V11.1C17.4 10.8613 17.3052 10.6324 17.1364 10.4636C16.9676 10.2948 16.7387 10.2 16.5 10.2ZM18.3 3H5.7C4.98392 3 4.29716 3.28446 3.79081 3.79081C3.28446 4.29716 3 4.98392 3 5.7V18.3C3 19.0161 3.28446 19.7028 3.79081 20.2092C4.29716 20.7155 4.98392 21 5.7 21H18.3C19.0161 21 19.7028 20.7155 20.2092 20.2092C20.7155 19.7028 21 19.0161 21 18.3V5.7C21 4.98392 20.7155 4.29716 20.2092 3.79081C19.7028 3.28446 19.0161 3 18.3 3ZM19.2 18.3C19.2 18.5387 19.1052 18.7676 18.9364 18.9364C18.7676 19.1052 18.5387 19.2 18.3 19.2H5.7C5.46131 19.2 5.23239 19.1052 5.0636 18.9364C4.89482 18.7676 4.8 18.5387 4.8 18.3V5.7C4.8 5.46131 4.89482 5.23239 5.0636 5.0636C5.23239 4.89482 5.46131 4.8 5.7 4.8H18.3C18.5387 4.8 18.7676 4.89482 18.9364 5.0636C19.1052 5.23239 19.2 5.46131 19.2 5.7V18.3Z"
                            fill="white"
                          />
                        </svg>
                      </span>
                      Продажи
                    </span>
                    <span>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M8.675 14.9C9.01315 14.9 9.33745 14.7657 9.57656 14.5266C9.81567 14.2875 9.95 13.9632 9.95 13.625C9.95415 13.5826 9.95415 13.5399 9.95 13.4975L12.3215 11.126H12.517H12.7125L14.081 12.4945C14.081 12.4945 14.081 12.537 14.081 12.5625C14.081 12.9007 14.2153 13.225 14.4544 13.4641C14.6935 13.7032 15.0178 13.8375 15.356 13.8375C15.6942 13.8375 16.0185 13.7032 16.2576 13.4641C16.4967 13.225 16.631 12.9007 16.631 12.5625V12.4945L19.725 9.375C19.9772 9.375 20.2237 9.30022 20.4334 9.16012C20.643 9.02003 20.8064 8.8209 20.9029 8.58792C20.9994 8.35495 21.0247 8.09859 20.9755 7.85126C20.9263 7.60393 20.8049 7.37675 20.6266 7.19844C20.4482 7.02013 20.2211 6.89869 19.9737 6.8495C19.7264 6.8003 19.4701 6.82555 19.2371 6.92205C19.0041 7.01856 18.805 7.18198 18.6649 7.39165C18.5248 7.60132 18.45 7.84783 18.45 8.1C18.4459 8.1424 18.4459 8.1851 18.45 8.2275L15.3815 11.296H15.2455L13.775 9.8C13.775 9.46185 13.6407 9.13755 13.4016 8.89844C13.1625 8.65933 12.8382 8.525 12.5 8.525C12.1618 8.525 11.8375 8.65933 11.5984 8.89844C11.3593 9.13755 11.225 9.46185 11.225 9.8L8.675 12.35C8.33685 12.35 8.01255 12.4843 7.77344 12.7234C7.53433 12.9625 7.4 13.2868 7.4 13.625C7.4 13.9632 7.53433 14.2875 7.77344 14.5266C8.01255 14.7657 8.33685 14.9 8.675 14.9ZM20.15 18.3H5.7V3.85C5.7 3.62457 5.61045 3.40837 5.45104 3.24896C5.29163 3.08955 5.07543 3 4.85 3C4.62457 3 4.40837 3.08955 4.24896 3.24896C4.08955 3.40837 4 3.62457 4 3.85V19.15C4 19.3754 4.08955 19.5916 4.24896 19.751C4.40837 19.9104 4.62457 20 4.85 20H20.15C20.3754 20 20.5916 19.9104 20.751 19.751C20.9104 19.5916 21 19.3754 21 19.15C21 18.9246 20.9104 18.7084 20.751 18.549C20.5916 18.3896 20.3754 18.3 20.15 18.3Z"
                            fill="white"
                          />
                        </svg>
                      </span>
                      Колл-центр
                    </span>
                  </div>
                  <Link to="/эффективность">Подробнее</Link>
                </div>
              </div>
            </div>
            <div className={styles.content_effectiveness_tab}>
              <div>
                <p>Количество записей за период</p>
                <h1>34</h1>
              </div>
              <div>
                <p>Общая оценка</p>
                <h1>62,8%</h1>
              </div>
            </div>
            <div className={styles.content_effectiveness_tab}>
              <div className={styles.content_effectiveness_tab_title}>
                <h3>Критичные оценки менеджеров</h3>
                <Link to="/оценки-менеджеров">Смотреть всё</Link>
              </div>
              <div className={styles.content_effectiveness_tab_managers}>
                <div>
                  <div>
                    <h3>Александра Беловская</h3>
                    <p>Колл-центр</p>
                  </div>
                  <div>
                    <span>35%</span>
                    <button onClick={() => setIsTransactionModalOpen(true)}>
                      Подробнее
                    </button>
                  </div>
                </div>
                <div>
                  <div>
                    <h3>Александра Беловская</h3>
                    <p>Колл-центр</p>
                  </div>
                  <div>
                    <span>35%</span>
                    <button onClick={() => setIsTransactionModalOpen(true)}>
                      Подробнее
                    </button>
                  </div>
                </div>
                <div>
                  <div>
                    <h3>Александра Беловская</h3>
                    <p>Колл-центр</p>
                  </div>
                  <div>
                    <span>35%</span>
                    <button onClick={() => setIsTransactionModalOpen(true)}>
                      Подробнее
                    </button>
                  </div>
                </div>
                <div>
                  <div>
                    <h3>Александра Беловская</h3>
                    <p>Колл-центр</p>
                  </div>
                  <div>
                    <span>35%</span>
                    <button onClick={() => setIsTransactionModalOpen(true)}>
                      Подробнее
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.content_estimates}>
            <h3>По оценкам отдела</h3>
            <div className={styles.content_estimates_tabs}>
              <button>Продажи</button>
              <button>Колл-центр</button>
            </div>
            <div className={styles.content_estimates_content}>
              <div className={styles.content_estimates_content_alltime}>
                <h3>Среднее по оценкам за все время</h3>
                <Bar options={optionsManagersBar} data={dataManagersBar} />
              </div>
              <div className={styles.content_estimates_content_dynamic}>
                <h3>Среднее по оценкам в динамике</h3>
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
          </div>
        </div>
        <div
          className={`${styles.content} ${
            activeTab === 2 ? styles.visible : ""
          }`}
        >
          <div className={styles.content_average}>
            <div className={styles.content_average_period}>
              <h3>Среднее по менеджерам за период</h3>
              <Bar options={optionsManagersBar} data={dataManagersBar} />
            </div>
            <div className={styles.content_average_dynamic}>
              <h3>Среднее по менеджерам в динамике</h3>
              <Line
                options={{
                  plugins: {
                    legend: {
                      display: true,
                      position: "bottom",
                      labels: {
                        usePointStyle: true,
                        pointStyle: "circle",
                        boxWidth: 5,
                        boxHeight: 5,
                        padding: 5,
                        font: {
                          size: 12,
                          weight: "400",
                        },
                        color: "#213366",
                      },
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
                          size: 12,
                          weight: "400",
                        },
                        color: "#213366",
                        padding: 10,
                      },
                    },
                    x: {
                      ticks: {
                        font: {
                          size: 12,
                          weight: "400",
                        },
                        color: "#213366",
                        padding: 5,
                      },
                    },
                  },
                }}
                data={dataManagersLine}
              />
            </div>
          </div>
          <div className={styles.content_sections}>
            <h1>Показатели менеджеров по отделу</h1>
            <div className={styles.content_sections_tabs}>
              <button>Продажи</button>
              <button>Колл-центр</button>
            </div>
            <div className={styles.content_sections_search}>
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
                    d="M21.7094 20.2904L17.9994 16.6104C19.4395 14.8148 20.1369 12.5357 19.9482 10.2417C19.7595 7.94769 18.6991 5.81318 16.9849 4.27704C15.2708 2.7409 13.0332 1.9199 10.7323 1.98286C8.43145 2.04582 6.24214 2.98795 4.61456 4.61553C2.98698 6.24311 2.04485 8.43243 1.98189 10.7333C1.91893 13.0342 2.73992 15.2718 4.27606 16.9859C5.8122 18.7001 7.94672 19.7605 10.2407 19.9492C12.5347 20.1379 14.8138 19.4405 16.6094 18.0004L20.2894 21.6804C20.3824 21.7741 20.493 21.8485 20.6148 21.8993C20.7367 21.9501 20.8674 21.9762 20.9994 21.9762C21.1314 21.9762 21.2621 21.9501 21.384 21.8993C21.5059 21.8485 21.6165 21.7741 21.7094 21.6804C21.8897 21.4939 21.9904 21.2447 21.9904 20.9854C21.9904 20.7261 21.8897 20.4769 21.7094 20.2904ZM10.9994 18.0004C9.61495 18.0004 8.26157 17.5899 7.11042 16.8207C5.95928 16.0515 5.06207 14.9583 4.53226 13.6792C4.00245 12.4001 3.86382 10.9926 4.13392 9.63476C4.40402 8.27689 5.0707 7.02961 6.04967 6.05065C7.02864 5.07168 8.27592 4.40499 9.63378 4.1349C10.9917 3.8648 12.3991 4.00342 13.6782 4.53324C14.9573 5.06305 16.0505 5.96026 16.8197 7.1114C17.5889 8.26255 17.9994 9.61592 17.9994 11.0004C17.9994 12.8569 17.2619 14.6374 15.9492 15.9501C14.6364 17.2629 12.8559 18.0004 10.9994 18.0004Z"
                    fill="#A9A9B9"
                  />
                </g>
              </svg>
            </div>
            <div className={styles.content_sections_table}>
              <Table
                scroll={{ x: true }}
                bordered={true}
                columns={columnsManagersSection}
                dataSource={dataSourceManagersSection}
              />
            </div>
          </div>
        </div>
        <div
          className={`${styles.content} ${
            activeTab === 3 ? styles.visible : ""
          }`}
        >
          <div className={styles.content_objections}>
            <div className={styles.content_objections_tab}>
              <button>Продажи</button>
              <button>Колл-центр</button>
            </div>
            <h1>Динамика по возражениям</h1>
            <div className={styles.content_objections_graphs}>
              <div>
                <h3>Возражение 1</h3>
                <Line
                  options={{
                    plugins: {
                      legend: {
                        display: true,
                        position: "bottom",
                        labels: {
                          usePointStyle: true,
                          pointStyle: "circle",
                          boxWidth: 5,
                          boxHeight: 5,
                          padding: 5,
                          font: {
                            size: 12,
                            weight: "400",
                          },
                          color: "#213366",
                        },
                      },
                    },
                    scales: {
                      y: {
                        grid: {
                          display: false,
                        },
                        min: 50,
                        max: 100,
                        ticks: {
                          callback: function (value) {
                            return value + "%";
                          },
                          font: {
                            size: 12,
                            weight: "400",
                          },
                          color: "#213366",
                          padding: 10,
                        },
                      },
                      x: {
                        grid: {
                          display: false,
                        },
                        ticks: {
                          font: {
                            size: 12,
                            weight: "400",
                          },
                          color: "#213366",
                          padding: 5,
                        },
                      },
                    },
                  }}
                  data={dataObjectionsFirstLine}
                />
                <button onClick={() => {
                  toast.success("Документ успешно загружен")
                }}>
                  Скачать отчет pdf{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="20"
                    viewBox="0 0 21 20"
                    fill="none"
                  >
                    <path
                      d="M7.16675 10L10.5001 13.3333L13.8334 10"
                      stroke="#171739"
                      stroke-width="1.8"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10.5001 2.5V13.3333M4.66675 17.5H16.3334"
                      stroke="#171739"
                      stroke-width="1.8"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <div>
                <h3>Возражение 2</h3>
                <Line
                  options={{
                    plugins: {
                      legend: {
                        display: true,
                        position: "bottom",
                        labels: {
                          usePointStyle: true,
                          pointStyle: "circle",
                          boxWidth: 5,
                          boxHeight: 5,
                          padding: 10,
                          font: {
                            size: 12,
                            weight: "400",
                          },
                          color: "#213366",
                        },
                      },
                    },
                    scales: {
                      y: {
                        grid: {
                          display: false,
                        },
                        min: 50,
                        max: 100,
                        ticks: {
                          callback: function (value) {
                            return value + "%";
                          },
                          font: {
                            size: 12,
                            weight: "400",
                          },
                          color: "#213366",
                          padding: 1,
                        },
                      },
                      x: {
                        grid: {
                          display: false,
                        },
                        ticks: {
                          font: {
                            size: 12,
                            weight: "400",
                          },
                          color: "#213366",
                          padding: 1,
                        },
                      },
                    },
                  }}
                  data={dataObjectionsSecondLine}
                />
                <button onClick={() => {
                  toast.success("Документ успешно загружен")
                }}>
                  Скачать отчет pdf{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="20"
                    viewBox="0 0 21 20"
                    fill="none"
                  >
                    <path
                      d="M7.16675 10L10.5001 13.3333L13.8334 10"
                      stroke="#171739"
                      stroke-width="1.8"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10.5001 2.5V13.3333M4.66675 17.5H16.3334"
                      stroke="#171739"
                      stroke-width="1.8"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${styles.content} ${
            activeTab === 4 ? styles.visible : ""
          }`}
        >
          <div className={styles.content_objections}>
            <div className={styles.content_objections_tab}>
              <button>Продажи</button>
              <button>Колл-центр</button>
            </div>
            <h1>Динамика по возражениям</h1>
            <div className={styles.content_objections_graphs}>
              <div>
                <h3>Возражение 1</h3>
                <Line
                  options={{
                    plugins: {
                      legend: {
                        display: true,
                        position: "bottom",
                        labels: {
                          usePointStyle: true,
                          pointStyle: "circle",
                          boxWidth: 5,
                          boxHeight: 5,
                          padding: 5,
                          font: {
                            size: 12,
                            weight: "400",
                          },
                          color: "#213366",
                        },
                      },
                    },
                    scales: {
                      y: {
                        grid: {
                          display: false,
                        },
                        min: 50,
                        max: 100,
                        ticks: {
                          callback: function (value) {
                            return value + "%";
                          },
                          font: {
                            size: 12,
                            weight: "400",
                          },
                          color: "#213366",
                          padding: 10,
                        },
                      },
                      x: {
                        grid: {
                          display: false,
                        },
                        ticks: {
                          font: {
                            size: 12,
                            weight: "400",
                          },
                          color: "#213366",
                          padding: 5,
                        },
                      },
                    },
                  }}
                  data={dataObjectionsFirstLine}
                />
                <button onClick={() => {
                  toast.success("Документ успешно загружен")
                }}>
                  Скачать отчет pdf{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="20"
                    viewBox="0 0 21 20"
                    fill="none"
                  >
                    <path
                      d="M7.16675 10L10.5001 13.3333L13.8334 10"
                      stroke="#171739"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10.5001 2.5V13.3333M4.66675 17.5H16.3334"
                      stroke="#171739"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${styles.content} ${
            activeTab === 5 ? styles.visible : ""
          }`}
        >
          <div className={styles.content_objections}>
            <div className={styles.content_objections_tab}>
              <button>Продажи</button>
              <button>Колл-центр</button>
            </div>
            <h1>Динамика по плюсам</h1>
            <div className={styles.content_objections_graphs}>
              <select name="" id="">
                <option value="">Все</option>
                <option value="">Алёна Дэзик</option>
                <option value="">Дмитрий Хуков</option>
                <option value="">Дмитрий Хуков</option>
                <option value="">Дмитрий Хуков</option>
              </select>
              <div>
                <h3>Плюс</h3>
                <Line
                  options={{
                    plugins: {
                      legend: {
                        display: true,
                        position: "bottom",
                        labels: {
                          usePointStyle: true,
                          pointStyle: "circle",
                          boxWidth: 5,
                          boxHeight: 5,
                          padding: 5,
                          font: {
                            size: 12,
                            weight: "400",
                          },
                          color: "#213366",
                        },
                      },
                    },
                    scales: {
                      y: {
                        grid: {
                          display: false,
                        },
                        min: 50,
                        max: 100,
                        ticks: {
                          callback: function (value) {
                            return value + "%";
                          },
                          font: {
                            size: 12,
                            weight: "400",
                          },
                          color: "#213366",
                          padding: 10,
                        },
                      },
                      x: {
                        grid: {
                          display: false,
                        },
                        ticks: {
                          font: {
                            size: 12,
                            weight: "400",
                          },
                          color: "#213366",
                          padding: 5,
                        },
                      },
                    },
                  }}
                  data={dataObjectionsFirstLine}
                />
                <button onClick={() => {
                  toast.success("Документ успешно загружен")
                }}>
                  Скачать отчет pdf{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="20"
                    viewBox="0 0 21 20"
                    fill="none"
                  >
                    <path
                      d="M7.16675 10L10.5001 13.3333L13.8334 10"
                      stroke="#171739"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10.5001 2.5V13.3333M4.66675 17.5H16.3334"
                      stroke="#171739"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${styles.content} ${
            activeTab === 6 ? styles.visible : ""
          }`}
        >
          <div className={styles.content_objections}>
            <div className={styles.content_objections_tab}>
              <button>Продажи</button>
              <button>Колл-центр</button>
            </div>
            <h1>Динамика минусам</h1>
            <div className={styles.content_objections_graphs}>
              <select name="" id="">
                <option value="">Все</option>
                <option value="">Алёна Дэзик</option>
                <option value="">Дмитрий Хуков</option>
                <option value="">Дмитрий Хуков</option>
                <option value="">Дмитрий Хуков</option>
              </select>
              <div>
                <h3>Минусы</h3>
                <Line
                  options={{
                    plugins: {
                      legend: {
                        display: true,
                        position: "bottom",
                        labels: {
                          usePointStyle: true,
                          pointStyle: "circle",
                          boxWidth: 5,
                          boxHeight: 5,
                          padding: 5,
                          font: {
                            size: 12,
                            weight: "400",
                          },
                          color: "#213366",
                        },
                      },
                    },
                    scales: {
                      y: {
                        grid: {
                          display: false,
                        },
                        min: 50,
                        max: 100,
                        ticks: {
                          callback: function (value) {
                            return value + "%";
                          },
                          font: {
                            size: 12,
                            weight: "400",
                          },
                          color: "#213366",
                          padding: 10,
                        },
                      },
                      x: {
                        grid: {
                          display: false,
                        },
                        ticks: {
                          font: {
                            size: 12,
                            weight: "400",
                          },
                          color: "#213366",
                          padding: 5,
                        },
                      },
                    },
                  }}
                  data={dataObjectionsFirstLine}
                />
                <button onClick={() => {
                  toast.success("Документ успешно загружен")
                }}>
                  Скачать отчет pdf{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="20"
                    viewBox="0 0 21 20"
                    fill="none"
                  >
                    <path
                      d="M7.16675 10L10.5001 13.3333L13.8334 10"
                      stroke="#171739"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10.5001 2.5V13.3333M4.66675 17.5H16.3334"
                      stroke="#171739"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;

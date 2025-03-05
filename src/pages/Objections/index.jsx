import { useState } from "react";
import DiapazonComponent from "../../components/Diapazon";
import styles from "./Objections.module.scss";

const ObjectionsPage = () => {
  const [isRightWindowOpen, setIsRightWindowOpen] = useState(false);
  const [reportsFakeData, setReportsFakeData] = useState([
    {
      value: 34,
      title: "Финансовая нагрузка и обязательства ",
    },
    {
      value: 18,
      title: "Неуверенность в принятии решения  ",
    },
    {
      value: 10,
      title: "Обеспокоенность конфиденциальностью данных",
    },
    {
      value: 10,
      title: "Обеспокоенность звонками и давлением от кредиторов",
    },
    {
      value: 34,
      title: "Сомнения в необходимости банкротства ",
    },
    {
      value: 15,
      title: "Неуверенность в стабильности финансовой ситуации  ",
    },
    {
      value: 10,
      title: "Сомнения в законности действий с имуществом  ",
    },
    {
      value: 10,
      title: "Сомнения в доступности времени для звонка  ",
    },
    {
      value: 20,
      title: "Недоверие из-за предыдущего негативного опыта   ",
    },
    {
      value: 10,
      title: "Сомнения в выборе компании  ",
    },
    {
      value: 10,
      title: "Недоверие к неизвестной компании  ",
    },
    {
      value: 10,
      title: "Неуверенность в возможности внести платежи  ",
    },
  ]);
  return (
    <div className={styles.objections}>
      <div
        style={{
          width: isRightWindowOpen ? "45%" : "100%",
        }}
        className={styles.objections_left}
      >
        <h1>Возражения</h1>
        <div className={styles.objections_left_tabs}>
          <button>Продажи</button>
          <button>Колл-центр</button>
        </div>
        <DiapazonComponent hasBackground={false} onReports={true} />
        <div className={styles.objections_left_search}>
          <input type="text" placeholder="Поиск " name="" id="" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <g opacity="0.4">
              <path
                d="M21.7114 20.2914L18.0014 16.6114C19.4415 14.8158 20.1389 12.5367 19.9502 10.2427C19.7615 7.94867 18.701 5.81415 16.9869 4.27801C15.2727 2.74188 13.0352 1.92088 10.7343 1.98384C8.43341 2.0468 6.24409 2.98893 4.61651 4.61651C2.98893 6.24409 2.0468 8.43341 1.98384 10.7343C1.92088 13.0352 2.74188 15.2727 4.27801 16.9869C5.81415 18.701 7.94867 19.7615 10.2427 19.9502C12.5367 20.1389 14.8158 19.4415 16.6114 18.0014L20.2914 21.6814C20.3843 21.7751 20.4949 21.8495 20.6168 21.9003C20.7387 21.951 20.8694 21.9772 21.0014 21.9772C21.1334 21.9772 21.2641 21.951 21.3859 21.9003C21.5078 21.8495 21.6184 21.7751 21.7114 21.6814C21.8916 21.4949 21.9924 21.2457 21.9924 20.9864C21.9924 20.727 21.8916 20.4778 21.7114 20.2914ZM11.0014 18.0014C9.6169 18.0014 8.26352 17.5908 7.11238 16.8217C5.96123 16.0525 5.06403 14.9592 4.53421 13.6802C4.0044 12.4011 3.86578 10.9936 4.13587 9.63574C4.40597 8.27787 5.07265 7.03059 6.05162 6.05162C7.03059 5.07265 8.27787 4.40597 9.63574 4.13587C10.9936 3.86578 12.4011 4.0044 13.6802 4.53421C14.9592 5.06403 16.0525 5.96123 16.8217 7.11238C17.5908 8.26352 18.0014 9.6169 18.0014 11.0014C18.0014 12.8579 17.2639 14.6384 15.9511 15.9511C14.6384 17.2639 12.8579 18.0014 11.0014 18.0014Z"
                fill="white"
              />
            </g>
          </svg>
        </div>
        <div className={styles.objections_left_content}>
          <div className={styles.objections_left_content_group}>
            {reportsFakeData.map((report, index) => (
              <div
                key={index}
                className={styles.objections_left_content_group_el}
                onClick={() => setIsRightWindowOpen(true)}
              >
                <span
                  style={{
                    backgroundColor:
                      report.value <= 10
                        ? "rgba(36, 203, 150, 1)"
                        : report.value <= 20
                        ? "rgba(255, 187, 59, 1)"
                        : "rgba(255, 60, 115, 1)",
                  }}
                >
                  {report.value}
                </span>
                <p>{report.title}</p>
              </div>
            ))}
          </div>
        </div>
        <p
          style={{
            display: reportsFakeData === null ? "block" : "none",
          }}
          className={styles.objections_left_nodata}
        >
          Возражений пока нет. Данные будут отображаться здесь после анализа
          звонков
        </p>
      </div>
      <div
        style={{
          display: isRightWindowOpen ? "block" : "none",
        }}
        className={styles.objections_right}
      >
        <h1>Финансовая нагрузка и обязательства</h1>
        <div className={styles.objections_right_group}>
          <div className={styles.objections_right_group_date}>
            Дата создания: 04.11.2024
          </div>
          <div className={styles.objections_right_group_message}>
            <span>Клиент</span>
            <p>
              Клиент обеспокоен тем, что у него не останется средств на
              существование из-за вычетов из зарплаты
            </p>
          </div>
          <button>Подробнее</button>
        </div>
        <div className={styles.objections_right_group}>
          <div className={styles.objections_right_group_date}>
            Дата создания: 04.11.2024
          </div>
          <div className={styles.objections_right_group_message}>
            <span>Клиент</span>
            <p>
              Клиент обеспокоен тем, что у него не останется средств на
              существование из-за вычетов из зарплаты
            </p>
          </div>
          <button>Подробнее</button>
        </div>
        <div className={styles.objections_right_group}>
          <div className={styles.objections_right_group_date}>
            Дата создания: 04.11.2024
          </div>
          <div className={styles.objections_right_group_message}>
            <span>Клиент</span>
            <p>
              Клиент обеспокоен тем, что у него не останется средств на
              существование из-за вычетов из зарплаты
            </p>
          </div>
          <button>Подробнее</button>
        </div>
        <div className={styles.objections_right_group}>
          <div className={styles.objections_right_group_date}>
            Дата создания: 04.11.2024
          </div>
          <div className={styles.objections_right_group_message}>
            <span>Клиент</span>
            <p>
              Клиент обеспокоен тем, что у него не останется средств на
              существование из-за вычетов из зарплаты
            </p>
          </div>
          <button>Подробнее</button>
        </div>
        <div className={styles.objections_right_group}>
          <div className={styles.objections_right_group_date}>
            Дата создания: 04.11.2024
          </div>
          <div className={styles.objections_right_group_message}>
            <span>Клиент</span>
            <p>
              Клиент обеспокоен тем, что у него не останется средств на
              существование из-за вычетов из зарплаты
            </p>
          </div>
          <button>Подробнее</button>
        </div>
        <div className={styles.objections_right_group}>
          <div className={styles.objections_right_group_date}>
            Дата создания: 04.11.2024
          </div>
          <div className={styles.objections_right_group_message}>
            <span>Клиент</span>
            <p>
              Клиент обеспокоен тем, что у него не останется средств на
              существование из-за вычетов из зарплаты
            </p>
          </div>
          <button>Подробнее</button>
        </div>
        <div className={styles.objections_right_group}>
          <div className={styles.objections_right_group_date}>
            Дата создания: 04.11.2024
          </div>
          <div className={styles.objections_right_group_message}>
            <span>Клиент</span>
            <p>
              Клиент обеспокоен тем, что у него не останется средств на
              существование из-за вычетов из зарплаты
            </p>
          </div>
          <button>Подробнее</button>
        </div>
        <div className={styles.objections_right_group}>
          <div className={styles.objections_right_group_date}>
            Дата создания: 04.11.2024
          </div>
          <div className={styles.objections_right_group_message}>
            <span>Клиент</span>
            <p>
              Клиент обеспокоен тем, что у него не останется средств на
              существование из-за вычетов из зарплаты
            </p>
          </div>
          <button>Подробнее</button>
        </div>
        <div className={styles.objections_right_group}>
          <div className={styles.objections_right_group_date}>
            Дата создания: 04.11.2024
          </div>
          <div className={styles.objections_right_group_message}>
            <span>Клиент</span>
            <p>
              Клиент обеспокоен тем, что у него не останется средств на
              существование из-за вычетов из зарплаты
            </p>
          </div>
          <button>Подробнее</button>
        </div>
        <div className={styles.objections_right_group}>
          <div className={styles.objections_right_group_date}>
            Дата создания: 04.11.2024
          </div>
          <div className={styles.objections_right_group_message}>
            <span>Клиент</span>
            <p>
              Клиент обеспокоен тем, что у него не останется средств на
              существование из-за вычетов из зарплаты
            </p>
          </div>
          <button>Подробнее</button>
        </div>
      </div>
    </div>
  );
};

export default ObjectionsPage;

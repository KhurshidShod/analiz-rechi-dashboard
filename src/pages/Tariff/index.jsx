import { useState } from "react";
import styles from "./Tariff.module.scss";
import { Table } from "antd";
import PurchasingTariffModal from "../../components/PurchasingTariffModal";
import DiapazonComponent from "../../components/Diapazon";

const columns = [
  {
    title: "№ операции",
    dataIndex: "operationNumber",
  },
  {
    title: "Дата",
    dataIndex: "date",
  },
  {
    title: "Тариф",
    dataIndex: "tariff",
  },
  {
    title: "Тип операции",
    dataIndex: "operationType",
  },
];
const dataSource = Array.from({
  length: 46,
}).map((_, i) => ({
  key: i,
  operationNumber: "16668",
  date: "30.11.2024",
  tariff: "Про",
  operationType: "Списание",
}));

const TariffPage = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className={styles.tariff}>
      <PurchasingTariffModal
        isOpened={isModalOpen}
        setModalOpen={setIsModalOpen}
      />
      <ul className={styles.tariff_tabs}>
        <li className={activeTab === 1 ? styles.active : ""}>
          <button onClick={() => setActiveTab(1)}>Текущий тариф</button>
        </li>
        <li className={activeTab === 2 ? styles.active : ""}>
          <button onClick={() => setActiveTab(2)}>Тарифы</button>
        </li>
        <li className={activeTab === 3 ? styles.active : ""}>
          <button onClick={() => setActiveTab(3)}>История операций</button>
        </li>
      </ul>
      <DiapazonComponent hasBackground={false} />
      <div className={styles.tariff_contents}>
        <div
          className={`${styles.content} ${
            activeTab === 1 ? styles.visible : ""
          }`}
        >
          <div className={styles.mytarif}>
            <span></span> Про <span></span> Текущий тариф
          </div>
          <p>Истекает: 10.01.2025 00:00</p>
          <b>Купленные доп.услуги</b>
          <div className={styles.tariffs}>
            <div className={styles.tarif}>
              <span>5 номеров / 3 месяца</span>
              <p>Истекает: 10.01.2025 00:00</p>
              <button>Продлить</button>
            </div>
            <div className={styles.tarif}>
              <span>5 номеров / 3 месяца</span>
              <p>Истекает: 10.01.2025 00:00</p>
              <button>Продлить</button>
            </div>
            <div className={styles.tarif}>
              <span>5 номеров / 3 месяца</span>
              <p>Истекает: 10.01.2025 00:00</p>
              <button>Продлить</button>
            </div>
          </div>
          <b>Дополнительные возможности:</b>
          <div className={styles.suggestions}>
            <div className={styles.suggestion}>
              <div>
                <p>5 номеров / 3 месяца</p>
                <p>Истекает: 10.01.2025 00:00</p>
              </div>
              <div>
                <p>10 000₽</p>
                <button onClick={() => setIsModalOpen(true)}>Купить</button>
              </div>
            </div>
            <div className={styles.suggestion}>
              <div>
                <p>5 номеров / 3 месяца</p>
                <p>Истекает: 10.01.2025 00:00</p>
              </div>
              <div>
                <p>10 000₽</p>
                <button onClick={() => setIsModalOpen(true)}>Купить</button>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${styles.content} ${styles.second_content} ${
            activeTab === 2 ? styles.visible : ""
          }`}
        >
          <div className={styles.second_content_top}>
            <div>
              <span></span>
              Про
              <span></span>
              Текущий тариф
            </div>
            <p>Истекает: 10.01.2025 00:00</p>
          </div>
          <div className={styles.second_content_all_tariffs}>
            <h2>Тарифы</h2>
            <div className={styles.second_content_all_tariffs_tariffs}>
              <div className={styles.second_content_all_tariffs_tariffs_tarif}>
                <div className={styles.top}>
                  <p>Базовый</p>
                  <span></span>
                </div>
                <h1>3 руб./мин., но не менее 15 руб. за 1 звонок</h1>
                <button onClick={() => setIsModalOpen(true)}>Купить</button>
                <ul>
                  <li>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="14"
                        viewBox="0 0 20 14"
                        fill="none"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M17.998 0C17.4383 0 16.9386 0.22 16.5788 0.58L8.00367 9.18L3.42625 4.58C3.04985 4.20339 2.53935 3.99182 2.00705 3.99182C1.47475 3.99182 0.964246 4.20339 0.587851 4.58C0.211456 4.95661 5.60872e-09 5.4674 0 6C-5.60872e-09 6.5326 0.211456 7.04339 0.587851 7.42L6.58447 13.42C6.94426 13.78 7.44398 14 8.00367 14C8.56335 14 9.06307 13.78 9.42286 13.42L19.4172 3.42C19.6962 3.13913 19.8858 2.78194 19.9622 2.39343C20.0387 2.00492 19.9985 1.60247 19.8467 1.23677C19.695 0.87107 19.4385 0.55849 19.1095 0.338404C18.7805 0.118318 18.3938 0.000571719 17.998 0Z"
                          fill="#213366"
                        />
                      </svg>
                    </span>{" "}
                    Загрузка записей разговоров в сервис вручную
                  </li>
                  <li>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="14"
                        viewBox="0 0 20 14"
                        fill="none"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M17.998 0C17.4383 0 16.9386 0.22 16.5788 0.58L8.00367 9.18L3.42625 4.58C3.04985 4.20339 2.53935 3.99182 2.00705 3.99182C1.47475 3.99182 0.964246 4.20339 0.587851 4.58C0.211456 4.95661 5.60872e-09 5.4674 0 6C-5.60872e-09 6.5326 0.211456 7.04339 0.587851 7.42L6.58447 13.42C6.94426 13.78 7.44398 14 8.00367 14C8.56335 14 9.06307 13.78 9.42286 13.42L19.4172 3.42C19.6962 3.13913 19.8858 2.78194 19.9622 2.39343C20.0387 2.00492 19.9985 1.60247 19.8467 1.23677C19.695 0.87107 19.4385 0.55849 19.1095 0.338404C18.7805 0.118318 18.3938 0.000571719 17.998 0Z"
                          fill="#213366"
                        />
                      </svg>
                    </span>{" "}
                    Дашборд с динамикой показателей
                  </li>
                  <li>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="14"
                        viewBox="0 0 20 14"
                        fill="none"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M17.998 0C17.4383 0 16.9386 0.22 16.5788 0.58L8.00367 9.18L3.42625 4.58C3.04985 4.20339 2.53935 3.99182 2.00705 3.99182C1.47475 3.99182 0.964246 4.20339 0.587851 4.58C0.211456 4.95661 5.60872e-09 5.4674 0 6C-5.60872e-09 6.5326 0.211456 7.04339 0.587851 7.42L6.58447 13.42C6.94426 13.78 7.44398 14 8.00367 14C8.56335 14 9.06307 13.78 9.42286 13.42L19.4172 3.42C19.6962 3.13913 19.8858 2.78194 19.9622 2.39343C20.0387 2.00492 19.9985 1.60247 19.8467 1.23677C19.695 0.87107 19.4385 0.55849 19.1095 0.338404C18.7805 0.118318 18.3938 0.000571719 17.998 0Z"
                          fill="#213366"
                        />
                      </svg>
                    </span>{" "}
                    Контроль качества звонка по чек-листу сервиса
                  </li>
                </ul>
              </div>
              <div className={styles.second_content_all_tariffs_tariffs_tarif}>
                <div className={styles.top}>
                  <p>Стандарт</p>
                  <span></span>
                </div>
                <h1>4 руб./мин., но не менее 20 руб. за 1 звонок</h1>
                <button onClick={() => setIsModalOpen(true)}>Купить</button>
                <ul>
                  <li>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="14"
                        viewBox="0 0 20 14"
                        fill="none"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M17.998 0C17.4383 0 16.9386 0.22 16.5788 0.58L8.00367 9.18L3.42625 4.58C3.04985 4.20339 2.53935 3.99182 2.00705 3.99182C1.47475 3.99182 0.964246 4.20339 0.587851 4.58C0.211456 4.95661 5.60872e-09 5.4674 0 6C-5.60872e-09 6.5326 0.211456 7.04339 0.587851 7.42L6.58447 13.42C6.94426 13.78 7.44398 14 8.00367 14C8.56335 14 9.06307 13.78 9.42286 13.42L19.4172 3.42C19.6962 3.13913 19.8858 2.78194 19.9622 2.39343C20.0387 2.00492 19.9985 1.60247 19.8467 1.23677C19.695 0.87107 19.4385 0.55849 19.1095 0.338404C18.7805 0.118318 18.3938 0.000571719 17.998 0Z"
                          fill="#213366"
                        />
                      </svg>
                    </span>{" "}
                    Все что в тарифе базовый
                  </li>
                  <li>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="14"
                        viewBox="0 0 20 14"
                        fill="none"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M17.998 0C17.4383 0 16.9386 0.22 16.5788 0.58L8.00367 9.18L3.42625 4.58C3.04985 4.20339 2.53935 3.99182 2.00705 3.99182C1.47475 3.99182 0.964246 4.20339 0.587851 4.58C0.211456 4.95661 5.60872e-09 5.4674 0 6C-5.60872e-09 6.5326 0.211456 7.04339 0.587851 7.42L6.58447 13.42C6.94426 13.78 7.44398 14 8.00367 14C8.56335 14 9.06307 13.78 9.42286 13.42L19.4172 3.42C19.6962 3.13913 19.8858 2.78194 19.9622 2.39343C20.0387 2.00492 19.9985 1.60247 19.8467 1.23677C19.695 0.87107 19.4385 0.55849 19.1095 0.338404C18.7805 0.118318 18.3938 0.000571719 17.998 0Z"
                          fill="#213366"
                        />
                      </svg>
                    </span>{" "}
                    Загрузка записей автоматически за счет интеграции с вашей
                    CRM и IP телефонией
                  </li>
                  <li>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="14"
                        viewBox="0 0 20 14"
                        fill="none"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M17.998 0C17.4383 0 16.9386 0.22 16.5788 0.58L8.00367 9.18L3.42625 4.58C3.04985 4.20339 2.53935 3.99182 2.00705 3.99182C1.47475 3.99182 0.964246 4.20339 0.587851 4.58C0.211456 4.95661 5.60872e-09 5.4674 0 6C-5.60872e-09 6.5326 0.211456 7.04339 0.587851 7.42L6.58447 13.42C6.94426 13.78 7.44398 14 8.00367 14C8.56335 14 9.06307 13.78 9.42286 13.42L19.4172 3.42C19.6962 3.13913 19.8858 2.78194 19.9622 2.39343C20.0387 2.00492 19.9985 1.60247 19.8467 1.23677C19.695 0.87107 19.4385 0.55849 19.1095 0.338404C18.7805 0.118318 18.3938 0.000571719 17.998 0Z"
                          fill="#213366"
                        />
                      </svg>
                    </span>{" "}
                    Перевод разговора в текст с фиксацией
                  </li>
                  <li>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="14"
                        viewBox="0 0 20 14"
                        fill="none"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M17.998 0C17.4383 0 16.9386 0.22 16.5788 0.58L8.00367 9.18L3.42625 4.58C3.04985 4.20339 2.53935 3.99182 2.00705 3.99182C1.47475 3.99182 0.964246 4.20339 0.587851 4.58C0.211456 4.95661 5.60872e-09 5.4674 0 6C-5.60872e-09 6.5326 0.211456 7.04339 0.587851 7.42L6.58447 13.42C6.94426 13.78 7.44398 14 8.00367 14C8.56335 14 9.06307 13.78 9.42286 13.42L19.4172 3.42C19.6962 3.13913 19.8858 2.78194 19.9622 2.39343C20.0387 2.00492 19.9985 1.60247 19.8467 1.23677C19.695 0.87107 19.4385 0.55849 19.1095 0.338404C18.7805 0.118318 18.3938 0.000571719 17.998 0Z"
                          fill="#213366"
                        />
                      </svg>
                    </span>{" "}
                    Формирование таблицы с выявленными потребностями и
                    возражениями клиентов
                  </li>
                </ul>
              </div>
              <div className={styles.second_content_all_tariffs_tariffs_tarif}>
                <div className={styles.top}>
                  <span></span>
                  <p>Про</p>
                </div>
                <h1>5 руб./мин., но не менее 30 руб. за 1 звонок</h1>
                <button onClick={() => setIsModalOpen(true)}>Купить</button>
                <ul>
                  <li>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="14"
                        viewBox="0 0 20 14"
                        fill="none"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M17.998 0C17.4383 0 16.9386 0.22 16.5788 0.58L8.00367 9.18L3.42625 4.58C3.04985 4.20339 2.53935 3.99182 2.00705 3.99182C1.47475 3.99182 0.964246 4.20339 0.587851 4.58C0.211456 4.95661 5.60872e-09 5.4674 0 6C-5.60872e-09 6.5326 0.211456 7.04339 0.587851 7.42L6.58447 13.42C6.94426 13.78 7.44398 14 8.00367 14C8.56335 14 9.06307 13.78 9.42286 13.42L19.4172 3.42C19.6962 3.13913 19.8858 2.78194 19.9622 2.39343C20.0387 2.00492 19.9985 1.60247 19.8467 1.23677C19.695 0.87107 19.4385 0.55849 19.1095 0.338404C18.7805 0.118318 18.3938 0.000571719 17.998 0Z"
                          fill="#213366"
                        />
                      </svg>
                    </span>{" "}
                    Все что в тарифе базовый и стандарт
                  </li>
                  <li>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="14"
                        viewBox="0 0 20 14"
                        fill="none"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M17.998 0C17.4383 0 16.9386 0.22 16.5788 0.58L8.00367 9.18L3.42625 4.58C3.04985 4.20339 2.53935 3.99182 2.00705 3.99182C1.47475 3.99182 0.964246 4.20339 0.587851 4.58C0.211456 4.95661 5.60872e-09 5.4674 0 6C-5.60872e-09 6.5326 0.211456 7.04339 0.587851 7.42L6.58447 13.42C6.94426 13.78 7.44398 14 8.00367 14C8.56335 14 9.06307 13.78 9.42286 13.42L19.4172 3.42C19.6962 3.13913 19.8858 2.78194 19.9622 2.39343C20.0387 2.00492 19.9985 1.60247 19.8467 1.23677C19.695 0.87107 19.4385 0.55849 19.1095 0.338404C18.7805 0.118318 18.3938 0.000571719 17.998 0Z"
                          fill="#213366"
                        />
                      </svg>
                    </span>{" "}
                    Информация о разговоре автоматически фиксируется сразу в CRM
                  </li>
                  <li>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="14"
                        viewBox="0 0 20 14"
                        fill="none"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M17.998 0C17.4383 0 16.9386 0.22 16.5788 0.58L8.00367 9.18L3.42625 4.58C3.04985 4.20339 2.53935 3.99182 2.00705 3.99182C1.47475 3.99182 0.964246 4.20339 0.587851 4.58C0.211456 4.95661 5.60872e-09 5.4674 0 6C-5.60872e-09 6.5326 0.211456 7.04339 0.587851 7.42L6.58447 13.42C6.94426 13.78 7.44398 14 8.00367 14C8.56335 14 9.06307 13.78 9.42286 13.42L19.4172 3.42C19.6962 3.13913 19.8858 2.78194 19.9622 2.39343C20.0387 2.00492 19.9985 1.60247 19.8467 1.23677C19.695 0.87107 19.4385 0.55849 19.1095 0.338404C18.7805 0.118318 18.3938 0.000571719 17.998 0Z"
                          fill="#213366"
                        />
                      </svg>
                    </span>{" "}
                    Перевод разговора в текст с фиксацией
                  </li>
                  <li>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="14"
                        viewBox="0 0 20 14"
                        fill="none"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M17.998 0C17.4383 0 16.9386 0.22 16.5788 0.58L8.00367 9.18L3.42625 4.58C3.04985 4.20339 2.53935 3.99182 2.00705 3.99182C1.47475 3.99182 0.964246 4.20339 0.587851 4.58C0.211456 4.95661 5.60872e-09 5.4674 0 6C-5.60872e-09 6.5326 0.211456 7.04339 0.587851 7.42L6.58447 13.42C6.94426 13.78 7.44398 14 8.00367 14C8.56335 14 9.06307 13.78 9.42286 13.42L19.4172 3.42C19.6962 3.13913 19.8858 2.78194 19.9622 2.39343C20.0387 2.00492 19.9985 1.60247 19.8467 1.23677C19.695 0.87107 19.4385 0.55849 19.1095 0.338404C18.7805 0.118318 18.3938 0.000571719 17.998 0Z"
                          fill="#213366"
                        />
                      </svg>
                    </span>{" "}
                    Контроль качества звонка по чек-листу сервиса
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${styles.content} ${
            activeTab === 3 ? styles.visible : ""
          }`}
        >
          <Table scroll={{x: true}} columns={columns} bordered={true} dataSource={dataSource} />
        </div>
      </div>
    </div>
  );
};

export default TariffPage;

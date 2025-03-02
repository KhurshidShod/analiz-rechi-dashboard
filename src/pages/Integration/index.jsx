import { useState } from "react";
import styles from "./Integration.module.scss";

import ZoomImage from "@assets/images/zoom.png";
import BitrixImage from "@assets/images/bitrix24.png";
import GoogleMeetImage from "@assets/images/googlemeet.png";
import amoCRMImage from "@assets/images/amocrm.png";
import telemostImage from "@assets/images/telemost.svg";
import vkImage from "@assets/images/vk.svg";
import ktalkImage from "@assets/images/ktalk.svg";
import InstallingIntegrationModal from "../../components/InstallingIntegrationModal";

const IntegrationPage = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openedIntegration, setOpenedIntegration] = useState("");
  const openInstallingTab = (e, isOpen) => {
    setIsModalOpen(isOpen);
    setOpenedIntegration(
      e.target.parentNode.parentNode.childNodes[1].textContent
    );
  };
  return (
    <div className={styles.integration}>
      <InstallingIntegrationModal
        setModalOpen={setIsModalOpen}
        isOpen={isModalOpen}
        openedIntegration={openedIntegration}
      />
      <h1>Интеграции</h1>
      <ul className={styles.integration_tabs}>
        <li className={activeTab === 1 ? styles.active : ""}>
          <button onClick={() => setActiveTab(1)}>Установленные</button>
        </li>
        <li className={activeTab === 2 ? styles.active : ""}>
          <button onClick={() => setActiveTab(2)}>CRM</button>
        </li>
        <li className={activeTab === 3 ? styles.active : ""}>
          <button onClick={() => setActiveTab(3)}>Телефонии</button>
        </li>
      </ul>
      <div className={styles.integration_contents}>
        <div
          className={`${styles.content} ${
            activeTab === 1 ? styles.visible : ""
          }`}
        >
          <div>
            <div>
              <img src={BitrixImage} alt="" />
            </div>
            <p>Битрикс</p>
          </div>
          <div>
            <div>
              <img src={ZoomImage} alt="" />
            </div>
            <p>Zoom</p>
          </div>
          <div>
            <div>
              <img src={GoogleMeetImage} alt="" />
            </div>
            <p>Google Meet</p>
          </div>
        </div>
        <div
          className={`${styles.content} ${
            activeTab === 2 ? styles.visible : ""
          }`}
        >
          <div>
            <div>
              <img src={amoCRMImage} alt="" />
            </div>
            <p>amoCRM</p>
            <div>
              <button onClick={(e) => openInstallingTab(e, true)}>
                Установить
              </button>
              <button>Инструкция установки</button>
            </div>
          </div>
          <div>
            <div>
              <img src={BitrixImage} alt="" />
            </div>
            <p>Битрикс</p>
            <div>
              <button onClick={(e) => openInstallingTab(e, true)}>
                Установить
              </button>
              <button>Инструкция установки</button>
            </div>
          </div>
        </div>
        <div
          className={`${styles.content} ${
            activeTab === 3 ? styles.visible : ""
          }`}
        >
          <div>
            <div>
              <img src={ZoomImage} alt="" />
            </div>
            <p>Zoom</p>
            <div>
              <button onClick={(e) => openInstallingTab(e, true)}>
                Установить
              </button>
              <button>Инструкция установки</button>
            </div>
          </div>
          <div>
            <div>
              <img src={GoogleMeetImage} alt="" />
            </div>
            <p>Google Meet</p>
            <div>
              <button onClick={(e) => openInstallingTab(e, true)}>
                Установить
              </button>
              <button>Инструкция установки</button>
            </div>
          </div>
          <div>
            <div>
              <img src={telemostImage} alt="" />
            </div>
            <p>Яндекс телемост</p>
            <div>
              <button onClick={(e) => openInstallingTab(e, true)}>
                Установить
              </button>
              <button>Инструкция установки</button>
            </div>
          </div>
          <div>
            <div>
              <img src={vkImage} alt="" />
            </div>
            <p>Vk звонки</p>
            <div>
              <button onClick={(e) => openInstallingTab(e, true)}>
                Установить
              </button>
              <button>Инструкция установки</button>
            </div>
          </div>
          <div>
            <div>
              <img src={ktalkImage} alt="" />
            </div>
            <p>Контур Толк</p>
            <div>
              <button onClick={(e) => openInstallingTab(e, true)}>
                Установить
              </button>
              <button>Инструкция установки</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntegrationPage;

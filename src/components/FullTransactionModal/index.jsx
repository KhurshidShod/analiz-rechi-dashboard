import { useEffect, useRef, useState } from "react";
import styles from "./FullTransactionModal.module.scss";
import WaveSurfer from "wavesurfer.js";
import Audio from "@assets/audios/audio.mp3";
import PlayIcon from "@assets/icons/play_icon.svg";

const FullTransactionModal = ({
  isTransactionModalOpen,
  setIsTransactionModalOpen,
}) => {
  const [currentTime, setCurrentTime] = useState("0:00");
  const [totalTime, setTotalTime] = useState("0:00");
  const [wavesurfer, setWavesurfer] = useState(null);
  const [playBackSpeed, setPlayBackSpeed] = useState(1);
  const [checkedInputs, setCheckedInputs] = useState({
    greetings: 1,
    needsIdentity: 1,
    presentation: 2,
    closingObjection: 1,
    closing: 2,
  });
  const [isFullRatingOpen, setIsFullRatingOpen] = useState(false);
  const waveFormRef = useRef(null);

  useEffect(() => {
    const ws = WaveSurfer.create({
      container: waveFormRef.current,
      waveColor: "lightgrey",
      progressColor: "#1C2046",
      dragToSeek: true,
      width: "100%",
      height: 30,
      responsive: true,
      hideScrollbar: true,
      normalize: true,
      barGap: 2,
      barHeight: 1,
      barRadius: 20,
      barWidth: 5,
    });

    ws.load(Audio);
    ws.on("ready", () => {
      setTotalTime(formatTime(ws.getDuration()));
    });

    ws.on("audioprocess", () => {
      setCurrentTime(formatTime(ws.getCurrentTime()));
    });
    setWavesurfer(ws);
    return () => {
      ws.destroy();
    };
  }, []);
  const handleAudiPlayPause = () => {
    if (wavesurfer) {
      wavesurfer.playPause();
    }
  };
  const handleChangeSpeed = (speed) => {
    if (wavesurfer) {
      setPlayBackSpeed(speed);
      wavesurfer.setPlaybackRate(speed);
    }
  };
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };
  return (
    <div
      className={`${styles.transaction} ${
        isTransactionModalOpen ? styles.opened : ""
      }`}
    >
      <div className={styles.transaction_modal}>
        <div className={styles.transaction_modal_header}>
          <svg
            onClick={() => {
              setIsTransactionModalOpen(false);
              wavesurfer.pause();
            }}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M3 4L20 21M20 4L3 21"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          <h2>Продажа недвижимости в Дубае</h2>
        </div>
        <div className={styles.transaction_modal_body}>
          <div className={styles.transaction_modal_body_infos}>
            <p>Дата: 2024-11-04 19:50</p>
            <p>Александра Беловская</p>
            <p>Сделка: Нет</p>
          </div>
          <div className={styles.transaction_modal_body_audio}>
            <div>
              <img onClick={handleAudiPlayPause} src={PlayIcon} alt="" />
              <div ref={waveFormRef} />
            </div>
            <div>
              <span>
                {currentTime}/{totalTime}
              </span>
              <p
                onClick={() =>
                  handleChangeSpeed(
                    playBackSpeed === 1 ? 1.5 : playBackSpeed === 1.5 ? 2 : 1
                  )
                }
              >
                x{playBackSpeed}
              </p>
            </div>
          </div>
        </div>
        <hr />
        <div className={styles.transaction_modal_conversation}>
          <h3>Расшифровка разговора</h3>
          <div className={styles.chat}>
            <div className={`${styles.chat_message} ${styles.manager}`}>
              <span>Менеджер</span>
              <p>Алло.</p>
            </div>
            <div className={`${styles.chat_message} ${styles.client}`}>
              <span>Клиент</span>
              <p>Здравствуйте, извините, вот мне звонили, куда я попал?</p>
            </div>
            <div className={`${styles.chat_message} ${styles.manager}`}>
              <span>Менеджер</span>
              <p>
                Добрый день, это компания Биг Бум. Звонила вам по поводу
                сотрудничества. Вы являетесь руководителем компании Керамик
                Сити, правильно?
              </p>
            </div>
            <div className={`${styles.chat_message} ${styles.client}`}>
              <span>Клиент</span>
              <p>Да,да,да.</p>
            </div>
            <div className={`${styles.chat_message} ${styles.client}`}>
              <span>Менеджер</span>
              <p>
                {" "}
                Угу, замечательно. Мы сотрудничаем с дизайнерами и другими
                компаниями, которые предлагают интерьерные решения. Хотелось бы
                узнать, какими способами вы привлекаете клиентов.
              </p>
            </div>
            <div className={`${styles.chat_message} ${styles.client}`}>
              <span>Клиент</span>
              <p>
                Сейчас не совсем удобно, вы можете на телефон мне скинуть, то я
                попозже перезвоню вам, там свою почту или что-то такое.
              </p>
            </div>
            <div className={`${styles.chat_message} ${styles.client}`}>
              <span>Менеджер</span>
              <p>Угу, хорошо. А это ваш личный номер, да, получается?</p>
            </div>
            <div className={`${styles.chat_message} ${styles.client}`}>
              <span>Клиент</span>
              <p>Да,да,да.</p>
            </div>
            <div className={`${styles.chat_message} ${styles.manager}`}>
              <span>Менеджер</span>
              <p>
                Угу, замечательно. Когда вам удобно было бы, если что,
                созвониться?
              </p>
            </div>
            <div className={`${styles.chat_message} ${styles.client}`}>
              <span>Клиент</span>
              <p>Завтра на месте, я просто сейчас это, на островах.</p>
            </div>
            <div className={`${styles.chat_message} ${styles.manager}`}>
              <span>Менеджер</span>
              <p>Завтра? Ой, замечательно.</p>
            </div>
            <div className={`${styles.chat_message} ${styles.client}`}>
              <span>Клиент</span>
              <p>Угу, да, хорошо.</p>
            </div>
            <div className={`${styles.chat_message} ${styles.manager}`}>
              <span>Менеджер</span>
              <p>Да,да.</p>
            </div>
            <div className={`${styles.chat_message} ${styles.client}`}>
              <span>Клиент</span>
              <p>Конечно.</p>
            </div>
            <div className={`${styles.chat_message} ${styles.manager}`}>
              <span>Менеджер</span>
              <p> Угу, до завтра.</p>
            </div>
            <div className={`${styles.chat_message} ${styles.client}`}>
              <span>Клиент</span>
              <p>До свидания.</p>
            </div>
          </div>
        </div>
        <div className={styles.transaction_modal_checkList}>
          <div className={styles.transaction_modal_checkList_top}>
            <div>
              <h3>Чек - лист</h3>
              <p>Общая оценка</p>
            </div>
            <div>
              <p>Оценка разговора</p>
              <div>
                <span>35%</span>
                <button>Подробнее</button>
              </div>
            </div>
          </div>
          <div className={styles.transaction_modal_checkList_content}>
            <div className={styles.transaction_modal_checkList_content_item}>
              <div className={styles.left}>
                <p>Приветствие</p>
                <div className={styles.left_checkbox}>
                  <span
                    onClick={() =>
                      setCheckedInputs({ ...checkedInputs, greetings: 1 })
                    }
                    className={`${
                      checkedInputs.greetings === 1 ? styles.checked : ""
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M14.3769 3.6479L14.3847 3.65578L14.3929 3.6633C14.4436 3.71012 14.4841 3.76694 14.5118 3.8302C14.5396 3.89345 14.5539 3.96175 14.5539 4.0308C14.5539 4.09985 14.5396 4.16815 14.5118 4.2314C14.4841 4.29465 14.4436 4.35148 14.3929 4.3983L14.3855 4.40513L14.3784 4.41225L6.21837 12.5722L6.21692 12.5737C6.17044 12.6206 6.11514 12.6578 6.05421 12.6831C5.99328 12.7085 5.92793 12.7216 5.86192 12.7216C5.79591 12.7216 5.73056 12.7085 5.66963 12.6831C5.60871 12.6578 5.5534 12.6206 5.50692 12.5737L5.50548 12.5722L1.66548 8.73224L1.66553 8.73219L1.65931 8.72618C1.61001 8.67856 1.57058 8.6217 1.54326 8.55884C1.51594 8.49598 1.50126 8.42836 1.50008 8.35983C1.49889 8.2913 1.51122 8.22321 1.53635 8.15944C1.56148 8.09567 1.59892 8.03748 1.64654 7.98818C1.69416 7.93889 1.75102 7.89945 1.81388 7.87213C1.87674 7.84481 1.94436 7.83014 2.01289 7.82895C2.08142 7.82777 2.14952 7.84009 2.21328 7.86522C2.27583 7.88987 2.33301 7.92636 2.38169 7.97269L5.50781 11.1088L5.8616 11.4637L6.21571 11.1091L13.6657 3.64912L13.6669 3.6479C13.7134 3.60103 13.7687 3.56384 13.8296 3.53845C13.8906 3.51307 13.9559 3.5 14.0219 3.5C14.0879 3.5 14.1533 3.51307 14.2142 3.53845C14.2751 3.56384 14.3304 3.60103 14.3769 3.6479Z"
                        fill="#E0E0F4"
                        stroke="#E0E0F4"
                      />
                    </svg>
                  </span>
                  <span
                    className={`${
                      checkedInputs.greetings === 2 ? styles.checked : ""
                    }`}
                    onClick={() =>
                      setCheckedInputs({ ...checkedInputs, greetings: 2 })
                    }
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="21"
                      height="21"
                      viewBox="0 0 21 21"
                      fill="none"
                    >
                      <path d="M5.5 5.5L15.5 15.5L5.5 5.5Z" fill="#E0E0F4" />
                      <path
                        d="M5.5 15.5L15.5 5.5M5.5 5.5L15.5 15.5"
                        stroke="#E0E0F4"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              </div>
              <div className={styles.right}>
                <span>75%</span>
                <button onClick={() => setIsFullRatingOpen(true)}>
                  Подробнее
                </button>
              </div>
            </div>
            <div className={styles.transaction_modal_checkList_content_item}>
              <div className={styles.left}>
                <p>Выявление потребностей</p>
                <div className={styles.left_checkbox}>
                  <span
                    onClick={() =>
                      setCheckedInputs({ ...checkedInputs, needsIdentity: 1 })
                    }
                    className={`${
                      checkedInputs.needsIdentity === 1 ? styles.checked : ""
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M14.3769 3.6479L14.3847 3.65578L14.3929 3.6633C14.4436 3.71012 14.4841 3.76694 14.5118 3.8302C14.5396 3.89345 14.5539 3.96175 14.5539 4.0308C14.5539 4.09985 14.5396 4.16815 14.5118 4.2314C14.4841 4.29465 14.4436 4.35148 14.3929 4.3983L14.3855 4.40513L14.3784 4.41225L6.21837 12.5722L6.21692 12.5737C6.17044 12.6206 6.11514 12.6578 6.05421 12.6831C5.99328 12.7085 5.92793 12.7216 5.86192 12.7216C5.79591 12.7216 5.73056 12.7085 5.66963 12.6831C5.60871 12.6578 5.5534 12.6206 5.50692 12.5737L5.50548 12.5722L1.66548 8.73224L1.66553 8.73219L1.65931 8.72618C1.61001 8.67856 1.57058 8.6217 1.54326 8.55884C1.51594 8.49598 1.50126 8.42836 1.50008 8.35983C1.49889 8.2913 1.51122 8.22321 1.53635 8.15944C1.56148 8.09567 1.59892 8.03748 1.64654 7.98818C1.69416 7.93889 1.75102 7.89945 1.81388 7.87213C1.87674 7.84481 1.94436 7.83014 2.01289 7.82895C2.08142 7.82777 2.14952 7.84009 2.21328 7.86522C2.27583 7.88987 2.33301 7.92636 2.38169 7.97269L5.50781 11.1088L5.8616 11.4637L6.21571 11.1091L13.6657 3.64912L13.6669 3.6479C13.7134 3.60103 13.7687 3.56384 13.8296 3.53845C13.8906 3.51307 13.9559 3.5 14.0219 3.5C14.0879 3.5 14.1533 3.51307 14.2142 3.53845C14.2751 3.56384 14.3304 3.60103 14.3769 3.6479Z"
                        fill="#E0E0F4"
                        stroke="#E0E0F4"
                      />
                    </svg>
                  </span>
                  <span
                    onClick={() =>
                      setCheckedInputs({ ...checkedInputs, needsIdentity: 2 })
                    }
                    className={`${
                      checkedInputs.needsIdentity === 2 ? styles.checked : ""
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="21"
                      height="21"
                      viewBox="0 0 21 21"
                      fill="none"
                    >
                      <path d="M5.5 5.5L15.5 15.5L5.5 5.5Z" fill="#E0E0F4" />
                      <path
                        d="M5.5 15.5L15.5 5.5M5.5 5.5L15.5 15.5"
                        stroke="#E0E0F4"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              </div>
              <div className={styles.right}>
                <span>55%</span>
                <button onClick={() => setIsFullRatingOpen(true)}>
                  Подробнее
                </button>
              </div>
            </div>
            <div className={styles.transaction_modal_checkList_content_item}>
              <div className={styles.left}>
                <p>Презентация</p>
                <div className={styles.left_checkbox}>
                  <span
                    onClick={() =>
                      setCheckedInputs({ ...checkedInputs, presentation: 1 })
                    }
                    className={`${
                      checkedInputs.presentation === 1 ? styles.checked : ""
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M14.3769 3.6479L14.3847 3.65578L14.3929 3.6633C14.4436 3.71012 14.4841 3.76694 14.5118 3.8302C14.5396 3.89345 14.5539 3.96175 14.5539 4.0308C14.5539 4.09985 14.5396 4.16815 14.5118 4.2314C14.4841 4.29465 14.4436 4.35148 14.3929 4.3983L14.3855 4.40513L14.3784 4.41225L6.21837 12.5722L6.21692 12.5737C6.17044 12.6206 6.11514 12.6578 6.05421 12.6831C5.99328 12.7085 5.92793 12.7216 5.86192 12.7216C5.79591 12.7216 5.73056 12.7085 5.66963 12.6831C5.60871 12.6578 5.5534 12.6206 5.50692 12.5737L5.50548 12.5722L1.66548 8.73224L1.66553 8.73219L1.65931 8.72618C1.61001 8.67856 1.57058 8.6217 1.54326 8.55884C1.51594 8.49598 1.50126 8.42836 1.50008 8.35983C1.49889 8.2913 1.51122 8.22321 1.53635 8.15944C1.56148 8.09567 1.59892 8.03748 1.64654 7.98818C1.69416 7.93889 1.75102 7.89945 1.81388 7.87213C1.87674 7.84481 1.94436 7.83014 2.01289 7.82895C2.08142 7.82777 2.14952 7.84009 2.21328 7.86522C2.27583 7.88987 2.33301 7.92636 2.38169 7.97269L5.50781 11.1088L5.8616 11.4637L6.21571 11.1091L13.6657 3.64912L13.6669 3.6479C13.7134 3.60103 13.7687 3.56384 13.8296 3.53845C13.8906 3.51307 13.9559 3.5 14.0219 3.5C14.0879 3.5 14.1533 3.51307 14.2142 3.53845C14.2751 3.56384 14.3304 3.60103 14.3769 3.6479Z"
                        fill="#E0E0F4"
                        stroke="#E0E0F4"
                      />
                    </svg>
                  </span>
                  <span
                    onClick={() =>
                      setCheckedInputs({ ...checkedInputs, presentation: 2 })
                    }
                    className={`${
                      checkedInputs.presentation === 2 ? styles.checked : ""
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="21"
                      height="21"
                      viewBox="0 0 21 21"
                      fill="none"
                    >
                      <path d="M5.5 5.5L15.5 15.5L5.5 5.5Z" fill="#E0E0F4" />
                      <path
                        d="M5.5 15.5L15.5 5.5M5.5 5.5L15.5 15.5"
                        stroke="#E0E0F4"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              </div>
              <div className={styles.right}>
                <span>75%</span>
                <button onClick={() => setIsFullRatingOpen(true)}>
                  Подробнее
                </button>
              </div>
            </div>
            <div className={styles.transaction_modal_checkList_content_item}>
              <div className={styles.left}>
                <p>Закрытие возражений</p>
                <div className={styles.left_checkbox}>
                  <span
                    onClick={() =>
                      setCheckedInputs({
                        ...checkedInputs,
                        closingObjection: 1,
                      })
                    }
                    className={`${
                      checkedInputs.closingObjection === 1 ? styles.checked : ""
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M14.3769 3.6479L14.3847 3.65578L14.3929 3.6633C14.4436 3.71012 14.4841 3.76694 14.5118 3.8302C14.5396 3.89345 14.5539 3.96175 14.5539 4.0308C14.5539 4.09985 14.5396 4.16815 14.5118 4.2314C14.4841 4.29465 14.4436 4.35148 14.3929 4.3983L14.3855 4.40513L14.3784 4.41225L6.21837 12.5722L6.21692 12.5737C6.17044 12.6206 6.11514 12.6578 6.05421 12.6831C5.99328 12.7085 5.92793 12.7216 5.86192 12.7216C5.79591 12.7216 5.73056 12.7085 5.66963 12.6831C5.60871 12.6578 5.5534 12.6206 5.50692 12.5737L5.50548 12.5722L1.66548 8.73224L1.66553 8.73219L1.65931 8.72618C1.61001 8.67856 1.57058 8.6217 1.54326 8.55884C1.51594 8.49598 1.50126 8.42836 1.50008 8.35983C1.49889 8.2913 1.51122 8.22321 1.53635 8.15944C1.56148 8.09567 1.59892 8.03748 1.64654 7.98818C1.69416 7.93889 1.75102 7.89945 1.81388 7.87213C1.87674 7.84481 1.94436 7.83014 2.01289 7.82895C2.08142 7.82777 2.14952 7.84009 2.21328 7.86522C2.27583 7.88987 2.33301 7.92636 2.38169 7.97269L5.50781 11.1088L5.8616 11.4637L6.21571 11.1091L13.6657 3.64912L13.6669 3.6479C13.7134 3.60103 13.7687 3.56384 13.8296 3.53845C13.8906 3.51307 13.9559 3.5 14.0219 3.5C14.0879 3.5 14.1533 3.51307 14.2142 3.53845C14.2751 3.56384 14.3304 3.60103 14.3769 3.6479Z"
                        fill="#E0E0F4"
                        stroke="#E0E0F4"
                      />
                    </svg>
                  </span>
                  <span
                    onClick={() =>
                      setCheckedInputs({
                        ...checkedInputs,
                        closingObjection: 2,
                      })
                    }
                    className={`${
                      checkedInputs.closingObjection === 2 ? styles.checked : ""
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="21"
                      height="21"
                      viewBox="0 0 21 21"
                      fill="none"
                    >
                      <path d="M5.5 5.5L15.5 15.5L5.5 5.5Z" fill="#E0E0F4" />
                      <path
                        d="M5.5 15.5L15.5 5.5M5.5 5.5L15.5 15.5"
                        stroke="#E0E0F4"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              </div>
              <div className={styles.right}>
                <span>75%</span>
                <button onClick={() => setIsFullRatingOpen(true)}>
                  Подробнее
                </button>
              </div>
            </div>
            <div className={styles.transaction_modal_checkList_content_item}>
              <div className={styles.left}>
                <p>Закрытие</p>
                <div className={styles.left_checkbox}>
                  <span
                    onClick={() =>
                      setCheckedInputs({
                        ...checkedInputs,
                        closing: 1,
                      })
                    }
                    className={`${
                      checkedInputs.closing === 1 ? styles.checked : ""
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M14.3769 3.6479L14.3847 3.65578L14.3929 3.6633C14.4436 3.71012 14.4841 3.76694 14.5118 3.8302C14.5396 3.89345 14.5539 3.96175 14.5539 4.0308C14.5539 4.09985 14.5396 4.16815 14.5118 4.2314C14.4841 4.29465 14.4436 4.35148 14.3929 4.3983L14.3855 4.40513L14.3784 4.41225L6.21837 12.5722L6.21692 12.5737C6.17044 12.6206 6.11514 12.6578 6.05421 12.6831C5.99328 12.7085 5.92793 12.7216 5.86192 12.7216C5.79591 12.7216 5.73056 12.7085 5.66963 12.6831C5.60871 12.6578 5.5534 12.6206 5.50692 12.5737L5.50548 12.5722L1.66548 8.73224L1.66553 8.73219L1.65931 8.72618C1.61001 8.67856 1.57058 8.6217 1.54326 8.55884C1.51594 8.49598 1.50126 8.42836 1.50008 8.35983C1.49889 8.2913 1.51122 8.22321 1.53635 8.15944C1.56148 8.09567 1.59892 8.03748 1.64654 7.98818C1.69416 7.93889 1.75102 7.89945 1.81388 7.87213C1.87674 7.84481 1.94436 7.83014 2.01289 7.82895C2.08142 7.82777 2.14952 7.84009 2.21328 7.86522C2.27583 7.88987 2.33301 7.92636 2.38169 7.97269L5.50781 11.1088L5.8616 11.4637L6.21571 11.1091L13.6657 3.64912L13.6669 3.6479C13.7134 3.60103 13.7687 3.56384 13.8296 3.53845C13.8906 3.51307 13.9559 3.5 14.0219 3.5C14.0879 3.5 14.1533 3.51307 14.2142 3.53845C14.2751 3.56384 14.3304 3.60103 14.3769 3.6479Z"
                        fill="#E0E0F4"
                        stroke="#E0E0F4"
                      />
                    </svg>
                  </span>
                  <span
                    onClick={() =>
                      setCheckedInputs({
                        ...checkedInputs,
                        closing: 2,
                      })
                    }
                    className={`${
                      checkedInputs.closing === 2 ? styles.checked : ""
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="21"
                      height="21"
                      viewBox="0 0 21 21"
                      fill="none"
                    >
                      <path d="M5.5 5.5L15.5 15.5L5.5 5.5Z" fill="#E0E0F4" />
                      <path
                        d="M5.5 15.5L15.5 5.5M5.5 5.5L15.5 15.5"
                        stroke="#E0E0F4"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              </div>
              <div className={styles.right}>
                <span>75%</span>
                <button onClick={() => setIsFullRatingOpen(true)}>
                  Подробнее
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${styles.transaction_modal_fullrating} ${
            isFullRatingOpen ? styles.opened : ""
          }`}
        >
          <h1>Общая оценка</h1>
          <h3>Плюсы</h3>
          <p>
            Менеджер использует уверенный и бодрый тон голоса, что создает
            положительное впечатление и способствует успешному началу разговора.
          </p>
          <p>
            Менеджер представляется клиенту, что является важной частью
            приветствия.
          </p>
          <h3>Минусы</h3>
          <p>
            Менеджер не упоминает название компании 'СВОБОДА-ФИНАНС', а вместо
            этого называет 'Металл Корт', что может вызвать путаницу у клиента.
          </p>
          <p>
            Менеджер не приветствует клиента по имени, что снижает уровень
            персонализации общения.
          </p>
          <h3>Объяснение</h3>
          <p>
            Оценка снижена из-за отсутствия упоминания правильного названия
            компании и цели звонка. Хотя менеджер представился, он не
            использовал имя клиента, что также является важным элементом
            приветствия. Эти упущения могут негативно сказаться на восприятии
            компании клиентом.
          </p>
          <h3>Рекоммендации</h3>
          <p>
            В будущем менеджеру следует всегда начинать разговор с приветствия
            клиента по имени, если оно известно, или уточнять его в начале
            разговора.
          </p>
          <p>
            Необходимо четко называть правильное название компании, чтобы
            избежать путаницы.
          </p>
          <p>
            Важно сразу сообщать цель звонка, например: 'Я звоню, чтобы
            проконсультировать вас по вопросам долговых обязательств'. Это
            поможет клиенту лучше понять, о чем будет идти речь, и подготовиться
            к разговору.
          </p>
          <button>
            Скачать отчет pdf
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
            >
              <path
                d="M7.16663 10L10.5 13.3333L13.8333 10"
                stroke="#171739"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10.5 2.5V13.3333M4.66663 17.5H16.3333"
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
  );
};

export default FullTransactionModal;

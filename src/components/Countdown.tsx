import { useContext } from "react";
import styles from "../styles/components/Countdown.module.css";
import { CountdownContext } from "../context/CountdownContext";

export function Countdown() {
  const {
    minutes,
    seconds,
    hasFinished,
    isActive,
    startCountdown,
    resetCountdown,
  } = useContext(CountdownContext);
  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
  const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("");

  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>
      {hasFinished ? (
        <button disabled className={styles.countdownButton}>
         Finish Cicle
        </button>
      ) : (
        <>
          {isActive ? (
            <button
              type="button"
              className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
              onClick={() => resetCountdown()}
            >
              Abandon Cicle
            </button>
          ) : (
            <button
              type="button"
              className={styles.countdownButton}
              onClick={() => startCountdown()}
            >
              Start Cicle
            </button>
          )}
        </>
      )}
    </div>
  );
}

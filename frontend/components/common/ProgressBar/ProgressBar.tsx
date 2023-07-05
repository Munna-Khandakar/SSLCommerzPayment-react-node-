

import React from "react";
import styles from "./progressBar.module.css";

interface ProgressBarType {
  progressValue: number;
}

function ProgressBar(props: ProgressBarType) {
  const { progressValue } = props;
  return (
    <div className="w-full flex items-center relative md:w-[195px]">
      <div className={`${styles.progress} h-[8px] md:h-[10px]`}>
        <div className={`${styles.bar}`} style={{ width: `${progressValue}%` }}>
          {/* <p className={`${styles.percent}`}>{progressValue}%</p> */}
        </div>
      </div>

    </div>
  );
}

export default ProgressBar;

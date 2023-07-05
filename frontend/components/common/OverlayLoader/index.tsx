import { useEffect, useRef, ReactNode, useState } from "react";
import { createPortal } from "react-dom";
import styles from "./index.module.css";

import { ScaleLoader } from "react-spinners";

const loaderRoot = document.querySelector("#__loader") as HTMLElement;

interface Props {
  children?: ReactNode;
}

const Portal = ({ children }: Props) => {
  const el = useRef(document.createElement("div"));

  useEffect(() => {
    // Use this in case CRA throws an error about react-hooks/exhaustive-deps
    const current = el.current;

    loaderRoot.appendChild(current);
    return () => void loaderRoot.removeChild(current);
  }, []);

  return createPortal(children, el.current);
};

const OverlayLoader = ({ isActive = false }: { isActive?: boolean }) => {
  const [isLoading, setLoader] = useState(isActive);

  useEffect(() => {
    document.addEventListener("loaderPortal", (e) => {
      const { detail } = e as unknown as { detail: { status: boolean } };
      setLoader(detail.status);
    });
    return document.removeEventListener("loaderPortal", () => {
      setLoader(false);
    });
  });
  return isLoading ? (
    <Portal>
      <div className={styles.loaderWrapper}>
        <div className="flex flex-col items-center justify-center">
          <ScaleLoader height={40} color={"white"} loading={true} />
          <p className="text-base font-semibold leading-loose text-white md:text-lg">
            Please wait ...
          </p>
        </div>
      </div>
    </Portal>
  ) : null;
};

export default OverlayLoader;

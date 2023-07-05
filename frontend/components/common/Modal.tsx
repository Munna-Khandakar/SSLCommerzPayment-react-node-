import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { FiX } from 'react-icons/fi';
import { useOutsideHandler } from '../../utills/skills/helper';

type IConfiguration = {
  width?: number | string;
  header?: boolean;
  backDropClose?: boolean;
  insideHeaderClose?: boolean;
  widthClass?: string;
  mobileView?: string;
  bottomSheet?: boolean;
};

const Modal = ({
  body,
  isOpen,
  onClose,
  config,
}: {
  body: JSX.Element;
  isOpen: boolean;
  onClose: () => void;
  config?: IConfiguration;
}) => {
  const configuration = {
    width: config?.width || '40%',
    header: config?.header,
    insideHeaderClose: config?.insideHeaderClose,
    widthClass: config?.widthClass || '',
    mobileView: config?.mobileView || '',
    bottomSheet: config?.bottomSheet,
  };

  const {
    width,
    header,
    insideHeaderClose,
    widthClass,
    mobileView,
    bottomSheet,
  } = configuration;

  const toggle = () => {
    onClose();
  };

  const ref = React.useRef(null);
  useOutsideHandler(ref, () => !config?.backDropClose && toggle());

  useEffect(() => {
    isOpen && document.body.classList.add('overflow-hidden');
    !isOpen && document.body.classList.remove('overflow-hidden');
  }, [isOpen]);

  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <div
      className={`modal fixed flex h-full w-full items-center justify-center bg-black/25 bg-white ${mobileView} top-0 z-50`}
    >
      <div
        className={`absolute w-full rounded-md rounded-b-none bg-white md:relative md:bottom-auto md:rounded-b-md ${
          widthClass ? widthClass : 'md:w-[60%]'
        } ${bottomSheet ? 'bottom-0' : null} `}
        ref={ref}
      >
        {header && !insideHeaderClose && (
          <div>
            <button
              className="close absolute top-[-25px] right-0  p-1 text-gray-400"
              onClick={onClose}
            >
              <FiX size="20" className="text-white" />
            </button>
          </div>
        )}
        {insideHeaderClose && !header && (
          <div>
            <button
              className="close absolute top-[5px] right-[5px] z-50 rounded-full p-1 text-gray-400 hover:bg-white"
              onClick={onClose}
            >
              <FiX size="20" />
            </button>
          </div>
        )}
        <div className="max-h-[80vh] overflow-y-auto">{body}</div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;

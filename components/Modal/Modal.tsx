import React from 'react';
import Button from '../UI/Button';

interface IModalProps {
  modalText: string;
  btnConfirmText?: string;
  btnRejectText?: string;
  onConfirm: () => void;
  onReject: () => void;
}

export default function Modal({ modalText, btnConfirmText = 'Confirm', btnRejectText = 'Reject', onConfirm, onReject }: IModalProps) {
  return (
    <div id="popup-modal" className={style.wrapper} onClick={onReject}>
      <div className={style.div_outer}>
        <div className={style.div_inner}>
          <button type="button" className={style.button_times} data-modal-toggle="popup-modal" onClick={onReject}>
            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 
                10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 
                4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"></path>
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
          <div className="p-6 text-center">
            <svg
              aria-hidden="true"
              className="mx-auto mb-4 w-14 h-14 text-gray-400 dark:text-gray-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <h3 className={style.modal_text}>{modalText}</h3>
            <Button
              title={btnConfirmText}
              onClick={onConfirm}
              withBorder={false}
              style="group bg-gradient-to-br from-pink-500 to-orange-400 mr-3"
            />
            <Button title={btnRejectText} onClick={onReject} style="group bg-gradient-to-br from-pink-500 to-orange-400 ml-3" />
          </div>
        </div>
      </div>
    </div>
  );
}

const style = {
  wrapper: 'fixed overflow-y-auto overflow-x-hidden m-auto z-50 md:inset-0 flex justify-center h-modal md:h-full bg-black bg-opacity-60 items-center',
  div_outer: 'fixed p-4 w-full max-w-md h-full md:h-auto',
  div_inner: 'relative bg-white rounded-lg shadow dark:bg-gray-700',
  button_times:
    'absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white',
  modal_text: 'mb-5 text-lg font-normal text-gray-500 dark:text-gray-400',
  button_confirm:
    'text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2',
  button_reject:
    'text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600'
};

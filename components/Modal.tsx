import React from "react";
import ReactModal from "react-modal";

ReactModal.setAppElement("#__next");

const Modal = ({ isOpen, handleClose }: any) => {
  return (
    <div>
      <ReactModal
        isOpen={isOpen}
        onRequestClose={handleClose}
        contentLabel="Example Modal"
        className="w-[300px] bg-white p-5 rounded-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        overlayClassName="fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-50"
      >
        <h1 className="text-xl font-bold mb-3">상세주문 Option</h1>
        <form>
          <div>
            <div className="flex items-stretch">
              <input type="checkbox" />
              <div className="ml-1">연하게</div>
            </div>
            <div className="flex items-stretch">
              <input type="checkbox" />
              <div className="ml-1">우유 추가염</div>
            </div>
            <div className="flex items-stretch">
              <input type="checkbox" />
              <div className="ml-1">이잉 시럽빼죵</div>
            </div>
          </div>
        </form>
        <button
          type="button"
          className="mt-3 border border-black hover:text-brand100 text-black font-bold py-1 px-3 rounded"
        >
          주문완료
        </button>
        <button
          onClick={handleClose}
          type="button"
          className="ml-1 mt-3 border border-black hover:text-brand100 text-black font-bold py-1 px-3 rounded"
        >
          Close
        </button>
      </ReactModal>
    </div>
  );
};

export default Modal;

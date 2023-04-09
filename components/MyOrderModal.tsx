import ReactModal, { Props } from "react-modal";

ReactModal.setAppElement("#__next");

interface MyOrderModalProps extends Props {
  isOpen: boolean;
  handleClose: () => void;
}

function MyOrderModal({ isOpen, handleClose, ...props }: MyOrderModalProps) {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={handleClose}
      contentLabel="Example Modal"
      className="max-w-[400px] w-full bg-white p-5 rounded-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      overlayClassName="fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-50"
    >
      <h1 className="text-xl font-bold mb-3">My Order</h1>
      <div className="p-5  border-brand80 border-[2px] rounded-md"></div>
      <div className="flex justify-center items-center">
        <button
          onClick={handleClose}
          type="button"
          className="mt-3 border border-black hover:text-brand100 text-black font-bold py-1 px-3 rounded"
        >
          Close
        </button>
      </div>
    </ReactModal>
  );
}

export default MyOrderModal;

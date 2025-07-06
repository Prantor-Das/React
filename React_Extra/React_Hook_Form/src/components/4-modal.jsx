// Modal.jsx
import React from "react";
import { X, Download } from "lucide-react";

function Modal({ onClose }) {
  const modalRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      onClose();
    }
  };

  return (
    <div
      ref={modalRef}
      onClick={closeModal}
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
    >
      <div className="mt-10 flex flex-col gap-5 text-white">
        <button className="place-self-end" onClick={onClose}>
          <X size={30} />
        </button>
        <div className="bg-slate-800 rounded-xl px-20 py-10 flex flex-col gap-5 items-center mx-4">
          <h1 className="text-3xl font-extrabold">DOWNLOAD FREE E-BOOK</h1>
          <p className="text-3xl font-bold max-w-md text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <form>
            <input
              type="email"
              placeholder="Enter your email"
              required
              className="px-4 py-3 w-full text-black border-gray-300 rounded-md"
            />
            <button
              type="submit"
              className="mt-4 w-full flex items-center justify-center gap-2 bg-black px-5 py-3 rounded-md"
            >
              <Download /> Download ebook
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Modal;

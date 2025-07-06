// App.jsx or wherever you're using it
import React from "react";
import Modal from "./4-modal"; // Make sure path matches the new filename

export const PageWithModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="h-screen flex flex-col items-center gap-6 bg-slate-200 text-white">
      <h1 className="text-5xl font-bold mt-4">Popup Modal</h1>
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-violet-600 px-4 py-2 rounded-lg text-lg"
      >
        Get the E-book
      </button>
      {isModalOpen && <Modal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};

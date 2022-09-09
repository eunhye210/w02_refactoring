import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function useModal(initialState = true) {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(initialState);
  const [modalType, setModalType] = useState("greetingModal");

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
    navigate('/videos');
    setModalType("videoInfo");
  }

  return {
    isModalOpen,
    modalType,
    openModal,
    closeModal,
  };
}

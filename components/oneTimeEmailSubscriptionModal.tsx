"use client";

import { EmailSubscriptionModal } from "@codebymedu/components/emailSubscriptionModal";
import { useState, useEffect } from "react";

export const OneTimeEmailSubscriptionModal = () => {
  // --- STATE ---

  const [isModalOpen, setModalOpen] = useState(false);

  // --- EFFECTS ---

  useEffect(() => {
    const showModal = localStorage.getItem("modalShown");

    if (!showModal) {
      const timer = setTimeout(() => {
        setModalOpen(true);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, []);

  // --- CALLBACKS ---

  const handleClose = () => {
    setModalOpen(false);
    localStorage.setItem("modalShown", "true");
  };

  // --- RENDER ---

  return (
    <EmailSubscriptionModal isOpen={isModalOpen} handleClose={handleClose} />
  );
};

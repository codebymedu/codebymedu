"use client";

import { Modal, ModalContent, ModalHeader, ModalBody } from "@nextui-org/react";
import { EmailSubscriptionForm } from "@codebymedu/components/emailSubscriptionForm";
import { NewspaperIcon } from "@heroicons/react/20/solid";

type EmailSubscriptionModalProps = { isOpen: boolean; handleClose: () => void };

export const EmailSubscriptionModal = ({
  isOpen,
  handleClose,
}: EmailSubscriptionModalProps) => {
  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={handleClose}>
        <ModalContent>
          <ModalHeader className="flex flex-row items-center gap-4">
            <NewspaperIcon height={32} width={32} /> Stay up to date
          </ModalHeader>

          <ModalBody>
            <p>
              Subscribe to the newsletter to stay up to date with articles,
              courses and much more!
            </p>

            <div className="-mt-16">
              <EmailSubscriptionForm
                label=""
                handleSuccess={() => {
                  setTimeout(handleClose, 2000);
                }}
              />
            </div>
            <div className="text-xs  mb-4">No Spam. I promise!</div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

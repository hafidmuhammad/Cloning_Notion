import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton } from "@chakra-ui/react";
import PropTypes from 'prop-types';

const SettingPage = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Templates Modal</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          This is the content of the templates modal.
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

SettingPage.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default SettingPage

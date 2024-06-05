import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from "@chakra-ui/react"
import PropTypes from 'prop-types';

const CalenderModal = ({ isOpen, onClose }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Calendar Modal</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    This is the content of the calendar modal.
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}

CalenderModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};




export default CalenderModal
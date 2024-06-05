import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton } from "@chakra-ui/react";
import PropTypes from 'prop-types';



const TemplatePage = ({ isOpen, onClose }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Templates Modal</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    {/* Content of your templates modal */}
                    This is the content of the templates modal.
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}

TemplatePage.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default TemplatePage
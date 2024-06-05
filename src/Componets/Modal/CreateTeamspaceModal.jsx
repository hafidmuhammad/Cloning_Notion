import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from '@chakra-ui/react';
import PropTypes from 'prop-types';
const CreateTeamspaceModal = ({ isOpen, onClose }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Create Teamspace Modal</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    This is the content of the create teamspace modal.
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}

CreateTeamspaceModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};



export default CreateTeamspaceModal
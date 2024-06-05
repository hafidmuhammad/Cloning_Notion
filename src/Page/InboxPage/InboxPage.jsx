import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Text } from "@chakra-ui/react";
import PropTypes from 'prop-types';

const InboxPage = ( { isOpen, onClose }) => {

    return (
        <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Inbox</DrawerHeader>
            <DrawerBody>
                <Text>Inbox content goes here.</Text>
            </DrawerBody>
        </DrawerContent>
    </Drawer>
    )
}


InboxPage.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default InboxPage
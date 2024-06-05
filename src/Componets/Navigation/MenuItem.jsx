import PropTypes from 'prop-types';
import { Flex, Box, Text } from "@chakra-ui/react";

const MenuItem = ({ item, onItemClick }) => (
    <Flex
        align="center"
        p="1"
        mx="2"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        onClick={() => onItemClick(item.path)}
    >
        <Box fontSize="lg" color={"gray.600"} mr="4">
            {item.logo}
        </Box>
        <Text fontSize="md" color={"gray.600"}>
            {item.name}
        </Text>
    </Flex>
);

// PropTypes validation
MenuItem.propTypes = {
    item: PropTypes.shape({
        logo: PropTypes.node.isRequired,
        name: PropTypes.string.isRequired,
        path: PropTypes.string.isRequired
    }).isRequired,
    onItemClick: PropTypes.func.isRequired
};

export default MenuItem;

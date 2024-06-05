import { useState } from "react";
import {
    Box,
    Flex,
    Text,
    IconButton,
    Avatar,
} from "@chakra-ui/react";
import { FiChevronsLeft, FiChevronDown, FiMenu } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';
import { BiHome } from "react-icons/bi";
import { SlSettings } from "react-icons/sl";
import { CalendarIcon, Search2Icon } from "@chakra-ui/icons";
import { BsInbox, BsPersonAdd } from "react-icons/bs";
import { TbEmpathize, TbTrash } from "react-icons/tb";
import { TfiHelpAlt } from "react-icons/tfi";
import { IoCreateOutline } from "react-icons/io5";
import SearchModal from "../../Page/SearchPage/SearchPage";
import InboxDrawer from "../../Page/InboxPage/InboxPage";
import CalendarModal from "../Modal/CalenderModal";
import CreateTeamspaceModal from "../Modal/CreateTeamspaceModal";
import TemplatesModal from "../../Page/TemplatesPage/TemplatePage";
import MenuItem from "./MenuItem";
import SettingPage from "../../Page/SettingPage/SettingPage";

const HeaderItems = [
    { name: "Search", path: "/search", logo: <Search2Icon /> },
    { name: "Home", path: "/", logo: <BiHome /> },
    { name: "Inbox", path: "/inbox", logo: <BsInbox /> },
    { name: "Setting & members", path: "/setting", logo: <SlSettings /> },
];


const FooterItems = [
    { name: "Calender", path: "/calender", logo: <CalendarIcon /> },
    { name: "Create a teamspace", path: "/createteamspace", logo: <BsPersonAdd /> },
    { name: "Templates", path: "/templates", logo: <TbEmpathize /> },
    { name: "Trash", path: "/trash", logo: <TbTrash /> },
    { name: "Help & support", path: "/help", logo: <TfiHelpAlt /> },
];

const Sidebar = ({ children }) => {
    const [sidebarVisible, setSidebarVisible] = useState(true);
    const [activeModal, setActiveModal] = useState(null);
    const navigate = useNavigate();

    const handleNavigate = (path) => {
        navigate(path);
        if (path === "/search") {
            setActiveModal("search");
        } else if (path === "/inbox") {
            setActiveModal("inbox");
        } else if (path === "/calender") {
            setActiveModal("calender");
        } else if (path === "/createteamspace") {
            setActiveModal("createteamspace");
        } else if (path === "/templates") {
            setActiveModal("templates");
        } else if (path === "/trash") {
            setActiveModal("trash");
        } else if (path === "/setting") {
            setActiveModal("setting");
        } else if (path === "/help") {
            setActiveModal("help");
        } else {
            setActiveModal(null);
        }
    };

    const handleSidebarToggle = () => {
        setSidebarVisible(!sidebarVisible);
    };

    const handleCreateNewPage = () => {
        navigate("/createnewprojek");
    };

    const closeModal = () => {
        setActiveModal(null);
    };

    return (
        <Box minH="100vh">
            <Box
                bg="gray.200"
                borderRight="1px"
                borderRightColor="gray.700"
                w={60}
                pos="fixed"
                h="full"
                display={sidebarVisible ? "block" : "none"}
            >
                <Flex h="20" alignItems="center" justifyContent="space-between" gap={2} p={3}>
                    <Avatar size="sm" name="John Doe" src="path/to/profile/image.jpg" />
                    <Flex alignItems="center" justifyContent="space-between" gap={2}>
                        <Text fontSize="md" fontWeight="bold">John</Text>
                        <FiChevronDown />
                    </Flex>
                    <FiChevronsLeft onClick={handleSidebarToggle} cursor={"pointer"} />
                    <IconButton
                        onClick={handleCreateNewPage}
                        variant="outline"
                        icon={<IoCreateOutline />}
                    />
                </Flex>
                <Box my={4}>
                    {HeaderItems.map((item) => (
                        <MenuItem key={item.name} item={item} onItemClick={handleNavigate} />
                    ))}
                </Box>
                <Text p={3}>Private</Text>
                <Box>
                    Muncul di sini
                </Box>
                <Box my={4}>
                    {FooterItems.map((item) => (
                        <MenuItem key={item.name} item={item} onItemClick={handleNavigate} />
                    ))}
                </Box>
            </Box>
            <Flex
                ml={sidebarVisible ? 60 : 0}
                p="4"
                height="20"
                alignItems="center"
                bg="white"
                justifyContent="space-between"
            >
                <IconButton
                    display={sidebarVisible ? 'none' : 'flex'}
                    onClick={handleSidebarToggle}
                    variant="outline"
                    icon={<FiMenu />}
                />
            </Flex>
            <Box ml={sidebarVisible ? 60 : 0} p="4">
                {children}
            </Box>
        </Box>
    );
};

Sidebar.propTypes = {
    children: PropTypes.node 
};
export default Sidebar;


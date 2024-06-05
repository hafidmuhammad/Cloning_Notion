import { BiHome } from "react-icons/bi";
import { SlSettings } from "react-icons/sl";
import { CalendarIcon, Search2Icon } from "@chakra-ui/icons";
import { BsInbox, BsPersonAdd } from "react-icons/bs";
import { TbEmpathize, TbTrash } from "react-icons/tb";
import { TfiHelpAlt } from "react-icons/tfi";

export const HeaderItems = [
    { name: "Search", path: "/search", logo: <Search2Icon /> },
    { name: "Home", path: "/", logo: <BiHome /> },
    { name: "Inbox", path: "/inbox", logo: <BsInbox /> },
    { name: "Setting & members", path: "/setting", logo: <SlSettings /> },
];

export const FooterItems = [
    { name: "Calender", path: "/calender", logo: <CalendarIcon /> },
    { name: "Create a teamspace", path: "/createteamspace", logo: <BsPersonAdd /> },
    { name: "Templates", path: "/templates", logo: <TbEmpathize /> },
    { name: "Trash", path: "/trash", logo: <TbTrash /> },
    { name: "Help & support", path: "/help", logo: <TfiHelpAlt /> },
];

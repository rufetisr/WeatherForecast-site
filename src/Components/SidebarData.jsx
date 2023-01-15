import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { AiFillHome} from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as BsIcons from "react-icons/bs";
import * as VscIcons from "react-icons/vsc";
import React  from "react";

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome/>,
        cName: 'nav-text'
    },

    {
        title: 'Map',
        path: '/map',
        icon: <BsIcons.BsMap/>,
        cName: 'nav-text'
    },
    {
        title: 'Favourites',
        path: '/favourites',
        icon: <BsIcons.BsBookmarkStar />,
        cName: 'nav-text'
    },
    {
        title: 'Send Feedback',
        path: '/feedback',
        icon: <VscIcons.VscFeedback />,
        cName: 'nav-text'
    },

]
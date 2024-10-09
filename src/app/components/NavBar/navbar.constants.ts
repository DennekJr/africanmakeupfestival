import {NavBarItem} from "@/app/components/NavBar/navbar.types";

export const NAV_MENU: Record<string, NavBarItem> = {
    home: {
        id: 'home',
        route: '',
        name: 'Home',
        disabled: false,
    },
    speakers2024: {
        id: '2024speakers',
        route: '2024-speakers',
        name: '2024 Speakers',
        disabled: false,
    },
    exhibitors: {
        id: 'exhibitors',
        route: 'exhibitors',
        name: 'Sponsor',
        disabled: false,
    },
    program2024: {
        id: '2024-program',
        route: '2024-program',
        name: '2024 Program',
        disabled: false,
    },
    media: {
        id: 'media',
        route: 'media',
        name: 'Media',
        disabled: false,
    },
};

export const NAV_BUTTONS: Record<string, NavBarItem> = {
    getTicket: {
        id: 'getTicket',
        route: 'getTicket',
        name: 'Get Ticket',
        disabled: false,
    },
    becomeASponsor: {
        id: 'becomeASponsor',
        route: 'becomeASponsor',
        name: 'Become A Sponsor',
        disabled: false,
    },
};

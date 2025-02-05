import {dashboard, expenses, trend, handshake, clipboard} from '../utils/Icons'

export const menuItems = [
    {
        id: 1,
        title: 'Trang chủ',
        icon: dashboard,
        link: '/dashboard'
    },
    {
        id: 2,
        title: "Thu Nhập",
        icon: trend,
        link: "/dashboard",
    },
    {
        id: 3,
        title: "Chi Tiêu",
        icon: expenses,
        link: "/dashboard",
    },
    {
        id: 4,
        title: "Vay, Nợ",
        icon: handshake,
        link: "/dashboard",
    },
    {
        id: 5,
        title: "Mục tiêu tiết kiệm",
        icon: clipboard,
        link: "/dashboard",
    },
]
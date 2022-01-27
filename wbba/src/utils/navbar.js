import Generic from "../components/Generic"
import Home from '../components/Home'

export const navbar = [
    { id:1, title: 'Asosiy',path: '/asosiy',Element:Home,hidden: false },
    { id:2, title: 'Kurslarimiz',path: '/kurslarimiz',Element:Generic,hidden: false },
    { id:3, title: 'Natijalar',path: '/natijalar',Element:Generic,hidden: false },
    { id:4, title: 'Bizning jamoa',path: '/bizningjamoa',Element:Generic,hidden: false },
    { id:5, title: 'Youtube',path: '/youtube',Element:Generic,hidden: false },
    { id:6, title: 'Signin',path: '/login',Element:Generic,hidden: true },
    { id:7, title: 'Signup',path: '/signup',Element:Generic,hidden: true },
]

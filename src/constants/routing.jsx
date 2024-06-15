import AcknowledgedPage from '../pages/AcknowledgedPage'
import LoginPage from '../pages/LoginPage'
import RegisterInfo from '../pages/RegisterInfo'
import RegisterPage from '../pages/RegisterPage'
import ForgetPage from '../pages/ForgetPage'
import ResetPage from '../pages/ResetPage'
import HomePage from '../pages/HomePage'
import CompleteProfilePage from '../pages/CompleteProfilePage'
import ActivityPage from '../pages/ActivityPage'
import SearchPage from '../pages/SearchPage'
import SingleConventionPage from '../pages/SingleConventionPage'
import AttendConventionPage from '../pages/AttendConventionPage'
import UserConventionPage from '../pages/UserConventionPage'
import AttendanceConventionPage from '../pages/AttendanceConventionPage'
import AgendaPage from '../pages/AgendaPage'
import NextAgendaPage from '../pages/NextAgendaPage'
import FinalAgendaPage from '../pages/FinalAgendaPage'
import AccomodationPage from '../pages/AccomodationPage'
import CreateAccomodationPage from '../pages/CreateAccomodationPage'
import EventPage from '../pages/EventPage'
import CreateEventPage from '../pages/CreateEventPage'
export const routing = [
    {id:1,link:"/",element:<LoginPage/>},
    {id:2,link:"/register",element:<RegisterInfo/>},
    {id:3,link:"/register-form",element:<RegisterPage/>},
    {id:4,link:"/acknowledge",element:<AcknowledgedPage/>},
    {id:5,link:"/forget",element:<ForgetPage/>},
    {id:6,link:"/reset",element:<ResetPage/>},
    {id:7,link:"/home",element:<HomePage/>},
    {id:8,link:"/complete",element:<CompleteProfilePage/>},
    {id:9,link:"/activity",element:<ActivityPage/>},
    {id:10,link:"/search/:value/:type",element:<SearchPage/>},
    {id:11,link:"/single/conv/:id",element:<SingleConventionPage/>},
    {id:12,link:"/attend",element:<AttendConventionPage/>},
    {id:13,link:"/user/convention",element:<UserConventionPage/>},
    {id:14,link:"/convention/attendance",element:<AttendanceConventionPage/>},
    {id:15,link:"/agenda",element:<AgendaPage/>},
    {id:16,link:"/next/agenda",element:<NextAgendaPage/>},
    {id:17,link:"/final/agenda",element:<FinalAgendaPage/>},
    {id:18,link:"/accomodation",element:<AccomodationPage/>},
    {id:19,link:"/new/accomodation",element:<CreateAccomodationPage/>},
    {id:20,link:"/event",element:<EventPage/>},
    {id:21,link:"/new/event",element:<CreateEventPage/>},
]
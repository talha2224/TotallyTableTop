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
]
import AcknowledgedPage from '../pages/AcknowledgedPage'
import LoginPage from '../pages/LoginPage'
import RegisterInfo from '../pages/RegisterInfo'
import RegisterPage from '../pages/RegisterPage'
import ForgetPage from '../pages/ForgetPage'
import ResetPage from '../pages/ResetPage'
export const routing = [
    {id:1,link:"/",element:<LoginPage/>},
    {id:2,link:"/register",element:<RegisterInfo/>},
    {id:3,link:"/register-form",element:<RegisterPage/>},
    {id:4,link:"/acknowledge",element:<AcknowledgedPage/>},
    {id:4,link:"/forget",element:<ForgetPage/>},
    {id:4,link:"/reset",element:<ResetPage/>},
]
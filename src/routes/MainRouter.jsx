import { Route, Routes } from "react-router-dom"
import LoginPage from "../Page/AuthPage/LoginPage/LoginPage"
import RegisterPage from "../Page/AuthPage/RegisterPage/RegisterPage"
import HomePage from "../Page/HomePage/HomePage"
import HelpsupportPage from "../Page/Help&support/HelpsupportPage"
import InboxPage from "../Page/InboxPage/InboxPage"
import QuickNotePage from "../Page/QuickNotePage/QuickNotePage"
import SearchPage from "../Page/SearchPage/SearchPage"
import TrashPage from "../Page/TrashPage/TrashPage"
import SettingPage from "../Page/SettingPage/SettingPage"
import TemplatePage from "../Page/TemplatesPage/TemplatePage"
import CreateNewProjek from "../Page/CreateNewProjek/CreateNewProjek"

function MainRouter() {
    const allRoutes = [
        {
            path: '/',
            Element: <HomePage />
        },
        {
            path: '/login',
            Element: <LoginPage />
        },
        {
            path: '/register',
            Element: <RegisterPage />
        },
        {
            path: '/helpsupport',
            Element: <HelpsupportPage />
        },
        {
            path: '/inbox',
            Element: <InboxPage />
        },
        {
            path: '/quicknote',
            Element:  <QuickNotePage />
        },
        {
            path: '/search',
            Element:  <SearchPage />
        },
        {
            path: '/setting',
            Element:  <SettingPage />
        },
        {
            path: '/template',
            Element:  <TemplatePage />
        },
        {
            path: '/trash',
            Element:  <TrashPage />
        },
        {
            path: '/createnewprojek/:id',
            Element:  <CreateNewProjek />
        },
    ]



    return (
        <Routes>
            {allRoutes.map((route, index) => {
                return (
                    <Route
                        key={index}
                        path={route.path}
                        element={route.Element}
                    />
                )
            })}
        </Routes>
    )
}

export default MainRouter
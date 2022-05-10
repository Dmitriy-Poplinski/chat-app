import React, {useContext} from 'react'
import {useAuthState} from 'react-firebase-hooks/auth'
import { Route, Routes, Navigate  } from 'react-router-dom'

import { privateRoutes, publicRoutes } from './routes'
import { CHAT_ROUTE, LOGIN_ROUTE } from './utils/consts'
import { Context } from './../index'


export const AppRouter = () => {
    const {auth} = useContext(Context)
    const [user] = useAuthState(auth)
    
    return user ? (
        <Routes>
            {privateRoutes.map(({path, Component}) => {
                return <Route key={path} path={path} element={<Component />} exact={true}/>
            })}
            <Route path="*" element={<Navigate to={CHAT_ROUTE}/>} />
        </Routes>
    ) 
        :
        (
            <Routes>
                {publicRoutes.map(({path, Component}) => {
                    return <Route key={path} path={path} element={<Component />} exact={true}/>
                })}
                <Route path="*" element={<Navigate to={LOGIN_ROUTE}/>} />
            </Routes>
        )
}

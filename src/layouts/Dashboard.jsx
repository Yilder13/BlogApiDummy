import React from 'react'
import {Route} from 'react-router'
import ListPost from '../pages/ListPost'
import DetailUser from '../pages/DetailUser'
import ListUser from '../pages/ListUser'


export default function Dashboard() {
    return (
        <div>
            <Route exact path='/' component={ListPost} />
            <Route exact path='/user' component={ListUser}/>
            <Route path='/user/:id' component={DetailUser}/>
        </div>
    )
}
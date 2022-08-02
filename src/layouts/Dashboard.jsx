import React from 'react'
import {Route} from 'react-router'
import ListPost from '../pages/ListPost'


export default function Dashboard() {
    return (
        <div>
            <Route exact path='/' component={ListPost} />
        </div>
    )
}
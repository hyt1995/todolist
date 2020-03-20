import React from 'react'
import './Todolist.css'

const Todolist = ({form, children}) => {
    return <main className="mainlist">
        <div className="title">
            오늘 할 일
        </div>
        <section className="form">{form}</section>
        <section className="children">{children}</section>
    </main>
}

export default Todolist;
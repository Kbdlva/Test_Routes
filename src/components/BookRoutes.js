import { Routes, Route } from 'react-router-dom'

import {Book}  from './Book'
import {BookList} from './BookList'
import {NewBook} from './NewBook'
import {BookLayouts} from './BookLayouts'



export function BookRoutes() {
    return (
        <>
        <BookLayouts/>
            <Routes>

                <Route index element={<BookList />}></Route>
                <Route path=":id" element={<Book title="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"/>} />
                <Route path="new" element={<NewBook />} />
            </Routes>
        </>

    )
}
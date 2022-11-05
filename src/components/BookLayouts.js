import React from 'react'
import { Link, Outlet, useSearchParams } from 'react-router-dom'

export function BookLayouts() {

    const [searchParams, setSearchParams] = useSearchParams({ n: "classic" })
    const text = searchParams.get("n")
    return (
        <div className='container'>

            <div className='books_list'>
                <Link to="/books/Action">Action and Adventure Fiction</Link>
                <br />
                <Link to="/books/Classic">Classic Fiction</Link>
                <br />
                <Link to="/books/Contemporary">Contemporary Fiction</Link>
                <br />
                <Link to="/books/Dystopian">Dystopian Fiction</Link>
                <br />
                <Link to="/books/new">Another one</Link>
                <br />
                <Link to={`/books/${text}`}>{text}</Link>
            </div>
            <input type="text" value={text} onChange={e => setSearchParams({ n: e.target.value })} />

            <div className="container">
                <Outlet />
            </div>



        </div>
    )
}


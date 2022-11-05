import './App.css';
import { Routes, Route, Link, Outlet } from "react-router-dom";
import Home from './components/Home';
import {BookList} from './components/BookList';
import Contact from './components/Contact';
import {Book} from './components/Book';
import {NewBook} from './components/NewBook';
import NotFound from './components/NotFound';
import {BookLayouts} from './components/BookLayouts';
import Header from './components/Header';
import { BookRoutes } from './components/BookRoutes';


function App() {
  return (

    <>


<Header/>

      {/* <Routes>
        <Route path="/books" element={<h1>Extra Content</h1>} />
      </Routes> */}

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/books/*" element={<BookRoutes/>}/>

        {/* <Route path="/books" element={<BookLayouts/>}>
          <Route index element={<BookList />}></Route>
          <Route path=":id" element={<Book />} />
          <Route path="new" element={<NewBook />} />
        </Route> */}

        <Route path="/contacts" element={<Contact />} />
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>

      <Outlet/>
    </>


  );
}

export default App;

//Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import BoardList from './Sections/BoardList';
import Header from './Sections/Header';
import Siderbar from './Sections/Siderbar';
import Footer from './Sections/Footer';


function Home() {
    return (
    <div>
        <div>
            <h1>Board Title</h1>
        </div>
        <div>
            <Link to="/register">
                <button>New Post</button>
            </Link>
        </div>
        <div>
            <BoardList />
            <Header />
            <Siderbar />
            <Footer />
        </div>
    </div>
    )
}
 
export default Home;

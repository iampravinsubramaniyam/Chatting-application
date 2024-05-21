import React from 'react';
import Sidebar from '../components/Sidebar.jsx';
import Chat from '../components/Chat.jsx';

const Home = () => {
  return (
    <section className = 'home'>
        <div className='container'>
            <Sidebar/>
            <Chat/>
        </div>
    </section>
  )
}

export default Home
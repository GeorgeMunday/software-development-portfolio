import react from 'react';

import Header from './componets/header';
import Sidebar from './componets/sidebar';

export default function Page() {
    return (
    <div className='container'>
        <header className='header'><Header/></header>
        <aside className='sidebar'><Sidebar/></aside>
        <main className='main'></main>
        <footer className='footer'></footer>
     </div>
    );
    }
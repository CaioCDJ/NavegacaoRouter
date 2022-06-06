import './Content.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import About from '../../views/examples/About';
import Home from '../../views/examples/Home';
import Param from '../../views/examples/Param';
import NotFound from '../../views/examples/NotFound';

export default props => {
    return(
        <div className='Content'>
            
            <Routes>
                <Route path='/about' element={<About />} />
                <Route path='/param/:id' element={<Param />} />
                <Route path='/' element={<Home />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </div>
    )
}
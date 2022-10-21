import React from 'react'
import { Link, Routes, Route } from 'react-router-dom';

export const About = () => {
  return (
    <>
        <div>The About page.</div>
        <Link to='more-info'>More info</Link>
        <Routes>
            <Route path='more-info' element={<p>This is more info related to about page.</p>} />
        </Routes>
    </>
  );
};

export default About;

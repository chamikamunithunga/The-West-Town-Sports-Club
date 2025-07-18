import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    const [newDate, setNewDate] = useState('');
    useEffect(() => {
        let todayDate = new Date();
        let todayYear = todayDate.getFullYear();
        setNewDate([todayYear])
    }, []);

  return (
    <footer className='bg-body-tertiary' id='footer'>
        <p className='pt-3 m-0 text-center'>copyright &copy; The West Town Sports, 2025-{newDate}</p>
        <p className='pb-3 m-0 text-center'>Designed and developed by <Link to='#' style={{color: '#000000'}} target="_blank">Infinity</Link></p>
    </footer>
  )
}

export default Footer;
import React from 'react';

const Navbar = () => {
  return (
    <nav>
        <span style={{ fontFamily: 'Nasalization' }}>Aqulien</span>
      <div className='flex items-center justify-center'>
        
        <ul className='flex items-center gap-20'>
          <li className=''>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

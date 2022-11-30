import React from 'react';
import { Link } from 'react-router-dom';
import { Stack, Typography } from '@mui/material';

import Logo from '../assets/images/Logo.png';

const Navbar = () => (
  <Stack  direction="row" justifyContent="space-around" sx={{ gap: { sm: '123px', xs: '40px' }, bgcolor: "text.primary", justifyContent: 'none' }} px="20px">
    <Stack direction="row" mt="10px">
      <Link to="/">
      <img src={Logo} className='invert' alt="logo" style={{ width: '48px', height: '48px', color: 'white', margin: '0px 20px' }} />
      </Link>
      <Typography
        color="#FF3543"
        fontWeight="600"
        fontSize="26px">
    FitFreak Exercises</Typography>

    </Stack>
    <Stack
      direction="row"
      gap="40px"
      fontFamily="Alegreya"
      fontSize="24px"
      alignItems="flex-end"
      mb="17px"
    >
      <Link to="/" style={{ textDecoration: 'none', color: '#fff', fontFamily: 'Fantasy' }}>Home</Link>
      <a href="#exercises" style={{ textDecoration: 'none', color: '#fff', fontFamily: 'Fantasy', scrollBehavior: 'smooth' }}>Exercises</a>
    </Stack>
  </Stack>
);

export default Navbar;

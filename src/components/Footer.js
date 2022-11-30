import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo.png';

const Footer = () => (
  <Box mt="80px" bgcolor="text.primary">
    <Stack sx={{ alignItems: 'center' }}>
      <Stack direction ="row" gap="20px"  flexWrap="wrap">
        <img  src={Logo} alt="logo" className='invert' style={{ width: '40px', height: '41px' }} />
        <Typography color="#FF3543"
        sx={{ alignItems: 'center' }}
          fontWeight="600"
          fontSize="20px" mt="11px" >FitFreak Excercies</Typography>
        <Typography  style={{color:'white'}} sx={{ fontSize: { lg: '20px', xs: '16px' } }} mt="11px" textAlign="center" p='3px'>Copyright @2022 All Rights Reserverd.</Typography>
      </Stack>
    </Stack>
  </Box>
);

export default Footer;

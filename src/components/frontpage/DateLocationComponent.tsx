import React from 'react';
import { Box } from '@mui/material';
import { Place } from '@mui/icons-material';
import TypographyHeader from '../layout/TypographyHeader';

function DateLocationComponent() {
  return (
    <Box sx={{ textAlign: 'center' }}>
      <TypographyHeader variant="h2">
        Wednesday November 29th, 2023
      </TypographyHeader>
      <TypographyHeader variant="h3">
        <Place sx={{ marginRight: '0.5rem', fontSize: 40 }} />
        The Fabrique, Utrecht
      </TypographyHeader>
    </Box>
  );
}

export default DateLocationComponent;

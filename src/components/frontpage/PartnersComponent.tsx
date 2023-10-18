import React from 'react';
import { Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { ArrowForward } from '@mui/icons-material';
import TypographyHeader from '../layout/TypographyHeader';
import PartnerGrid from '../partner/PartnerGrid';
import { Partner } from '../../clients/server.generated';

interface Props {
  partners: Partner[];
}

function PartnersComponent({ partners }: Props) {
  return (
    <Box sx={{ textAlign: 'center', color: 'white' }}>
      <Box sx={{ marginBottom: '2rem' }}>
        <TypographyHeader variant="h2">
          2023 Partners
        </TypographyHeader>
        <Button component={Link} to="/partners" variant="contained" size="large" startIcon={<ArrowForward />}>
          More about the 2023 partners
        </Button>
      </Box>
      <hr />
      <PartnerGrid partners={partners} scaleFactor={0.7} extensive={false} />
    </Box>
  );
}

export default PartnersComponent;

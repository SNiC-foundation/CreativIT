import React from 'react';
import {
  Box, CircularProgress,
} from '@mui/material';
import { Client, Partner } from '../../clients/server.generated';
import PartnerGrid from '../../components/partner/PartnerGrid';

function PartnersPage() {
  const [partners, setPartners] = React.useState<Partner[] | undefined>(undefined);

  React.useEffect(() => {
    const client = new Client();
    client.getAllPartners().then((p) => setPartners(p));
  }, []);

  if (partners === undefined) {
    return (
      <CircularProgress />
    );
  }

  return (
    <Box sx={{ width: '100%', textAlign: 'center', color: 'white' }}>
      <PartnerGrid partners={partners} extensive />
    </Box>
  );
}

export default PartnersPage;

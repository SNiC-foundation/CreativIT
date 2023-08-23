import React from 'react';
import { Container, Typography } from '@mui/material';

function TicketComponent() {
  return (
    <Container maxWidth="md" sx={{ textAlign: 'center' }}>
      <Typography variant="body1" sx={{ marginBottom: '1rem' }}>
        With your SNiC 2022: CelerIT ticket, you get full access to everyting the conference has
        to offer. From the necessary bus trip from and to your university campus, to lunch and
        dinner. From an amazing spectrum of different speakers, to a free goodiebag. Even the
        social drink afterwards is included!
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: '1rem' }}>
        You can buy tickets for the SNiC 2023: CreativIT conference at
        {' '}
        <a href="https://stichting.snic.nl/about.html" target="_blank" rel="noreferrer">participating study associations.</a>
        {' '}
        Visit their website or their office/room for more information about where
        to get your ticket.
      </Typography>
    </Container>
  );
}

export default TicketComponent;

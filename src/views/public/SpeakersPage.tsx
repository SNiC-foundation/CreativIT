import React from 'react';
import { Box, CircularProgress, Grid } from '@mui/material';
import { Client, Speaker } from '../../clients/server.generated';
import PageHeader from '../../components/layout/PageHeader';
import SpeakerCard from '../../components/speaker/SpeakerCard';

function SpeakersPage() {
  const [speakers, setSpeakers] = React.useState<Speaker[] | undefined>(
    undefined,
  );

  React.useEffect(() => {
    const client = new Client();
    client.getAllSpeakers(true).then((s) => setSpeakers(s));
  }, []);

  if (speakers === undefined) {
    return <CircularProgress />;
  }

  return (
    <Box sx={{ width: '100%', textAlign: 'center' }}>
      <PageHeader
        title="Speakers"
        text="The following amazing speakers will join us during the conference."
        extraMargin={4}
      />
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="flex-start"
        spacing={12}
      >
        {speakers.map((s, index) => (
          <Grid item xs={12} md={6} lg={3}>
            <SpeakerCard speaker={s} key={s.id} purple={index % 2 === 0} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default SpeakersPage;

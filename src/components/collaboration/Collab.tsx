import React from 'react';
import {
  Box, Button, Grid, Typography,
} from '@mui/material';
import { Public } from '@mui/icons-material';

interface Props {
  children: React.ReactNode | React.ReactNode[];
  title: string;
  img: string;
  url: string;
}

function Collab({
  children, img, url, title,
}: Props) {
  return (
    <Box sx={{
      backgroundColor: 'primary.main',
      borderRadius: '5px',
      boxShadow: '2px 4px 5px 4px #00000040',
      padding: '1rem',
    }}
    >

      <Grid
        container
        spacing={1}
      >
        <Grid item xs={8} alignSelf="center">
          <Typography variant="h3" sx={{ marginBottom: '1rem' }}>
            {title}
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Box>
            <img src={img} alt="logo" style={{ width: '75%', height: 'auto', borderRadius: '10px' }} />
          </Box>
        </Grid>
      </Grid>

      <Typography
        variant="body1"
        sx={{ marginTop: '1rem', marginBottom: '1rem' }}
      >
        {children}
      </Typography>
      <Button href={url} target="_blank" variant="contained" color="secondary">
        <Public />
      </Button>
    </Box>
  );
}

export default Collab;

import React from 'react';
import {
  Box, Grid, Typography, styled,
} from '@mui/material';
import { Partner, SponsorPackage } from '../../clients/server.generated';
import { shuffleArray } from '../../helpers/array';
import PartnerLogo from './PartnerLogo';
import PartnerHeader from '../layout/PartnerHeader';
import Collab from '../collaboration/Collab';

const LogoGrid = styled(Box)({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'stretch',
  gap: '3rem',
  width: '100%',
});

interface Props {
  partners: Partner[];
  scaleFactor?: number;
  extensive?: boolean;
}

function PartnerGrid({ partners, scaleFactor, extensive }: Props) {
  const bronzes = shuffleArray(
    partners.filter((p) => p.package === SponsorPackage.Bronze),
  );
  const silvers = shuffleArray(
    partners.filter((p) => p.package === SponsorPackage.Silver),
  );
  const golds = shuffleArray(
    partners.filter((p) => p.package === SponsorPackage.Gold),
  );
  const platinum = shuffleArray(
    partners.filter((p) => p.package === SponsorPackage.Platinum),
  );

  const orderedPartners = [
    {
      header: 'Platinum Partner',
      partners: platinum,
      size: 800,
    },
    {
      header: 'Gold Partners',
      partners: golds,
      size: 380,
    },
    {
      header: 'Silver Partners',
      partners: silvers,
      size: 280,
    },
    {
      header: 'Bronze Partners',
      partners: bronzes,
      size: 200,
    },
  ];

  const s = scaleFactor || 1;

  return (
    <>
      {orderedPartners.map((o, i) => (
        o.partners.length === 0 ? <Box />
          : (
            <Box sx={{ paddingBottom: '4rem' }} key={o.header}>
              <PartnerHeader
                title={o.header}
                inverse={i % 2 === 0}
                purple={i % 2 === 0}
              />
              <LogoGrid>
                {o.partners.map((p) => (
                  <PartnerLogo
                    partner={p}
                    size={o.size * s}
                    extensive={extensive}
                    key={p.id}
                  />
                ))}
              </LogoGrid>
            </Box>
          )
      ))}
      <PartnerHeader
        title="Special thanks to"
        inverse
        purple
      />
      <Grid container spacing={1}>
        <Grid item xs={12} md={6}>
          <Collab title="Film-Point" img="/film-point-logo.png" url="https://film-point.com">
            <Typography sx={{ margin: '0 auto' }} variant="body1">Special thanks to Film-Point for the video production and photos</Typography>
          </Collab>
        </Grid>
        <Grid item xs={12} md={6}>
          <Collab title="Jelt Stellingwerf" img="/logo_small.jpg" url="https://www.linkedin.com/in/jelt-stellingwerf-8292001b8/">
            <Typography variant="body1">Special thanks to Jelt Stellingwerf for designing our amazing logos</Typography>
          </Collab>
        </Grid>
      </Grid>
    </>
  );
}

PartnerGrid.defaultProps = {
  extensive: false,
  scaleFactor: 1,
};

export default PartnerGrid;

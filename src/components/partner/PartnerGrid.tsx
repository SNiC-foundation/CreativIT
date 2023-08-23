import React from 'react';
import { Box, styled } from '@mui/material';
import { Partner, SponsorPackage } from '../../clients/server.generated';
import { shuffleArray } from '../../helpers/array';
import PartnerLogo from './PartnerLogo';
import PartnerHeader from '../layout/PartnerHeader';

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
  const bronzes = shuffleArray(partners.filter((p) => p.package === SponsorPackage.Bronze));
  const silvers = shuffleArray(partners.filter((p) => p.package === SponsorPackage.Silver));
  const golds = shuffleArray(partners.filter((p) => p.package === SponsorPackage.Gold));
  const platinum = shuffleArray(partners.filter((p) => p.package === SponsorPackage.Platinum));

  const orderedPartners = [{
    header: 'Platinum Partner',
    partners: platinum,
    size: 600,
  }, {
    header: 'Gold Partners',
    partners: golds,
    size: 380,
  }, {
    header: 'Silver Partners',
    partners: silvers,
    size: 280,
  }, {
    header: 'Bronze Partners',
    partners: bronzes,
    size: 200,
  }];

  const s = scaleFactor || 1;

  return (
    <>
      {orderedPartners.map((o, i) => (
        <Box sx={{ paddingBottom: '4rem' }} key={o.header}>
          <PartnerHeader title={o.header} inverse={i % 2 === 0} purple={i % 2 === 0} />
          <LogoGrid>
            {o.partners.map((p) => (
              <PartnerLogo partner={p} size={o.size * s} extensive={extensive} key={p.id} />
            ))}
          </LogoGrid>
        </Box>
      ))}
    </>
  );
}

PartnerGrid.defaultProps = ({
  extensive: false,
  scaleFactor: 1,
});

export default PartnerGrid;

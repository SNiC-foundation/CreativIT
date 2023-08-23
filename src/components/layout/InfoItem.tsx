import React from 'react';
import { Typography, Box } from '@mui/material';

interface Props {
  children: React.ReactNode | React.ReactNode[];
  title: string;
  inverse?: boolean;
  purple?: boolean;
  random?: boolean;
  noMargin?: boolean;
}

function getImage(inverse: boolean, purple: boolean, random: boolean) {
  if (random) {
    const isInverted = Math.random() < 0.5;
    const isPurple = Math.random() < 0.5;

    return `lines/${isPurple ? 'purple' : 'purple2'}_${isInverted ? 'right' : 'left'}.svg`;
  }

  return `lines/${purple ? 'purple' : 'purple2'}_${inverse ? 'right' : 'left'}.svg`;
}

function InfoItem({
  children, inverse, purple, title, random, noMargin,
}: Props) {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        backgroundColor: '#12193a',
        color: 'white',
        textAlign: 'center',
        padding: '1rem',
        borderRadius: '5px',
        boxShadow: '2px 4px 5px 4px #00000040',
        marginBottom: noMargin ? '0.5rem' : '2rem',
      }}
    >
      <Typography sx={{ position: 'relative', zIndex: '2', fontSize: '54px' }}>{title}</Typography>
      <Box sx={{
        backgroundImage: `url(${getImage(inverse!, purple!, random!)})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '115px',
        position: 'absolute',
        left: '0',
        top: '0',
        zIndex: '1',
      }}
      />
      <Box sx={{ marginTop: noMargin ? '0' : '1rem' }}>{children}</Box>
    </Box>
  );
}

InfoItem.defaultProps = ({
  inverse: false,
  purple: false,
  random: false,
  noMargin: false,
});

export default InfoItem;

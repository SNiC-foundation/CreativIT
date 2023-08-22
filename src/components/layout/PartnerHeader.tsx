import React from 'react';
import { Container, Typography, Box } from '@mui/material';

interface Props {
  title: string;
  inverse?: boolean;
  purple?: boolean;
}

function getImage(inverse: boolean, purple: boolean) {
  return `lines/${purple ? 'purple' : 'purple2'}_${inverse ? 'right' : 'left'}.svg`;
}

function InfoItem({
  inverse, purple, title,
}: Props) {
  return (
    <Container
      sx={{
        position: 'relative',
        width: '100%',
        backgroundColor: '#12193a',
        color: 'white',
        textAlign: 'center',
        padding: '1rem',
        borderRadius: '5px',
        boxShadow: '2px 4px 5px 4px #00000040',
        marginBottom: '2rem',
      }}
    >
      <Typography sx={{ position: 'relative', zIndex: '2', fontSize: '54px' }}>{title}</Typography>
      <Box sx={{
        backgroundImage: `url(${getImage(inverse!, purple!)})`,
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
    </Container>
  );
}

InfoItem.defaultProps = ({
  inverse: false,
  purple: false,
});

export default InfoItem;

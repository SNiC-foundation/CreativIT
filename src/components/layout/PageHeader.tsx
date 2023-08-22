import React from 'react';
import { Box, Typography } from '@mui/material';
import InfoItem from './InfoItem';

interface Props {
  title: string;
  text: string;
  extraMargin?: number;
}

function PageHeader({
  title, text, extraMargin,
}: Props) {
  const marginBottom = 9 + (extraMargin || 0);

  return (
    <Box sx={{ marginBottom }}>
      <InfoItem title={title} random>
        <Typography variant="body1">
          {text}
        </Typography>
      </InfoItem>
    </Box>
  );
}

PageHeader.defaultProps = ({
  extraMargin: 0,
});

export default PageHeader;

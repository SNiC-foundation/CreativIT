import React from 'react';
import {
  Box, Typography,
} from '@mui/material';
import { Speaker } from '../../clients/server.generated';
import { apiImageUrl } from '../../helpers/apiHelper';
import { dateToTime } from '../../helpers/dateTime';

interface Props {
  speaker: Speaker;
  purple?: boolean;
}

function getBackgroundColor(purple: boolean) {
  return purple ? '#483291' : '#91288D';
}

function SpeakerCard({ speaker, purple }: Props) {
  return (
    <Box sx={{
      backgroundColor: 'primary.main',
      color: 'white',
      borderRadius: '5px',
      boxShadow: '2px 4px 5px 4px #00000040',
      width: '400px',
    }}
    >
      <Box sx={{
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
      }}
      >
        <img
          src={speaker.imageFilename ? apiImageUrl(speaker.imageFilename) : './speaker-placeholder.png'}
          alt={`speaker: ${speaker.name}`}
          style={{
            display: 'inline-block',
            borderRadius: '50%',
            width: '250px',
            height: '250px',
            margin: '1rem',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
            position: 'relative',
            zIndex: '2',
          }}
        />
        <Box sx={{
          backgroundColor: getBackgroundColor(purple!),
          width: '250px',
          height: '250px',
          borderRadius: '50%',
          margin: '1rem',
          position: 'absolute',
          top: '5px',
          left: 'calc(50% - 15px)',
          transform: 'translate(-50%, 0)',
          zIndex: '1',
        }}
        />
      </Box>
      <Typography
        variant="body1"
        sx={{
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: '20px',
          margin: '1rem',
        }}
      >
        {speaker.name}
      </Typography>
      <Typography variant="body2" sx={{ whiteSpace: 'pre-wrap', fontSize: '14px', margin: '1rem' }}>
        {speaker.description !== '' ? speaker.description : (
          <span style={{ fontStyle: 'italic', color: 'darkgray' }}>
            More information about this speaker will be added soon.
          </span>
        )}
      </Typography>
      {speaker.activities.length > 0 ? (
        <>
          <hr style={{ margin: '1rem 0' }} />
          {speaker.activities.map((a) => (
            <Typography variant="body2" sx={{ marginBottom: '1rem' }}>
              {`${a.name} (${dateToTime(a.programPart.beginTime)} - ${dateToTime(a.programPart.endTime)})`}
            </Typography>
          ))}
        </>
      ) : null}
    </Box>
  );
}

SpeakerCard.defaultProps = ({
  purple: false,
});

export default SpeakerCard;

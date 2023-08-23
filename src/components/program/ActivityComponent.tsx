import React from 'react';
import {
  Box, Typography, Divider,
} from '@mui/material';
import { Videocam } from '@mui/icons-material';
import ProgramModal, { ActivityWithParticipantAmount } from './ProgramModal';

interface Props {
  activity: ActivityWithParticipantAmount,
  getProgram: () => void,
}

function ActivityComponent({ activity, getProgram }: Props) {
  const [modalOpen, setModalOpen] = React.useState(false);

  return (
    <>
      <Box
        onClick={(event) => {
          event.preventDefault();
          setModalOpen(true);
        }}
        sx={{
          cursor: 'pointer', width: '100%', height: '100%', display: 'flex', alignItems: 'center', flexDirection: 'column',
        }}
      >
        <Box sx={{ marginBottom: '0.5rem', flex: 1 }}>
          <Typography variant="h5" sx={{ marginBottom: '1rem' }}>
            {activity.name}
          </Typography>
          <Typography variant="body1" sx={{ fontStyle: 'italic' }}>
            {`${activity.speakers.map((speaker) => speaker.name).join(', ')} - ${activity.location}`}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              marginTop: '1rem',
              display: '-webkit-box',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 5,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {activity.description || 'More information will follow soon.'}
          </Typography>
        </Box>
        {!!activity.recordingUrl && (
          <Box sx={{ display: 'flex', justifyContent: 'center', my: '0.5rem' }}>
            <Videocam />
            <Typography sx={{ fontStyle: 'italic' }}>
              This talk is recorded
            </Typography>
          </Box>
        )}
        {activity.subscribe && (
        <Box sx={{ width: '100%' }}>
          <Divider />
          <Typography variant="body1" sx={{ textAlign: 'right' }}>
            {activity.nrOfSubscribers}
            /
            {activity.subscribe?.maxParticipants}
            {' '}
            subscribed
          </Typography>
        </Box>
        )}
      </Box>

      <ProgramModal
        activity={activity}
        open={modalOpen}
        handleClose={() => setModalOpen(false)}
        getProgram={getProgram}
      />
    </>
  );
}

export default ActivityComponent;

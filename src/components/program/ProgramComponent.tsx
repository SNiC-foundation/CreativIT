import React, { useEffect } from 'react';
import {
  Box, CircularProgress, Grid, styled, Typography,
} from '@mui/material';
import { Client, ProgramPart } from '../../clients/server.generated';
import ActivityComponent from './ActivityComponent';
import { AuthContext } from '../../auth/AuthContextProvider';
import { ActivityWithParticipantAmount } from './ProgramModal';
import InfoItem from '../layout/InfoItem';

const Item = styled(Box)(({ theme }) => ({
  backgroundColor: '#12193a',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: 'white',
  height: '100%',
  width: '100%',
  borderRadius: '5px',
  boxShadow: '2px 4px 5px 4px #00000040',
}));

function ProgramComponent() {
  const [activities, setActivities] = React.useState<
    ActivityWithParticipantAmount[] | null
  >(null);
  const [programParts, setProgramParts] = React.useState<ProgramPart[] | null>(
    null,
  );

  const authContext = React.useContext(AuthContext);
  const { user } = authContext;

  const getProgram = () => {
    const client = new Client();

    async function fetchActivities() {
      const res = await client.getAllActivities();
      setActivities(
        res.map((act) => Object.assign(act.activity, {
          nrOfSubscribers: act.nrOfSubscribers,
        })),
      );
    }

    async function fetchProgramParts() {
      const res = await client.getAllProgramParts();
      res.sort((a, b) => (a.beginTime > b.beginTime ? 1 : -1));
      setProgramParts(res);
    }

    fetchProgramParts();
    fetchActivities();
  };

  useEffect(() => {
    getProgram();
  }, []);

  const userActivities = user
    ? user.subscriptions.map((s) => s.activityId)
    : [];

  if (activities != null && programParts != null) {
    const locations = Array.from(
      new Set(activities.map((element) => element.location)),
    );

    const activitiesHtml = programParts.map(
      (programPart, programPartLoopIndex) => {
        const activitiesInProgramPart = activities.filter(
          (activity) => activity.programPartId === programPart.id,
        );

        return (
          <>
            <Grid item xs={1} xl={12}>
              <Box sx={{ marginTop: '4rem' }}>
                <InfoItem
                  title={programPart.name}
                  noMargin
                  purple={programPartLoopIndex % 2 === 0}
                  inverse={programPartLoopIndex % 2 === 0}
                >
                  <Typography variant="subtitle1" sx={{ color: 'white' }}>
                    {programPart.beginTime.toLocaleTimeString(undefined, {
                      timeZone: 'Europe/Amsterdam',
                      timeStyle: 'short',
                    })}
                    -
                    {programPart.endTime.toLocaleTimeString(undefined, {
                      timeZone: 'Europe/Amsterdam',
                      timeStyle: 'short',
                    })}
                  </Typography>
                </InfoItem>
              </Box>
            </Grid>

            {locations.map((location) => {
              const activity = activitiesInProgramPart.filter(
                (ac) => ac.location === location,
              )[0];
              if (activity === undefined) {
                return <Box />;
              }
              return (
                <Grid item xs={1}>
                  {userActivities.includes(activity.id)
                  || (user && activity.subscribe == null) ? (
                    <Item sx={{ backgroundColor: 'secondary.dark' }}>
                      <ActivityComponent
                        activity={activity}
                        getProgram={getProgram}
                      />
                    </Item>
                    ) : (
                      <Item>
                        <ActivityComponent
                          activity={activity}
                          getProgram={getProgram}
                        />
                      </Item>
                    )}
                </Grid>
              );
            })}
          </>
        );
      },
    );

    return (
      <>
        <Grid
          container
          direction="row"
          spacing={2}
          columns={3}
          sx={{ display: { xs: 'none', xl: 'flex' } }}
          alignItems="stretch"
        >
          {/* This is an empty box to make the table look nicer */}
          {activitiesHtml}
        </Grid>

        <Grid
          container
          direction="row"
          spacing={2}
          columns={1}
          sx={{ display: { xs: 'flex', xl: 'none' } }}
        >
          {activitiesHtml}
        </Grid>
      </>
    );
  }

  return <CircularProgress />;
}

export default ProgramComponent;

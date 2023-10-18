import React from 'react';
import { styled, Typography } from '@mui/material';
import Container from '@mui/material/Container';

const Paragraph = styled(Typography)({
  paddingTop: '1.5rem',
});

function ThemeComponent() {
  return (
    <Container maxWidth="md" sx={{ textAlign: 'center' }}>
      <Typography variant="body1">
        SNiC is the largest national Computer Science and Artificial Intelligence conference,
        organised for and by students.
        Last year&apos;s theme CelerIT was on the swiftness of technology in three aspects,
        namely the past, the present and the future. This year&apos;s edition will be
        around the theme of
        {' '}
        <span style={{ fontWeight: 'bold' }}>CreativIT</span>
        .
        {' '}
        Where CelerIT left off,
        we are picking it up, looking further into the future at the creative ways
        in which technology can be used. We invited creative minds of our industry to
        explore these ways with us in three main tracks: Create, Innovate & Anticipate,
        and two sub tracks: Collaborate & Communicate.
      </Typography>
      <Paragraph variant="body1">
        <span style={{ fontWeight: 'bold' }}>Create:</span>
        {' '}
        We immerse ourselves in the fusion of creativity and creation.
        Technology itself becomes a canvas for creative expression and
        we look at how user-centric design plays a vital role in keeping
        users engaged with your application. Or what user-unfriendly design does…
        Create is also about how technical creativity in games can be incorporated
        to create immersive and emotionally resonant gaming experiences.
      </Paragraph>
      <Paragraph variant="body1">
        <span style={{ fontWeight: 'bold' }}>Anticipate:</span>
        {' '}
        The first thing that came into our minds whilst organising
        this conference was art. Art is no longer a static painting
        you can visit in a museum; combined with technology it is something
        that challenges our perception of the world. It is about how to anticipate
        the new creative ideas that emerge. In today’s world this is very relevant,
        because are you looking at a video of a real person or a deepfake?
      </Paragraph>
      <Paragraph variant="body1">
        <span style={{ fontWeight: 'bold' }}>Innovate:</span>
        {' '}
        The innovate track delves into how real-world problems can be tackled.
        From personalization to sustainability, the brightest minds of our industry
        will walk you through how they creatively overcame problems they see in their
        everyday lives.
      </Paragraph>
      <Paragraph variant="body1">
        <span style={{ fontWeight: 'bold' }}>Collaborate & Communicate:</span>
        {' '}
        We invited companies to talk with you about exciting business cases and work
        or internship opportunities. These business cases and speeddates will be given
        throughout the day to further your professional career. There are very limited
        places for these sessions, but not to worry; These companies will be present
        the whole day on our company market even if you cannot make it to their sessions.
        {' '}
      </Paragraph>
    </Container>
  );
}

export default ThemeComponent;

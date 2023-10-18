import React from 'react';
import {
  Container, styled, Typography, Box, Link,
} from '@mui/material';
import TypographyHeader from '../../components/layout/TypographyHeader';
import InfoItem from '../../components/layout/InfoItem';

const Paragraph = styled(Typography)(() => ({
  marginBottom: '2rem',
  textAlign: 'left',
}));

const ContactInfoHeader = styled(TypographyHeader)(() => ({
  marginBottom: 0,
  marginTop: '8px',
}));

const ContactInfoField = styled(Typography)({
  paddingLeft: '3rem',
});

function AboutPage() {
  return (
    <>
      <InfoItem title="SNiC">
        <Paragraph variant="body1">
          SNiC is an acronym for Stichting Nationaal informatica Congres
          (Foundation National computer science Conference).
          This organisation was established in
          2004 with the purpose of stimulating the interest in
          knowledge of information and communication technology,
          and to promote contact between students and the business world.
          10 study associations from 7 different cities are affiliated with SNiC.
          Every year,
          a conference with an IT related subject is organised and for
          each conference one of those 10 study associations is chosen to
          take care of the organisation.
          This year&apos;s SNiC is organised on November 29th 2023 by students from
          {' '}
          <Link href="https://www.svsticky.nl" variant="inherit" sx={{ color: 'white', textDecoration: 'underline' }}>
            Sticky
          </Link>
          .
        </Paragraph>
        <Paragraph variant="body1">
          Visitors are enthusiastic Computer Science and Artificial
          Intelligence bachelor and master students from all over the country.
          Over the past years the conference has grown considerably.
          Where in 2017 the conference was visited by 450 students,
          we expect around 850 visitors in 2023.
          Various talks will be held at the conference by speakers
          from both the business world and the academic world.
          The students are challenged to dive into a specific topic
          from different perspectives.
          We want to inspire them and invite them to think further
          than their current views.
        </Paragraph>
      </InfoItem>
      <InfoItem title="Committee" inverse purple>
        <Box>
          <img
            src="/committee.jpg"
            alt="Groepsfoto"
            style={{ width: '100%' }}
          />
          <span style={{ fontStyle: 'italic' }}>
            From left to right: Victor, Joris, Tieke, Luc, Lukas, Ceylan, Siem,
            and Diede.
          </span>
        </Box>
      </InfoItem>
      <InfoItem title="Contact us">
        <Box
          sx={{
            display: 'flex',
            flexFlow: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Container maxWidth="xs" sx={() => ({ textAlign: 'left' })}>
            <ContactInfoHeader variant="h5">General Email</ContactInfoHeader>
            <ContactInfoField>
              <Link
                sx={{ color: 'white' }}
                href="mailto:inquiries@creativit.snic.nl"
              >
                inquiries@creativit.snic.nl
              </Link>
            </ContactInfoField>
            <ContactInfoHeader variant="h5">Business Email</ContactInfoHeader>
            <ContactInfoField>
              <Link
                sx={{ color: 'white' }}
                href="mailto:partners@creativit.snic.nl"
              >
                partners@creativit.snic.nl
              </Link>
            </ContactInfoField>
            <ContactInfoHeader variant="h5">Address</ContactInfoHeader>
            <ContactInfoField sx={{ whiteSpace: 'pre-wrap' }}>
              Sticky t.a.v. CreativIT
              <br />
              Buys Ballot Gebouw 2.81
              <br />
              Princetonplein 5
              <br />
              3584CC, Utrecht
              <br />
            </ContactInfoField>
          </Container>
        </Box>
      </InfoItem>
    </>
  );
}

export default AboutPage;

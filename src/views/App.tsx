import React from 'react';
import { Client, Partner } from '../clients/server.generated';
import ThemeComponent from '../components/frontpage/ThemeComponent';
import DateLocationComponent from '../components/frontpage/DateLocationComponent';
import InfoItem from '../components/layout/InfoItem';
import { shuffleArray } from '../helpers/array';
import TicketComponent from '../components/frontpage/TicketComponent';
import PartnersComponent from '../components/frontpage/PartnersComponent';

function App() {
  const [partners, setPartners] = React.useState<Partner[] | null>(null);
  const [shuffledPartners, setShuffledPartners] = React.useState<Partner[] | null>(null);

  React.useEffect(() => {
    const client = new Client();
    client.getAllPartners()
      .then((p) => {
        setPartners(p);
        setShuffledPartners(shuffleArray(p));
      });
  }, []);

  if (!partners || !shuffledPartners) return null;

  return (
    <>
      <InfoItem title="Theme" purple inverse>
        <ThemeComponent />
      </InfoItem>
      <InfoItem title="Date">
        <DateLocationComponent />
      </InfoItem>
      <InfoItem title="Tickets" purple inverse>
        <TicketComponent />
      </InfoItem>
      <PartnersComponent partners={partners} />
    </>
  );
}

export default App;

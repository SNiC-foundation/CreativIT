import React from 'react';
import {
  Alert, Box, CardContent, Grid, LinearProgress, Paper,
} from '@mui/material';
import Button from '@mui/material/Button';
import { AuthContext } from '../auth/AuthContextProvider';
import QrScannerComponent from '../components/QrScannerComponent';
import { ApiException, Client, QRParams } from '../clients/server.generated';
import { AlertContext } from '../alerts/AlertContextProvider';
import NotFound from './public/NotFound';
import InfoItem from '../components/layout/InfoItem';

function PartnerQrScanner() {
  const { user } = React.useContext(AuthContext);

  if (!user) return (<NotFound />);

  const { showAlert } = React.useContext(AlertContext);

  const [scanEnabled, setScanEnabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const handleScan = (result: string) => {
    setScanEnabled(false);
    setLoading(true);
    const client = new Client();
    client.requestScan(user?.partnerId || -1, new QRParams({
      encryptedId: result,
    }))
      .then(() => showAlert({ severity: 'success', message: 'Successfully scanned QR code!' }))
      .catch((e: ApiException) => showAlert({ severity: 'error', message: `Could not scan QR code. Is the code invalid? ${e.response}` }))
      .finally(() => setLoading(false));
  };

  return (
    <InfoItem title="Scan visitor&apos;s QR code">
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={8} md={6} lg={4}>
          <Paper elevation={3}>
            {loading && (<LinearProgress />)}
            <CardContent>
              {user.partnerId == null || user.partner == null ? (
                <Alert severity="error" sx={{ marginBottom: '1rem' }}>
                  You are not associated with a partner! Scanning QR codes will
                  therefore always fail. Please contact the CreativIT committee to have this fixed.
                </Alert>
              ) : (
                <Alert severity="info" sx={{ marginBottom: '1rem' }}>
                  You will scan QR codes for
                  {' '}
                  {user.partner.name}
                  .
                </Alert>
              )}
              <Button variant="contained" sx={{ marginBottom: '1rem' }} onClick={() => setScanEnabled(!scanEnabled)}>
                {scanEnabled ? 'Stop' : 'Start'}
                {' '}
                scanning
              </Button>
              <br />
              <Box>
                <QrScannerComponent enabled={scanEnabled} handleScan={handleScan} />
              </Box>
            </CardContent>
          </Paper>
        </Grid>
      </Grid>
    </InfoItem>
  );
}

export default PartnerQrScanner;

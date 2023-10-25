import React from 'react';
import {
  Alert,
  Button, Checkbox, CircularProgress, Collapse, FormControl, FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from '@mui/material';
import validator from 'validator';
import {
  CreateParticipantUserParams, ParticipantInfo, RegisterUserParams, Ticket, User,
} from '../../clients/server.generated';
import TicketFormField from './TicketFormField';

interface Props {
  // eslint-disable-next-line no-unused-vars
  handleSubmit: (params: RegisterUserParams) => Promise<void>;
  user?: User;
}

function RegisterForm({ user, handleSubmit }: Props) {
  const [ticket, setTicket] = React.useState<Ticket | undefined>(user ? user.ticket : undefined);
  const [ticketValid, setTicketValid] = React.useState(!!(user && user.ticket));
  const [email, setEmail] = React.useState(user ? user.email : '');
  const [name, setName] = React.useState(user ? user.name : '');
  const [dietaryWishes, setDietaryWishes] = React.useState(user ? user.dietaryWishes : 'none');
  const [agreeToPrivacyPolicy, setAgreeToPrivacyPolicy] = React.useState(
    user ? user.agreeToPrivacyPolicy : false,
  );
  const [studyProgram, setStudyProgram] = React.useState(
    user && user.participantInfo ? user.participantInfo.studyProgram : '',
  );

  const [loading, setLoading] = React.useState(false);

  const my = 0.5;

  const disabled = user !== undefined;

  const handleSubmitButton = async () => {
    if (ticket === undefined && user == null) return;
    setLoading(true);
    await handleSubmit(new RegisterUserParams({
      user: new CreateParticipantUserParams({
        email,
        name,
        dietaryWishes,
        agreeToPrivacyPolicy,
        participantInfo: new ParticipantInfo({
          studyProgram,
        }),
      }),
      token: ticket?.code ?? '',
    }));
    setLoading(false);
  };

  const ticketField = () => {
    if (user && !user.ticket) return null;
    return (
      <FormControl variant="standard" sx={{ my, width: '100%' }} error={!ticketValid}>
        <TicketFormField
          ticket={ticket}
          setTicket={setTicket}
          ticketValid={ticketValid}
          setTicketValid={setTicketValid}
          disabled={disabled}
        />
        <Collapse in={ticket !== undefined}>
          <Alert severity="info" sx={{ my: '1rem' }}>
            This is a valid ticket from
            {' '}
            {ticket ? ticket.association : ''}
            .
          </Alert>
        </Collapse>
      </FormControl>
    );
  };

  const studyProgramField = () => {
    if (user && !user.participantInfo) return null;
    return (
      <FormControl variant="standard" sx={{ my, width: '100%' }}>
        <TextField
          id="study-program"
          onChange={(event) => setStudyProgram(event.target.value)}
          value={studyProgram}
          required
          variant="standard"
          label="Study program"
          placeholder="Study program (please include Bachelor or Master)"
          error={validator.isEmpty(studyProgram)}
        />
      </FormControl>
    );
  };

  return (
    <>
      {ticketField()}
      <FormControl variant="standard" sx={{ my, width: '100%' }}>
        <TextField
          id="email"
          onChange={(event) => setEmail(event.target.value)}
          value={email}
          variant="standard"
          required
          label="Email address"
          error={!validator.isEmail(email)}
          disabled={disabled}
        />
      </FormControl>
      <FormControl variant="standard" sx={{ my, width: '100%' }}>
        <TextField
          id="name"
          onChange={(event) => setName(event.target.value)}
          value={name}
          variant="standard"
          required
          label="Name"
          placeholder="John Doe"
          error={validator.isEmpty(name)}
        />
      </FormControl>
      {studyProgramField()}
      <FormControl variant="standard" sx={{ width: '100%' }}>
        <FormLabel id="diet-label">Dietary wishes</FormLabel>
        <RadioGroup
          aria-labelledby="diet-label"
          name="diet"
          value={dietaryWishes.startsWith('other') ? 'other' : dietaryWishes}
          onChange={(event) => {
            if (event.target.value === 'other') {
              setDietaryWishes(`other: ${dietaryWishes.split(': ')[1]}`);
            } else {
              setDietaryWishes(event.target.value);
            }
          }}
        >
          <FormControlLabel value="none" control={<Radio />} label="None" />
          <FormControlLabel value="vegetarian" control={<Radio />} label="Vegetarian" />
          <FormControlLabel value="vegan" control={<Radio />} label="Vegan" />
          <FormControlLabel
            value="other"
            control={<Radio />}
            label={(
              <TextField
                id="other-diet"
                value={(dietaryWishes.startsWith('other') ? dietaryWishes.split(': ')[1] : '')}
                onChange={(event) => {
                  setDietaryWishes(`other: ${event.target.value}`);
                }}
                variant="standard"
              />
    )}
          />
        </RadioGroup>
      </FormControl>
      <FormControl variant="standard" sx={{ my, width: '100%' }} error={!agreeToPrivacyPolicy}>
        <FormControlLabel
          control={(
            <Checkbox
              checked={agreeToPrivacyPolicy}
              onChange={(event) => setAgreeToPrivacyPolicy(event.target.checked)}
              required
              disabled={disabled}
            />
            )}
          label={(
            <span>
              I agree with the
              {' '}
              <a target="_blank" href="/creativit-privacy-policy.pdf">privacy policy</a>
              {' '}
              of SNiC 2023: CreativIT*
            </span>
          )}
          sx={(theme) => ({
            color: !agreeToPrivacyPolicy
              ? theme.palette.error.main : undefined,
          })}
        />
      </FormControl>
      <Button
        type="submit"
        variant="contained"
        sx={{ mt: 2 }}
        onClick={async (e) => {
          e.preventDefault();
          await handleSubmitButton();
        }}
        disabled={(ticket === undefined && user === undefined)
          || validator.isEmpty(email)
          || !validator.isEmail(email)
          || validator.isEmpty(name)
          || (validator.isEmpty(studyProgram) && user === undefined)
          || !agreeToPrivacyPolicy
          || loading}
      >
        Submit
        {loading && (
          <CircularProgress
            size={24}
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              marginTop: '-12px',
              marginLeft: '-12px',
            }}
          />
        )}
      </Button>
    </>
  );
}

RegisterForm.defaultProps = ({
  user: undefined,
});

export default RegisterForm;

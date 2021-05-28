import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import * as S from './create.styled.js';
import { Container } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

const Create = () => {
  const history = useHistory();
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);
  const [category, setCategory] = useState('');

  const classes = S.useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();
    setTitleError(false);
    setDetailsError(false);

    if (title === '') {
      setTitleError(true);
    }
    if (details === '') {
      setDetailsError(true);
    }
    if (title && details) {
      axios.post(process.env.REACT_APP_FIREBASE_LINK + '.json', {
        body: {
          title,
          details,
          category,
        },
      });
      return history.push('/');
    }
  };

  return (
    <Container>
      <S.MainTypography
        className={classes.title}
        variant='h6'
        component='h2'
        gutterBottom
      >
        Create New Form
      </S.MainTypography>
      <form noValidate autoComplete='off' onSubmit={handleSubmit}>
        <TextField
          className={classes.field}
          onChange={(e) => setTitle(e.target.value)}
          label='Note Title'
          variant='outlined'
          color='secondary'
          fullWidth
          required
          error={titleError}
        />
        <TextField
          className={classes.field}
          onChange={(e) => setDetails(e.target.value)}
          label='Details'
          variant='outlined'
          color='secondary'
          multiline
          rows={4}
          fullWidth
          required
          error={detailsError}
        />

        <FormControl className={classes.field}>
          <FormLabel>Note Category</FormLabel>
          <RadioGroup
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <FormControlLabel
              value='money'
              control={<Radio />}
              label='Money'
            />
            <FormControlLabel
              value='todos'
              control={<Radio />}
              label='Todos'
            />
            <FormControlLabel
              value='reminders'
              control={<Radio />}
              label='Reminders'
            />
            <FormControlLabel
              value='work'
              control={<Radio />}
              label='Work'
            />
          </RadioGroup>
        </FormControl>
        <Button
          type='submit'
          color='secondary'
          variant='contained'
          endIcon={<KeyboardArrowRightIcon />}
        >
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default Create;

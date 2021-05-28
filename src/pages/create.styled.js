import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';

export const MainTypography = styled(Typography)`
  color: black;
  &:hover {
    color: green;
  }
`;

export const useStyles = makeStyles({
  btn: {
    fontSizes: 60,
    backgroundColor: 'violet',
    '&:hover': {
      backgroundColor: 'green',
    },
  },
  title: {
    textDecoration: 'underline',
    marginTop: '1rem',
  },
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: 'block',
  },
});

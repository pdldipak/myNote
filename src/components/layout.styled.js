import styled from 'styled-components';
import { Container, makeStyles, Typography } from '@material-ui/core';

const drawerWitdh = '240px';

export const Root = styled.div`
  display: flex;
  width: 100%;
`;

export const Page = styled(Container)`
  background: '#89cff0';
  margin-left: 240px;
  padding: 1rem;
`;

export const AuthPart = styled(Typography)`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  & button {
    padding-left: 2rem;
  }
`;

export const useStyles = makeStyles((theme) => {
  return {
    drawer: {
      with: drawerWitdh,
    },
    drawerPaper: {
      width: drawerWitdh,
    },
    active: {
      background: '#f4f4f4',
    },
    title: {
      padding: theme.spacing(2),
    },
    appbar: {
      paddingLeft: drawerWitdh,
      width: `calc(100%-${drawerWitdh})`,
    },
    toolbar: theme.mixins.toolbar,
    date: {
      flexGrow: 1,
    },
    avatar: {
      marginLeft: theme.spacing(1),
    },
  };
});

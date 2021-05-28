import {
  AppBar,
  Avatar,
  Button,
  Toolbar,
  Typography,
} from '@material-ui/core';
import * as S from './layout.styled';
import { format } from 'date-fns';

const Header = () => {
  const classes = S.useStyles();
  return (
    <AppBar className={classes.appbar} elevation={0}>
      <Toolbar>
        <Typography className={classes.date}>
          Today is {format(new Date(), 'dd MMMM Y')}{' '}
        </Typography>

        <S.AuthPart>
          <Button>Login</Button>
          <Button>Notes</Button>
          <Button>Logout</Button>
          <Button>
            <Avatar
              src='/resume_pic.jpg'
              className={classes.avatar}
            />
          </Button>
        </S.AuthPart>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

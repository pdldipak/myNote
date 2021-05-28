import {
  Drawer,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import {
  AddCircleOutlineOutlined,
  SubjectOutlined,
} from '@material-ui/icons';
import { useHistory, useLocation } from 'react-router';
import Header from './Header';
import * as S from './layout.styled';

const Layout = ({ children }) => {
  const history = useHistory();
  const location = useLocation();
  const classes = S.useStyles();
  const menuItems = [
    {
      text: 'My Notes',
      icon: <SubjectOutlined />,
      color: 'secondary',
      path: '/',
    },
    {
      text: 'Create Icon',
      icon: <AddCircleOutlineOutlined />,
      color: 'secondary',
      path: '/create',
    },
  ];
  return (
    <S.Root>
      <Header />
      <Drawer
        className={classes.drawer}
        variant='permanent'
        anchor='left'
        classes={{ paper: classes.drawerPaper }}
      >
        <div>
          <Typography className={classes.title} variant='h5'>
            Dipak Notes
          </Typography>
        </div>
        <List>
          {menuItems.map((item) => (
            <ListItem
              key={item.text}
              button
              onClick={() => history.push(item.path)}
              className={
                location.pathname === item.path ? classes.active : null
              }
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <S.Page>
        <div className={classes.toolbar}></div>
        {children}
      </S.Page>
      ;
    </S.Root>
  );
};

export default Layout;

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import {
  Avatar,
  IconButton,
  makeStyles,
  Typography,
} from '@material-ui/core';
import { DeleteOutline } from '@material-ui/icons';
import { blue, green, pink, yellow } from '@material-ui/core/colors';

const useStyles = makeStyles({
  avatar: {
    backgroundColor: (note) => {
      if (note.category === 'work') {
        return yellow[700];
      }
      if (note.category === 'money') {
        return green[500];
      }
      if (note.category === 'todos') {
        return pink[500];
      }
      return blue[500];
    },
  },
});

const NoteCard = ({ note, handleDelete }) => {
  const { title, details, category, id } = note;
  // console.log('....', category);
  const classes = useStyles(note);

  return (
    <Card elevation={1}>
      <CardHeader
        avatar={
          <Avatar className={classes.avatar}>
            {note.category[0].toUpperCase()}
          </Avatar>
        }
        action={
          <IconButton onClick={() => handleDelete(id)}>
            <DeleteOutline />
          </IconButton>
        }
        title={title}
        subheader={category}
      />
      <CardContent>
        <Typography variant='body2' color='textSecondary'>
          {details}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default NoteCard;

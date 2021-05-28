import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
import NoteCard from '../components/NoteCard';

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const getData = useCallback(() => {
    axios
      .get(process.env.REACT_APP_FIREBASE_LINK + '.json')
      .then((res) => {
        //  console.log('......', res);
        const data = res.data;
        const loadedNotes = [];

        for (const key in data) {
          loadedNotes.push({
            id: key,
            title: data[key].title,
            details: data[key].details,
            category: data[key].category,
          });
        }

        setNotes(loadedNotes);
      })
      .catch((err) => console.log(err.message));
  }, []);

  const handleDelete = async (id) => {
    await axios.delete(
      process.env.REACT_APP_FIREBASE_LINK + `/${id}.json`
    );
    //DELETE FROM UI
    const newNotes = notes.filter((note) => note.id !== id);
    //DELETE FROM STATE
    setNotes(newNotes);
  };

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <Container>
      <Grid container spacing={4}>
        {notes.map((note) => (
          <Grid xs={12} sm={12} md={6} lg={4} item key={note.id}>
            <NoteCard note={note} handleDelete={handleDelete} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Notes;

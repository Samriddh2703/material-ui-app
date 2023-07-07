import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import NotesList from './NoteList';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    background: '#333',
    color: '#fff',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: theme.spacing(3),
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1 className={classes.title}>Notes List</h1>
      <NotesList />
    </div>
  );
};

export default App;

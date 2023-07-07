import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  withStyles,
  makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '80%',
    overflowX: 'auto',
    color: 'white',
  },
  table: {
    minWidth: 650,
    background: '#333',
    color: 'white',
  },
  tableCell: {
    fontWeight: 'bold',
  },
  fadeIn: {
    opacity: 0,
    animation: '$fadeEffect 3s ease-in-out forwards',
    color: 'white',
  },
  '@keyframes fadeEffect': {
    '0%': {
      opacity: 0,
    },
    '100%': {
      opacity: 1,
    },
  },
}));

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.primary.main,
    color: 'white',
  },
  body: {
    fontSize: 14,
    color: 'white',
  },
}))(TableCell);

const NotesList = () => {
  const classes = useStyles();
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await axios.get('https://api.gyanibooks.com/library/get_dummy_notes');
        setNotes(response.data);
      } catch (error) {
        console.error('Error fetching notes:', error);
      }
    };

    fetchNotes();
  }, []);

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.substring(0, maxLength) + '...';
  };

  return (
    <div className={classes.root}>
      <TableContainer component={Paper} className={classes.fadeIn}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <StyledTableCell>ID</StyledTableCell>
              <StyledTableCell>Title</StyledTableCell>
              <StyledTableCell>Category</StyledTableCell>
              <StyledTableCell>Notes</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {notes.map((note) => (
              <TableRow key={note.id}>
                <StyledTableCell>{note.id}</StyledTableCell>
                <StyledTableCell>{note.title}</StyledTableCell>
                <StyledTableCell>{note.category}</StyledTableCell>
                <StyledTableCell>{truncateText(note.notes, 200)}</StyledTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default NotesList;

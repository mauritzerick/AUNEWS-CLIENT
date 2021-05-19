import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';


const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
}));




export default function SearchInput() {
  const classes = useStyles();
  const [keyword, setKeyword] = useState({
    "keyword":""
  });

  function handleOnChange(event){
      const {value: newValue} = event.target;
      console.log(newValue);
  }

  return (
    <Paper component="form" className={classes.root}>
      <InputBase
        value={keyword.keyword}
        onChange={handleOnChange}
        className={classes.input}
        placeholder="Search for a news topic"
        inputProps={{ 'aria-label': 'Search for a news topic' }}
      />
      <IconButton type="submit" className={classes.iconButton} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}

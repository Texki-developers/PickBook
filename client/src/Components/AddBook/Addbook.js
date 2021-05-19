import React, { useState } from 'react'
import './AddBook.scss'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    }, '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  }
}));





const Addbook = () => {
  const [bookDetails,setBookDetails] = useState({})
  const classes = useStyles();
  // const [value, setValue] = React.useState('Controlled');
  const viewImage = (event) => {
    console.log(event)
  }
  
  const handleChange = (event) => {
    setBookDetails({
      ...bookDetails,
      [event.target.name]:event.target.value
    })
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(bookDetails);
  }

  return (
    <div className="add_book_container">
      <h2 className="heading_book">Add Book</h2>

      <form className={classes.root} id="frm" autoComplete="off" onSubmit={handleSubmit}>
        <div className="inputs-container photo_upload">

          <input type="file" id="upload" hidden />
          <label id="cover" for="upload" onChange={viewImage}  >ADD PHOTO</label>
          <label id="title">Cover photo</label>
        </div>
        <div className="inputs-container">
          <TextField className="inputs" label="IBN Number" required name='ibn' onChange={handleChange}/>
          <TextField className="inputs" label="Author Name" required name='author' onChange={handleChange}/>
        </div>
        <div className="inputs-container" >
          <TextField className="inputs" label="Book title" required name='title' onChange={handleChange}/>
          <TextField className="inputs" label="Link to purchase" required name='link' onChange={handleChange}/>
        </div>
        <div className="inputs-container">
          <TextField className="input_cent" label="Language" required name='language' onChange={handleChange}/>
          <TextField className="input_cent" label="Genre" required name='genre' onChange={handleChange}/>
          <TextField className="input_cent" label="Year of Publication" required name='year' onChange={handleChange} />

        </div >

        <div className="inputs-container " >
          <TextField className="description" multiline rowsMax={4}
            onChange={handleChange} label="Description" required name='description' />

        </div>
        <div className="ab-button-container">

          <button className="ab-button" type="submit">Add Book</button>
        </div>
      </form>
    </div>
  )
}

export default Addbook;

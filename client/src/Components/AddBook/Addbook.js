import React, { useState } from 'react'
import './AddBook.scss'
import { useSelector } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import firebase from '../../Assets/FirebaseConfig/firebaseConfig'
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
  const classes = useStyles();
  const [bookDetails, setBookDetails] = useState({})
  const [fileName, setFileName] = useState(null)
  const [file, setFile] = useState(null);
  const [imageURL, setImageURL] = useState(null)
  const userId = useSelector(state => state.essentials.userData.uid);

  const viewImage = (event) => {
    setFile(event.target.files[0]);
    var date = new Date();
    setFileName(date.getTime() + "-" + date.getDate() + "-" + date.getFullYear() + "-" + date.getMonth() + "-" + userId)
  }

  const handleInput = (event) => {
    setBookDetails({
      ...bookDetails,
      [event.target.name]: event.target.value
    })
  };

  const storeImage = (event) => {
    return new Promise( async (resolve, reject) => {
      event.preventDefault();
      console.log("uploading file....");
      await firebase.storage()
        .ref(`cover-images/${fileName + file.name}`)
        .put(file)
        .then((
          (snapShot) => console.log(snapShot),
          (err) => console.log(err),
          () => {
            firebase.storage()
              .ref('cover-images')
              .child(fileName + file.name)
              .getDownloadURL()
              .then((url) => {
                setImageURL(url)
                resolve(url)
                console.log(bookDetails, "finished");
              })
          }))
    })
  }
  const handleSubmit = () => {
    storeImage().then((url) => {
      console.log('start settting the bookd');
      setBookDetails({...bookDetails,url:url});
      console.log('book detadded');
      console.logbook(bookDetails);
    })
  }

  return (
    <div className="add_book_container">
      <h2 className="heading_book">Add Book</h2>

      <form className={classes.root} id="frm" autoComplete="off" onSubmit={handleSubmit}>
        <div className="inputs-container photo_upload">

          <input type="file" id="upload" onChange={viewImage} hidden />
          <label id="cover" for="upload" >ADD PHOTO</label>
          <label id="title">Cover photo</label>
        </div>
        <div className="inputs-container">
          <TextField className="inputs" label="IBN Number" required name='ibn' onChange={handleInput} />
          <TextField className="inputs" label="Author Name" required name='author' onChange={handleInput} />
        </div>
        <div className="inputs-container" >
          <TextField className="inputs" label="Book title" required name='title' onChange={handleInput} />
          <TextField className="inputs" label="Link to purchase" required name='link' onChange={handleInput} />
        </div>
        <div className="inputs-container">
          <TextField className="input_cent" label="Language" required name='language' onChange={handleInput} />
          <TextField className="input_cent" label="Genre" required name='genre' onChange={handleInput} />
          <TextField className="input_cent" label="Year of Publication" required name='year' onChange={handleInput} />

        </div >

        <div className="inputs-container " >
          <TextField className="description" multiline rowsMax={4}
            onChange={handleInput} label="Description" required name='description' />

        </div>
        <div className="ab-button-container">

          <button className="ab-button" type="submit">Add Book</button>
        </div>
      </form>
    </div>
  )
}

export default Addbook;

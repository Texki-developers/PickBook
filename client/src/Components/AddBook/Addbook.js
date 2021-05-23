import React, { useEffect, useLayoutEffect, useState } from 'react'
import './AddBook.scss'
import { useDispatch, useSelector } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import firebase from '../../Assets/FirebaseConfig/firebaseConfig'
import instance from '../../Assets/server/instance';
import NotLoggedIn from '../NotLoggedIn/NotLoggedIn';
import Actions from '../../Assets/Essentials/EssentialAction';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Message from '../Message/Message';

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
  const [url, setUrl] = useState(null)
  const [message,setMessage] = useState(false)
  const [storeStatus,setStoreStatus] = useState(false)
  const [messageColor,setMessageColor] = useState('')
  const essentials = useSelector(state => state.essentials);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(Actions.addIconToggle());
  }, [dispatch]);

  useLayoutEffect(() => {
    return () => {
      dispatch(Actions.addIconToggle())
    };
  }, [dispatch])

  const viewImage = (event) => {
    setFile(event.target.files[0]);
    var date = new Date();

    if (event.target.files[0].type === "image/jpg") {
      setFileName(date.getTime() + "-" + date.getDate() + "-" + date.getFullYear() + "-" + date.getMonth() + "-")
      setUrl(URL.createObjectURL(event.target.files[0]))
      setMessage(false)
      setMessageColor("red")
    }
    else if(event.target.files[0].type === "image/jpeg"){
      setFileName(date.getTime() + "-" + date.getDate() + "-" + date.getFullYear() + "-" + date.getMonth() + "-")
      setUrl(URL.createObjectURL(event.target.files[0]))
      setMessage(false)
      setMessageColor("red")
    }
    else if(event.target.files[0].type === "image/png"){
      setFileName(date.getTime() + "-" + date.getDate() + "-" + date.getFullYear() + "-" + date.getMonth() + "-")
      setUrl(URL.createObjectURL(event.target.files[0]))
      setMessage(false)
      setMessageColor("")
    }
    else{
      setMessage("Only allows jpg or png format files.")
      setMessageColor("red")
    }
  }

  const handleInput = (event) => {
    setBookDetails({
      ...bookDetails,
      [event.target.name]: event.target.value
    })
  };

  const storeImage = () => {
    return new Promise(async (resolve, reject) => {
      setStoreStatus("Uploading file")
      setMessage("Please Wait while uploading!")
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
                const bookInfo = {
                  ...bookDetails,
                  imageURL: url,
                  userId: essentials.userData.uid
                }
                setStoreStatus("File Uploaded")
                resolve(bookInfo)

              })
          }))
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if(!message){
      storeImage().then((bookInfo) => {
        console.log(bookInfo);
        instance.post('/add-book', bookInfo).then((res) => {
          setMessage("Book Added successfully")
          console.log(res.data.status);
        })
      })
    }else{
      setMessage("Can't upload this type of file..")
    }
    

  }


  return (
    <div className="add_book_container">
      {message?<Message message={message} link="/" color={messageColor}/>:null}
      {essentials.userData ?
        <>
      
          <h2 className="heading_book">Add Book</h2>
          <form className={classes.root} id="frm" autoComplete="off" onSubmit={handleSubmit}>
            <div className="inputs-container photo_upload">
              <input type="file" id="upload" onChange={viewImage} hidden />
              <label style={{ backgroundImage: `url(${url})` }} id="cover" for="upload" >ADD PHOTO</label>
              <label id="title">{storeStatus?storeStatus:"Cover photo"}</label>

            </div>
            <div className="inputs-container">
              <TextField className="inputs" label="IBN Number" required name='ibn' onChange={handleInput} />
              <TextField className="inputs" label="Author Name" required name='author' onChange={handleInput} />
            </div>
            <div className="inputs-container" >
              <TextField className="inputs" label="Book title" required name='title' onChange={handleInput} />
              <TextField className="inputs" label="Link to purchase" required name='link' onChange={handleInput} />
            </div>
            <div className="inputs_dropdown">
              <div className="input_cent">
                <InputLabel id="add_language">Language</InputLabel>
                <Select labelId="add_language" onChange={handleInput} name='Language'>
                  {essentials.languages.map((d, i) => (
                    <MenuItem value={d} key={i}>{d}</MenuItem>
                  ))}
                </Select>
              </div>
              <div className="input_cent">
                <InputLabel id="add_genere">Genres</InputLabel>
                <Select
                  labelId="add_genere"
                  name='Genres'
                  onChange={handleInput}
                >
                  {essentials.genres.map((d, i) => (
                    <MenuItem value={d} key={i}>{d}</MenuItem>
                  ))}
                </Select>
              </div>
              <TextField type='number'
                onChange={handleInput} label="year" required name='year' />

            </div >

            <div className="inputs-container " >
              <TextField className="description" multiline rowsMax={4}
                onChange={handleInput} label="Description" required name='description' />

            </div>
            <div className="ab-button-container">
              <button className="ab-button" type="submit">Add Book</button>
            </div>
          </form>
        </>
        :
        <NotLoggedIn />
      }
    </div>
  )
}

export default Addbook;

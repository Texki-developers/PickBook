import React from 'react'
import './AddBook.scss'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },'& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
    }
  }));
  
    
  


const Addbook = () => {
  
  
    const classes = useStyles();
    const [value, setValue] = React.useState('Controlled');
    const handleChange = (event) => {
      
    };
    
    return (
        <div className="add_book_container">
            <h2 className="heading_book">Add Book</h2>

             <form className={classes.root} id="frm" noValidate autoComplete="off">
                 <div className="inputs-container photo_upload">

                 <input type="file" id="upload" hidden/>
                 <label id="cover"for="upload" >ADD PHOTO</label>
                 <label id="title">Cover photo</label>
                 </div>
                 <div className="inputs-container">
                 <TextField className="inputs" label="IBN Number" name='name'/>
                 <TextField className="inputs" label="Author Name" name='name'/>
                 </div>
                 <div className="inputs-container" >
                 <TextField className="inputs" label="Book title" name='name'/>
                 <TextField className="inputs" label="Link to purchase" name='name'/> 
                 </div>
                 <div className="inputs-container">
                 <TextField className="input_cent" label="Language" name='name'/>
                 <TextField className="input_cent" label="Genre" name='name'/>
                 <TextField className="input_cent" label="Year of Publication" name='name'/>

                 </div >
                 
                 <div className="inputs-container " >
                 <TextField className="description" multiline rowsMax={4} 
                           onChange={handleChange} label="Description" name='name'/>
                 
                 </div>
                 </form>    
        </div>
    )
}

export default Addbook;

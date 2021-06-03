import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button'
import SaveIcon from '@material-ui/icons/Save';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import DeleteIcon from '@material-ui/icons/Delete';
import Checkbox from '@material-ui/core/Checkbox';
import FormControllLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import {makeStyles,ThemeProvider,createMuiTheme} from '@material-ui/core/styles';


const useStyle = makeStyles({
  root : {
    background : 'linear-gradient(45deg,#FE6B8B,#FF8E53)',
    border : 0,
    borderRadius : 15,
    marginBottom : 10,
    color : 'white',
    padding : '10px 30px' 
  }
})


function ButtonStyled() {
  const classes = useStyle();
  return <Button className = {classes.root}> Cool style button</Button>
}


function CheckboxExample(){
  const [checked, setchecked] = React.useState(true) 
    return(
      <FormControllLabel  control = {<Checkbox checked = {checked} onChange = {(e) => setchecked(e.target.checked)} inputProps  = {{'aria-label' : 'secondary checkbox'}} icon = {<SaveIcon />} checkedIcon ={<DeleteIcon />} />} label = "Testing Checkbox" />
    )
  }

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ButtonStyled />
        <TextField  variant = "filled" color = "secondary" type = "email" label = "your email" placeholder = "your email address"/> 
        <CheckboxExample />
          <ButtonGroup variant = "contained" size = "large" color="primary">
              <Button startIcon = {<SaveIcon />}>
                Save
              </Button>
              <Button startIcon = {<DeleteIcon />}>
                Discard
              </Button>
          </ButtonGroup>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;

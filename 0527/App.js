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

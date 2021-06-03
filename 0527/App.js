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
import 'fontsource-roboto';
import Typography from '@material-ui/core/Typography';


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

const theme = createMuiTheme({
  palette :{
    primary :{
      main : "#000000",
    },
    secondary:{
      main : "#FFFFFF",
    }
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
    <ThemeProvider theme = {theme}>
      <div className="App">
        <header className="App-header">
          <Typography  variant = "h2">
            Welcome to MUI
          </Typography>
          <Typography  variant = "h3">
            learn how to use Material Ui
          </Typography>
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
    </ThemeProvider>
  );
}

export default App;

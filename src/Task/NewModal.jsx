

import React, { Component } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FirstModal from './ModalFolder/FirstModal';
import SecondModal from './ModalFolder/SecondModal';
import ThirdModal from './ModalFolder/ThirdModal';
import FourthModal from './ModalFolder/FourthModal';




const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  display :"flex",
  flexDirection  :"column",
  alignItems :"center",
  justifyContent :'center'
};

class NewModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      currentModal : 1,
      quiz : [
        0,0,0,0]
    };
  }

FirstModal  =  () => {
    return (
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={this.state.open}>
            <Box sx={style}>
       
      <FormControl>
      <FormLabel id="demo-radio-buttons-group-label"> KBC Question 1</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        value={this.state.quiz[0]}
        name="radio-buttons-group"
        onChange={ e => {
            let temp = [...this.state.quiz];
            let obj  =  e.target.value;
           
            temp[this.state.currentModal-1] = obj;
                this.setState({
                    quiz : temp,
                })
    }}
      >
        <FormControlLabel value={1} control={<Radio />} label="option 1" />
        <FormControlLabel value={2} control={<Radio />} label="option 2" />
        <FormControlLabel value={3} control={<Radio />} label="option 3" />
        <FormControlLabel value={4} control={<Radio />} label="option 4" />
      </RadioGroup>
    </FormControl>
    <Button disabled={this.state.quiz[0] === 0 ? true : false} onClick={this.handleNext}>Go to the second question</Button>
              </Box>
            
          </Fade>
        </Modal> 
    )
}
SecondModal  =  () => {
    return (
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={this.state.open}>
            <Box sx={style}>
            <FormControl>
      <FormLabel id="demo-radio-buttons-group-label"> KBC Question 2</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        value  =  {this.state.quiz[1]}
        onChange={ e => {
                let temp = [...this.state.quiz];
                let obj  =  e.target.value
                temp[this.state.currentModal-1] = obj;
                    this.setState({
                        quiz : temp,
                    })
        }}
        name="radio-buttons-group"
      >
        <FormControlLabel value={1} control={<Radio />} label="option 1" />
        <FormControlLabel value={2} control={<Radio />} label="option 2" />
        <FormControlLabel value={3} control={<Radio />} label="option 3" />
        <FormControlLabel value={4} control={<Radio />} label="option 4" />
        </RadioGroup>
        </FormControl>
              <Button onClick={this.handlePrev}>Go to the first question</Button>
              <Button disabled={this.state.quiz[1] === 0 ? true : false} onClick={this.handleNext}>Go to the Third question</Button>
            </Box>
          </Fade>
        </Modal> 
    )
}
ThirdModal  =  () => {
    return (
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={this.state.open}>
            <Box sx={style}>
            <FormControl>
      <FormLabel id="demo-radio-buttons-group-label"> KBC Question 3</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
       value={this.state.quiz[2]}
        name="radio-buttons-group"
        onChange={ e => {
            let temp = [...this.state.quiz];
            let obj  = e.target.value
        
            temp[this.state.currentModal-1] = obj;
                this.setState({
                    quiz : temp,
                })
    }}
      >
        <FormControlLabel value={1} control={<Radio />} label="option 1" />
        <FormControlLabel value={2} control={<Radio />} label="option 2" />
        <FormControlLabel value={3} control={<Radio />} label="option 3" />
        <FormControlLabel value={4} control={<Radio />} label="option 4" />
      </RadioGroup>
    </FormControl>
              <Button onClick={this.handlePrev}>Go to the Second question</Button>
              <Button disabled={this.state.quiz[2] === 0 ? true : false}   onClick={this.handleNext}>Go to the fourth question</Button>
            </Box>
          </Fade>
        </Modal> 
    )
}
FourthModal  =  () => {
    return (
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={this.state.open}>
            <Box sx={style}>
            <FormControl>
      <FormLabel id="demo-radio-buttons-group-label"> KBC Question 4</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
      value={this.state.quiz[3]}
        name="radio-buttons-group"
        onChange={ e => {
            let temp = [...this.state.quiz];
            let obj  =  e.target.value;
            temp[this.state.currentModal-1] = obj;
                this.setState({
                    quiz : temp,
                })
    }}
      >
        <FormControlLabel value={1} control={<Radio />} label="option 1" />
        <FormControlLabel value={2} control={<Radio />} label="option 2" />
        <FormControlLabel value={3} control={<Radio />} label="option 3" />
        <FormControlLabel value={4} control={<Radio />} label="option 4" />
      </RadioGroup>
    </FormControl>
              <Button onClick={this.handlePrev}>Go to third modal</Button>
              <Button disabled={this.state.quiz[3] === 0 ? true : false}  onClick={this.handleNext} >Finish</Button>
            </Box>
          </Fade>
        </Modal> 
    )
}






handleNext =  () => {
    if(this.state.currentModal < 4) {

        this.setState({
            currentModal : this.state.currentModal+1
        })
    }

    else {
        this.setState({
            currentModal :1 ,quiz : [0,0,0,0] })
            this.handleClose();
    }
}


handlePrev =  () => {
    this.setState({
        currentModal : this.state.currentModal-1
    })
}


  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };


handleChange = (e) => {

  let temp = [...this.state.quiz];
  let obj  = e.target.value

  temp[this.state.currentModal-1] = obj;
      this.setState({
          quiz : temp,
      })
}


  render() {
    const { open,currentModal } = this.state;

    return (
      <div>
        <Button onClick={this.handleOpen}>Open modal</Button>
        {/* <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={this.handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <Box sx={style}>
              <Typography id="transition-modal-title" variant="h6" component="h2">
                Text in a modal
              </Typography>
              <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
              </Typography>
            </Box>
          </Fade>
        </Modal>  */}
        {currentModal == 1 ? <FirstModal handleChange={this.handleChange} handleOpen={this.handleOpen} handleClose={this.handleClose} currentModal={this.state.currentModal} handleNext={this.handleNext} open = {this.state.open} quiz={this.state.quiz}/>
         : currentModal  == 2 ? <SecondModal handleChange={this.handleChange} handleOpen={this.handleOpen} handleClose={this.handleClose} handlePrev={this.handlePrev} handleNext={this.handleNext} open =  {this.state.open} quiz = {this.state.quiz}/> 
         : currentModal  == 3 ? <ThirdModal handleChange={this.handleChange} handleOpen={this.handleOpen} handleClose={this.handleClose} handlePrev={this.handlePrev} handleNext={this.handleNext} open =  {this.state.open} quiz = {this.state.quiz}/> 
         : currentModal  == 4 ? <FourthModal handleChange={this.handleChange} handleOpen={this.handleOpen} handleClose={this.handleClose} handlePrev={this.handlePrev} handleNext={this.handleNext} open =  {this.state.open} quiz = {this.state.quiz}/> 
         : null }
      

      </div>
    );
  }
}

export default NewModal;

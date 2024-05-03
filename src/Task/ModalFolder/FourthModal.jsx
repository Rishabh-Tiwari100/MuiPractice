
import React, { Component } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Backdrop from '@mui/material/Backdrop';

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
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: 'center'
};

class FourthModal extends Component {
  

constructor(props) {
  super(props);
 
}





  render() {
   
    const {open,quiz,handleNext,currentModal,handleOpen,handleClose,handlePrev,handleChange} =  this.props

    return (
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <FormControl>
              <FormLabel id="demo-radio-buttons-group-label"> KBC Question 4</FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                value={quiz[3]}
                name="radio-buttons-group"
                onChange={handleChange}
              >
                <FormControlLabel value={1} control={<Radio />} label="option 1" />
                <FormControlLabel value={2} control={<Radio />} label="option 2" />
                <FormControlLabel value={3} control={<Radio />} label="option 3" />
                <FormControlLabel value={4} control={<Radio />} label="option 4" />
              </RadioGroup>
            </FormControl>
            <Button onClick={handlePrev}>Go to the Third question</Button>
            <Button disabled={quiz[3] === 0 ? true : false} onClick={handleNext}>Click to finish</Button>
          </Box>
        </Fade>
      </Modal>
    );
  }
}

export default FourthModal;

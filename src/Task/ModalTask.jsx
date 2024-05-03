


import { Box, Button, Typography } from '@mui/material'
import React, { Component } from 'react'

export default class ModalTask extends Component {

constructor(props) {
  super(props);
  this.state  = {
    currentModal  : 0,
  }
}

handleClick  =  () => {
  this.setState({
    currentModal : this.state.currentModal+1
  })
}



handleModal =  () => {
  if(this.state.currentModal < 4) {
    this.setState({
      currentModal :  this.state.currentModal +1
    })
  }
  else {
    this.setState({
      currentModal : 0,
    })
  }
  
}

handlePrev =  () => {
  this.setState({
    currentModal :  this.state.currentModal -1
  })
}

  render() {

      const {currentModal} = this.state

    return (
  <Box style= {{display:"flex",alignItems:"center",justifyContent:"center",height:"100vh",}}>
    <Box sx={{position:"relative"}}>

    <Button onClick={this.handleClick} sx={{display: currentModal == 0 ? null : "none"}}>Click Me</Button>
    <Box style={{background:"red", display : currentModal !== 1 ? "none" : "flex", position:"absolute", border:"1px solid gray", width:"300px",flexDirection:"column",alignItems:"center",gap:"20px",padding:"20px"}}>
      <Typography >First Modal</Typography>
      <Button variant='contained' sx={{ color:"white"}} onClick={this.handleModal}>go to second modal</Button>
    </Box>
    <Box style={{background:"green", display : currentModal !== 2 ? "none" : "flex", position:"absolute", border:"1px solid gray", width:"300px",flexDirection:"column",alignItems:"center",gap:"20px"}}>
      <Typography>second Modal</Typography>
      <Button variant='contained' sx={{background:"black", color:"white"}} onClick={this.handleModal}>go to third modal</Button>
      <Button onClick={this.handlePrev} variant='contained' sx={{background:"black", color:"white"}} >go to first modal</Button>
    </Box>
    <Box style={{background:"orange", display : currentModal !== 3 ? "none" : "flex", position:"absolute", border:"1px solid gray", width:"300px",flexDirection:"column",alignItems:"center",gap:"20px"}}>
      <Typography>third Modal</Typography>
      <Button variant='contained' sx={{background:"black", color:"white"}} onClick={this.handleModal}>go to fourth modal</Button>
      <Button onClick={this.handlePrev} variant='contained' sx={{background:"black", color:"white"}} >go to second modal</Button>
    </Box>
    <Box style={{background:"gray", display : currentModal !== 4 ? "none" : "flex", position:"absolute", border:"1px solid gray", width:"300px",flexDirection:"column",alignItems:"center",gap:"20px"}}>
      <Typography>fourth Modal</Typography>
      <Button variant='contained' sx={{color:"white"}} onClick={this.handleModal}> click to finish</Button>
      <Button onClick={this.handlePrev} variant='contained' sx={{color:"white"}}> go to third</Button>
    </Box>
    </Box>
  </Box>
    )
  }
}





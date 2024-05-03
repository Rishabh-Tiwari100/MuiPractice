import { Box, Typography } from '@mui/material';
import React, { Component } from 'react'

export default class MyCard extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    console.log(this.props.url)
    return (
      <Box style={{position:"relative",color:"white"}}>
        <img  src={this.props.url} alt="" />
        <Box style={{position:"absolute",top:"60px",left:"20px"}}>
          <Typography>UP TO 50%</Typography>
          <Typography>BOOKS FOR WOMENS</Typography>
          <a>Shop Now!</a>
 </Box>
      </Box>
    )
  }
}


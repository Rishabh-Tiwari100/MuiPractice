import { Box, Button } from '@mui/material'
import React, { Component } from 'react'
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default class Food extends Component {

constructor(props) {
    super(props);
    this.state = {
        arr : ["pizza","burger","dosa","sandwith","ice-cream"],
        checkArr : [],
    }
  
}


componentDidMount() {
    const temp = this.state.arr.map(n => {
        return false;
    })

    this.setState({
        checkArr : temp,
    })
}


handleCheckbox =(index) => {
let temp = this.state.checkArr.map((value,i) => {
    if(i === index) {
        return !value;
    }
    else {
        return value
    }
})


if(this.state.arr[index] == 'pizza') {

    temp = this.state.checkArr.map((value,i) => {
       if(this.state.arr[i]  === "burger") {
           return false;
       }
       else if(i === index) {
        return !value;
    }
    else {
        return value
    }
   })

}
if(this.state.arr[index] == 'burger') {

    temp = this.state.checkArr.map((value,i) => {
       if(this.state.arr[i]  === "pizza") {
           return false;
       }
       else if(i === index) {
        return !value;
    }
    else {
        return value
    }
   })
 
}




this.setState({
    checkArr : temp,
})
console.log(temp)







}


handleAll =() => {

    this.setState({
        checkArr : this.state.checkArr.map((value,i) => {
            return true;
        })
    })
    console.log(this.state.checkArr)
}

handleClear = () => {
    this.setState({
        checkArr : this.state.checkArr.map((value,i) => {
            return false;
        })
    })
}

  render() {
    return (
      <Box style={{display:"flex",justifyContent:"center",alignitems:"center",}}>
        <Box style={{display:"flex",flexDirection:'column',justifyContent:"center",alignitems:"center"}}>

        <Box style={{backgroundColor:"gray",height:"70vh",display:"flex",flexDirection:"column",}}>
            {this.state.arr.map((food,index) => {
                return (
                    <Box><FormControlLabel onClick={() => {
                        this.handleCheckbox(index);
                    }} required control={<Checkbox />} checked={this.state.checkArr[index] ? true : false} label={food} /></Box>
                    )
                })}
            
        </Box>
        <Box style={{display:"flex",justifyContent:"space-between",alignitems:"center"}}>
            <Button onClick={this.handleClear}>Clear All</Button>
            <Button onClick={this.handleAll}>Select  All</Button>
        </Box>
                </Box>
      </Box>
    )
  }
}

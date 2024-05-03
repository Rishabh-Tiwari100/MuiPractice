
import { Button } from '@mui/material';
import './DND.css'

import React, { Component } from 'react';

class DragAndDrop extends Component {


constructor(props) {
  super(props);
  this.state = {
    box :  ['1','2','3','4'],
    currentPosition  : 1,
  }
}


  handleDragOver = (e) => {
    e.preventDefault();
    e.target.classList.add("hovered");
  };

  handleDragLeave = (e) => {
    e.target.classList.remove("hovered");
  };

  handleDrop = (e) => {
    e.preventDefault();
    const image = document.querySelector('.image');
    e.target.appendChild(image);
    e.target.classList.remove("hovered");
    this.setState({
      currentPosition : +e.target.id
    })

  };




handleNext = (e) => {
       const box =    document.getElementById(this.state.box[this.state.currentPosition]);
       const image = document.querySelector('.image');
       box.appendChild(image)
       this.setState({
        currentPosition: this.state.currentPosition+1
       })

}
handlePrev = (e) => {
       const box =    document.getElementById(this.state.box[this.state.currentPosition-2]);
       const image = document.querySelector('.image');
       box.appendChild(image)
       this.setState({
        currentPosition: this.state.currentPosition-1
       })

}





  render() {
    return (
      <div className="container">
        <div className="box" id={this.state.box[0]} onDragOver={this.handleDragOver} onDrop={this.handleDrop} onDragLeave={this.handleDragLeave} >
          <div className="image" draggable="true">
            <Button variant='contained' onClick={this.handlePrev} id="prev" disabled={this.state.currentPosition <=1 && true}>prev</Button>
            <Button  variant='contained' onClick={this.handleNext} disabled={this.state.currentPosition >= 4 && true} id="next">next</Button>
          
          </div>
        </div>
        <div className="box" id={this.state.box[1]} onDragOver={this.handleDragOver} onDrop={this.handleDrop} onDragLeave={this.handleDragLeave}></div>
        <div className="box" id={this.state.box[2]} onDragOver={this.handleDragOver} onDrop={this.handleDrop} onDragLeave={this.handleDragLeave}></div>
        <div className="box" id={this.state.box[3]} onDragOver={this.handleDragOver} onDrop={this.handleDrop} onDragLeave={this.handleDragLeave}></div>
      </div>
    );
  }
}

export default DragAndDrop;

// import { Box } from '@mui/material'
// import React, { Component } from 'react'

// const container = {
//     display : "grid",

//     gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
//     gridTemplateColumns: 'repeat(auto-fit)',
//     gridAutoRows: 'minmax(100px, auto)',
//     gap: '20px',
// }

// const gridChild = {
//     border : "1px solid red",
//     background :"green"
// }

// export default class GridPractice extends Component {
//   render() {
//     return (
//       <Box style={container}>
//         <Box style={gridChild}>one</Box>
//         <Box style={gridChild}>two</Box>
//         <Box style={gridChild}>three</Box>
//         <Box style={gridChild}>four</Box>
//         <Box style={gridChild}>five</Box>
//         <Box style={gridChild}>six</Box>
//         <Box style={gridChild}>seven</Box>
//       </Box> 
//     )
//   }
// }

<div className="container">
  <div className="box">
    <div className="img" draggable="true"></div>
  </div>
  <div className="box"></div>
  <div className="box"></div>
  <div className="box"></div>
</div>




const boxes = document.querySelectorAll(".box");
const image = document.querySelectorAll('.image');


boxes.forEach(box => {
    box.addEventListener("dragover",(e) => {
        e.preventDefault();
        box.classList.add("hovered")
    });
    
    box.addEventListener("dragleave",() => {
        box.classList.remove("hovered")
    });
    
    box.addEventListener("drop", () => {
        box.appendChild(image);
    })
})


const all = {
  boxSizing :"border-box",
  margin:"0",
  padding:"0",
}

const body = {
  display :"flex",
  alignItems :"center",
  justifyContent:"center",
  background :'#f6f7fb'
}

const container = {
display :"flex",
gap:"10px",
flexWrap :"wrap",
width :"420px",

justifyContent :"center"
}

const box  = {
  position :"relative",
  height:"160px",
  width :"160px",
  borderRadius :'12px',
  border :"2px solid #333"


}


const imageStyle  = {
  height:"100%",
  width:"100%",
  background:"green",

}

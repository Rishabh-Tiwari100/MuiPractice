import React, { Component } from 'react';
import { Box } from '@mui/material';

const imageBox = {
  width: '400px',
  height: '400px',
  overflow :"hidden",
  display :"flex",
  border :"1px solid red"
 
};

const smallBox = {
  width: '300px',
  height: '300px',
  overflow :"hidden",
  display:"flex",
  border :"1px solid red"

};
const smallestBox = {
  width: '200px',
  height: '200px',
  display:"flex",
 overflow :"hidden",
 border :"1px solid red"
};

export default class ImageCircle extends Component {
  constructor(props) {
    super(props);
    this.state = {
    
      currentSlides:[0,1,2,3,4],
      transformImage : false,
    
      slideImages: [
        {
          url:
            'https://images.unsplash.com/photo-1505144808419-1957a94ca61e?q=80&w=2126&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          url:
            'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          url:
            'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          url:
            'https://plus.unsplash.com/premium_photo-1673264933212-d78737f38e48?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          url:
            'https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D',
        },
        {
          url:
            'https://media.istockphoto.com/id/636208094/photo/tropical-jungle.jpg?s=2048x2048&w=is&k=20&c=MlaHtCKbmmQAzT5d0Z-Hs8gw_yjzEar-jwMoE85Nzj8=',
        },
        {
          url:
            'https://media.istockphoto.com/id/1151755587/photo/sunrise-behind-a-tropical-island-in-the-maldives.webp?b=1&s=170667a&w=0&k=20&c=pCoa8cGcoUFGR9R0Cc07aUP9R9WT1AMToftlYYa9zUI=',
        },
      ],
    };
  }

  goToNext = () => {
   let temp = [...this.state.currentSlides];

   let newBtn  =  temp.map((item,index) => {
      
            if(item == this.state.slideImages.length-1) {
                return 0
            }

            else {
                return item+1;
            }
   })

   this.setState({
    currentSlides : newBtn,
   })

  };
  goToPrev = () => {
    let temp = [...this.state.currentSlides];
 
    let newBtn  =  temp.map((item,index) => {
             if(item === 0) {
                 return this.state.slideImages.length - 1;
             }
             else {
                 return item - 1;
             }
    });
 
    this.setState({
     currentSlides : newBtn,
    });
 };
 

componentDidUpdate (prevProps,prevState) {
    if(this.state.currentSlides !== prevState.currentSlides) {

        this.setState({transformImage : false})
     
    }
    setTimeout(() => {
        this.setState({
            transformImage : true,
        })
    },0)
}


  render() {
    const { currentSlides, slideImages,transformImage } = this.state;

    return (
      <Box style={{ display: 'flex', alignItems: 'center',justifyContent:"space-between",gap:"10px"}}>
        <Box onClick={this.goToPrev} >
          <i className="fa-solid fa-less-than"></i>
        </Box>
        <Box style={smallestBox}>
            <Box>
          <img  style={{ width: '200px', height: '200px',transform : transformImage && "translate(-200px,0)",transition: transformImage && "transform 1s" }} src={slideImages[currentSlides[0]].url} alt="" />
            </Box>
            <Box>
          <img  style={{ width: '200px', height: '200px',transform : transformImage && "translate(-200px,0)",transition: transformImage && "transform 1s"}} src={slideImages[currentSlides[1]].url} alt="" />
            </Box>
        </Box>
        <Box style={smallBox}>
            <Box>

          <img style={{ width: '300px', height: '300px',transform : transformImage && "translate(-300px,0)",transition: transformImage && "transform 1s" }} src={slideImages[currentSlides[1]].url} alt="" />
            </Box>
            <Box>
          <img style={{ width: '300px', height: '300px',transform : transformImage && "translate(-300px,0)",transition: transformImage && "transform 1s" }} src={slideImages[currentSlides[2]].url} alt="" />
            </Box>
        </Box>
        <Box style={imageBox}>
            <Box>

          <img style={{ width: '400px', height: '400px',transform : transformImage && "translate(-400px,0)",transition: transformImage && "transform 1s"  }} src={slideImages[currentSlides[2]].url} alt="" />
            </Box>
            <Box>

          <img style={{ width: '400px', height: '400px',transform : transformImage && "translate(-400px,0)",transition: transformImage && "transform 1s"  }} src={slideImages[currentSlides[3]].url} alt="" />
            </Box>
        </Box>
        <Box style={smallBox}>
            <Box>

          <img style={{ width: '300px', height: '300px',transform : transformImage && "translate(-300px,0)",transition: transformImage && "transform 1s"  }} src={slideImages[currentSlides[3]].url} alt="" />
            </Box>
            <Box>

          <img style={{ width: '300px', height: '300px',transform : transformImage && "translate(-300px,0)",transition: transformImage && "transform 1s"  }} src={slideImages[currentSlides[4]].url} alt="" />
            </Box>
        </Box>
        <Box style={smallestBox}>
            <Box>

          <img style={{ width: '200px', height: '200px',transform : transformImage && "translate(-200px,0)",transition: transformImage && "transform 1s"  }} src={slideImages[currentSlides[4]].url} alt="" />
            </Box>
            <Box>

          <img style={{ width: '200px', height: '200px',transform : transformImage && "translate(-200px,0)",transition: transformImage && "transform 1s"  }} src={slideImages[currentSlides[0]].url} alt="" />
            </Box>
        </Box>
       
        <Box onClick={this.goToNext}>
          <i className="fa-solid fa-greater-than"></i>
        </Box>
      </Box>
    );
  }
}
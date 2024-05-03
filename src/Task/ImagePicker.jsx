import { Box, Typography } from '@mui/material';
import React, { Component } from 'react';

const cardSection =  {
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  gap: "20px",
  "@media (max-width:1650px)": {
    gridTemplateColumns: "1fr 1fr",
  },
};

class ImagePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      updatedCard: 0,
      cardArr: [
        {
          selectedFile: null,
          imageUrl: "https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?cs=srgb&dl=pexels-pixabay-210019.jpg&fm=jpg",
        },
        {
          selectedFile: null,
          imageUrl: "",
        },
        {
          selectedFile: null,
          imageUrl: "",
        },
        {
          selectedFile: null,
          imageUrl: "",
        },
        {
          selectedFile: null,
          imageUrl: "",
        },
        {
          selectedFile: null,
          imageUrl: "",
        },
        {
          selectedFile: null,
          imageUrl: "",
        },
        {
          selectedFile: null,
          imageUrl: "",
        },
        {
          selectedFile: null,
          imageUrl: "",
        },
      ],
    };
    this.fileInputRefs = this.state.cardArr.map(() => React.createRef());
  }

  onChange = (index) => (event) => {
    const file = event.target.files[0];
    const objectUrl = URL.createObjectURL(file);
    let obj = {
      selectedFile: file,
      imageUrl: objectUrl,
    };
    let temp = [...this.state.cardArr];
    temp[this.state.updatedCard] = obj;
    this.setState({
      cardArr: temp,
    });
  };

  handleClick = (index) => {
    this.fileInputRefs[index].current.click();
    this.setState({
      updatedCard: index,
    });
  };

  render() {
    const { selectedFile, imageUrl } = this.state;

    return (
      <div>
        <Box sx={cardSection}>
          {this.state.cardArr.map((card, index) => {
            if (card.imageUrl === "") {
              return (
                <Box
                  style={{
                    border: "2px dashed #8080803d",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "350px",
                    height: "200px",
                    borderRadius: "20px",
                    cursor: "pointer", 
                  }}
                  onClick={() => this.handleClick(index)} // Call handleClick with index
                >
                  <Typography style={{ color: "#008fff" }}> {/* Moved the color style here */}
                    <i className="fa-solid fa-plus"></i>Add Photo
                  </Typography>
                  <input
                    type="file"
                    ref={this.fileInputRefs[index]}
                    style={{ display: "none" }}
                    onChange={this.onChange(index)}
                    accept="image/*"
                  />
                </Box>
              );
            } else {
              return (
                <Box
                  style={{
                    width: "350px",
                    height: "200px",
                    borderRadius: "20px",
                    overflow: "hidden",
                  }}
                >
                  <img width="100%" src={card.imageUrl} alt="" />
                </Box>
              );
            }
          })}
        </Box>
      </div>
    );
  }
}

export default ImagePicker;

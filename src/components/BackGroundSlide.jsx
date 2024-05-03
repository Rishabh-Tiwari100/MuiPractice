import { Box, Button, Input, Typography } from "@mui/material";
import React, { Component } from "react";
import MyCard from "./MyCard";
import '../App.css'

import Rating from "@mui/material/Rating";

const Header = {
  outer: {
    display: "flex",
    alignItmes: "center",
    justifyContent: "center",
    padding: "20px",
  },
  wrapper: {
    width: "70%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    "@media (max-width:700px)": {
      width: "100%",
    },
  },
  input: {
    width: "100%",
    height: "25px",
    borderRadius: "60px",
    border: "none",
    backgroundColor: "#ddd",
    padding: "10px",
  },
};

const NavBar = {
  outer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
    color: "#fff",
    padding: "20px",
  },
  inner: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
  },
};

const Banner = {
  width: "100%",
};
const yellowIcons = {
  outer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffc600",
    width: "70%",
    margin: "auto",
    padding: "30px 0",
    position: "relative",
    bottom: "20px",
    color: "white",
  },
  inner: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
  },
  icon: {
    borderRadius: "50%",
    backgroundColor: "orange",
    padding: "20px",
    color: "#000",
    "&:hover": {
      color: "#fff",
    },
  },
  wrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "40px",
    flexWrap: "wrap",
  },
};

const Content = {
  backgroundImage:
    'url("https://www.mahardhi.com/opencart/tfm/MT01/bigbucket/11/catalog/view/theme/mahardhi/image/mahardhi/wall_backgraund.jpg")',
  width: "100%",
};

const Offer = {
  display: "flex",
  gap: "20px",
  justifyContent: "center",
  alignItems: "center",
  width: "70%",
  margin: "0 auto",
  flexWrap: "wrap",
};

const TopProducts = {
  wrapper: {
    width: "70%",
    margin: "20px auto",
    display: "flex",
    flexDirection: "column",
    gap: "40px",
  },

  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#000",
    color: "white",
    padding: "25px",
  },
};

const Testimonial = {
  wrapper: {
    backgroundImage: `url("https://www.mahardhi.com/opencart/tfm/MT01/bigbucket/11/catalog/view/theme/mahardhi/image/mahardhi/testimonial-backgraund.jpg")`,
    display: "flex",
    padding: "20px",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  inner: {
    width: "70%",
    margin: " 0 auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: "30px",
  },
  category: {
    position:'relative',
    padding: "10px",
    background: "#000",
    color: "#fff",
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center"
    
  },
  CardSection: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "20px",
    padding: "40px",
    background: "transparent",
    overflowX: "scroll",
    position:'relative',
  },
  card: {
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: "10px",
    gap: "10px",
    minWidth:"50%",
  },
};

export default class BackGroundSlide extends Component {
  constructor(props) {
    super(props);
    this.containerRef = React.createRef();
    this.state = {
      carousel: [
        {
          url: "https://www.mahardhi.com/opencart/tfm/MT01/bigbucket/11/image/cache/catalog/banner/main-banner-1-1920x700.jpg",
        },
        {
          url: "https://www.mahardhi.com/opencart/tfm/MT01/bigbucket/11/image/cache/catalog/banner/main-banner-2-1920x700.jpg",
        },
      ],
      offImg: [
        {
          url: "https://www.mahardhi.com/opencart/tfm/MT01/bigbucket/11/image/catalog/banner/sub-banner-1.jpg",
        },
        {
          url: "https://www.mahardhi.com/opencart/tfm/MT01/bigbucket/11/image/catalog/banner/sub-banner-2.jpg",
        },
        {
          url: "https://www.mahardhi.com/opencart/tfm/MT01/bigbucket/11/image/catalog/banner/sub-banner-3.jpg",
        },
      ],
      TopProducts: [
        {
          imgUrl:
            "https://www.mahardhi.com/opencart/tfm/MT01/bigbucket/11/image/cache/catalog/product/2-250x320.jpg",
          bookName: "ferfgfge",
          price: "$241.99",
        },
        {
          imgUrl:
            "https://www.mahardhi.com/opencart/tfm/MT01/bigbucket/11/image/cache/catalog/product/7-250x320.jpg",
          bookName: "dfgfdgfhgfg",
          price: "$122.00",
        },
        {
          imgUrl:
            "https://www.mahardhi.com/opencart/tfm/MT01/bigbucket/11/image/cache/catalog/product/3-250x320.jpg",
          bookName: "fdg ghfrg ggbfd",
          price: "$122.00",
        },
        {
          imgUrl:
            "https://www.mahardhi.com/opencart/tfm/MT01/bigbucket/11/image/cache/catalog/product/5-250x320.jpg",
          bookName: "rgfres regreg reg",
          price: "$1202.00",
        },
      ],
      testimonialCardData: [
        {
          imgUrl:
            "https://www.mahardhi.com/opencart/tfm/MT01/bigbucket/11/image/cache/catalog/testimonial/1-120x120.png",
          name: "JOHN DEO",
          text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more.",
        },
        {
          imgUrl:
            "https://www.mahardhi.com/opencart/tfm/MT01/bigbucket/11/image/cache/catalog/testimonial/2-120x120.png",
          name: "MICHAEL JACK",
          text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more.",
        },
        {
          imgUrl:
            "https://www.mahardhi.com/opencart/tfm/MT01/bigbucket/11/image/cache/catalog/testimonial/3-120x120.png",
          name: "RAMBO",
          text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more.",
        },
      ],
    };
  }

  TopProduct = (imgUrl, bookName, price) => {
    return (
      <Box
        style={{
          border: "1px solid lightgray",
          margin: "0 auto",
          padding: "10px",
          backgroundColor: "white",
        }}
      >
        <Box style={{ backgroundColor: "white" }}>
          <Box>
            <img src={imgUrl} alt="" />
          </Box>
          <Box>
            <Typography>{bookName}</Typography>
            <Box
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography style={{ color: "orange" }}>{price}</Typography>
              <Rating name="no-value" value={null} />
            </Box>
          </Box>
        </Box>
      </Box>
    );
  };

  TestimonialCard = (img, text, name) => {
    return (
      <Box style={Testimonial.card}>
        <Box>
          <img
            style={{ border: "1px solid orange", borderRadius: "50%" }}
            src={img}
            alt=""
          />
        </Box>
        <Box>
          <Typography>{text}</Typography>
          <Typography variant="h5" style={{ color: "orange" }}>
            {name}
          </Typography>
        </Box>
      </Box>
    );
  };




  scrollLeft = () => {
    if (this.containerRef.current) {
      this.containerRef.current.scrollBy({
        left: -50, // Adjust scroll amount as needed
        behavior: 'smooth' // Smooth scrolling
      });
    }
  };

  scrollRight = () => {
    if (this.containerRef.current) {
      this.containerRef.current.scrollBy({
        left: 50, // Adjust scroll amount as needed
        behavior: 'smooth' // Smooth scrolling
      });
    }
  };





  render() {
    return (
      <Box>
        <Box style={Header.outer}>
          <Box sx={Header.wrapper}>
            <Box>
              <img
                src="https://www.mahardhi.com/opencart/tfm/MT01/bigbucket/11/image/catalog/logo.png"
                alt=""
              />
            </Box>
            <Box
              style={{
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "40%",
                minWidth: "190px",
              }}
            >
              <input placeholder="Search" style={Header.input} type="text" />
              <Box
                style={{
                  position: "absolute",
                  right: "0px",
                  borderRadius: "50%",
                  backgroundColor: "orange",
                  padding: "10px",
                }}
              >
                <i className="fa-solid fa-magnifying-glass"></i>
              </Box>
            </Box>
            <Box
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "36px",
              }}
            >
              <i
                style={{ fontSize: "25px", cursor: "pointer" }}
                className="fa-regular fa-user"
              ></i>
              <i
                style={{ fontSize: "25px", cursor: "pointer" }}
                className="fa-solid fa-bag-shopping"
              ></i>
            </Box>
          </Box>
        </Box>
        <Box style={NavBar.outer}>
          <Box style={NavBar.inner}>
            <Typography>HOME</Typography>
            <Typography>BOOKS</Typography>
            <Typography>MEDICAL BOOKS</Typography>
            <Typography>FOOD & COOKBOOKS</Typography>
            <Typography>MORE</Typography>
            <Typography>BLOGS</Typography>
          </Box>
        </Box>
        <Box style={Banner}>
          <img width={"100%"} src={this.state.carousel[0].url} alt="" />
        </Box>
        <Box style={Content}>
          <Box style={yellowIcons.outer}>
            <Box style={yellowIcons.wrapper}>
              <Box style={yellowIcons.inner}>
                <Box sx={yellowIcons.icon}>
                  <i className="fa-solid fa-truck-fast"></i>
                </Box>
                <Box>
                  <Typography>FREE SHIPPING ITEMS</Typography>
                  <Typography>For all orders over $50</Typography>
                </Box>
              </Box>
              <Box style={yellowIcons.inner}>
                <Box sx={yellowIcons.icon}>
                  <i className="fa-solid fa-wallet"></i>
                </Box>
                <Box>
                  <Typography>CASH ON DELIVERY</Typography>
                  <Typography>100% money back guarantee!</Typography>
                </Box>
              </Box>
              <Box style={yellowIcons.inner}>
                <Box sx={yellowIcons.icon}>
                  <i className="fa-solid fa-phone-volume"></i>
                </Box>
                <Box>
                  <Typography>HELP & SUPPORT</Typography>
                  <Typography>Call Us: +(91) 123-456-7899</Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box style={Offer}>
            {this.state.offImg.map((image) => {
              return <MyCard url={image.url} />;
            })}
          </Box>
          <Box style={TopProducts.wrapper}>
            <Box style={TopProducts.navbar}>
              <Typography>TOP PRODUCTS</Typography>
              <Box style={{ display: "flex", gap: "10px" }}>
                <a style={{ textDecoration: "none", color: "white" }} href="#">
                  LATEST
                </a>
                <a style={{ textDecoration: "none", color: "white" }} href="#">
                  SPECIAL
                </a>
                <a style={{ textDecoration: "none", color: "white" }} href="#">
                  BESTSELLER
                </a>
              </Box>
            </Box>
            <Box
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                rowGap: "20px",
              }}
            >
              {this.state.TopProducts.map((card) => {
                return this.TopProduct(card.imgUrl, card.bookName, card.price);
              })}
            </Box>
          </Box>
          <Box style={Testimonial.wrapper}>
            <Box style={Testimonial.inner}>
              <Box style={Testimonial.category}>
                <Typography>TESTIMONIAL</Typography>
                <Box style={{display:"flex",alignItems:"center",alignItems:"center",gap:"10px",background:"orange",cursor:"pointer"}}>
                  <Typography>{"<"}</Typography>
                  <Typography>{"|"}</Typography>
                  <Typography>{">"}</Typography>
                </Box>
              </Box>
              <Box className="example" style={Testimonial.CardSection}  ref={this.containerRef}  >
                <Button onClick={this.scrollLeft} style={{position:"absolute",left :"40px"}}>scroll left</Button>
                {this.state.testimonialCardData.map((card) => {
                  return this.TestimonialCard(
                    card.imgUrl,
                    card.text,
                    card.name
                  );
                })}
                <Button style={{position:"absolute",right :"40px"}} onClick={this.scrollLeft}>scroll right</Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }
}

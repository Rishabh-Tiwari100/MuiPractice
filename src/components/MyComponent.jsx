import { Box, Button, Typography } from "@mui/material";
import React, { Component } from "react";
import { styled } from "@mui/material/styles";
import Employees from "./Employees";
const WorkshopsContainer = styled(Box)({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  width: "70%",
  gap: "20px",

  "@media (max-width:640px)": {
    gridTemplateColumns: "1fr",
  },
});
const CollectionContainer = styled(Box)({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  width: "70%",
  gap: "20px",

  "@media (max-width:1200px)": {
    gridTemplateColumns: "1fr",
  },
});
const LinkBox = styled(Box)({
  cursor :"pointer",
  "&:hover" : {
    textDecoration :"underline",
  },
  "@media (max-width:640px)": {
    display: "none",
  },
});
const Hamburger = styled(Box)({
  display: "none",
  "@media (max-width:640px)": {
    display: "block",
  },
});

export default class MyComponent extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "cemter",
          alignItems: "center",
          gap: "50px",
        }}
      >
        <Box style={Mystyle.HeaderStyle}>
          <Box style={Mystyle.HeaderContainer}>
            <Box>
              <img
                src="https://tz47gb.yourbrand.studio/files/dynamicContent/sites/tz47gb/images/en/layout_2/ls0lj9t5/element_203/rwdMode_4/91x67/logo.webp"
                alt=""
              />
            </Box>

            <Box style={Mystyle.HeaderNav}>
              <Box
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "20px",
                }}
              >
                <LinkBox>SHOP</LinkBox>
                <LinkBox>WORKSHOP</LinkBox>
                <LinkBox>BLOG</LinkBox>
                <LinkBox>CONTACT</LinkBox>
                <Box >
                  <i class="fa-solid fa-cart-shopping"></i>
                </Box>

                <Hamburger>
                  <i class="fa-solid fa-bars"></i>
                </Hamburger>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box style={Mystyle.Banner}>
          <Box style={Mystyle.BannerHeading}>
            <Typography sx={{"&:hover": {
              backgroundColor:"red",
            } }} style={{ textAlign: "center" }} variant="h3">
              Ceramics
            </Typography>
            <Typography style={{ textAlign: "center" }} variant="h3">
              studio
            </Typography>
          </Box>
          <Box style={Mystyle.BannerContent}>
            <Typography variant="subtle1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              orci massa, dapibus quis molestie sit amet, pharetra vitae dolor.
              Praesent auctor, dui id maximus sagittis, lectus enim pharetra
              quam, ut laoreet tortor metus ut ipsum.
            </Typography>
          </Box>
          <Box style={{ paddingBottom: "20px" }}>
            <Button style={Mystyle.BannerButton}>Show More</Button>
          </Box>
        </Box>
        <Box style={Mystyle.BestSellery}>
          <Typography style={{ textAlign: "center" }} variant="h3">
            Bestsellery
          </Typography>
          <Box style={Mystyle.SelleryProduct}>
            <Box>
              <img
                width={"100%"}
                height={"300px"}
                src="https://plus.unsplash.com/premium_photo-1689247946001-34d1588297f4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGxhdGVzfGVufDB8fDB8fHww"
                alt=""
              />
              <Box>
                <Typography variant="body2">Moon plate</Typography>
                <Typography variant="h5">75$</Typography>
              </Box>
            </Box>
            <Box>
              <img
                width={"100%"}
                height={"300px"}
                src="https://images.unsplash.com/photo-1511517099458-7346484896f7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBvdHxlbnwwfHwwfHx8MA%3D%3D"
                alt=""
              />
              <Box>
                <Typography variant="body2">Silver set</Typography>
                <Typography variant="h5">125 zl</Typography>
              </Box>
            </Box>
            <Box>
              <img
                width={"100%"}
                height={"300px"}
                src="https://images.unsplash.com/photo-1600048224980-f3507a617198?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8anVnfGVufDB8fDB8fHww"
                alt=""
              />
              <Box>
                <Typography variant="body2">Nordic container</Typography>
                <Typography variant="h5">90$</Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box style={Mystyle.NewCollection}>
          <CollectionContainer>
            <Box style={Mystyle.CollectionContent}>
              <Typography variant="h3">New collection</Typography>
              <Typography style={{ maxWidth: "70%" }} variant="subtle1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                elementum sapien ac sapien vestibulum posuere. Praesent congue
                dui nec lectus tincidunt elementum. Donec viverra a neque vel
                egestas. Ut quis urna orci. Nullam sollicitudin est et quam
                rhoncus, nec imperdiet sem efficitur. Etiam aliquam posuere
                hendrerit. Curabitur egestas sed nisl rhoncus finibus.
              </Typography>
              <Button
                size="large"
                style={{
                  backgroundColor: "darkred",
                  color: "white",
                  width: "150px",
                }}
              >
                More
              </Button>
            </Box>
            <Box style={Mystyle.CollectionImages}>
              <Box styl={Mystyle.CollectionImagesLeft}>
                <Box style={{ height: "200px" }}>
                  <img
                    width={"100%"}
                    height={"100%"}
                    src="https://images.unsplash.com/photo-1589119791950-b701f3ef509a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y3Vwc3xlbnwwfHwwfHx8MA%3D%3D"
                    alt=""
                  />
                </Box>
                <Box>
                  <img
                    width={"100%"}
                    height={"200px"}
                    src="https://images.unsplash.com/photo-1589119791950-b701f3ef509a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y3Vwc3xlbnwwfHwwfHx8MA%3D%3D"
                    alt=""
                  />
                </Box>
              </Box>
              <Box style={Mystyle.CollectionImagesRight}>
                <img
                  width={"100%"}
                  height={"400px"}
                  src="https://images.unsplash.com/photo-1523976714396-3ee195e3b3a1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
              </Box>
            </Box>
          </CollectionContainer>
        </Box>
        <Box style={Mystyle.Workshops}>
          <WorkshopsContainer>
            <Box style={{ width: "100%", height: "400px" }}>
              <img
                width={"100%"}
                height={"100%"}
                src="https://tz47gb.yourbrand.studio/files/dynamicContent/sites/tz47gb/images/en/webpage_11/ls0ljcz6/element_220/rwdMode_1/600x565/Workshop_4.webp"
                alt=""
              />
            </Box>
            <Box style={Mystyle.WorkshopsContent}>
              <Typography variant="h3">Workshops</Typography>
              <Box>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                elementum sapien ac sapien vestibulum posuere. Praesent congue
                dui nec lectus tincidunt elementum. Donec viverra a neque vel
                egestas. Ut quis urna orci. Nullam sollicitudin est et quam
                rhoncus, nec imperdiet sem efficitur. Etiam aliquam posuere
                hendrerit. Curabitur egestas sed nisl rhoncus finibus.
              </Box>
              <Button style={Mystyle.BannerButton}>Subscribe</Button>
            </Box>
          </WorkshopsContainer>
        </Box>
            <Employees/>
      </div>
    );
  }
}

const Mystyle = {
  HeaderStyle: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  HeaderContainer: {
    width: "70%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  HeaderNav: {
    display: "flex",
    alignItems: "center",
    padding: "10px",
    gap: "10px",
  },

  
  Banner: {
    backgroundImage:
      'url("https://images.unsplash.com/32/Mc8kW4x9Q3aRR3RkP5Im_IMG_4417.jpg?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "40px",
  },
  BannerHeading: {
    color: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "cemter",
  },

  BannerContent: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    maxWidth: "50%",
  },

  BannerButton: {
    backgroundColor: "darkred",
    color: "white",
    width: "150px",
  },

  BestSellery: {
    display: "flex",
    flexDirection: "column",
    gap: "30px",
    justifyContent: "center",
    alignItems: "center",
  },

  SelleryProduct: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gap: "30px",
  },
  NewCollection: {
    padding: "50px",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "gray",
  },

  CollectionContent: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    justifyContent: "center",
    alignItems: "center",
  },

  CollectionImages: {
    display: "grid",
    gridTemplateColumns: "1fr 2fr",
    gap: "10px",
  },
  CollectionImagesLeft: {
    width: "100%",
  },

  CollectionImagesRight: {
    width: "100%",
  },

  Workshops: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  WorkshopsContent: {
    display: "flex",
    justifyContent: "cemter",
    flexDirection: "column",
    alignItems: "center",
    gap: "30px",
  },
};

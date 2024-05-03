import { Box, Button, Input, Typography } from "@mui/material";
import React, { Component } from "react";

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollTop: 0,
      firstCard: [
        {
          icon: "fa-solid fa-cloud-arrow-up",
          caption: "FREE STORAGE",
        },
        {
          icon: "fa-regular fa-user",
          caption: "USER MORE",
        },
        {
          icon: "fa-solid fa-clock-rotate-left",
          caption: "REPLY READY",
        },
        {
          icon: "fa-solid fa-table",
          caption: "EASY LAYOUT",
        },
      ],
      trendingCard : [
        {
          img :"https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/trending-01.jpg",
          price : "$20",
          type : "action",
          name : "Assasin Creed",

        },
        {
          img :"https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/trending-02.jpg",
          price : "$44",
          type : "action",
          name : "Assasin Creed",

        },
        {
          img :"https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/trending-03.jpg",
          price : "$44",
          type : "action",
          name : "Assasin Creed",

        },
        {
          img :"https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/trending-04.jpg",
          price : "$32",
          type : "action",
          name : "Assasin Creed",

        },
      ]
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    // Update state with the current scroll position
    this.setState({ scrollTop: window.scrollY });
  };

  render() {
    const { scrollTop } = this.state;
    return (
      <Box>
        {/* header start */}
        <Box
          sx={{
            position: "fixed",
            top: "0",
            zIndex: "100",
            visibility: scrollTop > 100 && scrollTop < 300 ? "hidden" : "",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            backgroundColor: scrollTop > 100 ? "#0071f8" : "transparent",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              margin: "0px 20px",
              width: "90%",
              minHeight: "80px",
              alignItems: "center",
              "@media (max-width:800px)": {
                width: "100%",
              },
            }}
          >
            <Box sx={logo} color="white">
              <Typography variant="h4">LUGX</Typography>
            </Box>
            <Box sx={HeaderNav}>
              <Button sx={Homebutton}>Home</Button>
              <Box sx={Navlink}>Our Shop</Box>
              <Box sx={Navlink}>Product Details</Box>
              <Box sx={Navlink}>Contact Us</Box>
              <Button sx={Signinbutton}>SIGN IN</Button>
              <Box
                sx={{
                  display: "none",
                  "@media (max-width : 800px)": { display: "block" },
                }}
              >
                <i className="fa-solid fa-bars"></i>
              </Box>
            </Box>
          </Box>
        </Box>
        {/* header end */}

        {/* Banner start */}
        <Box style={banner}>
          <Box sx={BannerContent}>
            <Box
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  color: "white",
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                  "@media (max-width:1200px)": {
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                  },
                }}
              >
                <Typography variant="h5">WELCOME TO LUGX</Typography>
                <Typography variant="h3">BEST GAMIMG SITE EVER!</Typography>
                <Typography variant="body1">
                  LUGX Gaming is free Bootstrap 5 HTML CSS website template for
                  your gaming websites. You can download and use this layout for
                  commercial purposes. Please tell your friends about
                  TemplateMo.
                </Typography>
                <Box style={SearchBox}>
                  <Input
                    style={{
                      padding: "0 20px",
                      maxWidth: "400px",
                      width: "40%",
                    }}
                    disableUnderline
                    placeholder="Type Something"
                  />
                  <Button
                    sx={{ borderRadius: "25px", height: "100%" }}
                    style={SearchButton}
                  >
                    SEARCH NOW
                  </Button>
                </Box>
              </Box>
            </Box>
            <Box>
              <Box style={{ display: "flex", justifyContent: "end" }}>
                <Box style={{ position: "relative", }}>
                  

                  <img style={{borderRadius:'30px'}}
                    src="https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/banner-image.jpg"
                    alt=""
                  />
                
                  <Box
                    style={{
                      position: "absolute",
                      top: "10px",
                      right: "30px",
                      backgroundColor: "rgb(0, 138, 248)",
                      color: "white",
                      borderRadius: "20px",
                      width: "80px",
                      height: "40px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography fontSize={"22px"}>$22</Typography>
                  </Box>
                  <Box
                    style={{
                      width: "100px",
                      height: "100px",
                      borderRadius: "50%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "rgb(238, 98, 107)",
                      color: "white",
                      position: "absolute",
                      bottom: "-25px",
                      left: "-25px",
                    }}
                  >
                    <Typography>-40%</Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        {/* Banner end   */}

        <Box sx={{ position: "relative", bottom: "100px" }}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr 1fr",
              gap: "20px",
              margin: "0 auto",
              width :"80%",
              "@media(max-width:1000px)": { gridTemplateColumns: "1fr 1fr" },
            }}
          >
            {this.state.firstCard.map((card, index) => {
              return (
                <Box
                  sx={{
                    display: "flex",
                    minHeight: "200px",
                    flexDirection: "column",
                    justifyContent: "center",
                    gap: "10px",
                    alignItems: "center",
                    background: "#fff",
                    borderRadius: "20px",
                    boxShadow: ".5px .5px gray",
                  }}
                >
                  {" "}
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "white",
                      width: "100px",
                      height: "100px",
                      borderRadius: "50%",
                      background: "#0071f8",
                      "&:hover" : {background:"#ee626b"}
                    }}
                  >
                    <i class={card.icon}></i>
                  </Box>
                  <Typography variant="subtle2">{card.caption}</Typography>
                </Box>
              );
            })}
          </Box>
        </Box>
                {/* Trending Section start */}
        <Box sx={Trending}>
          <Box sx={TrendingInner}>
            <Box>
              <Typography variant="subtle2" color="#ee626b">TRENDING</Typography>
            </Box>
            <Box sx={{display:"flex",justifyContent:'space-between',alignItems:'center'}}>
              <Typography variant="h4">Trending Games</Typography>
              <Button variant="contained" sx={{background:'#ee626b',borderRadius:'25px'}}>VIEW ALL</Button>
            </Box>
            <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',gap:"20px","@media (max-width:1200px)" : {flexWrap:"wrap"}}}>
              {this.state.trendingCard.map(card => {
                return (
                  <Box sx={{display:"flex",flexDirection:'column',justifyContent:"center",alignItems:'center',borderRadius:"25px",boxShadow:".5px,.5px gray",overflow:"hidden",border:".5px solid gray",background:"#eeeeee"}}>
                    <Box sx={{position:'relative',width:"100%",borderRadius:"0px 30px 30px 0"}}>
                    <img  src={card.img} alt="" />
                    <Box sx={{position:'absolute',top:"10px",right:"10px",background:"#0071f8",color:'white',padding:"5px",borderRadius:'10px'}}>{card.price}</Box>
                    </Box>
                    <Box sx={{display:"flex",justifyContent:"space-between",alignItems:'center',width:"100%",padding:"25px",width:"80%"}} >
                      <Box>
                      
                    <Typography>{card.type}</Typography>
                    <Typography>{card.name}</Typography>
                      </Box>
                      <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",width:"50px",height:"50px",borderRadius:"50%",background:'#ee626b',color:"#fff"}}>
                      <i   class="fa-solid fa-bag-shopping"></i>
                      </Box>
                     
                    </Box>
                  </Box>
                )
              })}
            </Box>
          </Box>
        </Box>
        {/* Trending Section End */}
      </Box>
    );
  }
}

const HeaderNav = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "20px",
  color: "white",
  "@media (max-width: 800px)": {
    justifyContent: "end",
  },
};

const Homebutton = {
  backgroundColor: "rgba(255, 255, 255, 0.10)",
  color: "#fff",
  width: "105px",
  height: "40px",
  borderRadius: "20px",
  "@media (max-width: 800px)": {
    display: "none",
  },
};
const Signinbutton = {
  backgroundColor: "#ee626b",
  borderRadius: "20px",
  color: "white",
  width: "105px",
  height: "40px",
  "@media (max-width: 800px)": {
    display: "none",
  },
};

const banner = {
  width: "100%",

  backgroundImage:
    'url("	https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/banner-bg.jpg")',

  borderRadius: "0px 0px 250px 250px",
  backgroundPosition: "center bottom",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  padding: "225px 0px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const logo = {
  display: "flex",
  justifyContent: "start",
  alignItems: "center",
  width: "50%",
};

const BannerContent = {
  // display:"flex",
  // justifyContent:"center",
  // alignItems:'center'
  display: "grid",
  maxWidth: "70%",
  gap: "40px",
  gridTemplateColumns: "1fr 1fr",
  "@media (max-width: 1200px)": {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
};

const SearchBox = {
  display: "flex",
  justifyContent: "space-between",
  width: "400px",
  backgroundColor: "white",
  borderRadius: "25px",

  alignItems: "center",
  height: "50px",
};

const SearchButton = {
  color: "white",
  backgroundColor: "rgb(238, 98, 107)",
  border: "25px",
};

const Navlink = {
  "@media (max-width: 800px)": {
    display: "none",
  },
};


const Trending = {
  display :"flex",
  justifyContent :'center',
  alignItems :'center',

}

const TrendingInner  = {
  width :"80%",
  display:"flex",
  flexDirection:"column",
  gap :"30px"

}


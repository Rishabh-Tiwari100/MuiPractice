import { Box, Button, Typography } from "@mui/material";
import React, { Component } from "react";
import slider from "./Assets/slider.png";
import linkBuilding from "./Assets/linkBuilding.png";
import s2 from "file:///Users/sawansaini/Downloads/digian-html/images/s2.png";
import s3 from "file:///Users/sawansaini/Downloads/digian-html/images/s3.png";
import s4 from "file:///Users/sawansaini/Downloads/digian-html/images/s4.png";
import aboutImg  from "file:///Users/sawansaini/Downloads/digian-html/images/about-img.png"
import case1 from "file:///Users/sawansaini/Downloads/digian-html/images/case-1.jpg"
import case2 from "file:///Users/sawansaini/Downloads/digian-html/images/case-2.jpg"
import client from "file:///Users/sawansaini/Downloads/digian-html/images/client.jpg"

const style = {
  heroWrapper: {
    backgroundColor: "#7335b7",
    padding: "15px 0",
    borderRadius: "0 0 300px 0",
  },
  header: {
    color: "#fff",
    display: "flex",
    justifyContent: "space-between",
    padding: "10px 25px",
    "@media(max-width : 992px)": {
      flexDirection: "column",
    },
  },
  logoWrapper: {
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerInner: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  headerLinkBox: {
    margin: "0 auto",
    "@media (max-width:992px)": {
      display: "none",
    },
  },
  headerLink: {
    fontSize: "1rem",
    color: "white",
    "&:hover": {
      color: "black",
      backgroundColor: "white",
    },
  },
  activeLink: {
    fontSize: "1rem",
    color: "black",
    backgroundColor: "white",
  },
  quoteBtn: {
    postion: "relative",
    color: "white",
    background: "#f8842a",
    transition: "bottom 4s ease-in-out",
    "@media (max-width:992px)": {
      display: "none",
    },
    "&:hover": {
      bottom: "3px",
      color: "white",
      background: "#f8842a",
    },
  },
  hamburger: {
    "@media (min-width:992px)": {
      display: "none",
    },
  },
  banner: {
    margin: "50px 0",
  },
  bannerWrapper: {
    display: "flex",
    justifyContent: "center",
  },

  bannerContent: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    maxWidth: "60%",
    "@media(max-width:992px)": {
      gridTemplateColumns: "1fr",
      placeItems: "center",
    },
  },
  bannerImage: {
    width: "100%",
  },
  bannerText: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  bannerTextWrapper: {
    textAlign: "center",
    color: "#ffffff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
  },
  bannerHeading: {
    fontWeight: "bold",
    marginBottom: "20px",
  },
  bannerParagraph: {
    marginBottom: "40px",
  },
  bannerBtn: {
    textTransform: "none",
    color: "#fff",
    backgroundColor: "#00000040",
    fontSize: "20px",
    padding: "10px 30px",
    "&:hover" : {
      position :"relative",
      backgroundColor: "#00000040",
      color: "#fff",
      bottom :"5px",
      transition :"bottom 2s"
    },
  },
  carouselDot: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    padding: "20px",
  },

  servicesWrapper: {
    margin :'0 auto',
    alignItems: "center",
    padding: "14px",
    maxWidth: "1170px",
    textAlign :"center",
    "@media (max-width : 992px)" : {
        maxWidth :"960px",
    },
    "@media (max-width : 768px)" : {
        maxWidth :"720px",
    },
    "@media (max-width : 576px)" : {
        maxWidth :"540px",
    },
  },
  servicesHeadingContainer : {
    marginBottom :"1rem",
    display :"flex",
    flexDirection:"column",
    gap :"20px",

  },
  ServicesCardSection: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr",
    gap: "20px",
    '@media(max-width: 992px)' : {
        gridTemplateColumns :"1fr 1fr",
        gap: "20px",
    },
    '@media(max-width: 767px)' : {
        gridTemplateColumns :"1fr",
        gap: "20px",
    },
  },
  serviceCard: {
    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
    padding :'15px',
    borderRadius :'10px',
    "&:hover" : {
        color :"#fff",
        background :"#7335b7",
        transition :" background 2s"
    }

  },
  serviceCardTitle : {
    fontWeight : "bold",
  },
  serviceCardContent : {
    marginTop :"15px"
  },
  servicesReadMore : {
    textTransform :"none",
    color :'black',

  },
  moreServicesBtn : {
    color :'white',
    textTransform :"none",
    background : "#7335b7",
    marginTop :"45px",
    padding :'10px 45px',
    border : "1px solid #7335b7",
    borderRadius : "5px",
    "&:hover" : {
      background : "#7335b7",
      postion :'relative',
      bottom :'5px',
      transition : "bottom 2s"
    },
  } ,
  aboutWrapper : {
    padding :"90px 0",
    background : "#7335b7",
    color :"#fff",
    borderTopLeftRadius :"200px",
    borderBottomRightRadius :"200px",
    
  },
  aboutInner : {
    maxWidth :"1170px",
    margin :"0 auto",
    padding : "0 15px",
    "@media (max-width : 992px)" : {
      maxWidth :"960px",
  },
  "@media (max-width : 768px)" : {
      maxWidth :"720px",
  },
  "@media (max-width : 576px)" : {
      maxWidth :"540px",
  },
  },
 
  aboutContent : {
    display :"grid",
    gridTemplateColumns : "1fr 1fr",
    placeItems :"center",
    padding:"0 15px",
    "@media (max-width : 768px)" : {
      gridTemplateColumns :'1fr',
  },
  },
  aboutText : {
    maxwidth :"50%",
    display :'flex',
    flexDirection :"column",
    gap :"20px",
  },
  aboutImage : {
    maxWidth :"50%",

  },
 aboutMoreBtn :  {
  background : "#f8842a",
  color :"white",
  "&:hover" : {
  background : "#f8842a",
  position :"relative",
  bottom :"5px",
  transition : "bottom 2s"

  }
 },
 caseWrapper : {
  margin :"90px  0",
 },
 caseInner : {
  textAlign :"center",
  padding :"0 15px",
  margin :"0 auto",
  maxWidth :"1170px",
  "@media (max-width : 992px)" : {
    maxWidth :"960px",
},
"@media (max-width : 768px)" : {
    maxWidth :"720px",
},
"@media (max-width : 576px)" : {
    maxWidth :"540px",
},
 },
 caseCardSection : {
  display :'grid',
  gridTemplateColumns :"1fr 1fr",
  placeItems :"center",
  gap : "20px",
  "@media (max-width : 768px)" : {
    gridTemplateColumns :"1fr"
},
 },
  caseCard : {
  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
 
  },
  testimonailWrapper : {
      margin :'90px 0'
  },
  testimonailInner : {
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    textAlign :"center",
    padding :"0 15px",
    margin :"0 auto",
    maxWidth :"1170px",
    "@media (max-width : 992px)" : {
      maxWidth :"960px",
  },
  "@media (max-width : 768px)" : {
      maxWidth :"720px",
  },
  "@media (max-width : 576px)" : {
      maxWidth :"540px",
  },

  },
  testimonailCard : {
    position :"relative",
    display :'flex',
    alignItems:"center",
    flexDirection:'column',
    background :"#7335b7",
    color :"#fff",
    borderRadius :"15px",
    padding :"20px"
  },
  testimonailImage : {
    position :"absolute",
    top :  "-65px",
    width :"125px",
    height :"125px",
    borderRadius :'50%',
    overflow :"hidden",
  },
  testmonialText : {
    margin :'15px 0'
  }

};

export default class Digian extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carouselPage: 1,
      navbar: false,
      Services: [
        {
          imgUrl: linkBuilding,
          title: "Link Building",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
        },
        {
          imgUrl: s2,
          title: "On page SEO",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
        },
        {
          imgUrl: s3,
          title: "Online Marketing",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
        },
        {
          imgUrl: s4,
          title: "Email Marketing",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
        },
      ],
      caseStudies : [
        {
          imgUrl : case1,
          title : "Sit amet consectetur adipisicing elit",
          text : "Alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
        },
        {
          imgUrl : case2,
          title : "Excepturi placeat nihil eos maxime",
          text : "Alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",

        },
      ]
    };
  }

  handleNavbar = () => {
    this.setState({ navbar: !this.state.navbar });
    console.log(this.state.navbar);
  };

  render() {
    return (
      <Box>
        <Box style={style.heroWrapper}>
          <Box sx={style.header}>
            <Box style={style.logoWrapper}>
              <Typography variant="h5">Digian</Typography>
              <Typography onClick={this.handleNavbar} sx={style.hamburger}>
                <i className="fa-solid fa-bars"></i>
              </Typography>
            </Box>
            <Box style={style.headerInner}>
              <Box
                sx={{
                  margin: "0 auto",
                  "@media (max-width:992px)": {
                    display: this.state.navbar ? "flex" : "none",
                    flexDirection: "column",
                  },
                }}
              >
                <Button sx={style.activeLink}>home</Button>
                <Button sx={style.headerLink}>About</Button>
                <Button sx={style.headerLink}>Services</Button>
                <Button sx={style.headerLink}>Contact Us</Button>
              </Box>

              <Button sx={style.quoteBtn}>Get a quote</Button>
            </Box>
          </Box>
          <Box style={style.banner}>
            <Box style={style.bannerWrapper}>
              <Box sx={style.bannerContent}>
                <Box style={style.bannerImage}>
                  <img width={"100%"} src={slider} alt="" />
                </Box>
                <Box style={style.bannerText}>
                  <Box style={style.bannerTextWrapper}>
                    <Typography style={style.bannerHeading} variant="h4">
                      Digital Marketing Experts
                    </Typography>
                    <Typography variant="span" style={style.bannerParagraph}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Aliquam nam itaque iusto at sit impedit quo exercitationem
                      cupiditate.
                    </Typography>
                    <Button sx={style.bannerBtn}>Contact Us</Button>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box style={style.carouselDot}>
              <Typography
                onClick={() => this.setState({ carouselPage: 1 })}
                style={{
                  width: "5px",
                  height: "5px",
                  backgroundColor:
                    this.state.carouselPage == 1 ? "orange" : "white",
                  padding: "10px",
                  borderRadius: "50%",
                }}
              ></Typography>
              <Typography
                onClick={() => this.setState({ carouselPage: 2 })}
                style={{
                  width: "5px",
                  height: "5px",
                  backgroundColor:
                    this.state.carouselPage == 2 ? "orange" : "white",
                  padding: "10px",
                  borderRadius: "50%",
                }}
              ></Typography>
              <Typography
                onClick={() => this.setState({ carouselPage: 3 })}
                style={{
                  width: "5px",
                  height: "5px",
                  backgroundColor:
                    this.state.carouselPage == 3 ? "orange" : "white",
                  padding: "10px",
                  borderRadius: "50%",
                }}
              ></Typography>
            </Box>
          </Box>
        </Box>
        <Box style={{padding:"90px 0"}}>
        <Box sx={style.servicesWrapper}>
            <Box style={style.servicesHeadingContainer}>
          <Typography style={{fontWeight:"bold",}} variant="h4">Our Services</Typography>
          <Typography variant="body1">
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
            </Box>
          <Box sx={style.ServicesCardSection}>
            {this.state.Services.map((card) => {
              return (
                <Box sx={style.serviceCard}>
                  <img width="75px" src={card.imgUrl} alt="" />
                  <Box style={style.serviceCardContent}>
                  <Typography style={style.serviceCardTitle} variant="h6">{card.title}</Typography>
                  <Typography>{card.content}</Typography>
                  <Button sx={style.servicesReadMore}> Read More<i style={{marginLeft :"5px"}} className="fa-solid fa-long-arrow-right"></i></Button>
                  </Box>
                </Box>
              );
            })}
          </Box>
          <Button sx={style.moreServicesBtn}>View More</Button>
        </Box>
        </Box>
        <Box style={style.aboutWrapper}>
          <Box style={style.aboutInner}>
          <Box sx={style.aboutContent}>
            <Box style={style.aboutText}>
              <Typography variant="h4" style={{fontWeight:"bold"}}>About US</Typography>
              <Typography variant="body1">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All</Typography>
              <Box>
                <Button sx={style.aboutMoreBtn}>Read More</Button>
              </Box>
            </Box>
            <Box style={style.aboutImage}>
              <img style={{width:"100%",}} src={aboutImg} alt=""/>
            </Box>
          </Box>
          </Box>
        </Box>
        <Box style={style.caseWrapper}>
          <Box style={style.caseInner}>
            <Typography variant="h4" style={{fontWeight:"bold"}}>Our case Studies</Typography>
            <Box sx={style.caseCardSection}>
              {
                this.state.caseStudies.map(card => {
                  return (
                    <Box style={style.caseCard}>
                        <Box>
                          <img width="100%" src={card.imgUrl} alt="" />
                        </Box>
                        <Box style={{ padding :'0 15px',}}>
                          <Typography style={{fontWeight:"bold",}} variant="h5" >{card.title}</Typography>
                          <Typography variant="body1">{card.text}</Typography>
                          <Button sx={{color:"#8958c3",}}>Read More<i style={{marginLeft :"5px"}} className="fa-solid fa-long-arrow-right"></i></Button>
                        </Box>
                    </Box>
                  )
                }) 
              }
            </Box>
          </Box>
        </Box>
        <Box style={style.testimonailWrapper}>
                <Box style={style.testimonailInner}>
                  <Box style={style.testimonailCard}>
                    <Box style={style.testimonailImage}><img style={{width:'100%',height:"100%"}} src={client} alt="" /></Box>
                    <Typography style={{marginTop:"40px"}} variant="h6">MOROJINK</Typography>
                    <Typography><i class="fa-solid fa-quote-right"></i></Typography>
                    <Typography variant="body1" style={style.testmonialText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugia</Typography>
                  </Box>
                </Box>
        </Box>
      </Box>
    );
  }
}
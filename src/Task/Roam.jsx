import { Box, Typography, Link, Button, Input } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import React, { Component } from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Checkbox from "@mui/material/Checkbox";
import footerLogo from '../components/Assets/footerLogo.png'
import logo from '../components/Assets/logo.png'

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}
const header = {
  wrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    borderBottom :"1px solid #80808033"
  },
  logo: {
    display: "flex",
    alignItems: "center",
  },

  navbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "20px",
    cursor :"pointer",
    "@media (max-width:1100px)": {
      display: "none",
    },
  },

  navLinks: {
    textDecoration: "none",
    color: "black",
  },

  askBtn: {
    color: "black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "5px",
    textTransform: "none",
    borderRadius: "25px",
    backgroundColor: "#003bff7d",
  },
  DownloadBtn: {
    color: "black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "5px",
    textTransform: "none",
    border: "1px solid #80808030",
    borderRadius: "25px",
  },

  extra: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "20px",
    cursor:"pointer",
    "@media (max-width:1100px)": {
      display: "none",
    },
  },

  hamburger: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "@media (min-width:1100px)": {
      display: "none",
    },
  },
};

const content = {
  wrapper: {
    display: "flex",
    padding: "0 50px",
    "@media (max-width : 1200px)": {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  left: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },

  addPhotos: {
    display: "flex",
    flexDirection: "column",
    gap: "30px",
  },
  cardSection: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gap: "20px",
    "@media (max-width:1650px)": {
      gridTemplateColumns: "1fr 1fr",
    },
    "@media (max-width:1000px)": {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  guide: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    border: "1px solid #80808030",
    padding: "20px",
    borderRadius: "15px",
  },
  damage: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  damageContent: {
    border: "1px solid #80808030",
    display: "flex",
    flexDirection: "column",
    padding: "20px",
    borderRadius: "15px",
  },
  checkBoxContainer: {
    display: "flex",
    alignItems: "center",
  },

  right: {
    display: "flex",

    flexDirection: "column",
    gap: "30px",
    padding: "20px",
  },

  rightWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },

  confirmation: {
    display: "flex",
    gap: "20px",
    alignItems: "center",
    backgroundColor: "#8080804d",
    padding: "10px 20px",
    borderRadius: "20px",
  },
  cancelBtn: {
    color: "black",
    backgroundColor: "white",
    borderRadius: "20px",
    textTransform: "none",
  },
  checkoutBtn: {
    backgroundColor: "#008fff",
    color: "white",
    borderRadius: "20px",
    textTransform: "none",
    margin: "10px 0",
    minWidth :"170px"
  },

  rightInner: {
    backgroundColor: "#8080804d",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "40px",
    borderRadius: "20px",
  },
  summary: {
    backgroundColor: "white",
    borderRadius: "20px",
    padding: "20px",
  },

  ReservationDetails: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  reservationInput: {
    style: {
      backgroundColor: "#8080804d",
      borderRadius: "20px",
      padding: "12px 15px",
    },
  },
  pricingContainer: {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "20px",
  },
  priceList: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
};

const footer = {
  wrapper: {
    backgroundColor: "#000",
    color: "#808082",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginTop : "30px"
  },
  content: {
    display: "flex",
    justifyContent: "space-around",
    padding: "30px",
    flexWrap: "wrap",
    textAlign: "center",
    "@media (max-width :1200px)": {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: "20px",
    },
  },
  socialMedia: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px",
  },
  icons: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
  },
  links: {
    color: "#808082",
  },
  headings: {
    color: "white",
  },
};

export default class Roam extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardArr: [
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
        {
          selectedFile: null,
          imageUrl: "",
        },
      ],
      visibleDamage : '',
    };
    this.fileInputRefs = this.state.cardArr.map(() => React.createRef());
  }

  CustomSeparator() {
    const breadcrumbs = [
      <Link
        underline="hover"
        key="1"
        color="inherit"
        href="/"
        onClick={handleClick}
      >
        Reservations
      </Link>,
      <Link
        underline="hover"
        key="2"
        color="inherit"
        href="/material-ui/getting-started/installation/"
        onClick={handleClick}
      >
        Lamborghini Urus 2020
      </Link>,
      <Typography  key="3" color="text.primary">
        Checkout
      </Typography>,
    ];

    return (
      <Breadcrumbs style={{padding:"5px 0"}}
        separator={<i class="fa-solid fa-greater-than"></i>}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
    );
  }
  
  onChange = (index) => (event) => {
    const file = event.target.files[0];
    const objectUrl = URL.createObjectURL(file);
    let obj = {
      selectedFile: file,
      imageUrl: objectUrl,
    };
    let temp = [...this.state.cardArr];
    temp[index] = obj;
    this.setState({
      cardArr: temp,
    });
  };

  handleClick = (index) => {
    this.fileInputRefs[index].current.click();
  };

  render() {
    const { selectedFile, imageUrl } = this.state;

    return (
      <Box>
        <Box>
          <Box style={header.wrapper}>
            <Box style={header.logo}>
              <Box>
                <img 
                  
               src={logo}
                
                  alt=""
                />
              </Box>
            
            </Box>
            <Box sx={header.navbar}>
              <Link style={header.navLinks}>Home</Link>
              <Link style={header.navLinks}>About Us</Link>
              <Link style={header.navLinks}>Became a Host</Link>
              <Link style={header.navLinks}>Help Center</Link>
            </Box>
            <Box sx={header.extra}>
              <Button style={header.askBtn}>
                <Typography>
                  <i class="fa-solid fa-bars"></i>
                </Typography>{" "}
                <Typography>Ask Ava.</Typography>
              </Button>
              <Button style={header.DownloadBtn}>
                <Typography>
                  {" "}
                  <i class="fa-brands fa-apple"></i>
                </Typography>{" "}
                <Typography>Download for IOS</Typography>
              </Button>
              <Box>
                <i class="fa-solid fa-bell"></i>
              </Box>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </Box>

            <Box sx={header.hamburger}>
              <i class="fa-solid fa-bars"></i>
            </Box>
          </Box>
          
          <Box sx={content.wrapper}>
            <Box style={content.left}>
              {this.CustomSeparator()}
              <Box style={content.addPhotos}>
                <Typography variant="h5">Add Photos</Typography>
                <Typography>
                  Please take up to 9 photos to document the car's condition.
                  Include interior and exterior. The Hosts photos will show up
                  here also.
                </Typography>

                <Box sx={content.cardSection}>
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
                  onClick={() => this.handleClick(index)}
                >
                  <Typography style={{ color: "#008fff" }}>
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
              </Box>
              <Box style={content.guide}>
                <Typography>Tips & Guide</Typography>
                <Typography style={{cursor:"pointer"}}>{"+"}</Typography>
              </Box>
              <Box style={content.damage}>
                <Typography variant="h5">Visible Damage</Typography>
                <Box style={content.damageContent}>
                  <Typography>Is there any significant damage</Typography>
                  <Box style={content.checkBoxContainer}>
                    <Box
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "5px",
                      }}
                    >
                      <Checkbox   onClick={() => {
                        this.state.visibleDamage == '' || this.state.visibleDamage === 'false'?   this.setState({
                          visibleDamage : "true"
                        }) : this.setState({
                          visibleDamage : '',
                        })
                      }}
                      checked={this.state.visibleDamage == 'true' && true}   />
                      <Typography>Yes</Typography>
                    </Box>
                    <Box
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "5px",
                      }}
                    >
                     <Checkbox   onClick={() => {
                        this.state.visibleDamage == '' || this.state.visibleDamage === 'true'?   this.setState({
                          visibleDamage : "false"
                        }) : this.setState({
                          visibleDamage : '',
                        })
                      }}
                      checked={this.state.visibleDamage == 'false' && true} />
                      <Typography>No</Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box style={content.right}>
              <Box style={content.confirmation}>
                <Button variant="outlined" fullWidth style={content.cancelBtn}>
                  Cancel
                </Button>
                <Button
                  variant="contained"
                  fullWidth
                  style={content.checkoutBtn}
                >
                  Confirm Checkout {">"}
                </Button>
              </Box>

              <Box style={content.rightInner}>
                <Box style={content.summary}>
                  <Typography variant="h6">Reservation Summary</Typography>
                  <hr />
                  <Box style={content.ReservationDetails}>
                    <Typography>Pick-up Location</Typography>
                    <Input
                      inputProps={content.reservationInput}
                      placeholder="New York, NY"
                      fullWidth
                      disableUnderline
                    />

                    <Typography>Pick-up</Typography>

                    <input
                      style={{
                        padding: "15px 15px",
                        background: "#8080804d",
                        borderRadius: "20px",
                        border: "none",
                      }}
                      type="datetime-local"
                      id="meeting-time"
                      name="meeting-time"
                      value="2023-10-12T10:30"
                      min="2018-06-07T00:00"
                      max="2018-06-14T00:00"
                    />

                    <Typography>Drop-off Location</Typography>
                    <Input
                      placeholder="New York, NY"
                      fullWidth
                      disableUnderline
                      inputProps={content.reservationInput}
                    />

                    <Typography>Drop-off</Typography>
                    <input
                      style={{
                        padding: "15px 15px",
                        background: "#8080804d",
                        borderRadius: "20px",
                        border: "none",
                      }}
                      type="datetime-local"
                      id="meeting-time"
                      name="meeting-time"
                      value="2023-10-12T10:30"
                      min="2018-06-07T00:00"
                      max="2018-06-14T00:00"
                    />
                  </Box>
                </Box>
                <Box style={content.pricingContainer}>
                  <Typography variant="h6">Pricing Breakdown</Typography>
                  <hr />
                  <Box style={content.priceList}>
                    <Box
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <Box style={{ display: "flex", flexDirection: "column" }}>
                        <Typography>Rental price</Typography>
                        <Box>
                          {" "}
                          <Typography variant="span">$620/day </Typography>
                          <Typography variant="span" color={"blue"}>
                            {"(x7days)"}
                          </Typography>{" "}
                        </Box>
                      </Box>
                      <Typography>$4340</Typography>
                    </Box>
                    <Box
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <Box style={{ display: "flex", flexDirection: "column" }}>
                        <Typography>3+ day discount</Typography>
                        <Box>
                          <Typography variant="span">
                            Extended trip discount{" "}
                          </Typography>
                          <Typography variant="span" color="blue">
                            {"(5%)"}
                          </Typography>
                        </Box>
                      </Box>
                      <Typography>-$217</Typography>
                    </Box>
                    <Box
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <Box style={{ display: "flex", flexDirection: "column" }}>
                        <Typography>Refundable deposit</Typography>
                        <Box>
                          <Typography variant="span">Refunded by </Typography>
                          <Typography variant="span" color="blue">
                            Oct 14th
                          </Typography>
                        </Box>
                      </Box>
                      <Typography>$500</Typography>
                    </Box>
                    <hr width="100%" />

                    <Box
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <Box style={{ display: "flex", flexDirection: "column" }}>
                        <Typography>Total Price Due</Typography>
                        <Box>
                          <Typography variant="span">
                            $500 Refunded by{" "}
                          </Typography>
                          <Typography variant="span" color="blue">
                            Oct 14th
                          </Typography>
                        </Box>
                      </Box>
                      <Typography>$4623</Typography>
                    </Box>
                    <Typography>
                      Your total rent amount will be calculated depending on the
                      pick-up and drop-off dates
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box style={footer.wrapper}>
            <Box sx={footer.content}>
              <Box>
                <Box
                  style={{
                    display: "flex",
                  
                    alignItems: "center",
                  }}
                >
                  <img 
                  src={footerLogo}
                    alt=""
                  />
               
                </Box>
                <Typography variant="span" style={{}}>
                  Design amazing digital experiences that create more happy in
                  the world
                </Typography>
              </Box>
              <Box style={footer.links}>
                <Typography color="white" variant="h6">
                  Home
                </Typography>
                <Typography>About</Typography>
                <Typography>Team</Typography>
                <Typography>Policies</Typography>
                <Typography>Press</Typography>
                <Typography>Help Center</Typography>
                <Typography>Releases</Typography>
              </Box>
              <Box style={footer.links}>
                <Typography color="white" variant="h6">
                  Explore
                </Typography>
                <Typography>Book a car</Typography>
                <Typography>Book a home</Typography>
                <Typography>Trust & sefety</Typography>
                <Typography>News</Typography>
                <Typography>Media kit</Typography>
                <Typography>Contact</Typography>
              </Box>
              <Box style={footer.links}>
                <Typography color={"white"} variant="h6">
                  Hosting
                </Typography>
                <Typography>Became a host</Typography>
                <Typography>All star hotels</Typography>
                <Typography>Insurance & Protection</Typography>
                <Typography>Host Tools</Typography>
                <Typography>Tutorials</Typography>
                <Typography>Support</Typography>
              </Box>
            </Box>
            <hr width="100%" />
            <Box style={footer.socialMedia}>
              <Typography>@ 2023 Roam. All rights reserved</Typography>
              <Box style={footer.icons}>
                <i className="fa-brands fa-tiktok"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-linkedin"></i>
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-instagram"></i>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }
}

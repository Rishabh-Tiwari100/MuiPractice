import React, { Component } from "react";
import { Box, Button, Input, TextField, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Link from '@mui/material/Link';





const outer = {
display:"flex",
};

const bellIcon = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "rgba(128, 128, 128, 0.21)",
  width: "40px",
  height: "40px",
  borderRadius: "50%",
  padding: "5px",
  cursor :"pointer",
};

const sidebar = {
  wrapper: {
    background: "linear-gradient( #2d3c7d, #327995)",
    display :"flex",
    flexDirection:"column",
    gap : "60px",
    padding:"50px 30px 0 0",
    width :"20%",
  },
  header : {
    display :'flex',
    alignItems:"center",
    justifyContent:"center",
  },
  pages : {
      display :"flex",
      flexDirection:"column",
      gap :"30px"
  },
  nav : {
      color :"white",
      cursor :"pointer",
      display :"flex",
      alignItems :"center",
      gap:"20px",
      borderRadius :" 0 12px 12px 0",
      padding :"20px 40px",
      textDecoration :"none",
      "&:hover" : {
        color :"#838aa4",
        backgroundColor :"white"
      },
      "&:active" : {
        
          color :"#838aa4",
          backgroundColor :"white"
        
      }
  }

};

const main = {
  wrapper: {
    width: "80%",

  },
};

const header = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "10px 40px",
  border: "1px solid #80808036",
};

const links = {
  display: "flex",
  alignItems: "center",
  gap: "20px",
 
};

const notifications = {
  wrapper: {
    position: "relative",
  },

  popover: {
    position: "absolute",
    right :"0",
    zIndex :'1',
    top: "50px",
    width: "400px",
    borderRadius: "12px",
    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
    background :"white"
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "20px",
  },

  content: {},

  btn: {
    margin: "10px 30px",
  },
  headerIcons: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
};

const overview = {
  wrapper: {
    padding: "10px  40px",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  cardSection: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr",
    gap: "30px",
    "@media(max-width:1400px)" : {
      gridTemplateColumns :"1fr 1fr",
    },
    "@media(max-width:1000px)" : {
      gridTemplateColumns :"1fr",
    },
   
  },
  card: {
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
    gap: "20px",
    padding: "20px",
    borderRadius: "12px",
  },
  image: {
    width: "30%",
  },
};

const notificationCard = {
  wrapper: {
    display: "flex",
    alignItems: "center",
    border: "1px solid rgba(128, 128, 128, 0.21)",
    padding: "10px 15px",
    gap: "10px",
  },
  image: {
    width: "30%",
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {},
  footer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
};

const classes = {
  wrapper: {
    padding: "20px",
    display: "grid",
    gap: "20px",
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px 30px",
  },

  searchInput : {
    display :"flex",
    alignItems:"center",
    position:"relative",
  },
  searchIcon : {
    position :"absolute",
    left :"10px"
  },
  inputField : {
    width :"400px",
    height :"50px",
    paddingLeft :"30px",
    borderRadius :"12px",
    border : "1px solid #80808057",
    borderTop :"2px solid gray"


  },
  cardSection: {
    display: "grid",
    // gridTemplateColumns: "1fr 1fr 1fr",
    gridTemplateColumns : "repeat(auto-fit, minmax(360px, 1fr))",
    gap: "20px",
    // "@media(max-width:1400px)" : {
    //   gridTemplateColumns :"1fr 1fr",
    // },
    // "@media(max-width:1000px)" : {
    //   gridTemplateColumns :"1fr",
    // },
  },
  card: {
    display: "flex",
    cursor :"pointer",
    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
    gap: "20px",
    padding: "20px",
    borderRadius: "12px",
    alignItems:"center",
    border: "2px solid transparent",
    '&:hover' : {
      border :"2px solid #67cbcfa3",
      background :"#00ecff12",
    },
   
  },
  Image : {
    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
    // borderRadius: "20px"
  
   
  
  },
  content : {
    // display:"flex",
    // flexDirection:"column",
    // alignItems:"center",
    // justifyContent:"center"
  }
};

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notificationArr: [1, 2, 3, 4],
      activeLink: "Dashboard",
     
      isOpen: false,
      overview: [
        {
          icon: "https://w7.pngwing.com/pngs/300/530/png-transparent-cowboy-cab-progress-bar-computer-icons-manhattan-beer-distributors-juice-text-orange-business.png",
          title: "Course in Progress",
          count: "15",
          color: "orange",
        },
        {
          icon: "https://static-00.iconduck.com/assets.00/process-completed-symbolic-icon-2048x2048-baquwdk1.png",
          title: "Course Completed",
          count: "08",
          color: "green",
        },
        {
          icon: "https://w1.pngwing.com/pngs/802/420/png-transparent-key-icon-diploma-icon-design-academic-certificate-public-key-certificate-document-professional-certification-blue.png",
          title: "Certificates Earned",
          count: "05",
          color: "blue",
        },
        {
          icon: "https://png.pngtree.com/png-vector/20190419/ourmid/pngtree-vector-assignment-icon-png-image_958318.jpg",
          title: "Assignments Pending",
          count: "30",
          color: "red",
        },
      ],
      classes: [
        {
          imgUrl:
            "https://www.euroschoolindia.com/wp-content/uploads/2023/10/what-is-vedic-mathss-for-kids-jpg.webp",
          name: "Class 1A Maths",
          id: "342389",
        },
        {
          imgUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIcRNrYSoE-Kjzs3F3wDf9OJH7gY1JMKtneK5J8222ag&s",
          name: "Class 1A Hindi",
          id: "342389",
        },
        {
          imgUrl: "https://en.pimg.jp/054/689/942/1/54689942.jpg",
          name: "Class 1A English",
          id: "342389",
        },
        {
         imgUrl : "https://logos-world.net/wp-content/uploads/2022/07/Java-Logo.png",
          name: "Class 1A Java",
          id: "342389",
        },
        {
          imgUrl: "https://logowik.com/content/uploads/images/911_c_logo.jpg",
          name: "Class 1A C++",
          id: "342389",
        },
        {
          imgUrl: "https://cdn.iconscout.com/icon/free/png-256/free-python-3521655-2945099.png?f=webp",
          name: "Class 1A Python",
          id: "342389",
        },
        {
          imgUrl: "https://cdn2.vectorstock.com/i/1000x1000/42/11/geography-global-airplane-creative-air-logo-vector-22434211.jpg",
          name: "Class 1A Geography",
          id: "342389",
        },
        {
          imgUrl : 'https://media.istockphoto.com/id/1165295700/vector/laboratory-beaker-icon-chemical-experiment-in-flask-%D1%81hemistry-and-biology-symbol-flask.jpg?s=612x612&w=0&k=20&c=k81CYPB-emvwYwRhhwWHuSPmI1RzY_mO-AfmDT57WHQ=',
          name: "Class 1A Chemistry",
          id: "342389",
        },
        {
          imgUrl: "https://i.pinimg.com/originals/a6/01/3a/a6013a6cf972eacd63bce8172feae089.jpg",
          name: "Class 1A Physics",
          id: "342389",
        },
      ],
    };
    
  }


handleClose  =  () => {
  let temp = !this.state.isOpen
  this.setState({
    isOpen : temp,
  })
}
handleSidebarLinkClick = (link) => {
  this.setState({ activeLink: link });
};


render() {

    return (
      <Box style={outer}>
        <Box style={sidebar.wrapper}>
          <Box style={sidebar.header}>
          <Typography variant="h5" style={{color:"skyblue"}}>engage</Typography><Typography variant="h5"   style={{color:"white"}} >mo</Typography>
          </Box>
          <Box style={sidebar.pages}>
            {/* <Link href="/"  sx={sidebar.nav}><i className="fa-solid fa-house"></i><Typography>Dashboard</Typography></Link> */}
            <Link href="/" sx={{...sidebar.nav, ...(this.state.activeLink === "Dashboard" && { color :"#7c88a4", backgroundColor: "white" })}}>
  <i className="fa-solid fa-house"></i><Typography>Dashboard</Typography>
</Link>

            <Link sx={sidebar.nav}><i className="fa-solid fa-video"></i><Typography>Join Live Class</Typography></Link>
            <Link sx={sidebar.nav}><i className="fa-solid fa-calendar-days"></i><Typography>My Calender</Typography></Link>
            <Link sx={sidebar.nav}><i className="fa-regular fa-user"></i><Typography>My Profile</Typography></Link>
            <Link sx={sidebar.nav}><i class="fa-solid fa-circle-info"></i><Typography>Support</Typography></Link>
            
          </Box>
        </Box>
        <Box style={main.wrapper}>
          <Box style={header}>
            <Typography color={"#7c88a4"} variant="h5">Dashboard</Typography>
            <Box style={links}>
              <Typography style={{cursor:"pointer"}}>Join a class</Typography>
              <Box
                onClick={() => {
                    
                !this.state.isOpen &&  this.setState({ isOpen: true });
                }}
                style={notifications.wrapper}
              >
       
                <Box style={bellIcon}>
              
                  <i className="fa-regular fa-bell"></i>
                </Box>

                {
                  this.state.isOpen && (
                <Box
                      display={!this.state.isOpen && "none" }
                  style={notifications.popover}
                >
                  <Box style={notifications.header}>
                    <Typography>Notifications</Typography>
                    <Box style={notifications.headerIcons}>
                      <a href="">Mark all as read</a>
                      <Typography onClick={this.handleClose} variant="span">
                      <i  className="fa-solid fa-xmark"></i>
                      </Typography>
                    </Box>
                  </Box>
                  <Box style={notifications.content}>
                    {this.state.notificationArr.map((card) => {
                      return (
                        <Box style={notificationCard.wrapper}>
                          <Box style={notificationCard.image}>
                            <img
                              width="100%"
                              height="100%"
                              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXx0M2AThmX4gCUx8_9VJiSIxvuW9xeRwKSEOdm3celw&s"
                              alt=""
                            />
                          </Box>
                          <Box style={notificationCard.content}>
                            <Box style={notificationCard.header}>
                              <Typography>Feedback Form </Typography>
                              <Typography>2 min ago</Typography>
                            </Box>
                            <Box style={notificationCard.text}>
                              <Typography>
                                Admin has shared a new feedback form for general
                                Rating
                              </Typography>
                            </Box>
                            <Box style={notificationCard.footer}>
                              <a href="#">Mark as read</a>
                              <i style={{cursor:"pointer"}} className="fa-solid fa-trash"></i>
                            </Box>
                          </Box>
                        </Box>
                      );
                    })}
                  </Box>
                  <Box style={notifications.btn}>
                    <Button variant="outlined" fullWidth>
                      View All Notifications
                    </Button>
                  </Box>
                </Box>)
                }
              </Box>
              <Avatar style={{cursor:"pointer"}} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </Box>
          </Box>
          <Box style={overview.wrapper}>
            <Typography style={{color:"#7c88a4"}} variant="h5">Overview</Typography>
            <Box sx={overview.cardSection}>
              {this.state.overview.map((card) => {
                return (
                  <Box sx={overview.card}>
                    <Box style={{display :"flex",alignItems:"center",gap:"20px"}}>
                    <img width="30px" src={card.icon} alt="" />
                    <Typography >{card.title}</Typography>
                    </Box>
                    <Typography
                      variant="span"
                      style={{
                        fontSize: "40px",
                        borderBottom: `3px solid ${card.color}`,
                      }}
                    >
                      {card.count}
                    </Typography>
                  </Box>
                );
              })}
            </Box>
          </Box>
          <Box style={classes.wrapper}>
            <Box style={classes.header}>
              <Typography color="#aab3d4" variant="h5">My Classes</Typography>
              <Button>View All</Button>
            </Box>
            <Box style={classes.searchInput}>
            <Typography style={classes.searchIcon} variant="span"><i className="fa-solid fa-magnifying-glass"></i></Typography>
              <input style={classes.inputField} placeholder="Search by class name" />
            </Box>
            <Box sx={classes.cardSection}>
              {this.state.classes.map((card) => {
                return (
                  <Box sx={classes.card}>
                    <Box style={classes.Image}>
                      <img
                        width={"100%"}
                        height={"100px"}
                        src={card.imgUrl}
                        alt=""
                      />
                    </Box>
                    <Box style={classes.content}>
                      <Typography variant="h6">{card.name}</Typography>
                      <Typography variant="body2">Class ID: {card.id}</Typography>
                    </Box>
                  </Box>
                );
              })}
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }
}

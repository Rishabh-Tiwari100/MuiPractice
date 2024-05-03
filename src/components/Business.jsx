import { Box, Button, Typography } from '@mui/material'
import React, { Component } from 'react'
import { styled } from "@mui/material/styles";
import { movieOptions } from '../App';
import SelectBox from './SelectBox';


const Hamburger  = styled(Box)({
    display :"none",
    "@media (max-width : 1000px)" : {
        display :'block',
    }
})
const NavBox  = styled(Box)({
    display:"flex",justifyContent:"center",alignItems:"center",gap:"20px",color:'gray',
    "@media (max-width : 1000px)" : {
        display :'none',
    }
})
const NavButton  = styled(Button)({
    backgroundColor:"black",color:"white",borderRadius:"0px",
    "@media (max-width : 1000px)" : {
        display :'none',
    }
})
const AboutBox  = styled(Box)({
    display:'grid',gridTemplateColumns:"1fr 1fr",gap:"20px",
    "@media (max-width : 1150px)" : {
        gridTemplateColumns:'1fr'
    }
})
const AboutContent  = styled(Box)({
   
    display:'flex',gap:"20px",flexDirection:"column",justifyContent:"center",
    "@media (max-width : 1150px)" : {
        alignItems:"center",
    }
})
const NewsBox  = styled(Box)({
    display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"20px",
    
    "@media (max-width : 1150px)" : {
        gridTemplateColumns:"1fr",
        

    }
})
const ParaBox  = styled(Typography)({
    
    color :"gray",    
    "@media (max-width : 1150px)" : {
       textAlign :"center"
    }
})
const HeadingBox  = styled(Typography)({
        variant :"h5",
        color:"gray",
    
    "@media (max-width : 1150px)" : {
       textAlign :"center"
    }
})
const CaptionBox  = styled(Typography)({
        variant :"subtle2",
    
    "@media (max-width : 1150px)" : {
       textAlign :"center"
    }
})
const About2  = styled(Box)({
    display:'grid',gridTemplateColumns:"2fr 1fr",gap:"20px",
    
    "@media (max-width : 1150px)" : {
       textAlign :"center",
       gridTemplateColumns :"1fr",
    }
})
const About2Content  = styled(Box)({
  
    display:"flex",flexDirection:'column',justifyContent:'center',gap:"20px",
    "@media (max-width : 1150px)" : {
       textAlign :"center",
       alignItems:"center",
    }
})

const Links = styled(Box) ({
    cursor :"pointer",
    transition : "transfrom 2s",
    "&:hover" : {
      
        transform : "scale(1.2,1.2)"
    }
})

export default class Business extends Component {

  render() {
    return (
      <Box>
        <Box sx={{display:"flex",justifyContent:"space-between",alignitems:"center",margin:"20px"}}>
            <Typography variant='h5' style={{font:"bold",textDecoration:"underline"}}>Business</Typography>
            <NavBox>
                <Links>ABOUT</Links>
                <Links >WORK</Links>
                <Links>TEAM</Links>
                <Links>BLOG</Links>
                <Links>CONTACT</Links>
            </NavBox>
            <Box>
            <NavButton>CONTACT US</NavButton>
            </Box>
            <Hamburger><i class="fa-solid fa-bars"></i></Hamburger>
        </Box>
        <Box sx={{backgroundImage:'url("https://assets.website-files.com/5c6eb5400253230156de2bd6/5cdc00e3a4217f7862153ae2_portfolio%202%20-%20wide.svg")', gap:"30px",minHeight:"600px",color:"white",display:"flex",flexDirection:'column',justifyContent:"center",alignItems:"center"}}>
        <Typography variant='h3'>Grow your business</Typography>
        <Typography variant='subtle2'>Give your business a boost with a beautifully crafted homepage.</Typography>
        <Button sx={{backgroundColor:'white',color:"black",width:"150px",height:'50px'}}>LEARN MORE</Button>
        </Box>
        <Box sx={{minHeight:'1085px',display:'flex',flexDirection:"column",alignItems:"center",justifyContent:'center',width:"100%",maxWidth:"1140px",marginLeft:"auto",marginRight:"auto",gap:'100px'}}>
        <Box sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:"center",gap:"20px"}}>
            <Typography variant='body2'>WHAT WE BELIEVE IN</Typography>
            <Typography sx={{textAlign:'center',maxWidth:"80%"}} variant='h3'>Grow your business, establish your brand, and put your customers first. </Typography>
        </Box>
        <AboutBox>
            <AboutContent>
                <HeadingBox>ABOUT</HeadingBox>
                <Typography variant='h4'>Who we are</Typography>
                <Typography color={"gray"} variant='subtle1'>Nulla vel sodales tellus, quis condimentum enim. Nunc porttitor venenatis feugiat. Etiam quis faucibus erat, non accumsan leo. Aliquam erat volutpat. Vestibulum ac faucibus eros. Cras ullamcorper gravida tellus ut consequat.</Typography>
                <Button  sx={{backgroundColor:"black",color:"white",width:"150px",height:"50px"}}>LEARN MORE</Button>
                <SelectBox movieOptions={movieOptions} multiSelectEnabled = {true}  title={"movie"} /> 
            </AboutContent>
           <img  width={"100%"} src="https://assets.website-files.com/5c6eb5400253230156de2bd6/5cdc00bd9bd8ea70674d1cbf_placeholder%203.svg" alt="" />
        </AboutBox>
        <About2 >
            <About2Content>
                <HeadingBox>TEAM</HeadingBox>
                <Typography variant='h4'>What we do</Typography>
                <ParaBox>Nulla vel sodales tellus, quis condimentum enim. Nunc porttitor venenatis feugiat. Etiam quis faucibus erat, non accumsan leo. Aliquam erat volutpat. Vestibulum ac faucibus eros. Cras ullamcorper gravida tellus ut consequat.</ParaBox>
                <Button  sx={{backgroundColor:"black",color:"white",width:"150px",height:"50px"}}>LEARN MORE</Button>
            </About2Content>
            <Box sx={{display:"flex",justifyContent:"end",alignItems:"center"}}>

           <img  width={"100%"} src="https://assets.website-files.com/5c6eb5400253230156de2bd6/5cdc00be4b4caf93455d66a1_placeholder%201.svg" alt="" />
            </Box>
        </About2>
        </Box>
        <Box sx={{width:"100%",maxWidth:"1140px",margin:"0 auto",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",gap:"50px"}}>
            <Box sx={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",marginTop:"20px"}}>
                <Typography  variant='subtle2'>ABOUT US</Typography>
                <Typography variant='h4'>Company news</Typography>
            </Box>
            <NewsBox >
                <Box sx={{display:"flex",flexDirection:"column",gap:"20px"}}>
                    <Typography textAlign={"center"} variant='h5'>10 Quick Tips About Blogging</Typography>
                    <CaptionBox>FEB 21, 2019</CaptionBox>
                    <ParaBox variant={"body2"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</ParaBox>
                </Box>
                <NewsBox sx={{display:"flex",flexDirection:"column",gap:"20px"}}>
                    <Typography textAlign={"center"} variant='h5'>15 Best Blogs To Follow About Web Design</Typography>
                    <CaptionBox >FEB 21, 2019</CaptionBox>
                    <ParaBox>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</ParaBox>
                </NewsBox>
                <NewsBox sx={{display:"flex",flexDirection:"column",gap:"20px"}}>
                    <Typography textAlign={"center"} variant='h5' color={"black"}>7 of the Best Examples of Beautiful Blog Design</Typography>
                    <CaptionBox variant='subtle2'>FEB 21, 2019</CaptionBox>
                    <ParaBox >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</ParaBox>
                </NewsBox>
            </NewsBox>
        </Box>
      </Box> 
    )
  }
}




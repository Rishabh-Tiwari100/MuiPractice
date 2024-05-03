
import './App.css';
import BackGroundSlide from './components/BackGroundSlide';
import Business from './components/Business';
// import Digian from './components/Digian'
import Content from './components/Content';
import Employees from './components/Employees';
import Food from './components/Food';
import ImageCircle from './components/ImageCircle';
import Lugx from './components/Lugx';
import MyCard from './components/MyCard';
import SelectBox from './components/SelectBox';
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
import AdbIcon from '@mui/icons-material/Adb';
import AddToHomeScreenIcon from '@mui/icons-material/AddToHomeScreen';
import AdfScannerIcon from '@mui/icons-material/AdfScanner';
import AnimationIcon from '@mui/icons-material/Animation';
import AppleIcon from '@mui/icons-material/Apple';
import AttachmentIcon from '@mui/icons-material/Attachment';
import BatteryChargingFullIcon from '@mui/icons-material/BatteryChargingFull';
import CachedIcon from '@mui/icons-material/Cached';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import MyComponent from './components/MyComponent';
import DragAndDrop from './Task/DragAndDrop';
import ImagePicker from './Task/ImagePicker';
import Roam from './Task/Roam'
import CustomSelectMenu from './components/CustomSelectMenu';
import Dashboard from './Task/Dashboard'
import ModalTask from './Task/ModalTask'
import NewModal from './Task/NewModal'





export const movieOptions =  [
  { title: "The Shawshank Redemption", year: 1994,icon: <AccessAlarmsIcon/>  },
  { title: "The Godfather", year: 1972, icon : <AdbIcon/> },
  { title: "The Godfather: Part II", year: 1974,icon : <AddToHomeScreenIcon/> },
  { title: "The Dark Knight", year: 2008, icon : <AdfScannerIcon/> },
  { title: "12 Angry Men", year: 1957, icon : <AnimationIcon/> },
  { title: "Schindler's List", year: 1993, icon : <AppleIcon/> },
  { title: "Pulp Fiction", year: 1994, icon: <AttachmentIcon/> },
  {
    title: "The Lord of the Rings: The Return of the King",
    year: 2003,
    icon : <BatteryChargingFullIcon/>
  },
  { title: "The Good, the Bad and the Ugly", year: 1966, icon : <AddLocationAltIcon/> },
  { title: "Fight Club", year: 1999, icon : <CachedIcon/> },

];



function App() {
  return (
    <div>
      {/* <Digian/> */}
      {/* <Content/> */}
      {/* <Lugx/> */}
      <Business/>
      {/* <BackGroundSlide/> */}
      {/* <MyCard/> */}
      {/* <ImageCircle/> */}
      {/* <Employees/> */}
      {/* <Food/> */}
  {/* <SelectBox movieOptions={movieOptions} multiSelectEnabled = {false}  title={"movie"} /> */}
  {/* <MyComponent/> */}
  {/* <TopProduct/> */}
  {/* <DragAndDrop/> */}
  {/* <ImagePicker/> */}
  {/* <Roam/> */}
  {/* <CustomSelectMenu/> */}
  {/* <Dashboard/> */}
  {/* <ModalTask/> */}
  {/* <NewModal/> */}


    </div>
  );
}

export default App;


import DashboardLeftNav from './DashboardLeftNav';
import ItineraryLeftNav from './ItineraryLeftNav';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



export default function LeftNav(props) {
  
  return (
    <>
   {props.itinerary ? <ItineraryLeftNav itinerary={props.itinerary} user={props.user} addLocation = {props.addLocation}/> : <DashboardLeftNav user={props.user}/>}
   
   </>
  )

  
}
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar'
import SideDrawer from './Components/SideDrawer/SideDrawer'
import Backdrop from './Components/Backdrop/Backdrop'
class App extends Component{
  state = {
    sideDrawerOpen : false
  }
  drawerToggleHandler = () =>{
    this.setState((prevState)=>{
      return{
        sideDrawerOpen : !prevState.sideDrawerOpen
      }
    })

  }
  backDropClickHandker=()=>{
    this.setState({sideDrawerOpen :false})
  }
  render(){
   let Back;
   if(this.state.sideDrawerOpen){
     Back = <Backdrop backdrophandler ={this.backDropClickHandker}/>
   }
  return (
    <div style={{height : '100%'}}>
   <Navbar drawerClickHandler ={this.drawerToggleHandler}/>
   <SideDrawer show={this.state.sideDrawerOpen}/>
   {Back}   
   </div>
  )}
}

export default App;

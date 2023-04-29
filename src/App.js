import './App.css';
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter, Routes, Route} from "react-router-dom";
//import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  pageSize = 5;
  apiKey = 'ae008262cde64e838f067eaca7fabbe6';

  // state = {
  //   progress:0
  // }

  // setProgress = (progress)=>{
  //   this.setState({progress: progress})
  // }

    render() {
    return (
      <div>
      <BrowserRouter>
        <NavBar />
        {/* <LoadingBar
        height={3}
        color='#f11946'
        progress={this.state.progress} 
        /> */}
        <Routes>
        <Route exact path='/' element={<News apiKey={this.apiKey}  key='general' pageSize={this.pageSize} country="in" category='general' />} />
        <Route exact path='/business' element={<News apiKey={this.apiKey}  key='business' pageSize={this.pageSize} country="in" category='business' />} />
        <Route exact path='/entertainment' element={<News apiKey={this.apiKey}  key='entertainment' pageSize={this.pageSize} country="in" category='entertainment' />} />
        <Route exact path='/health' element={<News apiKey={this.apiKey} key='health' pageSize={this.pageSize} country="in" category='health' />} />
        <Route exact path='/science' element={<News apiKey={this.apiKey}  key='science' pageSize={this.pageSize} country="in" category='science' />} />
        <Route exact path='/sports' element={<News apiKey={this.apiKey}  key='sports' pageSize={this.pageSize} country="in" category='sports' />} />
        <Route exact path='/technology' element={<News apiKey={this.apiKey}  key='technology' pageSize={this.pageSize} country="in" category='technology' />} />
        <Route exact path='/general' element={<News apiKey={this.apiKey}  key='general' pageSize={this.pageSize} country="in" category='general' />} />
        </Routes>
      </BrowserRouter>
      </div>
    )
  }
}
  


import React from "react";
import Skeleton from 'react-loading-skeleton'
import Layout from "../components/layout";

import { useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { WaveMaterial } from '../utils/waveMaterial'
class Home extends React.Component {
  hit() {
    document.addEventListener('keydown', (event) => {
      if(event.keyCode == 32){
        // if space bar is pressed
        
      }
    }, false);
  };

  componentDidMount(){
    this.hit();
  }
  
  render (){
    return (
      <Layout>
        <div className="home">
        </div>
      </Layout>
    )
  };
};
export default Home;

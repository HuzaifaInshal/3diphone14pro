import React,{useState,useEffect} from 'react'
import { Model } from './Model'
import {  OrbitControls, PerspectiveCamera,Environment  } from "@react-three/drei";
import { useSnapshot } from 'valtio';
import state from '../store';
const Main = () => {
  const snap = useSnapshot(state);

  const windowWidth = window.innerWidth;
  return (
    <>
    {snap.show3dOnly ? <>
    <OrbitControls />
    <PerspectiveCamera makeDefault position={[0, 0,10]} fov={7}/>
    <Model position={[0,0,0]} />
    <ambientLight args={["#ffffff",0.75]} />
    </> : <>
    <PerspectiveCamera makeDefault position={[0, 0,10]} fov={7}/>
    <Model position={windowWidth > 766 ? [0.5,0,0] : [0,0,0]} />
    </>}
    {/* <Model position={!snap.show3dOnly ? [0.5,0,0] : [0,0,0]} /> */}
    <pointLight position={[0,-1,2]} args={["#ffffff",10]}/>
    <pointLight position={[0,0,-2]} args={["#ffffff",10]}/>
    <pointLight position={[-2,0,0]} args={["#ffffff",10]}/>
    <pointLight position={[2,0,0]} args={["#ffffff",10]}/>
    <pointLight position={[0,2,0]} args={["#ffffff",10]}/>
    <pointLight position={[0,-2,0]} args={["#ffffff",10]}/>
    <Environment preset="city"/>
    </>
  )
}

export default Main
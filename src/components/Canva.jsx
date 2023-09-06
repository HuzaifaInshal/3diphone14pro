import React,{Suspense} from 'react'
import { Canvas } from '@react-three/fiber'
import Main from './Main'
import state from '../store'

const Canva = ({open,value}) => {
  const exit = ()=>{
    state.show3dOnly = false
  }
  return (
    <>
    <div id='canvas'>
      <button className='absolute-btn' onClick={exit}>Exit</button>
    <Canvas shadows >
    <Suspense fallback={<>Loading 3d model...</>}>
     <Main />        
   </Suspense>
    </Canvas>
    </div>
    </>
  )
}

export default Canva
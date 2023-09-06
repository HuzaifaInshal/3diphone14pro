import Land from './components/Land'
import Last from './components/Last'
import Nav from './components/Nav'
import Second from './components/Second'
import Canva from './components/Canva'
import Loader from './components/Loader'
import './App.css';
import { useState } from 'react'
import { useSnapshot } from 'valtio';
import state from './store';

function App() {
  const snap = useSnapshot(state);
  return (
    <>
    <Loader/>
    <Canva/>
    {!snap.show3dOnly ? <><Nav/>
    <Land/>
    <Second/>
    <Last/></> : '' }
    </>
  );
}

export default App;

import { Suspense } from 'react'
import './App.css'
import Bottles from './components/Bottles/Bottles'

// const bottlesPromise = fetch('./bottle.json').then(res => res.json())
// const bottlesPromise2 = fetch('https://raw.githubusercontent.com/mjh-shikder/Bottle-Data/refs/heads/master-branch/Bottles.json')
//   .then(res => res.json()); 




function App() {

  return (
    <>
      
      <h1>Buy Awesome Water BOttle</h1>
      <Suspense fallback={ <h3>Bottles are Loading...</h3> }>
       <Bottles bottlesPromise={bottlesPromise2}></Bottles> 
    </Suspense>
      
    </>
  )
}

export default App

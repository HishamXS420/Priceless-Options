

import { LineChart as LC } from 'recharts'
import LineChart from './Components/LineChart/LineChart'
import './App.css'
import Header from './Components/Header/Header'
import PriceOptions from './Components/PriceOptions/PriceOptions'
import Phones from './Components/Phones/Phones'


function App() {

  return (
    <>
        <Header></Header>
  
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
    <Phones></Phones>
    </>
  )
}

export default App

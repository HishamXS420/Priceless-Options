

import { LineChart as LC } from 'recharts'
import LineChart from './Components/LineChart/LineChart'
import './App.css'
import Header from './Components/Header/Header'
import PriceOptions from './Components/PriceOptions/PriceOptions'


function App() {


  return (
    <>
        <Header></Header>
  
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>

    </>
  )
}

export default App

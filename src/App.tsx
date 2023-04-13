import { useState } from 'react'
import './App.css'
import Header from './Components/header'
import Main from './Components/main'
import Sales from './Components/sales'
import Articles from './Components/articles'
import Footer from './Components/footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
<Header></Header>
<Main></Main>
<Sales></Sales>
<Articles></Articles>
<Footer></Footer>
    </div>
  )
}

export default App
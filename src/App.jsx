import { BrowserRouter ,Route, Routes } from "react-router-dom"
import { Home } from "./pages/home"
import{Notfound} from "./pages/NotFound"
const App =() =>{
  return(
    <div>
   <BrowserRouter>
    <Routes>
  <Route index element={<Home />}/>

  <Route path ="*" element={<Notfound/>}/>



    </Routes>
   </BrowserRouter>



    </div>
  )
}
export default App
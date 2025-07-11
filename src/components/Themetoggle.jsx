import { useEffect, useState } from "react"
import { Moon,Sun} from "lucide-react"
import {cn} from "../lib/utlis"

export const ThemeButton =() =>{

  const[isDark,setDark] = useState(false);
 useEffect(() =>{
 const storedTHeme = localStorage.getItem("theme")
 if(storedTHeme === "dark"){
  setDark(true)
  document.documentElement.classList.add("dark")
 }else{
 document.documentElement.classList.remove("dark")
    localStorage.setItem("theme", "light");
 }
 
 },[])






  function toggletheme(){
   if(isDark){
    document.documentElement.classList.remove("dark")
    localStorage.setItem("theme", "light");


    setDark(false)
   }else{
    document.documentElement.classList.add("dark")
    localStorage.setItem("theme", "dark");
    setDark(true)
   }




  }
  return(
    <div>
<button onClick={toggletheme} className={cn("fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300","focus:outline-hidden")}>{isDark? < Sun className="h-6 w-6 text-yellow-300"/> : <Moon className="h-6 w-6 text-blue-900"/>}</button>



    </div>
  )
}
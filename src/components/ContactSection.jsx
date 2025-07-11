import { Facebook, Instagram, Linkedin, Mail, Map, Phone, Send, Twitter } from "lucide-react"
import{cn} from"../lib/utlis"

export const Contact =()=>{

  const handleSubmit =(e) =>{
    e.preventDefault()
    setTimeout(()=>{

    },1500)
  }
  return(
    <>
<section
id="contact"
className="py-24 px-4 relative bg-secondary/30">
  <div className="container mx-auto max-w-5xl">
<h2 className="text-3xl md:4xl font-bold mb-4 text-center">
  get in <span className="text-primary">touch</span>
</h2>
<p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
  feels free to reach out. looking for new opporunities and growth
  here my contact always open of collaboration.

</p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
  <div className="space-y-8">
    <h3 className="text-2xl font-semibold mb-6">
      contact information
    </h3>
    <div className="space-y-6 justify-center">
      <div className="flex items-start space-x-4">
        <div className="p-3 rounded-full bg-primary/10">
        <Mail />

        </div>
        <div>
          <h4 className="font-medium">
            email
          </h4>
          <a href="mailto:niluferkatoon@gmail.com
          " className="text-muted-foreground hover:text-primary transition-colors"> niluferkatoon@gmail.com</a>
        </div>
      </div>
        <div className="flex items-start space-x-4">
        <div className="p-3 rounded-full bg-primary/10">
        <Phone />

        </div>
        <div>
          <h4 className="font-medium">
            Phone
          </h4>
          <a href="tel :+ 9560840374
          " className="text-muted-foreground hover:text-primary transition-colors"> + 91 9560840374</a>
        </div>
      </div>
        <div className="flex items-start space-x-4">
        <div className="p-3 rounded-full bg-primary/10">
        <Map />

        </div>
        <div>
          <h4 className="font-medium">
            location
          </h4>
          <a  className="text-muted-foreground hover:text-primary transition-colors">  new delhi /west side </a>
        </div>
      </div>

    </div>
    <div className="pt-8">
      <h4 className="font-medium mb-4">connect with me</h4>
      <div className="flex space-x-4 justify-center">
        {/* links for different platform ,linkin,twitter,instagram,facebook, */}
        <a href="https://www.linkedin.com/in/nilufer-khatoon-3156a0373?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"  target="_blank">
          <Linkedin /> 

        </a>
         <a href="#"  target="_blank">
          <Twitter /> 

        </a>
         <a href="#"  target="_blank">
          <Instagram /> 

        </a>
         <a href="#"  target="_blank">
          <Facebook/> 

        </a>

      </div>

    </div>
  </div>
 <div className="bg-card p-8 rounded-lg shadow-xs">
  <h3 className="text-2xl font-semibold mb-6">
    send a message
  </h3>
  <form className="space-y-6">

 <div>
  <label htmlFor="name" className="block text-sm font-medium mb-2"> your name</label>
  <input type="text" id="name" name="name " required  className="w-full px-4 py-3 rounded-md border-input bg-background focus:outlined-hidden focus:ring-2 focus:ring-primary" placeholder="nilofar...."/>
 </div>

 <div>
  <label htmlFor="email" className="block text-sm font-medium mb-2"> your email</label>
  <input type="email" id="email" name="email " required  className="w-full px-4 py-3 rounded-md border-input bg-background focus:outlined-hidden focus:ring-2 focus:ring-primary" placeholder="nilofar@gmail..."/>
 </div>

  <div>
  <label htmlFor="message" className="block text-sm font-medium mb-2"> your message</label>
  <textarea  id="message" name="message " required  className="w-full px-4 py-3 rounded-md border-input bg-background focus:outlined-hidden focus:ring-2 focus:ring-primary" placeholder="nilofar...."/>
 </div>

 

<button type="submit" className={cn("cosmic-button w-full flex item-center justify-center gap-2",
  ""
)}> send message
<Send  size={20}/>
</button>
  </form>

 </div>
</div>
</div>
</section>



    </>
  )
}
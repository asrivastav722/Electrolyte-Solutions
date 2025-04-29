
import { Button } from "antd"
import Logo from "./../assets/images/Electrolyte.png"
export default function Hero(){

  const openWhatsApp = () => {
    const phoneNumber = '919648146167';
    const message = encodeURIComponent('Hello Electrolyte Solutions, I would like to book a service!');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };
  
    return <header className="ht-65 bg-black w-100 d-flex flex-col align-items-center justify-center">
    <div className="h-fit w-fit m-0 p-0 d-flex flex-col align-items-center gap-2 justify-center">
      <div className="logo" style={{backgroundImage:`url(${Logo})`}}></div>
      <h1 className="mont text-5xl text-center text-white">Electrolyte Solutions</h1 >
      <p className="poppins text-xl text-white font-extralight">Service at Your Doorstep</p>
      <button className="colorwhite border-1 border-slate-100 mont px-4 py-3 rounded-xl text-base hover:bg-white" onClick={() => {openWhatsApp()}}>
        Book a Service
      </button>
    </div>
  </header>
}
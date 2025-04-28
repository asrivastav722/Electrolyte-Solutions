
import { Button } from "antd"
export default function Hero(){

  const openWhatsApp = () => {
    const phoneNumber = '918081111867';
    const message = encodeURIComponent('Hello Electrolyte Solutions, I would like to book a service!');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };
  
    return <header className="ht-75 bg-blue-950 w-100 d-flex flex-col align-items-center justify-center">
    <div className="h-fit w-fit m-0 p-0 d-flex flex-col align-items-center gap-2 justify-center">
      <h1 className="mont text-5xl text-white">Electrolyte Solutions</h1 >
      <p className="poppins text-xl text-white">Service at Your Doorstep</p>
      <Button type="primary" className="mont p-4 text-base" onClick={() => {openWhatsApp()}}>
        Book a Service
      </Button>
    </div>
  </header>
}
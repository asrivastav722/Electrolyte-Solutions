
import { Button } from "antd"
export default function Hero(){
  const openWhatsApp = () => {
    const phoneNumber = '918081111867';
    const message = encodeURIComponent('Hello Electrolyte Solutions, I would like to book a service!');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };
    return <header className="h-75 w-100 d-flex align-items-center justify-center">
    <div className="h-100 w-100 mt-5">
      <h1>Electrolyte Solutions</h1 >
      <p>Service at Your Doorstep</p>
      <Button className="" onClick={() => {openWhatsApp()}}>
        Book a Service
      </Button>
    </div>
  </header>
}
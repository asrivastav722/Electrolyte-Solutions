import {ReactComponent as Website} from "./../assets/svg/website.svg"
import {ReactComponent as Technology} from "./../assets/svg/technology.svg"
import {ReactComponent as Repair} from "./../assets/svg/repair.svg"
import {ReactComponent as Technical} from "./../assets/svg/technical.svg"

export default function Services(){
  const services=[
    { key:0,icon:<Repair/>,label:"Device Repairs",sub:"Phones, Laptops, Tablets"},
    { key:1,icon:<Technical/>,label:"IT Support",sub:"Software Help, Networking"},
    { key:2,icon:<Technology/>,label:"Home Tech Setup",sub:"Wi-Fi, Smart Devices"},
    { key:3,icon:<Website/>,label:"Web /Mobile ",sub:" Websites and Mobile Applications"},
  ]

    return <section className="d-flex flex-col align-items-center gap justify-center bg-slate-50 p-4 ">
      <div className="my-5 pb-4 d-flex flex-col gap-4">
    <h2 className="w-40per mont text-center w-100 shrink-0">Our Services</h2>
    <div className="d-flex gap-3 hidescrollbar overflow-x-scroll">
          {services.map((value)=>{
            return <div key={value.key} className="w-100 p-4  bg-slate-100 rounded-xl">
            {value.icon}
            <h4 className="mont mt-2 font-normal">{value.label}</h4>
            <p className="poppins font-light">{value.sub}</p>
        </div>})}
    </div>
    </div>
  </section>
}
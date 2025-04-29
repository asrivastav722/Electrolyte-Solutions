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

    return <><section id="services" className=" d-none d-lg-flex h-fit p-5 flex-col gap-4 align-items-center justify-center bg-slate-50 ">
              <h2 className=" mont text-center w-100">Our Services</h2>
              <div className="d-flex flex-wrap ">
                    {services.map((value)=>{
                      return <div key={value.key} className="d-flex basis-1/4 p-2 shrink-0 grow-0">
                        <div className="shadow-sm p-2 w-100 h-100 bg-slate-100 rounded-xl">
                      {value.icon}
                      <h4 className="mont mt-2 font-normal">{value.label}</h4>
                      <p className="poppins font-light tracking-wide">{value.sub}</p>
                      </div>
                  </div>})}
              </div>
            </section>
            <section className=" d-flex d-lg-none h-fit p-3 py-5 flex-col gap-4 align-items-center justify-center bg-slate-50 ">
              <h2 className=" mont text-center w-100">Our Services</h2>
              <div className="d-flex flex-wrap ">
                    {services.map((value)=>{
                      return <div key={value.key} className="d-flex basis-1/2 p-2 shrink-0 grow-0">
                        <div className="shadow-sm p-2 w-100 h-100 bg-slate-100 rounded-xl">
                      {value.icon}
                      <h4 className="mont mt-2 font-normal">{value.label}</h4>
                      <p className="poppins font-light tracking-wide">{value.sub}</p>
                      </div>
                  </div>})}
              </div>
            </section>
            </>
}
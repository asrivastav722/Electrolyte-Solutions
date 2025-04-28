export default function WhyChoose(){
    const listitems=[
      "✅ Fast Turnaround",
      "✅ Affordable Pricing",
      "✅ Friendly, Professional Service",
      "✅ At Your Home or Business"
    ]

    
    return <section className=" ht-65 w-100 gap-20 d-flex align-items-center justify-center ">
      {/* <div className="p-5 m-5 h-fit w-fit d-flex flex-col gap-3 align-center justify-center"> */}
    <h2 className="mont">Why Electrolyte Solutions?</h2>
    <ul className="d-flex gap-4 flex-col">
      {listitems.map((val)=>{
        return <li className="poppins tracking-wide">{val}</li>
      })}
    </ul>
    {/* </div> */}
  </section>
}
export default function WhyChoose(){
    const listitems=[
      "✅ Fast Turnaround",
      "✅ Affordable Pricing",
      "✅ Friendly, Professional Service",
      "✅ At Your Home or Business"
    ]

    
    return <section className=" h-fit w-100 d-flex align-items-center justify-center ">
      <div className="p-5 m-lg-5 h-fit w-fit d-lg-flex gap-4 align-items-center justify-center">
    <h2 className="mont pb-4 text-center">Why Electrolyte Solutions?</h2>
    <ul className="d-flex gap-4 flex-col">
      {listitems.map((val)=>{
        return <li className="poppins tracking-wide">{val}</li>
      })}
    </ul>
    </div>
  </section>
}
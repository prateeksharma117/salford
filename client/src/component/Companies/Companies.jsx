import tower from "../../assets/tower.png"
import equinix from "../../assets/equinix.png"
import realty from "../../assets/realty.png"
import prologis from "../../assets/prologis.png"
import "./Companies.scss"


const Companies = () => {
  return (
    <>
    <section className="companies_wrapper">
        <div className="paddings innerWidth flexCenter c_container">
            <img src={tower} alt="" />
            <img src={equinix} alt="" />
            <img src={realty} alt="" />
            <img src={prologis} alt="" />
        </div>
    </section>
    </>
  )
}

export default Companies

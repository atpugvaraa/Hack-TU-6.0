import HeroDonation from "./HeroDonation"
import WhyGive from "./WhyGive"
import Testimonials from "./Testimonials"
import FAQ from "./FAQ"
import "./DonationsPage.css"

export default function DonationsPage() {
  return (
    <div className="donations-page">
      <HeroDonation />
      <WhyGive />
      <Testimonials />
      <FAQ />
    </div>
  )
}


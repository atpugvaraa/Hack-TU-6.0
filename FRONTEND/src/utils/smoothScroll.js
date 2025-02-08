import HeroDonation from "../components/HeroDonation"
import WhyGive from "../components/WhyGive"
import Testimonials from "../components/Testimonials"
import FAQ from "../components/FAQ"
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


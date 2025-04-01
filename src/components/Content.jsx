import Articles from "./Articles"
import Contact from "./Contact"
import Customers from "./Customers"
import CustomersReviews from "./CustomersReviews"
import Description from "./Description"
import Descriptiontwo from "./Descriptiontwo"
import Help from "./Help"
import Introduction from "./Introduction"
import Services from "./Services"

function Content() {
  return (
    <div>
        <Introduction />
        <Customers />
        <Services />
        <Help />
        <Description />
        <CustomersReviews />
        <Descriptiontwo />
        <Articles />
        <Contact />
    </div>
  )
}

export default Content
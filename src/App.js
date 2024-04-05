import Filters from "./features/filters/Filters";
import Listing from "./features/listing-section/Listing";
import Header from "./features/header/Header";

export default function App() {
  return (
    <div >
      <Header />
      <h1 className="the--main--title">Listings</h1>
      <section className="hotel--app--wrapper">
        <Filters />
        <Listing />
      </section>
    </div>
  )
}

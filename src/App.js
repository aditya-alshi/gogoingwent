import { eventWrapper } from "@testing-library/user-event/dist/utils";
import Filters from "./features/filters/Filters";
import Listing from "./features/listing-section/Listing";

export default function App() {
  return (
    <div className="hotel--app--wrapper">
      <Filters />
      <Listing />
    </div>
  )
}


import EventBox from "./EventBox";
import SectionHeader from "../SectionHeader";

import eventData from '../../../_data/db.json';


const Events = () => {
  const events = eventData.events; // Access the events directly from the imported JSON data
  return (
    <section className="section" id="tours">
      <div className="container mx-auto">
        <SectionHeader pretitle='World Tour' title='Upcoming Events' />
        {/* event box */}
        <EventBox events={events} />
      </div>
    </section>
  );
};

export default Events
/* eslint-disable react/prop-types */

import Accomodation from "./Accomodation";

// eslint-disable-next-line react/prop-types
const Accomodations = ({ accomodations }) => {
  return (
    <div className="flex flex-wrap justify-between mx-20 my-10">
      {accomodations.map((accomodation, k) => (
        <Accomodation
          key={k}
          city={accomodation.city}
          country={accomodation.country}
          title={accomodation.title}
          rating={accomodation.rating}
          maxGuests={accomodation.maxGuests}
          type={accomodation.type}
          beds={accomodation.beds}
          photo={accomodation.photo}
          superHost={accomodation.superHost}
        />
      ))}
    </div>
  );
};

export default Accomodations;

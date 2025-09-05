import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

const SingleProperty = () => {
  const { property_id } = useParams();
  const [property, setProperty] = useState({ property: "somthing" });

  useEffect(() => {
    axios
      .get(`https://airbnc-1dqu.onrender.com/api/properties/${property_id}`)
      .then(({ data }) => {
        console.log(data);
        setProperty(data.property);
      });
  }, [property_id]);

  return (
    <>
      <h2>{property.property_name}</h2>
      {property.images &&
        property.images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`${property.property_name} ${index + 1}`}
          />
        ))}
      <p>{property.location}</p>
      <p>{property.description}</p>
      <p>GBP {property.price_per_night}</p>
      <p>{property.favourite_count}</p>
      <div>
        <img src={property.host_avatar} />
        <p>{property.host}</p>
      </div>
    </>
  );
};

export default SingleProperty;

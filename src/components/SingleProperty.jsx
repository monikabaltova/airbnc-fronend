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
    </>
  );
};

export default SingleProperty;

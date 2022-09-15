import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PropertyDetail from "./PropertyDetail";

function PropertyIdPage(props) {
  const params = useParams();
  const [propertyData, setPropertyData] = useState(null);

  useEffect(() => {
    const fetchApi = async () => {
      const res = await fetch(
        "http://localhost:8000/api/v1/app/show_properties/"
      );
      const data = await res.json();

      const ID = params.propID;
      const property = data.filter((data) => data._id === ID)[0];

      setPropertyData(property);
    };

    fetchApi();
  }, []);

  console.log(propertyData);

  return propertyData ? <PropertyDetail data={propertyData} /> : "";
}

export default PropertyIdPage;

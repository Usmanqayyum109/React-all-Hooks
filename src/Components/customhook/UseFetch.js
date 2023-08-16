import React, { useEffect, useState } from "react";

function UseFetch(url) {
  const [responses, setResponses] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setResponses(data));
  }, []);
  return responses;
}

export default UseFetch;

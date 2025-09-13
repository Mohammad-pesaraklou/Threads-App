"use client";

import React, { useEffect } from "react";

function page() {
  useEffect(() => {
    fetch("api/home")
      .then((req) => req.json())
      .then((res) => console.log(res));
  }, []);

  return <div>page</div>;
}

export default page;

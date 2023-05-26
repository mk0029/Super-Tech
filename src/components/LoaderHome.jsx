import React, { useEffect, useState } from "react";
function LoaderHome() {
  const [loder, setloader] = useState(false);
  useEffect(() => {
    setloader(true);
    setTimeout(() => {
      setloader(false);
    }, 2700);
  }, []);
  {
    if (loder === true) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }
  return (
    <>
      {" "}
      {loder ? (
        <section
          style={{ zIndex: "999999999" }}
          className=" bg-black top-0 start-0 position-fixed h-100 w-100 d-flex flex-column justify-content-center align-items-center">
          {" "}
          <div class="ayoub-loader">
            <div class="loader"></div>
          </div>
        </section>
      ) : (
        ""
      )}
    </>
  );
}

export default LoaderHome;

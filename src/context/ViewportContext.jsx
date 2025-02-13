import React, { useState, useEffect, useMemo } from "react";

const ViewportContext = React.createContext({});

const ViewportProvider = ({ children }) => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // const isMobileView = useMemo(() => {
  //   return width <= 768;
  // }, [width]);

  return (
    <ViewportContext.Provider value={{ width }}>
      {children}
    </ViewportContext.Provider>
  );
};

export { ViewportContext, ViewportProvider };

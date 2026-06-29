import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { trackPageView } from "../config/analytics";

const PageViewTracker = ({ pageTitle }) => {
  const location = useLocation();

  useEffect(() => {
    const path = `${location.pathname}${location.search}`;
    trackPageView(path, pageTitle || document.title);
  }, [location, pageTitle]);

  return null;
};

export default PageViewTracker;

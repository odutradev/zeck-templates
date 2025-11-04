import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const ReloadHandler = () => {
    const location = useLocation();
    useEffect(() => {
      const params = new URLSearchParams(location.search);
      if (params.has("reload")) {
        params.delete("reload");
        const newUrl = location.pathname + (params.toString() ? `?${params.toString()}` : "");
        window.history.replaceState(null, "", newUrl);
        window.location.reload();
      }
    }, [location]);
    return null;
};

export default ReloadHandler;
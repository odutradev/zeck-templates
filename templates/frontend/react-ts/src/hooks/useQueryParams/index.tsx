import { useLocation } from "react-router-dom";

import type { QueryParams } from "./types";

const useQueryParams = <T extends QueryParams>() => {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  return Object.fromEntries(params) as T;
};

export default useQueryParams;
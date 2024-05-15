import { useParams, useSearchParams } from "react-router-dom";

const useUrlParams = (searchParamKeys: string[], paramKeys: string[]) => {
  let result: { [key: string]: any } = {};
  const [searchParams] = useSearchParams();
  const params = useParams();
  searchParamKeys.forEach((sk) => (result[sk] = searchParams.get(sk)));
  paramKeys.forEach((pk) => (result[pk] = params[pk]));
  return result;
};

export default useUrlParams;

import {
  generatePath,
  NavigateOptions,
  useNavigate as routerUseNavigate,
} from "react-router-dom";

export function useNavigate() {
  const routerNavigate = routerUseNavigate();

  const navigate = (
    path: string,
    queryParams?: any,
    options?: NavigateOptions
  ) => {
    const pathname = queryParams ? generatePath(path, queryParams) : path;
    routerNavigate(pathname, options);
  };

  return navigate;
}

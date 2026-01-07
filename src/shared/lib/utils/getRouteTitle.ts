import { PRIVATE_ROUTES } from "../../constants/routes/private/routes";

export function getRouteTitle(pathname: string): string {
  const route = Object.values(PRIVATE_ROUTES).find(
    (route) => route.path === pathname
  );

  return route?.title ?? "";
}

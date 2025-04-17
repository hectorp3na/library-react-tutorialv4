import { type RouteConfig, route } from "@react-router/dev/routes";

//TODO1: please add a route for the home page. Fill the appropiate path and component inside of the empty quotations
export default [
  route("/welcome", "./routes/welcome.tsx"),
  route("", ""),
] satisfies RouteConfig;

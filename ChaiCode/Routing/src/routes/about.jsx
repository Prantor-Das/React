import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: RouteComponent,
  defaultPreload: "Intent",
});
// defaultPreload: "Intent" is used to preload the route


function RouteComponent() {
  return <div>Hello "/about"!</div>;
}

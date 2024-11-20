import { Outlet, createRootRoute, useMatchRoute } from "@tanstack/react-router";

import { TanStackRouterDevtools } from "@tanstack/router-devtools";

const RootComponent = () => {
  const isHome = useMatchRoute()({ to: "/" });

  return (
    <div className="bg-black-7">
      <div
        className={`m-auto min-h-screen max-w-[500px] ${isHome ? "bg-black-3" : "bg-black-1"} px-5 py-16`}
      >
        <Outlet />
        <TanStackRouterDevtools />
      </div>
    </div>
  );
};

export const Route = createRootRoute({
  component: RootComponent,
});

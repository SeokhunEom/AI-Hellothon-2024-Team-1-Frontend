import {
  Outlet,
  ScrollRestoration,
  createRootRoute,
  useMatchRoute,
} from "@tanstack/react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

const queryClient = new QueryClient();

const RootComponent = () => {
  const isIndex = useMatchRoute()({ to: "/" });
  const isCare = useMatchRoute()({ to: "/care" });
  const isHome = isIndex || isCare;

  return (
    <QueryClientProvider client={queryClient}>
      <div className="bg-black-7">
        <div
          className={`m-auto min-h-screen max-w-[500px] ${isHome ? "bg-black-3" : "bg-black-1"} px-5 py-16`}
        >
          <ScrollRestoration />
          <Outlet />
        </div>
      </div>
      <TanStackRouterDevtools />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export const Route = createRootRoute({
  component: RootComponent,
});

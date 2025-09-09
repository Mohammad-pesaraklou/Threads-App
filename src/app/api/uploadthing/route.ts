import { createRouteHandler } from "uploadthing/next"; // تغییر نام import

import { ourFileRouter } from "./core";

export const { GET, POST } = createRouteHandler({
  router: ourFileRouter,
});

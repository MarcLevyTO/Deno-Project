import { Application } from "https://deno.land/x/oak/mod.ts";

import router from "./routes.ts";

const port = 5001;
const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

console.log(`Server running on port ${port}`, Deno.env.get("TOKEN"));

await app.listen({ port });

import { NextApiRequest, NextApiResponse } from "next";
import { Server } from "tus-node-server";
import tus from "tus-node-server";

const server = new tus.Server();
server.datastore = new tus.Server.FileStore({ path: "/tmp/uploads" });
server.datastore = new Server.FileStore({ path: "/tmp/uploads" });

export const config = { api: { bodyParser: false } };

export default (req: NextApiRequest, res: NextApiResponse) => {
  server.handle(req, res);
};

import cors from 'cors';
import express, { Application, Router, json } from 'express';
import { Server } from 'http';

import { host, protocol, port, env, apiBaseUrl } from './config';
import restApi from './restApi';

const useApi = (app: Application, version: string, api: Router, prefix = '/api') => {
  app.use(`${prefix}/${version}`, cors(), json({ limit: '30mb' }), api);

  console.log(`api ${version} available at ${protocol}://${host}:${port}${prefix}/${version}`);
};

const startServer = (app: express.Application) => {
  return new Promise<Server>((resolve) => {
    const server = app.listen(port, () => {
      resolve(server);
    });
  });
};

const app = express();

const versionNames = Object.keys(restApi);
for (const versionName of versionNames) {
  const api = restApi[versionName];
  useApi(app, versionName, api);
}

export { app };

export default async () => {
  await startServer(app);
  console.info(
    `api gateway is listening on ${apiBaseUrl} in ${env} mode for Process Id ${process.pid}`,
  );
};

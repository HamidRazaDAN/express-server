import { config } from 'dotenv';
import { IConfig } from './IConfig';

config();
const envVars: NodeJS.ProcessEnv = process.env;

const configuration: IConfig = Object.freeze({
  MONGO_URL: envVars.MONGO_URL,
  port: envVars.PORT,
});

export default configuration;

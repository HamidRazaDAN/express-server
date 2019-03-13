import { config } from 'dotenv';
import { IConfig } from './IConfig';

config();
const envVars: NodeJS.ProcessEnv = process.env;

const configuration: IConfig = Object.freeze({
  port: envVars.PORT,
  MONGO_URL: envVars.MONGO_URL
});

export default configuration;

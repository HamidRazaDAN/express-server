import { config } from 'dotenv';
import { IConfig } from './IConfig';

config();
const envVars: NodeJS.ProcessEnv = process.env;

const configuration: IConfig = Object.freeze({
  MONGO_URL: envVars.MONGO_URL,
  PASSWORD: envVars.PASSWORD,
  PORT: envVars.PORT,
  PRIVATE_KEY: envVars.PRIVATE_KEY,
});

export default configuration;

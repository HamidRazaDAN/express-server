import { config } from 'dotenv';
import { IConfig } from './IConfig';

config();
const envVars: NodeJS.ProcessEnv = process.env;

const configuration: IConfig = Object.freeze({
  port: envVars.PORT
});

export default configuration;

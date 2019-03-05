import { config } from './config';
import Server from './Server';

const server: Server = new Server(config);
server.bootstrap();
server.run();

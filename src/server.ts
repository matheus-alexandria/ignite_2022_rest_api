import { env } from './env';
import { server } from './initFastifyServer';

server.listen({
  port: env.PORT,
  host: '0.0.0.0',
}, () => {
  console.log('HTTP Server Online!');
});

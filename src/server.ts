import { env } from './env';
import { server } from './initFastifyServer';

server.listen({ port: env.PORT }, () => {
  console.log('HTTP Server Online!');
});

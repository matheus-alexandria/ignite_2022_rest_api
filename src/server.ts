import fastify from 'fastify';

const server = fastify();

server.listen({ port: 3333 }, () => {
  console.log('HTTP Server Online!');
});

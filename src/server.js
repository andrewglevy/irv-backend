import app from './app';
import "@babel/polyfill";
import config from './config';

const port = config.server.port;

async function main(){
await app.listen(port);
   console.log(`server running on ${port}`);
}
main();
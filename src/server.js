import app from './app';
import "@babel/polyfill";
import config from './config/config';
import db from './models/index';

const port = config.server.port;

async function main() {

   try {
      await db.sequelize.sync({ force: true })
   } catch (err) {
      console.log(`Error connectiong to database: ${err}`)
   }

   await app.listen(port);
   console.log(`Server running on ${port}`);
}
main();
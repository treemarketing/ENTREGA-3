
const dotenv = require('dotenv')
const path = require('path')

console.log(process.env.NODE_ENV + ".env");


dotenv.config({
  path: path.resolve(process.cwd(), process.env.NODE_ENV + ".env"),
})

//si esta solo .env
// dotenv.config()


//  const MONGOURL= process.env.MONGOURL
// console.log(MONGOURL)

// module.exports = {
//     //HOST: process.env.HOST || "127.0.0.1",
//     MONGO_URL: process.env.MONGOURL
//     //PORT: process.env.PORT || 3000,
//   };
  

//funciona con yargs

  //  const yargs = require('yargs/yargs')(process.argv.slice(2))
  //  const args = yargs
  //    .default({
  //    PORT: 8080,
  //    MODO: 'FORK' 
  //  })

  //  .argv
  




  //  const PORT = args.PORT
  // const MODO = args.MODO



   module.exports = { MONGOURL: process.env.MONGOURL,
    NODE_ENV: process.env.NODE_ENV,
    PORT: process.env.PORT,
    TIPO_PERSISTENCIA: process.env.TIPO_PERSISTENCIA,
   }


  // module.exports = {
  //   NODE_ENV: process.env.NODE_ENV || "production",
  //   HOST: process.env.HOST || "localhost",
  //   PORT: process.env.PORT || 8080,
  //   //FILE - MONGO
  //   TIPO_PERSISTENCIA: process.env.TIPO_PERSISTENCIA || "MONGO",
  //   MONGOURL
  // }
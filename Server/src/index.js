const server = require('./app');
const { conn } = require("./DB_connection")

const PORT = process.env.PORT || 3001;


  
server.listen(PORT, () => { 
    conn.sync({force:true})
    console.log(`Listening on port: ${PORT}`)
  });




const server = require('./server');

const PORT = process.env.PORT || 5000;

server.listen("4000", () => {
  console.log(`server is running on port ${PORT}`);
});


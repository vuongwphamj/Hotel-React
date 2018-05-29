const config = {
    mongoURL: process.env.MONGO_URL || 'mongodb://adminDemoAR:12345@localhost:27017/DemoAR',
    port: process.env.PORT || 8000,
};
  //use DemoAR
  //db.createUser({ user: "adminDemoAR", pwd: "12345", roles: [ { role: "userAdmin", db: "DemoAR" } ] })
  
export default config;
  
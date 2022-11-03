export const env_vars = {
  // Project ENV Vars
  APP_PORT: process.env.PORT || 3001,
  MONGO_IP: process.env.MONGO_IP || "mongo-container",
  MONGO_PORT: process.env.MONGO_PORT || 27017,
  MONGO_USER: process.env.MONGO_USER,
  MONGO_PASSWORD: process.env.MONGO_PASSWORD,
  TOKEN_SECRET: process.env.TOKEN_SECRET,
};

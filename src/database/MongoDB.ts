import Mongoose from "mongoose";

Mongoose.set("useCreateIndex", true);

Mongoose.connect(
  process.env.MONGODB_URL as string,
  {
    useCreateIndex: true,
    useNewUrlParser: true,
    keepAlive: true,
    keepAliveInitialDelay: 30000,
    useUnifiedTopology: true
  },
  (error: any): any => {
    if (error) {
      throw error;
    }
  }
);

export default Mongoose;

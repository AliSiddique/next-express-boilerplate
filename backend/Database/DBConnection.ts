import mongoose from 'mongoose';

const DBConnection = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI as string);
        console.log(`MongoDB Connected: ${connection.connection.host}`);
    } catch (error:any) {
        console.log(`Error: ${error.message}`);
        process.exit(1);
    }
    }

export default DBConnection;
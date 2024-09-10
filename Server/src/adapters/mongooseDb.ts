import mongoose, { ConnectOptions } from "mongoose";
import { mongoConfig } from '../config/dbConfig';


const mongooseDb = async () => {
    mongoose.set('strictQuery', false);

    await mongoose.connect(mongoConfig.url!, <ConnectOptions>{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverSelectionTimeoutMS: 30000,
    })
    .then(() =>{
        console.log("DB connection succesfull..");
        //initial();
    })
    .catch(error => {
        console.log("DB connection failed");
        console.log(error);
        process.exit(1)
    })

}

// async function initial() {
//     try {
//         const count = await Role.estimatedDocumentCount();
//         if (count === 0) {
//             await Role.create({ name: "user" });
//             await Role.create({ name: "profesor" });
//             await Role.create({ name: "admin" });
//             console.log("Roles collection initialized.");
//         }
//     } catch (err) {
//         console.log("Error initializing roles collection:", err);
//     }
// }



export default mongooseDb;
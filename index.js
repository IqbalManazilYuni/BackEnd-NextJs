import express from 'express'
import cors from "cors";
import dotenv from 'dotenv';
import { Sequelize } from "sequelize";
import bodyParser from 'body-parser';
import AdminRoutes from './routes/AdminRoutes.js'
import PostinganRoutes from './routes/PostinganRoutes.js'
import KategoriRoutes from './routes/KategoriRoutes.js'
import Admin from './models/admin.js';
import Postingan from './models/postingan.js';
import Kategori from './models/kategori.js';
import { RelasiPostingan, RelasiUser } from './relasi.js';

dotenv.config();
const app = express();

const sequelize = new Sequelize({
    dialect: 'mysql',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DBNAME
});

try {
    await sequelize.authenticate();
    console.log('Connection to the database has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
    process.exit(1);
}
const corsOptions = {
    origin: (origin, callback) => {
        callback(null, true);
    }
};

app.use(cors(corsOptions));

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

// const modelsToSync = [
//     Admin,
//     Kategori,
//     Postingan,
// ];

// (async () => {
//     for (const model of modelsToSync) {
//         try {
//             await model.sync();
//             console.log(`Model ${model.name} synchronized successfully.`);
//         } catch (error) {
//             console.error(`An error occurred while synchronizing ${model.name}:`, error);
//             process.exit(1);
//         }
//     }
// })();

// (async () => {
//     try {
//         await RelasiUser();
//         await RelasiPostingan();
//         console.log('Relationships setup successfully.');
//     } catch (error) {
//         console.error('An error occurred while setting up relationships:', error);
//         process.exit(1);
//     }
// })();

app.use(AdminRoutes)
app.use(PostinganRoutes)
app.use(KategoriRoutes)

app.listen(process.env.PORT, '0.0.0.0', () => {
    console.log("Listening on port", process.env.PORT);
});

import 'dotenv/config';
import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import * as mongoose from "mongoose";
import * as process from "process";

const envFile = process.env.NODE_ENV === 'production' ? '.env.production' : '.env.development';
dotenv.config({ path: envFile });

const app : express.Application = express();

const PORT:number = parseInt(process.env.PORT || '8080', 10);

app.get('/', (req: Request, res: Response) => {
    console.log('req', req);
    res.send('Hello, World!');
});
async function start(): Promise<void> {
    try {
        await mongoose.connect(process.env.MONGO_DB_CONNECTION_STRING || '');
        console.log('Database connected');
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}
start();

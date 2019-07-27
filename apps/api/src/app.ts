import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as mongoose from 'mongoose'
import 'dotenv/config';

export class App {
    public app: express.Application;
    public port: number;

    constructor(routes: express.Router) {
        this.app = express();
        this.port = parseInt(process.env.PORT);
     
        this.initializeDbConnection();
        this.initializeMiddlewares();
        this.initializeRoutes(routes);
    }
     
    private initializeMiddlewares() {
        this.app.use(bodyParser.json());
    }
     
    private initializeRoutes(routes) {
        this.app.use('/', routes);
    }

    private initializeDbConnection() {
        const {
            MONGO_USER,
            MONGO_PASSWORD,
            MONGO_PATH,
        } = process.env;

        const options: mongoose.ConnectionOptions = {
            user: MONGO_USER, 
            pass: MONGO_PASSWORD,
            useNewUrlParser: true
        }
        
        mongoose.connect(`mongodb://${MONGO_PATH}`, options);
    }
     
    public listen() {
        this.app.listen(this.port, () => {
            console.log(`App listening on port ${this.port}`);
        });
    }
}
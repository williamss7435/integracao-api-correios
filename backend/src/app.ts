import 'express-async-errors';
import express,{Express, Request, Response, ErrorRequestHandler, NextFunction} from 'express';
import cors from 'cors';
import Youch from 'youch';

import Database from './database/DataBase';
import Router from './router';

export default class App{
    private app: Express;
    private router: Router;

    constructor(port: number){
        this.app = express();
        this.router = new Router();

        this.configApp();
        this.startDatabase();
        this.errorHandler();
        this.app.listen(port);
    }

    private configApp(): void {
        this.app.use(express.json());
        this.app.use(cors());
        this.app.use(this.router.getAllRouters());
    }

    private startDatabase():void {
        Database;
    }

    private errorHandler(): void {
        this.app.use(async (err: ErrorRequestHandler, resquest: Request, response: Response, next: NextFunction) => {
          const error = await new Youch(err, resquest).toJSON();
    
          return response.status(500).json({
            error,
          });
        });
    }
    
}
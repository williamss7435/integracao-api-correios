import {Router as RouterExpress} from 'express';

import DoctorController from './app/controllers/DoctorController';
import SpecialtyController from './app/controllers/SpecialtyController';
import DoctorSpecialtyController from './app/controllers/DoctorSpecialtyController';

import correriosAPI from './app/middleware/CorreriosAPI';
import validateSchemaDoctor from './app/utils/validateSchemaDoctor';

export default class Router{
    router: RouterExpress;
    
    constructor(){
        this.router = RouterExpress();
    }

    public getAllRouters (): RouterExpress{
        this.DoctorRouter();
        this.SpecialtyRouter();
        this.DoctorSpecialtyRouter();

        return this.router;
    }

    private DoctorRouter(): void {
        this.router.get("/doctor", DoctorController.get);
        this.router.post("/doctor", correriosAPI, DoctorController.edit);
        this.router.put("/doctor", validateSchemaDoctor, correriosAPI, DoctorController.create);
        this.router.delete("/doctor/:doctor_id", DoctorController.delete);
    }

    private SpecialtyRouter(): void {
        this.router.get("/specialty", SpecialtyController.get);
    }

    private DoctorSpecialtyRouter(): void {
        this.router.put("/doctor-specialty", DoctorSpecialtyController.create);
    }

}
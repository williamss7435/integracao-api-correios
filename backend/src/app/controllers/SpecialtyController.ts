import {Request, Response} from 'express';
import {Op} from 'sequelize';

import Specialty from '../models/Specialty';

class SpecialtyController {

    public async get(request: Request, response: Response){
        const specialties = await Specialty.findAll();
        return response.status(200).json(specialties);
    }

}

export default new SpecialtyController();
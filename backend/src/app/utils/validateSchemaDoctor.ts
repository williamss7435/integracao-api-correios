import {Request, Response, NextFunction} from 'express';

import {saveDoctorSchema} from '../schemas/Doctor';

export default async function validateSchemaDoctor(request: Request, response: Response, next: NextFunction){
    try {
        await saveDoctorSchema.validate(request.body);
        return next();
    } catch (error) {
        return response.status(400).json({error: error.message});
    }
}
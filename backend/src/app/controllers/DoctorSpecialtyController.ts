import {Request, Response} from 'express';
import {Op} from 'sequelize';

import DoctorSpecialty from '../models/DoctorSpecialty';
import Doctor from '../models/Doctor';

import {saveDoctorSpecialtySchema} from '../schemas/DoctorSpecialties';

class SpecialtyController {

    public async create(request: Request, response: Response){
        try {await saveDoctorSpecialtySchema.validate(request.body)} 
        catch (error) {return response.status(400).json({error: error.message})}


        const {doctor_id, specialties} = request.body;

        const doctor: Doctor|null = await Doctor.findByPk(doctor_id);

        if(!doctor){
            return response.status(400).json({error: 'médico não encontrado'});
        }

        specialties.forEach(async (specialty_id: any) => {
            const doctor_specialty = await DoctorSpecialty.findOne({
                where: {
                    doctor_id,
                    specialty_id
                }
            });

            if(!doctor_specialty){
                await DoctorSpecialty.create({
                    doctor_id,
                    specialty_id
                })
            }

        });

        return response.status(200).json({success: true});
    }

}

export default new SpecialtyController();
import {Request, Response} from 'express';
import {Op, where} from 'sequelize';

import Doctor from '../models/Doctor';
import DoctorSpecialty from '../models/DoctorSpecialty';
import Adress from '../models/Adress';
import Specialty from '../models/Specialty';

class DoctorController {

    public async get(request: Request, response: Response){
        const {
            name, crm, phone, cell_phone,
            cep, street, district, state, city, complement,
            specialty
        } = request.query;
        
        let doctorWhere: any = {deleted_at: null}
        let adressWhere: any = {}
        let specialtyWhere: any = {}

        if(name)
            doctorWhere.name = {[Op.iLike]: `%${name}%`};
        
        if(crm)
            doctorWhere.crm = crm;
        
        if(phone)
            doctorWhere.phone = {[Op.iLike]: `%${phone}%`};
        
        if(cell_phone)
            doctorWhere.cell_phone = {[Op.iLike]: `%${cell_phone}%`};
        
        if(cep)
            adressWhere.cep = cep;

        if(street)
            adressWhere.street = {[Op.iLike]: `%${street}%`};

        if(district)
            adressWhere.district = {[Op.iLike]: `%${district}%`};

        if(state)
            adressWhere.state = {[Op.iLike]: `%${state}%`};

        if(city)
            adressWhere.city = {[Op.iLike]: `%${city}%`};

        if(complement)
            adressWhere.city = {[Op.iLike]: `%${city}%`};

        if(specialty)
            specialtyWhere.description = {[Op.iLike]: `%${specialty}%`};

        const doctors =  await Doctor.findAll({
            where: doctorWhere,
            attributes: ['id', 'name', 'crm', 'phone', 'cell_phone', ],
            include: [
                {
                    model: Adress,
                    as: "adress",
                    attributes: ['cep', 'street', 'district', 'state', 'city', 'complement'],
                    where: adressWhere
                },
                {
                    model: DoctorSpecialty,
                    as: 'specialties',
                    attributes: ['id'],
                    include: [
                        {
                            model: Specialty,
                            as: 'specialty',
                            attributes: ['description'],
                            where: specialtyWhere
                        }
                    ]
                }
            ]
        });

        return response.status(200).json(doctors);
    }

    public async create(request: Request, response: Response){
        //Validações e integração com a api dos correrios no arquivo router.ts
        const {adress, name, crm, phone, cell_phone} = request.body;

        let adress_id: number;
        if(adress.origin === 'database'){
            adress_id = adress.id
        }else{
            const newAdress: Adress|null = await Adress.create(adress);
            adress_id = newAdress.get().id;
        }

        const newDoctor: Doctor|null = await  Doctor.create({
            adress,
            name,
            crm, 
            phone,
            cell_phone,
            adress_id
        });

        const doctor: Object = newDoctor.get();
        
        Reflect.deleteProperty(doctor, 'deleted_at');
        delete adress.origin;
        delete adress.id;

        return response.status(200).json({
            doctor,
            adress
        });
    }

    public async edit(request: Request, response: Response){
        //Validações e integração com a api dos correrios no arquivo router.ts
        const {doctor_id ,adress, name, crm, phone, cell_phone} = request.body;

        let adress_id: number = -1;
        if(adress)
        if(adress.origin === 'database'){
            adress_id = adress.id
        }else{
            const newAdress: Adress|null = await Adress.create(adress);
            adress_id = newAdress.get().id;
        }

        const doctor: Doctor|null = await Doctor.findByPk(doctor_id);

        if(!doctor){
            return response.status(400).json({error: "médico não encontrado"})
        }
        
        if(name)
            doctor.name = name;
        
        if(crm)
            doctor.crm = crm;

        if(phone)
            doctor.phone = phone;

        if(cell_phone)
            doctor.cell_phone = cell_phone;
        
        if(adress_id !== -1)
            doctor.adress_id = adress_id;

        const editedDoctor: Doctor|null = await doctor.save();

        return response.status(200).json({
            doctor: editedDoctor.get(),
            adress
        });
    }

    public async delete(request: Request, response: Response){
        const {doctor_id} = request.params;

        if(!doctor_id || isNaN(Number(doctor_id))){
            return response.status(400).json({error: "id inválido"});
        }

        const doctor: Doctor|null = await Doctor.findOne({
            where: {
                id: doctor_id,
                deleted_at: null,
            }
        });

        if(!doctor){
            return response.status(400).json({error: "médico não encontrado"});
        }

        doctor.deleted_at = <Date> <unknown>new Date().toISOString();
        await doctor.save();

        return response.status(200).json({sucess: true});
    }

}

export default new DoctorController();
import {Model, ModelAttributes, Options, Sequelize} from 'sequelize';
const databaseConf = require('../configs/databaseConf');

import Doctor from '../app/models/Doctor';
import Adress from '../app/models/Adress';
import Specialty from '../app/models/Specialty';
import DoctorSpecialty from '../app/models/DoctorSpecialty';

class Database {
    private connection: Sequelize;

    constructor(){    
        this.connection = new Sequelize(<Options> databaseConf);
        this.configModels();
    }

    private configModels(): void{
        Doctor.init(<ModelAttributes> Doctor.attributes(), {sequelize: this.connection});
        Adress.init(<ModelAttributes> Adress.attributes(), {sequelize: this.connection});
        Specialty.init(<ModelAttributes> Specialty.attributes(), {sequelize: this.connection});
        DoctorSpecialty.init(<ModelAttributes> DoctorSpecialty.attributes(), {sequelize: this.connection});

        Doctor.belongsTo(this.connection.models.Adress, {foreignKey: 'adress_id', as: 'adress'});
        Doctor.hasMany(this.connection.models.DoctorSpecialty, {foreignKey: 'doctor_id', as: 'specialties'});

        DoctorSpecialty.belongsTo(this.connection.models.Doctor, {foreignKey: 'doctor_id', as: 'doctor'});
        DoctorSpecialty.belongsTo(this.connection.models.Specialty, {foreignKey: 'specialty_id', as: 'specialty'});
    }

}

export default new Database();
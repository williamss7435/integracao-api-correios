import Mask from '../utils/Mask';
import Connection from './class/Connection';

class DoctorService extends Connection {
    
    constructor(){
        super('http://localhost:3333')
    }

    async get(query = null){
        let url = '/doctor';
        if(query) url += `?name=${query}`;

        const response =  await this.AsyncGet(url);

        if(response.success){
            response.data = this.formatUserData(response.data);
        }

        return response;
    }

    formatUserData(data){
        return data.map(doctor => { return {
            ...doctor,
            crm: Mask.formatCRM(doctor.crm),
            phone:  Mask.formatPhone(doctor.phone),
            cell_phone:  Mask.formatCellPhone(doctor.cell_phone),
        }});
    }

    async save(doctor){
        return await this.AsyncPut('/doctor', doctor);
    }

}

export default new DoctorService();
export default class Mask {


    static formatCRM(data){
        let crm = String(data);
        try{
            return crm.substr(0, 2) + '.' + crm.substr(2, 3) + '.' + crm.substr(5)
        }catch(e){
            return crm;
        }
    }

    static formatPhone(data){
        let phone = String(data);
        try{
            return '(' + phone.substr(0, 2) + ') ' + phone.substr(2, 4) + '-' + phone.substr(6)
        }catch(e){
            return phone;
        }
    }

    static formatCellPhone(data){
        let cell_phone = String(data);
        try{
            return '(' + cell_phone.substr(0, 2) + ') ' + cell_phone.substr(2, 5) + '-' + cell_phone.substr(7)
        }catch(e){
            return cell_phone;
        }
    }

    static formatCEP(data){
        let cep = data;
        try{
            return cep.substr(0, 5) + "-" + cep.substr(5)
        }catch(e){
            console.log(e);
            return cep;
        }
    }


}
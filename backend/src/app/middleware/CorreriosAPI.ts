import {createClient} from 'soap';
import {NextFunction, Request, Response} from 'express';

import Adress from '../models/Adress';

export default async function (request: Request, response :Response, next: NextFunction){
    const {cep} = request.body;

    if(!cep) next();

    const adressExits: Adress|null = await Adress.findOne({where: {cep}})
    //Se o endereço já existir no banco, não chamar a api dos correrios
    if(adressExits){
        request.body.adress = adressExits.get();
        request.body.adress.origin = 'database';
        return next();
    }

    //Caso o endereço não exista no banco, chamar a api dos correrios
    const url = "https://apps.correios.com.br/SigepMasterJPA/AtendeClienteService/AtendeCliente?wsdl";
    createClient(url, (err, client) => {

        if(err){
            return response.status(502).json({error: "Erro ao buscar o endereço: API dos correrios não está disponivel"});
        }else {

            client.consultaCEP({cep}, async (err: any, res: any) => {
        
                if(err){
                    return response.status(401).json({
                        error: `Cep ${cep} não encontrado`
                    });
                }else {
                    request.body.adress = {
                        cep: res.return.cep,
                        street: res.return.end,
                        district: res.return.bairro,
                        state: res.return.uf,
                        city: res.return.cidade,
                        complement: res.return.complemento,
                        origin: 'correrios',
                    };
                    return next();
                }
        
            });

        }

    });


}
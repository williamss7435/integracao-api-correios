
import {Card, CardItem} from './styles';
export default function DoctorCardComponent({doctor}){


    return (
        <Card>
            <div className="name">{doctor.name}</div>
            <CardItem>
                <div>CRM</div>
                <span>{doctor.crm}</span>
            </CardItem>
            <CardItem>
                <div>TEL</div>
                <span>{doctor.phone}</span>
            </CardItem>
            <CardItem>
                <div>CEL</div>
                <span>{doctor.cell_phone}</span>
            </CardItem>
            <CardItem>
                <div>CEP</div>
                <span>{doctor.adress.cep}</span>
            </CardItem>
            <button>Mais Detalhes</button>
        </Card>
    );

}
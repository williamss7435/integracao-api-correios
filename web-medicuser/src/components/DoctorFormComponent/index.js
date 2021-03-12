import { useState } from 'react';
import {Col, Row, Form, Button} from 'react-bootstrap';


export default function DoctorFormComponent({fnOnClick}){
    //Component não completado
    //Falta integrar os checkboxs
    
    const [name, setName] = useState('');
    const [crm, setCrm] = useState('');
    const [phone, setPhone] = useState('');
    const [cell_phone, setCellPhone] = useState('');
    const [cep, setCEP] = useState('');

    function onlyLetters(e, fn, length) {
        fn(e.target.value.replace(/[0-9]*\.?[0-9]+/g, '').substring(0, length));
    }

    function onlyNumbers(e, fn, length) {
        fn(e.target.value.replace(/\D/,'').substring(0, length));
    }

    function onClick(){
        fnOnClick({name, crm, cep, phone, cell_phone})
    }

    return (
        <Form>
            <Form.Group>
              <Form.Label>Nome</Form.Label>
              <Form.Control type="text" value={name} onChange={(e) => onlyLetters(e, setName, 120)} />
            </Form.Group>
            <Form.Group>
              <Form.Label>CRM</Form.Label>
              <Form.Control value={crm} onChange={(e) => onlyNumbers(e, setCrm, 5)} type="text"/>
            </Form.Group>
            <Form.Group>
              <Form.Label>CEP</Form.Label>
              <Form.Control value={cep} onChange={(e) => onlyNumbers(e, setCEP, 8)} type="text"/>
            </Form.Group>
            <Form.Row>
              <Col>
                <Form.Label>Telefone Fixo</Form.Label>
                <Form.Control value={phone} onChange={(e) => onlyNumbers(e, setPhone, 10)} type="text"/>
              </Col><Col>
                <Form.Label>Telefone Fixo</Form.Label>
                <Form.Control type="text" value={cell_phone} onChange={(e) => onlyNumbers(e, setCellPhone, 11)}/>
              </Col>
            </Form.Row>
            <Form.Group controlId="formBasicCheckbox">
              <Col style={{fontWeight: 'bold', marginTop: 5, marginBottom: 5}}>Especialidades</Col>
              <Row>
                  <Col xl={6}><Form.Check type="checkbox" label="Alergologia"/></Col>
                  <Col xl={6}><Form.Check type="checkbox" label="Angiologia" /></Col>
                  <Col xl={6}><Form.Check type="checkbox" label="Buco maxilo" /></Col>
                  <Col xl={6}><Form.Check type="checkbox" label="Cardiologia clínica" /></Col>
                  <Col xl={6}><Form.Check type="checkbox" label="Cardiologia infantil" /></Col>
                  <Col xl={6}><Form.Check type="checkbox" label="Cirurgia cabeça e pescoço" /></Col>
                  <Col xl={6}><Form.Check type="checkbox" label="Cirurgia cardíaca" /></Col>
                  <Col xl={6}><Form.Check type="checkbox" label="Cirurgia de tórax" /></Col>
              </Row>
            </Form.Group>
            <Button type='button' block onClick={onClick}>
                Salvar
            </Button>
        </Form>
    )

}
import React, { useEffect, useState } from 'react';
import {Row, Col, Modal} from 'react-bootstrap';
import {toast} from 'react-toastify';

import MenuComponent from '../../components/MenuComponent';
import LoadComponent from '../../components/LoadComponent';
import DoctorCardComponent from '../../components/DoctorCardComponent';
import DoctorFormComponent from '../../components/DoctorFormComponent';
import SearchbarComponent from '../../components/SearchbarComponentComponent';

import DoctorService from '../../services/DoctorService';

import { Title } from './styles';

export default function DoctorPage() {
  //Projeto não finalizado:
  //Falta a integração de mais detalhes e integração de outros metodos da api


  const [doctors, setDoctors] = useState([]);
  const [search, setSearch] = useState('');

  const [loading, setLoading] = useState(false);
  const [modalNewDoctor, setModalNewDoctor] = useState(false);


  useEffect(() => {

    (async () => {

      const response = await DoctorService.get();
  
      if(response.success && response.data){
        setDoctors(response.data);
      }

    })()

  }, []);

  async function saveDoctor(data){
    //Validação Generica
    if(data.name === ''){
      toast.error("Digite o nome do médico");
      return;
    }

    if(!data.cep === '' || data.cep.length !== 8){
      toast.error("CEP inválido");
      return;
    }

    if(!data.phone === '' || data.phone.length !== 10){
      toast.error("Telefone inválido");
      return;
    }

    if(!data.cell_phone === '' || data.cell_phone.length !== 11){
      toast.error("Celular inválido");
      return;
    }

    setLoading(true);

    const response = await DoctorService.save(data);

    if(response.success){
      const doctorUpdate = await DoctorService.get(search);

      if(doctorUpdate){
        if(doctorUpdate.success){
          setDoctors(doctorUpdate.data);
        }else{
          toast.error("Erro ao atualizar os dados dos médicos")
        }
      }

      toast.success("Médico salvo com sucesso"); 
    }else{
      toast.error("erro ao salvar o médico");  
    }
    
    setModalNewDoctor(false);
    setLoading(false);
  }

  async function onSearch(search){
    setLoading(true);

    setSearch(search);
    const response = await DoctorService.get(search);

    if(response.success){
      setDoctors(response.data);
    }else{
      toast.error("ocorreu um erro durante a pesquisa")
    }

    setLoading(false);
  }

  return (
      <>
        {loading && <LoadComponent/>}
        <Row>
          <Col xl={1} style={{padding: 0, background: '#015daa'}}>
              <MenuComponent fnOnClick={() => setModalNewDoctor(true)}/>
          </Col>
          <Col xl={11}>
              <Row><Title xl={12}>MÈDICOS</Title></Row>
              <Row>
                <Col xl={12} style={{paddingTop: 20, paddingBottom: 20}}>
                  <SearchbarComponent onSearch={onSearch}></SearchbarComponent>
                </Col>
              </Row>
              <Row><Col xl={12}></Col></Row>
              <Row>
                  {
                    doctors.map(doctor => {
                      return (<Col xl={3} key={doctor.id}><DoctorCardComponent doctor={doctor}></DoctorCardComponent></Col>)
                    })
                  }
              </Row>
          </Col>

          <Modal
                  size="lg"
                  show={modalNewDoctor}
                  onHide={() => {
                      setModalNewDoctor(false)
                  }}
                  aria-labelledby="example-modal-sizes-title-sm"
              >
                  <Modal.Header closeButton>
                      <Modal.Title>Cadastrar Novo Médico</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    {modalNewDoctor && <DoctorFormComponent fnOnClick={saveDoctor}></DoctorFormComponent>}
                  </Modal.Body>
              </Modal>
        </Row>
      </>
  );
}
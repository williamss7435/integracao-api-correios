import * as Yup from 'yup';

export const saveDoctorSpecialtySchema = Yup.object().shape({
    doctor_id: Yup.string()
        .matches(/^[0-9]*$/, 'o id do médico deve conter apenas números')
        .required("id do médico não informado"),
    specialties: Yup.array()
        .min(2, "deve ser inseridas no minimo duas especialidades")
        .required("o campo especialidades é obrigatório")
});
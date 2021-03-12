import * as Yup from 'yup';

export const saveDoctorSchema = Yup.object().shape({
    name: Yup.string()
        .min(4, "o nome deve conter no minímo 4 letras")
        .max(120).typeError("o nome não pode ultrapassar 120 letras")
        .matches(/^[a-zA-Z\s]*$/, 'o nome deve conter apenas letras')
        .required("o campo nome é obrigatório"),
    crm: Yup.string()
        .matches(/^[0-9]*$/, 'o crm deve conter apenas números')
        .min(7, "o crm deve ter 7 números")
        .max(7, "o crm deve ter 7 números")
        .required("o campo crm é obrigatório"),
    phone: Yup.string()
        .matches(/^[0-9]*$/, 'o telefone deve conter apenas números')
        .min(10, "o número de telefone deve ter 10 números: (99)9999-9999")
        .max(10, "o número de telefone deve ter 10 números: (99)9999-9999")
        .required("o campo telefone é obrigatório"),
    cell_phone: Yup.string()
        .matches(/^[0-9]*$/, 'o celular deve conter apenas números')
        .min(11, "o número de celular deve ter 11 números: (99)99999-9999")
        .max(11, "o número de celular deve ter 11 números: (99)99999-9999")
        .required("o campo celular é obrigatório"),
    cep: Yup.string()
        .matches(/^[0-9]*$/, 'o cep deve conter apenas números')
        .min(8, "o cep deve ter 8 números")
        .max(8, "o cep deve ter 8 números")
        .required("o campo cep é obrigatório"),
});
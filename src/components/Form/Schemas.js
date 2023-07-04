import * as Yup from "yup";

export const SignUpSchema = Yup.object({
    name:Yup.string().min(2).max(50).required("please enter your name"),
    email:Yup.string().email().required("please enter your email"),
    phone:Yup.number().required("please enter your phone"),
    birthDate:Yup.date().nullable(),
    gender:Yup.string().required("please enter your gender"),
    address:Yup.string().required("please enter your address"),
    address_line_2:Yup.string().nullable(),
    country:Yup.string().required("please enter your country"),
    city:Yup.string().required("please enter your city"),
    region:Yup.string().required("please enter your region"),
    postalcode:Yup.string().required("please enter your postal_code"),
});
import { Profile } from "enities/profile/model/types/ProfileSchema";
import { FormikErrors } from "formik";

export const validateProfileData = (values: Profile) => {
    const dateRegex = /^(?:(?:(?:[1-9]\d{3})-(?:0[13578]|1[02])-31)|(?:(?:[1-9]\d{3})-(?:0[13-9]|1[0-2])-30)|(?:(?:(?:[1-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:[2468][048]|[3579][26])00)-02-29)|(?:(?:[1-9]\d{3})-(?:0[1-9]|1[0-2])-(?:29|2[0-8]))|(?:(?:[1-9]\d{3})-(?:0[1-9]|1[0-2])-(?:0[1-9]|1\d|2[0-8])))$/
    const errors: FormikErrors<Profile> = {};

    if (!values.username) {
        errors.username = 'Пожалуйста, введите публичное имя';
    } else if (values.username.length > 24 || values.username.length < 3) {
        errors.username = 'Длина имени должна быть от 3 до 32 символов';
    }

    if (!values.name) {
        errors.name = 'Пожалуйста, введите имя';
    } else if (values.name.length > 32) {
        errors.name = 'Длина имени не может превышать 32 символов';
    }

    if (!values.surname) {
        errors.surname = 'Пожалуйста, введите фамилию';
    } else if (values.surname.length > 44) {
        errors.surname = 'Длина фамилии не может превышать 32 символов';
    }

    if (!values.birthdate) {
        errors.birthdate = 'Пожалуйста, введите дату рождения';
    }

    if (!values.gender) {
        errors.gender = 'Пожалуйста, укажите пол';
    }

    if (!dateRegex.test(values.birthdate || '')) {
        errors.birthdate = 'Некорректная дата'
    } else if (!values.birthdate) {
        errors.birthdate = 'Пожалуйста, укажите дату рождения'
    }

    return errors;
};
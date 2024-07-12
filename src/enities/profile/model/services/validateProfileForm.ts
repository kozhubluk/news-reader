import { Profile } from "enities/profile/model/types/ProfileSchema";
import { FormikErrors } from "formik";

export const validateProfileData = (values: Profile) => {
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

    return errors;
};
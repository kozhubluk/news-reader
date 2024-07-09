import { classNames } from 'shared/lib/classNames/classNames'
import * as styles from './ProfileEditForm.module.scss'
import { Input } from "shared/ui/Input/Input";
import { Text, TextSize, TextTheme } from "shared/ui/Text/Text";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { GenderSelection } from "widgets/GenderSelection/ui/GenderSelection";
import { DynamicReducerLoader } from "shared/ui/DynamicReducerLoader/DynamicReducerLoader";
import { profileReducer } from "enities/profile/model/slice/profileSlice";
import { useEffect, useState } from "react";
import { fetchProfileData } from "enities/profile/model/services/fetchProfileData";
import { useSelector } from "react-redux";
import { selectProfileState } from "enities/profile/model/selectors/selectProfileState";
import { useAppDispatch } from "shared/lib/hooks/useDispatch";
import { useFormik } from "formik";
import { Profile } from "enities/profile/model/types/ProfileSchema";
import { validateProfileData } from "enities/profile/model/services/validateProfileForm";

interface ProfileEditFormProps {
    className?: string
}

export const ProfileEditForm: React.FC<ProfileEditFormProps> = (props) => {
    const { className } = props
    const { profile, error, loading } = useSelector(selectProfileState)
    const dispatch = useAppDispatch()

    const formik = useFormik<Profile>({
        initialValues: {
            ...profile,
            username: 'check'
        },
        validate: validateProfileData,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    })

    useEffect(() => {
        (async () => {

            const response = await dispatch(fetchProfileData())
            console.log(response)

        })()
    }, []);

    return <DynamicReducerLoader keyName='profile' reducer={profileReducer}>
        {!loading ?
            <div className={classNames(styles.ProfileEditForm, {}, [className])}>
                <div className={styles.headerWrapper}>
                    <Text className={styles.header} size={TextSize.LARGE}>Ваш профиль</Text>
                </div>
                <form onSubmit={formik.handleSubmit}>
                    <div className={styles.formBlock}>
                        <Text>Как к вам обращаться?</Text>
                        <Input onChange={formik.handleChange} id="username"
                            name="username"
                            value={formik.values.username} placeholder={'Публичное имя'}/>
                        <Text size={TextSize.SMALL} theme={TextTheme.SECONDARY}>Это имя будет отображаться в
                            комментариях</Text>
                    </div>
                    <div className={styles.formBlock}>
                        <Text>Персональные данные</Text>
                        <Text>Имя и Фамилия</Text>
                        <Input placeholder={'Имя'}/>
                        <Input placeholder={'Фамилия'}/>
                        <div className={styles.bottomBlock}>
                            <Text>Пол</Text>
                            <Text>Дата рождения</Text>
                            <GenderSelection/>
                            <Input type='date'
                                max="2022-12-31"
                                value={'2003-04-02'}
                                onChange={(e) => {
                                    console.log(typeof e)
                                }}
                            />
                            <Button type='submit' className={styles.button}
                                theme={ButtonTheme.FILLED}>Сохранить</Button>
                        </div>
                    </div>
                </form>
            </div> 
            : 
            <div>Загрузка...</div>
        }
    </DynamicReducerLoader>
}
import { classNames } from 'shared/lib/classNames/classNames'
import * as styles from './ProfileEditForm.module.scss'
import { Input } from "shared/ui/Input/Input";
import { Text, TextSize, TextTheme } from "shared/ui/Text/Text";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { GenderSelection } from "widgets/GenderSelection/ui/GenderSelection";
import { DynamicReducerLoader } from "shared/ui/DynamicReducerLoader/DynamicReducerLoader";
import { profileReducer } from "enities/profile/model/slice/profileSlice";
import { useCallback, useEffect } from "react";
import { fetchProfileData } from "enities/profile/model/services/fetchProfileData";
import { useSelector } from "react-redux";
import { selectProfileState } from "enities/profile/model/selectors/selectProfileState";
import { useAppDispatch } from "shared/lib/hooks/useDispatch";
import { useFormik } from "formik";
import { Gender, Profile } from "enities/profile/model/types/ProfileSchema";
import { validateProfileData } from "enities/profile/model/services/validateProfileForm";
import { updateProfileData } from "enities/profile/model/services/updateProfileData";
import { Preloader, PreloaderSize } from "shared/ui/Preloader/Preloader";

interface ProfileEditFormProps {
    className?: string
    onSuccess?: () => void
}

export const ProfileEditForm: React.FC<ProfileEditFormProps> = (props) => {
    const { className, onSuccess } = props
    const {
        profile,
        error,
        loading
    } = useSelector(selectProfileState)

    const { fetch: fetchLoading, update: updateLoading } = loading
    const { fetch: fetchError, update: updateError } = error

    const dispatch = useAppDispatch()

    const formik = useFormik<Profile>({
        initialValues: {
            gender: "male",
            ...profile,
        },
        validate: validateProfileData,
        enableReinitialize: true,
        onSubmit: async () => {
            if (Object.keys(formik.errors).length === 0) {
                const { meta } = await dispatch(updateProfileData(formik.values))
                if (meta.requestStatus === 'fulfilled' && onSuccess) {
                    onSuccess()
                }
            }
        },
    })

    const { setFieldValue } = formik

    const setGender = useCallback((gender: Gender) => {setFieldValue('gender', gender)},
        [setFieldValue])

    useEffect(() => {
        (async () => {
            const { meta } = await dispatch(fetchProfileData())
        })()
    }, [])

    if (fetchError) {
        return <div>error</div>
    }

    return <DynamicReducerLoader keyName='profile' reducer={profileReducer} removeAfterUnmount={false}>
        {!fetchLoading ?
            <div className={classNames(styles.ProfileEditForm, {}, [className])}>
                <div className={styles.headerWrapper}>
                    <Text className={styles.header} size={TextSize.LARGE}>Ваш профиль</Text>
                </div>
                <form onSubmit={formik.handleSubmit}>
                    <div className={styles.formBlock}>
                        <Text>Как к вам обращаться?</Text>
                        <Input onChange={formik.handleChange}
                            id='username'
                            name='username'
                            onBlur={formik.handleBlur}
                            value={formik.values.username}
                            error={!!formik.errors.username}
                            placeholder={'Публичное имя'}
                        />
                        {formik.errors.username ?
                            <Text size={TextSize.SMALL} theme={TextTheme.ERROR}>
                                <>{formik.errors.username}</>
                            </Text>
                            :
                            <Text size={TextSize.SMALL} theme={TextTheme.SECONDARY}>
                                Это имя будет отображаться в комментариях
                            </Text>
                        }
                    </div>
                    <div className={styles.formBlock}>
                        <Text>Персональные данные</Text>
                        <Text>Имя и Фамилия</Text>
                        <Input onChange={formik.handleChange}
                            id='name'
                            name='name'
                            value={formik.values.name}
                            error={!!formik.errors.name}
                            placeholder={'Имя'}
                        />
                        {formik.errors.name &&
                            <Text size={TextSize.SMALL} theme={TextTheme.ERROR}>
                                <>{formik.errors.name}</>
                            </Text>
                        }
                        <Input
                            id='surname'
                            name={'surname'}
                            value={formik.values.surname}
                            onChange={formik.handleChange}
                            error={!!formik.errors.surname}
                            placeholder={'Фамилия'}
                        />
                        {formik.errors.surname &&
                            <Text size={TextSize.SMALL} theme={TextTheme.ERROR}>
                                <>{formik.errors.surname}</>
                            </Text>
                        }
                        <div className={styles.bottomBlock}>
                            <Text>Пол</Text>
                            <Text>Дата рождения</Text>
                            <GenderSelection gender={formik.values.gender}
                                setGender={setGender} />
                            <Input type='date'
                                id='birthdate'
                                name='birthdate'
                                error={!!formik.errors.birthdate}
                                max="2022-12-31"
                                value={formik.values.birthdate}
                                onChange={formik.handleChange}
                            />
                            {updateError &&
                                <Text size={TextSize.SMALL} className={styles.error} theme={TextTheme.ERROR}>
                                    {updateError}
                                </Text>}
                            <Button type='submit' className={styles.button} theme={ButtonTheme.FILLED}>
                                {updateLoading ?
                                    <Preloader size={PreloaderSize.SMALL} className={styles['small-preloader']}/>
                                    : 'Сохранить'
                                }
                            </Button>
                        </div>
                    </div>
                </form>
            </div> 
            : 
            <div  className={styles.preloader}>
                <Preloader/>
            </div>
        }
    </DynamicReducerLoader>
}
import {classNames} from 'shared/lib/classNames/classNames'

interface ProfileEditFormProps {
    className?: string

}

export const ProfileEditForm: React.FC<ProfileEditFormProps> = (props) => {
    const {className} = props
    return <div className={classNames(styles.ProfileEditForm}>
    </div>
}
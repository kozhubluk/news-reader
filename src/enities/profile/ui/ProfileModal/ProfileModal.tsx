import { Modal } from "shared/ui/Modal/Modal";
import { ProfileEditForm } from "enities/profile/ui/ProfileEditForm/ProfileEditForm";
import * as styles from './ProfileModal.module.scss'

interface ProfileModalProps {
    open: boolean
    onClose: () => void
}

export const ProfileModal: React.FC<ProfileModalProps> = (props) => {
    const { open, onClose } = props
    return <Modal className={styles.ProfileModal} lazy={false} isOpen={open} onClose={onClose}>
        <ProfileEditForm onSuccess={onClose}/>
    </Modal>
}
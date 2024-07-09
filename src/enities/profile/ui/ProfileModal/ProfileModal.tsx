import { Modal } from "shared/ui/Modal/Modal";
import { ProfileEditForm } from "enities/profile/ui/ProfileEditForm/ProfileEditForm";

interface ProfileModalProps {
    open: boolean
    onClose: () => void
}

export const ProfileModal: React.FC<ProfileModalProps> = (props) => {
    const { open, onClose } = props
    return <Modal lazy={false} isOpen={open} onClose={onClose}>
        <ProfileEditForm/>
    </Modal>
}
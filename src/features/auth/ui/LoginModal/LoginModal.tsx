import { classNames } from 'shared/lib/classNames/classNames'
import { Modal } from "shared/ui/Modal/Modal";
import * as styles from './LoginModal.module.scss'
import { LoginForm } from "features/auth/ui/LoginForm/LoginForm";

interface LoginModalProps {
    className?: string,
    isOpen?: boolean
    onClose?: () => void
}

export const LoginModal: React.FC<LoginModalProps> = (props) => {
    const { className, isOpen, onClose } = props
    return <Modal className={classNames(styles.LoginModal, {}, [className])}
        lazy={true}
        isOpen={isOpen}
        onClose={onClose}>
        <LoginForm/>
    </Modal>
}
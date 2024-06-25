import { classNames } from 'shared/lib/classNames/classNames'
import { Modal } from "shared/ui/Modal/Modal";
import styles from './LoginModal.module.scss'

interface LoginModalProps {
    className?: string
}

export const LoginModal: React.FC<LoginModalProps> = (props) => {
    const { className } = props
    return <Modal>
        <div className={classNames(styles.LoginModal, {}, [className])}>

        </div>
    </Modal>
}
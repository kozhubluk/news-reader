import { classNames } from 'shared/lib/classNames/classNames'
import { Modal } from "shared/ui/Modal/Modal";
import * as styles from './LoginModal.module.scss'
import { LoginFormAsync } from "features/auth/ui/LoginForm/LoginForm.async";
import { memo, Suspense, useCallback } from "react";

interface LoginModalProps {
    className?: string,
    isOpen: boolean
    onClose: () => void
}

export const LoginModal = memo(function LoginModal(props: LoginModalProps) {
    const { className, isOpen, onClose } = props

    const onSuccessLogin = useCallback(() => {
        if (onClose) {
            onClose()
        }
    }, [onClose])

    return <Modal className={classNames(styles.LoginModal, {}, [className])}
        lazy={true}
        isOpen={isOpen}
        onClose={onClose}>
        <Suspense fallback={'Loading'}>
            <LoginFormAsync onSuccessLogin={onSuccessLogin} />
        </Suspense>
    </Modal>
})
import { classNames, Mode } from 'shared/lib/classNames/classNames'
import * as styles from './Modal.module.scss'
import React, { MouseEvent, useCallback, useEffect, useState } from 'react'
import { useTheme } from 'app/providers/theme'
import { Portal } from '../Portal/Portal'

interface ModalProps {
    children: React.ReactNode | string
    isOpen?: boolean
    onClose?: () => void
    className?: string
    lazy?: boolean
}

export const Modal: React.FC<ModalProps> = (props) => {
    const { className, children, isOpen, onClose, lazy = true } = props

    const [isMounted, setIsMounted] = useState<boolean>(false);

    const { theme } = useTheme();

    const mods: Mode = {
        [styles.open]: isOpen,
    }

    const closeHandler = useCallback((): void => {
        if (onClose) {
            onClose();
        }
    }, [onClose])

    const onContentClick = useCallback((e: MouseEvent<HTMLDivElement>): void  => {
        e.stopPropagation();
    },[])
 
    const onKeydown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            closeHandler();
        }
    }, [closeHandler])

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true)
        }
    }, [isOpen]);

    useEffect(() => {
        if (isOpen) {
            document.addEventListener('keydown', onKeydown)
        }

        return () => {document.removeEventListener('keydown', onKeydown)}
    }, [isOpen, onKeydown])

    if (lazy && !isMounted) {
        return null
    }

    return <Portal>
        <div className={classNames(styles.modal, mods, [className, theme])}>
            <div className={styles.overlay} onClick={closeHandler}>
                <div className={styles.content} onClick={onContentClick}>
                    {children}
                </div>
            </div>

        </div>
    </Portal>
}
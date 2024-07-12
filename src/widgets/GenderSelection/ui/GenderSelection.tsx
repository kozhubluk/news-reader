import { classNames } from 'shared/lib/classNames/classNames'
import * as styles from './GenderSelection.module.scss'
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Gender } from "enities/profile/model/types/ProfileSchema";
import { memo, useCallback } from "react";

interface GenderSelectionProps {
    gender?: Gender
    setGender?: (gender: Gender) => void
    className?: string
}

export const GenderSelection= memo(function GenderSelection(props: GenderSelectionProps) {
    const { className, gender = 'male', setGender } = props

    const genders: Array<{name: string, value: Gender}> = [
        { name: 'М', value: 'male' },
        { name: 'Ж', value: 'female' }
    ]

    const onSelectGender = useCallback((g: Gender) => {
        if (setGender) {
            setGender(g)
        }
    }, [setGender])


    return <div className={classNames(styles.GenderSelection, {}, [className])}>
        {genders.map((item) => (
            <Button key={item.value}
                type='button'
                theme={ButtonTheme.FILLED}
                className={classNames(styles.button, { [styles.selected]: gender === item.value })}
                onClick={() => {onSelectGender(item.value)}}
            >
                {item.name}
            </Button>
        ))}
    </div>
})
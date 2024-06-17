import { classNames } from './classNames'

describe('classNames', () => {
    test('only first argument', () => {
        const expectedResult = 'button'
        expect(classNames('button')).toBe(expectedResult)
    })

    test('with additional class', () => {
        const expectedResult = 'button red'
        expect(classNames('button', {}, ['red'])).toBe(expectedResult)
    })

    test('with mode', () => {
        const expectedResult = 'button selected hovered'
        expect(classNames('button', { selected: true, hovered: true })).toBe(expectedResult)
    })

    test('with mode false', () => {
        const expectedResult = 'button hovered'
        expect(classNames('button', { selected: false, hovered: true })).toBe(expectedResult)
    })

    test('with undefined false', () => {
        const expectedResult = 'button'
        expect(classNames('button', undefined)).toBe(expectedResult)
    })
})

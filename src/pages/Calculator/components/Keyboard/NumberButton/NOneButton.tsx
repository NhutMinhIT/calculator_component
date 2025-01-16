import {
    CALCULATOR_KEYBOARD_BUTTON_NUMBER_ONE_DATA_TEST_ID,
    CALCULATOR_KEYBOARD_BUTTON_TEXT_NUMBER_ONE
} from '../../../constant'
import {
    KeyboardButton
} from '../../index'
const NOneButton = (): JSX.Element => {
    return (
        <KeyboardButton
            data-testid={CALCULATOR_KEYBOARD_BUTTON_NUMBER_ONE_DATA_TEST_ID}
        >
            {CALCULATOR_KEYBOARD_BUTTON_TEXT_NUMBER_ONE}
        </KeyboardButton>
    )
}

export default NOneButton

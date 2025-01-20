import { mount } from "cypress/react";
import { CalculatorKeyboard } from "../../../src/pages/Calculator/components";
import {
    CALCULATOR_KEYBOARD_BUTTON_CLEAR_DATA_TEST_ID,
    CALCULATOR_KEYBOARD_BUTTON_DECIMAL_DATA_TEST_ID,
    CALCULATOR_KEYBOARD_BUTTON_DELETE_DATA_TEST_ID,
    CALCULATOR_KEYBOARD_BUTTON_LIST_DATA_TEST_ID,
    CALCULATOR_KEYBOARD_BUTTON_NUMBER_EIGHT_DATA_TEST_ID,
    CALCULATOR_KEYBOARD_BUTTON_NUMBER_FIVE_DATA_TEST_ID,
    CALCULATOR_KEYBOARD_BUTTON_NUMBER_FOUR_DATA_TEST_ID,
    CALCULATOR_KEYBOARD_BUTTON_NUMBER_NINE_DATA_TEST_ID,
    CALCULATOR_KEYBOARD_BUTTON_NUMBER_ONE_DATA_TEST_ID,
    CALCULATOR_KEYBOARD_BUTTON_NUMBER_SEVEN_DATA_TEST_ID,
    CALCULATOR_KEYBOARD_BUTTON_NUMBER_SIX_DATA_TEST_ID,
    CALCULATOR_KEYBOARD_BUTTON_NUMBER_THREE_DATA_TEST_ID,
    CALCULATOR_KEYBOARD_BUTTON_NUMBER_TWO_DATA_TEST_ID,
    CALCULATOR_KEYBOARD_BUTTON_NUMBER_ZERO_DATA_TEST_ID,
    CALCULATOR_KEYBOARD_BUTTON_PLUS_OR_MINUS_DATA_TEST_ID
} from "../../../src/pages/Calculator/constant";

const mountCalculatorKeyBoard = () => {
    mount(<CalculatorKeyboard
        onButtonClick={cy.stub().as("onButtonClick")}
    />);
}
// indefine keyboard list
let calculatorListKeyBoard = `data-testid=${CALCULATOR_KEYBOARD_BUTTON_LIST_DATA_TEST_ID}`

//indeifne action button
let clearButtonKeyBoard = `data-testid=${CALCULATOR_KEYBOARD_BUTTON_CLEAR_DATA_TEST_ID}`
let deleteButtonKeyBoard = `data-testid=${CALCULATOR_KEYBOARD_BUTTON_DELETE_DATA_TEST_ID}`

//indeifne operator button
let plusAndMinusButtonKeyBoard = `data-testid=${CALCULATOR_KEYBOARD_BUTTON_PLUS_OR_MINUS_DATA_TEST_ID}`
let decimalButtonKeyBoard = `data-testid=${CALCULATOR_KEYBOARD_BUTTON_DECIMAL_DATA_TEST_ID}`

//let number button
let numberZeroButtonKeyBoard = `data-testid=${CALCULATOR_KEYBOARD_BUTTON_NUMBER_ZERO_DATA_TEST_ID}`
let numberOneButtonKeyBoard = `data-testid=${CALCULATOR_KEYBOARD_BUTTON_NUMBER_ONE_DATA_TEST_ID}`
let numberTwoButtonKeyBoard = `data-testid=${CALCULATOR_KEYBOARD_BUTTON_NUMBER_TWO_DATA_TEST_ID}`
let numberThreeButtonKeyBoard = `data-testid=${CALCULATOR_KEYBOARD_BUTTON_NUMBER_THREE_DATA_TEST_ID}`
let numberFourButtonKeyBoard = `data-testid=${CALCULATOR_KEYBOARD_BUTTON_NUMBER_FOUR_DATA_TEST_ID}`
let numberFiveButtonKeyBoard = `data-testid=${CALCULATOR_KEYBOARD_BUTTON_NUMBER_FIVE_DATA_TEST_ID}`
let numberSixButtonKeyBoard = `data-testid=${CALCULATOR_KEYBOARD_BUTTON_NUMBER_SIX_DATA_TEST_ID}`
let numberSevenButtonKeyBoard = `data-testid=${CALCULATOR_KEYBOARD_BUTTON_NUMBER_SEVEN_DATA_TEST_ID}`
let numberEightButtonKeyBoard = `data-testid=${CALCULATOR_KEYBOARD_BUTTON_NUMBER_EIGHT_DATA_TEST_ID}`
let numberNineButtonKeyBoard = `data-testid=${CALCULATOR_KEYBOARD_BUTTON_NUMBER_NINE_DATA_TEST_ID}`


describe('CalculatorKeyboard component', () => {
    beforeEach(() => {
        mountCalculatorKeyBoard();
    });
    // child component
    it('should render calculator list keyboard component successfully', () => {
        cy.get(`[${calculatorListKeyBoard}]`).should('exist');
    });

    //button action
    it('should render clear button successfully', () => {
        cy.get(`[${clearButtonKeyBoard}]`).should('exist');
    });
    it('should render delete button successfully', () => {
        cy.get(`[${deleteButtonKeyBoard}]`).should('exist');
    });

    //button operator
    it('should render plus or minus button successfully', () => {
        cy.get(`[${plusAndMinusButtonKeyBoard}]`).should('exist');
    });
    it('should render decimal button successfully', () => {
        cy.get(`[${decimalButtonKeyBoard}]`).should('exist');
    });

    //button number
    it('should render number zero button successfully', () => {
        cy.get(`[${numberZeroButtonKeyBoard}]`).should('exist');
    });
    it('should render number one button successfully', () => {
        cy.get(`[${numberOneButtonKeyBoard}]`).should('exist');
    });
});
import { mount } from "cypress/react";
import CalculatorFrame from "../../../src/pages/Calculator/components/CalculatorFrame/CalculatorFrame";
import { CALCULATOR_FRAME_DATA_TEST_ID, CALCULATOR_KEYBOARD_BUTTON_LIST_DATA_TEST_ID, CALCULATOR_KEYBOARD_BUTTON_TEXT_DECIMAL, CALCULATOR_KEYBOARD_BUTTON_TEXT_NUMBER_EIGHT, CALCULATOR_KEYBOARD_BUTTON_TEXT_NUMBER_FIVE, CALCULATOR_KEYBOARD_BUTTON_TEXT_NUMBER_FOUR, CALCULATOR_KEYBOARD_BUTTON_TEXT_NUMBER_NINE, CALCULATOR_KEYBOARD_BUTTON_TEXT_NUMBER_ONE, CALCULATOR_KEYBOARD_BUTTON_TEXT_NUMBER_SEVEN, CALCULATOR_KEYBOARD_BUTTON_TEXT_NUMBER_SIX, CALCULATOR_KEYBOARD_BUTTON_TEXT_NUMBER_THREE, CALCULATOR_KEYBOARD_BUTTON_TEXT_NUMBER_TWO, CALCULATOR_KEYBOARD_BUTTON_TEXT_NUMBER_ZERO, CALCULATOR_KEYBOARD_BUTTON_TEXT_PLUS_OR_MINUS, CALCULATOR_RANGE_VALUE_DATA_TEST_ID, CALCULATOR_TEXT_FIELD_INPUT_DATA_TEST_ID, CALCULTATOR_TEXT_INPUT_RANGE_MAX_DATA_TEST_ID, CALCULTATOR_TEXT_INPUT_RANGE_MIN_DATA_TEST_ID } from "../../../src/pages/Calculator/constant";
import { CalculatorKeyboard } from "../../../src/pages/Calculator/components";

interface Callbacks {
    inputValue?: string;
    handleInputChange?: (value: string) => void;
}

let calculatorFrameDataTestId = `data-testid=${CALCULATOR_FRAME_DATA_TEST_ID}`;
let calculatorInputValueDataTestId = `data-testid=${CALCULATOR_TEXT_FIELD_INPUT_DATA_TEST_ID}`;
let calculatorRangeValueDataTestId = `data-testid=${CALCULATOR_RANGE_VALUE_DATA_TEST_ID}`;
let calculatorRangeMinValueDataTestId = `data-testid=${CALCULTATOR_TEXT_INPUT_RANGE_MIN_DATA_TEST_ID}`;
let calculatorRangeMaxValueDataTestId = `data-testid=${CALCULTATOR_TEXT_INPUT_RANGE_MAX_DATA_TEST_ID}`;
let calculatorKeyboardButtonListDataTestId = `data-testid=${CALCULATOR_KEYBOARD_BUTTON_LIST_DATA_TEST_ID}`;

const mountCalculatorFrame = (stubCallbacks: Callbacks = {}) => {
    const {
        inputValue = "1",
        handleInputChange = cy.stub().as("handleInputChange"),
    } = stubCallbacks;

    mount(
        <CalculatorFrame
            inputValue={inputValue}
            handleInputChange={handleInputChange}
        />
    );
}

beforeEach(() => {
    mountCalculatorFrame();
});

describe("CalculatorFrame Component", () => {
    //check render component
    it("should renders the CalculatorFrame component", () => {
        cy.get(`[${calculatorFrameDataTestId}]`).should("exist");
    });
    it('should render calculator input value', () => {
        cy.get(`[${calculatorInputValueDataTestId}]`).should('exist');
    });
    // it('renders the calculator input value with the correct value', () => {
    //     cy.get(`[${calculatorInputValueDataTestId}]`).should('have.text', '1');
    // });
    it('should render calculator range value', () => {
        cy.get(`[${calculatorRangeValueDataTestId}]`).should('exist');
    });
    it('should render calculator range min value', () => {
        cy.get(`[${calculatorRangeMinValueDataTestId}]`).should('exist');
    });
    it('should render calculator range max value', () => {
        cy.get(`[${calculatorRangeMaxValueDataTestId}]`).should('exist');
    });
    it('should render list of calculator keyboard buttons', () => {
        cy.get(`[${calculatorKeyboardButtonListDataTestId}]`).should('exist');
    });

    //check interaction
    it('should change the input value (1) when the button is clicked', () => {
        cy.get(`[${calculatorKeyboardButtonListDataTestId}]`)
            .find('button')
            .contains(CALCULATOR_KEYBOARD_BUTTON_TEXT_NUMBER_ONE)
            .click();
        cy.get('@handleInputChange').should('have.been.calledWith', ('11'));
        cy.wait(1000);
    });
    it('should change the input value (2) when the button is clicked', () => {
        cy.get(`[${calculatorKeyboardButtonListDataTestId}]`)
            .find('button')
            .contains(CALCULATOR_KEYBOARD_BUTTON_TEXT_NUMBER_TWO)
            .click();
        cy.get('@handleInputChange').should('have.been.calledWith', ('12'));
        cy.wait(1000);
    });
    it('should change the input value (3) when the button is clicked', () => {
        cy.get(`[${calculatorKeyboardButtonListDataTestId}]`)
            .find('button')
            .contains(CALCULATOR_KEYBOARD_BUTTON_TEXT_NUMBER_THREE)
            .click();
        cy.get('@handleInputChange').should('have.been.calledWith', ('13'));
        cy.wait(1000);
    });
    it('should change the input value (4) when the button is clicked', () => {
        cy.get(`[${calculatorKeyboardButtonListDataTestId}]`)
            .find('button')
            .contains(CALCULATOR_KEYBOARD_BUTTON_TEXT_NUMBER_FOUR)
            .click();
        cy.get('@handleInputChange').should('have.been.calledWith', ('14'));
        cy.wait(1000);
    });
    it('should change the input value (5) when the button is clicked', () => {
        cy.get(`[${calculatorKeyboardButtonListDataTestId}]`)
            .find('button')
            .contains(CALCULATOR_KEYBOARD_BUTTON_TEXT_NUMBER_FIVE)
            .click();
        cy.get('@handleInputChange').should('have.been.calledWith', ('15'));
        cy.wait(1000);
    });
    it('should change the input value (6) when the button is clicked', () => {
        cy.get(`[${calculatorKeyboardButtonListDataTestId}]`)
            .find('button')
            .contains(CALCULATOR_KEYBOARD_BUTTON_TEXT_NUMBER_SIX)
            .click();
        cy.get('@handleInputChange').should('have.been.calledWith', ('16'));
        cy.wait(1000);
    });
    it('should change the input value (7) when the button is clicked', () => {
        cy.get(`[${calculatorKeyboardButtonListDataTestId}]`)
            .find('button')
            .contains(CALCULATOR_KEYBOARD_BUTTON_TEXT_NUMBER_SEVEN)
            .click();
        cy.get('@handleInputChange').should('have.been.calledWith', ('17'));
        cy.wait(1000);
    });
    it('should change the input value (8) when the button is clicked', () => {
        cy.get(`[${calculatorKeyboardButtonListDataTestId}]`)
            .find('button')
            .contains(CALCULATOR_KEYBOARD_BUTTON_TEXT_NUMBER_EIGHT)
            .click();
        cy.get('@handleInputChange').should('have.been.calledWith', ('18'));
        cy.wait(1000);
    });
    it('should change the input value (9) when the button is clicked', () => {
        cy.get(`[${calculatorKeyboardButtonListDataTestId}]`)
            .find('button')
            .contains(CALCULATOR_KEYBOARD_BUTTON_TEXT_NUMBER_NINE)
            .click();
        cy.get('@handleInputChange').should('have.been.calledWith', ('19'));
        cy.wait(1000);
    });
    it('should change the input value (0) when the button is clicked', () => {
        cy.get(`[${calculatorKeyboardButtonListDataTestId}]`)
            .find('button')
            .contains(CALCULATOR_KEYBOARD_BUTTON_TEXT_NUMBER_ZERO)
            .click();
        cy.get('@handleInputChange').should('have.been.calledWith', ('10'));
        cy.wait(1000);
    });

    // it('should click operator button Decimal', () => {
    //     cy.get(`[${calculatorKeyboardButtonListDataTestId}]`)
    //         .find('button')
    //         .contains(CALCULATOR_KEYBOARD_BUTTON_TEXT_DECIMAL)
    //         .click();
    //     cy.get('@handleInputChange').should('have.been.calledWith', ('10.'));
    //     cy.wait(1000);
    // });
    it('should click operator button Plus or Minus', () => {
        cy.get(`[${calculatorKeyboardButtonListDataTestId}]`)
            .find('button')
            .contains(CALCULATOR_KEYBOARD_BUTTON_TEXT_PLUS_OR_MINUS)
            .click();
        cy.get('@handleInputChange').should('have.been.calledWith', ('-1'));
        cy.wait(1000);
    });

});
import { mount } from "cypress/react";
import CalculatorFrame from "../../../src/pages/Calculator/components/CalculatorFrame/CalculatorFrame";
import { CALCULATOR_FRAME_DATA_TEST_ID, CALCULATOR_KEYBOARD_BUTTON_LIST_DATA_TEST_ID, CALCULATOR_RANGE_VALUE_DATA_TEST_ID, CALCULATOR_TEXT_FIELD_INPUT_DATA_TEST_ID, CALCULTATOR_TEXT_INPUT_RANGE_MAX_DATA_TEST_ID, CALCULTATOR_TEXT_INPUT_RANGE_MIN_DATA_TEST_ID } from "../../../src/pages/Calculator/constant";
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
    it('renders the calculator input value with the correct value', () => {
        cy.get(`[${calculatorInputValueDataTestId}]`).should('have.text', '1');
    });
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

});
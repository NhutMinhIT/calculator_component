import { mount } from "cypress/react"
import Calculator from "../../src/pages/Calculator";
import {
    CALCULATOR_DIALOG_ACTION_CANCEL_DATA_TEST_ID,
    CALCULATOR_DIALOG_ACTION_OK_DATA_TEST_ID,
    CALCULATOR_DIALOG_DATA_TEST_ID,
    CALCULATOR_PAGE_DATA_TEST_ID,
    CALCULATOR_TEXT_FIELD_DATA_TEST_ID
} from "../../src/pages/Calculator/constant";

const mountCalculatorComponent = () => {
    mount(<Calculator />);
}
const inputDataTestId = `data-testid=${CALCULATOR_TEXT_FIELD_DATA_TEST_ID}`;
const dialogDataTestId = `data-testid=${CALCULATOR_DIALOG_DATA_TEST_ID}`;
const dialogCancelDataTestId = `data-testid=${CALCULATOR_DIALOG_ACTION_CANCEL_DATA_TEST_ID}`;
const dialogOkDataTestId = `data-testid=${CALCULATOR_DIALOG_ACTION_OK_DATA_TEST_ID}`;

describe('Calculator component', () => {
    beforeEach(() => {
        mountCalculatorComponent();
    });
    //render component successfully
    it('should render calculator component successfully', () => {
        cy.get(`[data-testid=${CALCULATOR_PAGE_DATA_TEST_ID}]`).should('exist');
    });
    it('should render input component successfully', () => {
        cy.get(`[${inputDataTestId}]`).should('exist');
    });

    // render button component successfully
    it('should render component action ok successfully', () => {
        cy.get(`[${inputDataTestId}]`).click();
        cy.get(`[${dialogDataTestId}]`).should('exist');
    });
    it('should render component action cancel successfully', () => {
        cy.get(`[${inputDataTestId}]`).click();
        cy.get(`[${dialogDataTestId}]`).should('exist');
    });

    // handleOpenDialog/CloseDialog
    it('should open dialog component successfully', () => {
        cy.get(`[${inputDataTestId}]`).click();
        cy.get(`[${dialogDataTestId}]`).should('exist');
    });
    it('should close dialog component successfully', () => {
        cy.get(`[${inputDataTestId}]`).click();
        cy.get(`[${dialogDataTestId}]`).should('exist');
        cy.get(`[${dialogCancelDataTestId}]`).click();
    });

    //handle action with button value
    it('should handle change value input successfully (value 1)', () => {
        const value = 1;
        cy.get(`[${inputDataTestId}]`).click();
        cy.get(`[${dialogDataTestId}]`).should('exist');
        cy.get(`[${dialogDataTestId}]`).find('button').contains(value).click();
        cy.wait(1000);
    });
    it('should handle change value input successfully (value 2)', () => {
        const value = 2;
        cy.get(`[${inputDataTestId}]`).click();
        cy.get(`[${dialogDataTestId}]`).should('exist');
        cy.get(`[${dialogDataTestId}]`).find('button').contains(value).click();
        cy.wait(1000);
    });
    it('should handle change value input successfully (value 3)', () => {
        const value = 3;
        cy.get(`[${inputDataTestId}]`).click();
        cy.get(`[${dialogDataTestId}]`).should('exist');
        cy.get(`[${dialogDataTestId}]`).find('button').contains(value).click();
        cy.wait(1000);
    });
    it('should handle change value input successfully (value 4)', () => {
        const value = 4;
        cy.get(`[${inputDataTestId}]`).click();
        cy.get(`[${dialogDataTestId}]`).should('exist');
        cy.get(`[${dialogDataTestId}]`).find('button').contains(value).click();
        cy.wait(1000);
    });
    it('should handle change value input successfully (value 5)', () => {
        const value = 5;
        cy.get(`[${inputDataTestId}]`).click();
        cy.get(`[${dialogDataTestId}]`).should('exist');
        cy.get(`[${dialogDataTestId}]`).find('button').contains(value).click();
        cy.wait(1000);
    });
    it('should handle change value input successfully (value 6)', () => {
        const value = 6;
        cy.get(`[${inputDataTestId}]`).click();
        cy.get(`[${dialogDataTestId}]`).should('exist');
        cy.get(`[${dialogDataTestId}]`).find('button').contains(value).click();
        cy.wait(1000);
    });
    it('should handle change value input successfully (value 7)', () => {
        const value = 7;
        cy.get(`[${inputDataTestId}]`).click();
        cy.get(`[${dialogDataTestId}]`).should('exist');
        cy.get(`[${dialogDataTestId}]`).find('button').contains(value).click();
        cy.wait(1000);
    });
    it('should handle change value input successfully (value 8)', () => {
        const value = 8;
        cy.get(`[${inputDataTestId}]`).click();
        cy.get(`[${dialogDataTestId}]`).should('exist');
        cy.get(`[${dialogDataTestId}]`).find('button').contains(value).click();
        cy.wait(1000);
    });
    it('should handle change value input successfully (value 9)', () => {
        const value = 9;
        cy.get(`[${inputDataTestId}]`).click();
        cy.get(`[${dialogDataTestId}]`).should('exist');
        cy.get(`[${dialogDataTestId}]`).find('button').contains(value).click();
        cy.wait(1000);
    });
    it('should handle change value input successfully (value 0)', () => {
        const value = 0;
        cy.get(`[${inputDataTestId}]`).click();
        cy.get(`[${dialogDataTestId}]`).should('exist');
        cy.get(`[${dialogDataTestId}]`).find('button').contains(value).click();
        cy.wait(1000);
    });

    //handle action with button operator
    it('should render disable button OK', () => {
        const number = 1;
        const value = '+/-';
        cy.get(`[${inputDataTestId}]`).click();
        cy.get(`[${dialogDataTestId}]`).should('exist');
        cy.get(`[${dialogDataTestId}]`).find('button').contains(number).click();
        cy.get(`[${dialogDataTestId}]`).find('button').contains(value).click();
        cy.wait(1000);
    });
    it('should handle apply input value successfully (value 1)', () => {
        const value = 1;
        cy.get(`[${inputDataTestId}]`).click();
        cy.get(`[${dialogDataTestId}]`).should('exist');
        cy.get(`[${dialogDataTestId}]`).find('button').contains(value).click();
        cy.get(`[${dialogOkDataTestId}]`).click();
        cy.wait(1000);
    });
    it('should handle apply input value successfully (value 2)', () => {
        const value = 2;
        cy.get(`[${inputDataTestId}]`).click();
        cy.get(`[${dialogDataTestId}]`).should('exist');
        cy.get(`[${dialogDataTestId}]`).find('button').contains(value).click();
        cy.get(`[${dialogOkDataTestId}]`).click();
        cy.wait(1000);
    });
    it('should handle apply input value successfully (value 3)', () => {
        const value = 3;
        cy.get(`[${inputDataTestId}]`).click();
        cy.get(`[${dialogDataTestId}]`).should('exist');
        cy.get(`[${dialogDataTestId}]`).find('button').contains(value).click();
        cy.get(`[${dialogOkDataTestId}]`).click();
        cy.wait(1000);
    });
    it('should handle apply input value successfully (value 4)', () => {
        const value = 4;
        cy.get(`[${inputDataTestId}]`).click();
        cy.get(`[${dialogDataTestId}]`).should('exist');
        cy.get(`[${dialogDataTestId}]`).find('button').contains(value).click();
        cy.get(`[${dialogOkDataTestId}]`).click();
        cy.wait(1000);
    });
    it('should handle apply input value successfully (value 5)', () => {
        const value = 5;
        cy.get(`[${inputDataTestId}]`).click();
        cy.get(`[${dialogDataTestId}]`).should('exist');
        cy.get(`[${dialogDataTestId}]`).find('button').contains(value).click();
        cy.get(`[${dialogOkDataTestId}]`).click();
        cy.wait(1000);
    });
    it('should handle apply input value successfully (value 6)', () => {
        const value = 6;
        cy.get(`[${inputDataTestId}]`).click();
        cy.get(`[${dialogDataTestId}]`).should('exist');
        cy.get(`[${dialogDataTestId}]`).find('button').contains(value).click();
        cy.get(`[${dialogOkDataTestId}]`).click();
        cy.wait(1000);
    });
    it('should handle apply input value successfully (value 7)', () => {
        const value = 7;
        cy.get(`[${inputDataTestId}]`).click();
        cy.get(`[${dialogDataTestId}]`).should('exist');
        cy.get(`[${dialogDataTestId}]`).find('button').contains(value).click();
        cy.get(`[${dialogOkDataTestId}]`).click();
        cy.wait(1000);
    });
    it('should handle apply input value successfully (value 8)', () => {
        const value = 8;
        cy.get(`[${inputDataTestId}]`).click();
        cy.get(`[${dialogDataTestId}]`).should('exist');
        cy.get(`[${dialogDataTestId}]`).find('button').contains(value).click();
        cy.get(`[${dialogOkDataTestId}]`).click();
        cy.wait(1000);
    });
    it('should handle apply input value successfully (value 9)', () => {
        const value = 9;
        cy.get(`[${inputDataTestId}]`).click();
        cy.get(`[${dialogDataTestId}]`).should('exist');
        cy.get(`[${dialogDataTestId}]`).find('button').contains(value).click();
        cy.get(`[${dialogOkDataTestId}]`).click();
        cy.wait(1000);
    });
    it('should handle disable button Ok with (value 0)', () => {
        const value = 0;
        cy.get(`[${inputDataTestId}]`).click();
        cy.get(`[${dialogDataTestId}]`).should('exist');
        cy.get(`[${dialogDataTestId}]`).find('button').contains(value).click();
        cy.wait(1000);
    });
});
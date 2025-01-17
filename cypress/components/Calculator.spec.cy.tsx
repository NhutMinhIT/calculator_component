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

});
import { mount } from "cypress/react";
import CalculatorDialog from "../../../src/pages/Calculator/components/Dialog/CalculatorDialog";
import { CALCULATOR_DIALOG_ACTION_CANCEL_DATA_TEST_ID, CALCULATOR_DIALOG_ACTION_DATA_TEST_ID, CALCULATOR_DIALOG_ACTION_OK_DATA_TEST_ID, CALCULATOR_DIALOG_CONTENT_DATA_TEST_ID, CALCULATOR_DIALOG_DATA_TEST_ID, CALCULATOR_DIALOG_TITLE_DATA_TEST_ID } from "../../../src/pages/Calculator/constant";

interface Callbacks {
    isOpen?: boolean;
    handleClose?: () => void;
    handleConfirm?: () => void;
    handleInputChange?: (value: string) => void;
    inputValue?: string;
}

let dialogDataTestId = `data-testid=${CALCULATOR_DIALOG_DATA_TEST_ID}`;
let dialogTitleDataTestId = `data-testid=${CALCULATOR_DIALOG_TITLE_DATA_TEST_ID}`;
let dialogContentDataTestId = `data-testid=${CALCULATOR_DIALOG_CONTENT_DATA_TEST_ID}`;
let dialogActionDataTestId = `data-testid=${CALCULATOR_DIALOG_ACTION_DATA_TEST_ID}`;
let dialogActionCancelButtonDataTestId = `data-testid=${CALCULATOR_DIALOG_ACTION_CANCEL_DATA_TEST_ID}`;
let dialogActionConfirmButtonDataTestId = `data-testid=${CALCULATOR_DIALOG_ACTION_OK_DATA_TEST_ID}`;

const mountCalculatorDialog = (stubCallbacks: Callbacks = {}) => {
    const {
        isOpen = true,
        handleClose = cy.stub().as("handleClose"),
        handleConfirm = cy.stub().as("handleConfirm"),
        handleInputChange = cy.stub().as("handleInputChange"),
        inputValue = "1"
    } = stubCallbacks;

    mount(
        <CalculatorDialog
            isOpen={isOpen}
            handleClose={handleClose}
            handleConfirm={handleConfirm}
            handleInputChange={handleInputChange}
            inputValue={inputValue}

        />
    );
};

beforeEach(() => {
    mountCalculatorDialog();
});

describe("CalculatorDialog Component", () => {
    //check render component
    it("should renders the CalculatorDialog component", () => {
        cy.get(`[${dialogDataTestId}]`).should("exist");
    });
    it('should render dialog title', () => {
        cy.get(`[${dialogTitleDataTestId}]`).should('exist');
    });
    it('should render dialog content', () => {
        cy.get(`[${dialogContentDataTestId}]`).should('exist');
    });
    it('should render dialog action', () => {
        cy.get(`[${dialogActionDataTestId}]`).should('exist');
    });
    it('should render dialog action cancel button', () => {
        cy.get(`[${dialogActionCancelButtonDataTestId}]`).should('exist');
    })
    it('should render dialog action Ok button', () => {
        cy.get(`[${dialogActionConfirmButtonDataTestId}]`).should('exist');
    })

    //check callback function
    it("calls the handleClose prop when the Cancel button is clicked", () => {
        cy.get(`[${dialogActionCancelButtonDataTestId}]`).click();
        cy.get("@handleClose").should("have.been.calledOnce");
    });
    it("calls the handleInputChange prop when the input value is changed", () => {
        const value = 2;
        cy.get(`[${dialogDataTestId}]`).find('button').contains(value).click();
        cy.get("@handleInputChange").should("have.been.calledOnce");
    });
    it("calls the handleConfirm prop when the Ok button is clicked", () => {
        const value = 8;
        cy.get(`[${dialogDataTestId}]`).find('button').contains(value).click();
        cy.get(`[${dialogActionConfirmButtonDataTestId}]`).click();
        cy.get("@handleConfirm").should("have.been.calledOnce");
    });

});

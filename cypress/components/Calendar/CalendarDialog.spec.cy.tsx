import { mount } from "cypress/react";
import { CalendarDialog } from "../../../src/pages/Root/components";
import { CALENDAR_DIALOG_CANCEL_BUTTON_TEST_ID, CALENDAR_DIALOG_CANCEL_BUTTON_TEXT, CALENDAR_DIALOG_CONFIRM_BUTTON_TEST_ID, CALENDAR_DIALOG_TEST_ID, CALENDAR_DIALOG_TODAY_BUTTON_TEST_ID } from "../../../src/pages/Root/constant";
import dayjs from "dayjs";

describe("CalendarDialog Component", () => {
    interface CallbackProps {
        onClose?: () => void;
        onDateChangeTemp?: (date: Date | null) => void;
        onConfirm?: () => void;
        onRefeshToday?: (date: Date | null) => void;
    }

    const mountCalendarDialog = (stubCallbacks: CallbackProps = {}) => {
        const {
            onClose = cy.stub().as("onClose"),
            onDateChangeTemp = cy.stub().as("onDateChangeTemp"),
            onConfirm = cy.stub().as("onConfirm"),
            onRefeshToday = cy.stub().as("onRefeshToday"),
        } = stubCallbacks;

        mount(
            <CalendarDialog
                isOpen={true}
                onClose={onClose}
                onDateChangeTemp={onDateChangeTemp}
                tempDate={new Date()}
                onConfirm={onConfirm}
                onRefeshToday={onRefeshToday}
            />
        );
    };

    beforeEach(() => {
        mountCalendarDialog();
    });

    //check render component
    it("renders the CalendarDialog component", () => {
        cy.get(`[data-testid=${CALENDAR_DIALOG_TEST_ID}]`).should("exist");
    });
    it("renders the Cancel button", () => {
        cy.get(`[data-testid=${CALENDAR_DIALOG_CANCEL_BUTTON_TEST_ID}]`).should("exist");
    });
    it('renders confirm button', () => {
        cy.get(`[data-testid=${CALENDAR_DIALOG_CONFIRM_BUTTON_TEST_ID}]`).should('exist')
    });
    it('renders today button', () => {
        cy.get(`[data-testid=${CALENDAR_DIALOG_TODAY_BUTTON_TEST_ID}]`).should('exist')
    });

    //check call fucntion with stub callback
    it("calls the onClose prop when the Cancel button is clicked", () => {
        cy.get(`[data-testid=${CALENDAR_DIALOG_CANCEL_BUTTON_TEST_ID}]`).click();
        cy.get("@onClose").should("have.been.calledOnce");
    });
    it("calls the onConfirm prop when the Confirm button is clicked", () => {
        cy.get(`[data-testid=${CALENDAR_DIALOG_CONFIRM_BUTTON_TEST_ID}]`).click();
        cy.get("@onConfirm").should("have.been.calledOnce");
    });
    it("calls onRefeshToday when the 'Today' button is clicked", () => {
        cy.get(`[data-testid=${CALENDAR_DIALOG_TODAY_BUTTON_TEST_ID}]`).click();
        cy.get("@onRefeshToday").should("have.been.calledOnce");
        //  cy.get("@onRefeshToday").should("have.been.calledWith", Cypress.sinon.match.instanceOf(Date));
    });
    it('change date when select date', () => {
        const date = new Date();
        cy.get(`[data-testid=${CALENDAR_DIALOG_TEST_ID}]`).find('button').contains(date.getDate()).click();
        cy.get("@onDateChangeTemp").should("have.been.calledOnce");
    });
    it('choose a date when select date', () => {
        const Date = dayjs('2025-11-20').toDate();
        cy.get(`[data-testid=${CALENDAR_DIALOG_TEST_ID}]`).find('button').contains(Date.getDate()).click();
        cy.get("@onDateChangeTemp").should("have.been.calledOnce");
    })
});

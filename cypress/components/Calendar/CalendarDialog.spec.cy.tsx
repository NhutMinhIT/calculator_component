import { mount } from "cypress/react";
import { CalendarDialog } from "../../../src/pages/Root/components";
import { CALENDAR_DIALOG_TEST_ID } from "../../../src/pages/Root/constant";

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

    it("renders the CalendarDialog component", () => {
        cy.get(`[data-testid=${CALENDAR_DIALOG_TEST_ID}]`).should("exist");
    });

    it("calls the onClose prop when the Cancel button is clicked", () => {
        cy.get("button")
            .contains("Cancel")
            .click();

        cy.get("@onClose").should("have.been.calledOnce");
    });

    it("calls the onConfirm prop when the Confirm button is clicked", () => {
        cy.get("button")
            .contains("OK")
            .click();

        cy.get("@onConfirm").should("have.been.calledOnce");
    });


    it("calls onRefeshToday when the 'Today' button is clicked", () => {
        cy.get("button")
            .contains("Today")
            .click();

        cy.get("@onRefeshToday").should("have.been.calledOnce");
        cy.get("@onRefeshToday").should("have.been.calledWith", Cypress.sinon.match.instanceOf(Date));
    });


});

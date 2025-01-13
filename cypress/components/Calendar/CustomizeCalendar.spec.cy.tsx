import { mount } from "cypress/react";
import dayjs from "dayjs";
import { CustomizeCalendar, CustomizedTodayButton } from "../../../src/pages/Root/components";
import { CALENDAR_DIALOG_TODAY_BUTTON_TEST_ID, CALENDAR_DIALOG_TODAY_BUTTON_TEXT } from "../../../src/pages/Root/constant";

interface CallbackProps {
    onChangeDate?: (date: Date | null) => void;
    value?: Date;
    renderButtonToday?: () => JSX.Element;
    onClick?: () => void;
}

describe("CustomizeCalendar Component", () => {
    const mountCustomizeCalendar = (stubCallbacks: CallbackProps = {}) => {
        const {
            onChangeDate = cy.stub().as("onChangeDate"),
            value = new Date(),
            renderButtonToday = () => <CustomizedTodayButton
                onClick={cy.stub().as("onRenderButtonToday")}
                data-testid={CALENDAR_DIALOG_TODAY_BUTTON_TEST_ID}
            >
                {CALENDAR_DIALOG_TODAY_BUTTON_TEXT}
            </CustomizedTodayButton>
        } = stubCallbacks;

        mount(
            <CustomizeCalendar
                onChangeDate={onChangeDate}
                value={value}
                renderButtonToday={renderButtonToday}
            />
        );
    };

    it("calls onChangeDate when a date is selected", () => {
        mountCustomizeCalendar();
        cy.get(".MuiDayCalendar-weekContainer")
            .contains("15")
            .click();

        cy.get("@onChangeDate").should("have.been.calledWith", Cypress.sinon.match((date: Date) => {
            return dayjs(date).isValid() && dayjs(date).date() === 15;
        }));
    });

    it("renders the today button", () => {
        mountCustomizeCalendar();
        cy.get(`[data-testid=${CALENDAR_DIALOG_TODAY_BUTTON_TEST_ID}]`).should("exist");
    });

    it("calls renderButtonToday when the today button is clicked", () => {
        mountCustomizeCalendar();
        cy.get(`[data-testid=${CALENDAR_DIALOG_TODAY_BUTTON_TEST_ID}]`).click();
        cy.get("@onRenderButtonToday").should("have.been.called");
    });


});
import { mount } from "cypress/react";
import dayjs from "dayjs";
import { CustomizeCalendar } from "../../../src/pages/Root/components";

interface CallbackProps {
    onChangeDate?: (date: Date | null) => void;
    value?: Date;
    renderButtonToday?: () => JSX.Element;
}

describe("CustomizeCalendar Component", () => {
    const mountCustomizeCalendar = (stubCallbacks: CallbackProps = {}) => {
        const {
            onChangeDate = cy.stub().as("onChangeDate"),
            value = new Date(),
            renderButtonToday = () => <button>Today</button>,
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

});
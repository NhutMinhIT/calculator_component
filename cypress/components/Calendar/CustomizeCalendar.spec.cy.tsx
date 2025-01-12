import { mount } from "cypress/react";
import dayjs from "dayjs";
import { CustomizeCalendar } from "../../../src/pages/Root/components";

describe("CustomizeCalendar Component", () => {
    const mountCustomizeCalendar = (onChangeDateStub: (date: Date | null) => void) => {
        mount(
            <CustomizeCalendar
                value={dayjs().toDate()}
                onChangeDate={onChangeDateStub}
                renderButtonToday={() => <button data-testid="today-button">Today</button>}
            />
        );
    };

    it("calls onChangeDate when a date is selected", () => {
        const onChangeDateStub = cy.stub().as("onChangeDate");

        mountCustomizeCalendar(onChangeDateStub);

        cy.get(".MuiDayCalendar-weekContainer")
            .contains("15")
            .click();

        cy.get("@onChangeDate").should("have.been.calledWith", Cypress.sinon.match((value) => {
            return dayjs(value).isValid() && dayjs(value).date() === 15;
        }));
    });

});
import { mount } from "cypress/react";
import Root from "../../src/pages/Root";
import {
    CALENDAR_DIALOG_CANCEL_BUTTON_TEST_ID,
    CALENDAR_DIALOG_TEST_ID,
    CALENDER_TEXT_FIELD_DATA_TEST_ID,
    ROOT_COMPONENT_DATA_TEST_ID
} from "../../src/pages/Root/constant";
import dayjs from "dayjs";

describe('Root component', () => {
    const mountRoot = () => {
        mount(<Root />);
    }

    it('should render root component successfully', () => {
        mountRoot();
        cy.get(`[data-testid=${ROOT_COMPONENT_DATA_TEST_ID}]`).should('exist');
    });
    it('should render input component successfully', () => {
        mountRoot();
        cy.get(`[data-testid=${CALENDER_TEXT_FIELD_DATA_TEST_ID}]`).should('exist')
    })
    it('should render dialog component successfully', () => {
        mountRoot();
        cy.get(`[data-testid=${CALENDAR_DIALOG_TEST_ID}]`).should('exist')
    })

    //open/close dialog component
    it('should open dialog component successfully', () => {
        mountRoot();
        cy.get(`[data-testid=${CALENDER_TEXT_FIELD_DATA_TEST_ID}]`).click();
        cy.get(`[data-testid=${CALENDAR_DIALOG_TEST_ID}]`).should('exist')
    })

    it('should close dialog component successfully', () => {
        mountRoot();
        cy.get(`[data-testid=${CALENDER_TEXT_FIELD_DATA_TEST_ID}]`).click();
        cy.get(`[data-testid=${CALENDAR_DIALOG_TEST_ID}]`).should('exist')
        cy.get(`[data-testid=${CALENDAR_DIALOG_CANCEL_BUTTON_TEST_ID}]`).click();
    })

    //choose date
    it('choose date successfully', () => {
        mountRoot();
        const Date = dayjs('2025-11-27').toDate();
        cy.get(`[data-testid=${CALENDER_TEXT_FIELD_DATA_TEST_ID}]`).click();
        cy.get(`[data-testid=${CALENDAR_DIALOG_TEST_ID}]`).should('exist')
        cy.get(`[data-testid=${CALENDAR_DIALOG_TEST_ID}]`).find('button').contains(Date.getDate()).click();
    })
});
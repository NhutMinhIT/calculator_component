import { mount } from "cypress/react";
import Root from "../../src/pages/Root";
import {
    CALENDAR_DIALOG_TEST_ID,
    CALENDER_TEXT_FIELD_DATA_TEST_ID,
    ROOT_COMPONENT_DATA_TEST_ID
} from "../../src/pages/Root/constant";

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

});
import { mount } from "cypress/react";
import Root from "../../src/pages/Root";
import { CALENDER_TEXT_FIELD_DATA_TEST_ID, ROOT_COMPONENT_DATA_TEST_ID } from "../../src/pages/Root/constant";

const mountRoot = () => {
    mount(<Root />);
}

describe('Root component', () => {
    it('should render root component successfully', () => {
        mountRoot();
        cy.get(`[data-testid=${ROOT_COMPONENT_DATA_TEST_ID}]`).should('exist');
    });

    it('should render input component successfully', () => {
        mountRoot();
        cy.get(`[data-testid=${CALENDER_TEXT_FIELD_DATA_TEST_ID}]`).should('exist')
    })
});
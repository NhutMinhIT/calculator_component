import { mount } from "cypress/react"
import { CalendarDialog } from "../../../src/pages/Root/components"
import { CALENDAR_DIALOG_TEST_ID } from "../../../src/pages/Root/constant"

describe('render calendar dialog', () => {
    const mountCalendarDialog = () => {
        mount(
            <CalendarDialog
                isOpen={true}
                onClose={() => { }}
                onDateChangeTemp={() => { }}
                tempDate={new Date()}
                onConfirm={() => { }}
                onRefeshToday={() => { }}
            />
        )
    }
    beforeEach(() => {
        mountCalendarDialog()
    })
    it('render calendar dialog', () => {
        mountCalendarDialog();
        cy.get(`[data-testid=${CALENDAR_DIALOG_TEST_ID}]`).should('exist')
    })


})

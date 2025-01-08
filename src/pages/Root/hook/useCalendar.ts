import { useState } from "react"
import { IUseCalendar } from "../types"

export const useCalendar = (): IUseCalendar => {
    const [isOpenCalendarDialog, setIsOpenCalendarDialog] = useState<boolean>(false)

    const handleOpenCalendarDialog = (): void => {
        setIsOpenCalendarDialog(true)
    }
    const handleCloseCalendarDialog = (): void => {
        setIsOpenCalendarDialog(false)
    }

    return {
        isOpenCalendarDialog,
        handleOpenCalendarDialog,
        handleCloseCalendarDialog
    }
}
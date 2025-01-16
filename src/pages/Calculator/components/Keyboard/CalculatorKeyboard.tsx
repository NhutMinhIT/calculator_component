import React from 'react'
import styles from '../../style/calculator.module.css'
import { Box } from '@mui/material'
import {
    AClearButton,
    ADeleteButton,
    NSevenButton,
    NEightButton,
    NNineButton,
    NFourButton,
    NFiveButton,
    NSixButton,
    NOneButton,
    NTwoButton,
    NThreeButton,
    NZeroButton,
    ODecimalButton,
    OPlusOrMinusButton
} from '../index'

const CalculatorKeyboard = (): JSX.Element => {
    return (
        <Box className={styles.calculatorKeyboard}>
            <Box className={styles.gridContainerAction}>
                <div className={styles.clearButton}>
                    <AClearButton />
                </div>
                <div className={styles.deleteButton}>
                    <ADeleteButton />
                </div>
            </Box>
            <Box className={styles.gridContainerNumber}>
                <div className={styles.sevenButton}>
                    <NSevenButton />
                </div>
                <div className={styles.eightButton}>
                    <NEightButton />
                </div>
                <div className={styles.nineButton}>
                    <NNineButton />
                </div>
                <div className={styles.fourButton}>
                    <NFourButton />
                </div>
                <div className={styles.fiveButton}>
                    <NFiveButton />
                </div>
                <div className={styles.sixButton}>
                    <NSixButton />
                </div>
                <div className={styles.oneButton}>
                    <NOneButton />
                </div>
                <div className={styles.twoButton}>
                    <NTwoButton />
                </div>
                <div className={styles.threeButton}>
                    <NThreeButton />
                </div>
                <div>
                    <OPlusOrMinusButton />
                </div>
                <div className={styles.zeroButton}>
                    <NZeroButton />
                </div>
                <div className={styles.decimalButton}>
                    <ODecimalButton />
                </div>
            </Box>
        </Box>
    )
}

export default CalculatorKeyboard
import React from 'react'
import styles from '../../style/calculator.module.css'
import { Box } from '@mui/material'
import AClearButton from './ActionButton/AClearButton'
import ADeleteButton from './ActionButton/ADeleteButton'
import NNineButton from './NumberButton/NNineButton'
import NEightButton from './NumberButton/NEightButton'
import NSevenButton from './NumberButton/NSevenButton'
import NSixButton from './NumberButton/NSixButton'
import NFourButton from './NumberButton/NFourButton'
import NFiveButton from './NumberButton/NFiveButton'
import NOneButton from './NumberButton/NOneButton'
import NTwoButton from './NumberButton/NTwoButton'
import NThreeButton from './NumberButton/NThreeButton'
import NZeroButton from './NumberButton/NZeroButton'
import ODecimalButton from './OperatorButton/ODecimalButton'
import OPlusOrMinusButton from './OperatorButton/OPlusOrMinusButton'

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
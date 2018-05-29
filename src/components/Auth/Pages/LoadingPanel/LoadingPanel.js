import CircularProgress from 'material-ui/CircularProgress'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import React from 'react'
import styles from './LoadingPanel.css'
const LoadingPanel=(<div className={styles.panel}>
    <div className={styles.Loading}>
        <MuiThemeProvider>
            <CircularProgress />
        </MuiThemeProvider>
    </div>
</div>)
export default LoadingPanel;
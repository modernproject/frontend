import { injectGlobal } from 'styled-components'

export const Global = injectGlobal`

  html {
    font-size: 16px;
    height: 100% !important;
    width: 100% !important;
  }
  body {
    background-color: #fff;
    font-size: 1rem;
    font-weight: normal;
    font-family:-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
    letter-spacing: .00rem;
    padding: 0;
    margin: 0;
    overflow-x: hidden;
    height: 100% !important;
    width: 100% !important;
  }
  #app {
    height: 100% !important;
    width: 100% !important;  
  }
`

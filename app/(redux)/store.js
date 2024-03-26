
import { configureStore } from '@reduxjs/toolkit'
import reportSlice from './features/report/reportSlice'

export default configureStore({
  reducer: {
    report: reportSlice
  },
})
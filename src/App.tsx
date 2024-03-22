import { Box } from '@mui/material'
import './App.css'
import CountrySelect from './componenet/CountrySelector'

function App() {


  return (


    <>
      <Box display="grid" >
        <Box gridColumn="span 8">
          <CountrySelect />
        </Box>
      </Box>



    </>
  )
}

export default App

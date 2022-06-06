import React from 'react'
import Banner from './componentsAllRooms/Banner';
import { MuiThemeProvider } from "@material-ui/core/styles";
import themeRooms from './componentsAllRooms/Theme';

function AllRooms() {
  return (
    <MuiThemeProvider theme={themeRooms}>
        <Banner />
    </MuiThemeProvider>
  )
}

export default AllRooms
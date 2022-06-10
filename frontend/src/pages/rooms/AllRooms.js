import React from 'react'
import Banner from './componentsAllRooms/Banner';
import RoomBox from './componentsAllRooms/RoomBox'
import { MuiThemeProvider } from "@material-ui/core/styles";
import themeRooms from './componentsAllRooms/Theme';
import { RoomList } from './componentsAllRooms/RoomList';

function AllRooms() {
    const Rooms = [
        RoomList.PlusKingRoom,
        RoomList.SuperiorKingRoom,
        RoomList.SuperiorTwinRoom,
    ]
    return (
        <MuiThemeProvider theme={themeRooms}>
            <Banner />
            {
                Rooms.map(e => {
                    return (
                        <RoomBox Room={e} />
                    )
                })}
        </MuiThemeProvider>
    )
}

export default AllRooms;
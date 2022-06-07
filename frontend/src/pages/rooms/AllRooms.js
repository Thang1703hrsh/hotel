import React from 'react'
import Banner from './componentsAllRooms/Banner';
import RoomBox from './componentsAllRooms/RoomBox'
import { MuiThemeProvider } from "@material-ui/core/styles";
import themeRooms from './componentsAllRooms/Theme';
import { RoomList } from './componentsAllRooms/RoomList';
import RoomBoxRevert from './componentsAllRooms/RoomBoxRevert';

function AllRooms() {
    const Rooms = [
        RoomList.PlusKingRoom,
        RoomList.SuperiorKingRoom,
        RoomList.SuperiorTwinRoom
    ]
    return (
        <MuiThemeProvider theme={themeRooms}>
            <Banner />
            {
                Rooms.map(e => {
                    if (Rooms.indexOf(e) % 2 === 0) {
                        return (
                            <RoomBox Room={e} />
                        )
                    } else {
                        return (
                            <RoomBoxRevert Room={e} />
                        )
                    }
                })}
        </MuiThemeProvider>
    )
}

export default AllRooms
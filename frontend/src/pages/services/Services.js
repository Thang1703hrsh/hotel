import Banner from './components/Banner'
import RoomBox from './components/RoomBox'
import RoomBoxRevert from './components/RoomBoxRevert';
import themeRooms from './components/Theme';
import SpaOffer from './components/SpaOffer'
import {MuiThemeProvider } from "@material-ui/core/styles";
import { RoomList } from './components/RoomList'
import Info from './components/Info'

export default function Services(){
    const Rooms = [
        RoomList.Fitness,
        RoomList.Pool,
    ]

    return(
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
                })
            }
            <SpaOffer />
            <Info />
        </MuiThemeProvider>

    );
}
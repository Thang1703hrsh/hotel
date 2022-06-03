import Banner from './componentsAllRoom/Banner';
import RoomBox from './componentsAllRoom/RoomBox'
import RoomBoxRevert from './componentsAllRoom/RoomBoxRevert';
import RoomOffer from './componentsAllRoom/RoomOffer';
import GuestReview from './componentsAllRoom/GuestReview';
import { RoomList } from './componentsAllRoom/RoomList';
import themeRooms from './componentsAllRoom/Theme';
import { MuiThemeProvider } from "@material-ui/core/styles";

export default function AllRooms() {
    const Rooms = [
        RoomList.ClubRoom,
        RoomList.SuperiorRoom,
        RoomList.DeluxeRoom
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
                })
            }

            <RoomOffer />

            <GuestReview />

        </MuiThemeProvider>
    )
}
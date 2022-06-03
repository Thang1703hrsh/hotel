import Banner from './components/Banner3';
import Main from './components/Main3'
import MainContent from './components/MainContent3'
import RoomBox from './components/RoomBox'
import RoomBoxRevert from './components/RoomBoxRevert';
import MoreRoom from './components/MoreRoom3';
import { Services } from './components/ServiceList';
import themeRooms from './components/Theme';
import { MuiThemeProvider } from "@material-ui/core/styles";
import axios from 'axios'
import { ThirdPersonDeluxe } from './components/ServiceList';
import React from 'react';

export default function DeluxeRoom() {

    const [Rooms, setRooms] = React.useState([]);
    React.useEffect(() => {
        axios.get(`/api/room/type/deluxe`)
        .then(res => {
            //console.log(res.data);
            setRooms(res.data);
            setRooms(Rooms => [...Rooms, ThirdPersonDeluxe]);
            //Rooms.push(ThirdPersonClub);
        })
        .catch(error => console.log(error));
    },[]);

    return (
        <MuiThemeProvider theme={themeRooms}>
            <Banner />
            <Main />
            <MainContent />
            {
                Rooms && Rooms.map(e => {
                    let Equips = [];
                    Equips = Services.find(s => s.name === e.name).services
                    console.log(Equips)

                    if (Rooms.indexOf(e) % 2 === 0) {
                        return (
                            <RoomBox Room={e} Equips={Equips} />
                        )
                    } else {
                        return (
                            <RoomBoxRevert Room={e} Equips={Equips} />
                        )
                    }
                })
            }

            <MoreRoom />
        </MuiThemeProvider>
    );
}

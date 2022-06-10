import Banner from './components/BannerSKR';
import Main from './components/MainSKR'
import MainContent from './components/MainContentSKR'
import RoomBox from './components/RoomBox'
import RoomBoxRevert from './components/RoomBoxRevert';
import MoreRoom from './components/MoreRoomSKR';
import { Services } from './components/ServiceList';
import themeRooms from './components/Theme';
import { MuiThemeProvider } from "@material-ui/core/styles";
import axios from 'axios'
import { ThirdPersonSuperior } from './components/ServiceList';
import React from 'react';

export default function SuperiorKingRoom() {

    const [Rooms, setRooms] = React.useState([]);
    React.useEffect(() => {
        axios.get(`/api/room/type/superior`)
        .then(res => {
            //console.log(res.data);
            setRooms(res.data);
            setRooms(Rooms => [...Rooms, ThirdPersonSuperior]);
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

import Banner from './components/BannerSPKR';
import RoomBox from './components/RoomBox'
import RoomBoxRevert from './components/RoomBoxRevert';
import MoreRoom from './components/MoreRoomSPKR';
import themeRooms from './components/Theme';
import { MuiThemeProvider } from "@material-ui/core/styles";
import Main from './components/MainSPKR'
import MainContent from './components/MainContentSPKR'
import { ThirdPersonClub } from './components/ServiceList';
import { Services } from './components/ServiceList';
import axios from 'axios'
import React from 'react';


export default function PlusKingRoom() {

    const [Rooms, setRooms] = React.useState([]);
    React.useEffect(() => {
        axios.get(`/api/room/type/club`)
        .then(res => {
            //console.log(res.data);
            setRooms(res.data);
            setRooms(Rooms => [...Rooms, ThirdPersonClub]);
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
                Rooms && Rooms.map((e) => {
                    let Equips = [];
                    Equips = Services.find(s => s.name === e.name).services;
                    console.log(Equips);

                    if (Rooms.indexOf(e) % 2 === 0) {
                        return (
                            <RoomBox Room={e} Equips={Equips}/>
                        )
                    } else {
                        return (
                            <RoomBoxRevert Room={e} Equips={Equips}/>
                        )
                    }
                })
            }

            <MoreRoom />
        </MuiThemeProvider>
    );
}

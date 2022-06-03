import Banner from './components/Banner1';
import RoomBox from './components/RoomBox'
import RoomBoxRevert from './components/RoomBoxRevert';
import MoreRoom from './components/MoreRoom1';
import themeRooms from './components/Theme';
import { MuiThemeProvider } from "@material-ui/core/styles";
import Main from './components/Main1'
import MainContent from './components/MainContent1'
import { ThirdPersonClub } from './components/ServiceList';
import { Services } from './components/ServiceList';
import axios from 'axios'
import React from 'react';

//let Rooms = [];



export default function ClubRoom() {

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

import Banner from './components/Banner'
import RoomBox from './components/RoomBox'
import RoomBoxRevert from './components/RoomBoxRevert';
import themeRooms from './components/Theme';
import SpaOffer from './components/SpaOffer'
import {MuiThemeProvider } from "@material-ui/core/styles";
import Info from './components/Info'

export const RoomList = {

    Fitness: {
        name: "FITNESS FACILITIES",
        description: "Open 24 hours a day and spanning over 100 square metres of InterContinental Saigon Hotel's third floor, our fully equipped fitness facility gives you everything you need to comfortably work out at any time of the day and everyday in the center of Ho Chi Minh city. Framed by floor-to-ceiling windows and flooded with natural light, this is an area where health reigns.",
        img: 'https://ozarks.edu/wp-content/uploads/DSC_6394.jpg',
        
    },
    Pool: {
        name: "POOL",
        description: "Adjacent to the fitness centre, take a dip in InterContinental Saigon Hotel's expansive outdoor swimming pool, complete with deck chairs for lounging and an attendant on staff for drinks and small bites. From 6AM to 9PM, enjoy laps in this 20-metre long beauty, complete with a view of the flanking high rises for a mix of privacy and excitement, right in the heart of Ho Chi Minh city.",
        img: 'https://media.cntraveler.com/photos/59dc0961d74f3663416ffe8b/3:2/w_2046,h_1364,c_limit/Pool-COMOMetropolitanMiamiBeach-Florida-CRHotel.jpg',
    },
    OutdoorDining:
    {
        name: "OUTDOOR DINING",
        description: "Guests can have romantic dinners with family and loved ones. Equipped with outdoor seating for relaxation and dedicated service staff. From 6pm to 10pm, enjoy the most romantic feelings.",
        img: 'https://previews.123rf.com/images/pixhound/pixhound1912/pixhound191200091/136767513-june-20-2011-serengeti-tanzania-luxury-african-safari-lodge-outdoor-dining-in-backyard-with-leather-.jpg',
    }
}

export default function Services(){
    const Rooms = [
        RoomList.Fitness,
        RoomList.Pool,
        RoomList.OutdoorDining,
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
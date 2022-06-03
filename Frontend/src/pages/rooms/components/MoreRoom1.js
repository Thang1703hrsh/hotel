import { CardMedia, Typography } from "@material-ui/core";
import { Grid, Box, Card } from "@material-ui/core";
import ImageMR1 from "../images1/MoreRoom1.png"
import ImageMR2 from "../images1/MoreRoom2.png"
import IconCouch from '@mui/icons-material/Weekend'
import IconWifi from '@mui/icons-material/Wifi'
import IconCoffee from '@mui/icons-material/Coffee'
import IconKingBed from '@mui/icons-material/KingBed'
import IconTwinBed from '@mui/icons-material/Bed';
import IconAC from '@mui/icons-material/AcUnit'
import RoomEquip from "./RoomEquip";
import {  Link } from "react-router-dom";

const EquipmentList = {
    Lounge: {
        title: 'CLUB LOUNGE ACCESS',
        icon: IconCouch
    },
    Wifi: {
        title: 'WIFI',
        icon: IconWifi
    },
    Breakfast: {
        title: 'BREAKFAST FOR 2',
        icon: IconCoffee
    },
    KingBed: {
        title: 'KING BED',
        icon: IconKingBed
    },
    AirConditioner: {
        title: 'AIR CONDITIONER',
        icon: IconAC,
    },
    TwinBed: {
        title: "TWIN BED",
        icon: IconTwinBed
    }
}

const MoreRooms = {
    o1: {
        title: "Superior Room",
        content: "Looking out across magnificent panoramic views of Saigon, this well-appointed 38 sqm room offers the perfect balance of privacy and luxury. Combining classic design elements with modern technological amenities, our Superior rooms at InterContinental Saigon Hotel include an expansive list of services and comforts for a premium travel experience.",
        image: ImageMR1,
        area: "38 SQUARE METRES",
        equip: [
            EquipmentList.KingBed,
            EquipmentList.Wifi,
            EquipmentList.AirConditioner
        ],
        link: "SuperiorRoom"
    },
    o2: {
        title: "Deluxe Room",
        content: "Ideal for both business and leisure travellers, timeless luxury and functional amenities unite, all with a stunning view of the city. Take advantage of the 24-hour in-room dining service, laundry service and personal business centre, which includes an in-room telephone line and exclusive access to the fax and printer in the Business Centre at InterContinental Saigon Hotel.",
        image: ImageMR2,
        area: "38-39 SQUARE METRES",
        equip: [
            EquipmentList.KingBed,
            EquipmentList.Wifi,
            EquipmentList.AirConditioner
        ],
        link: "DeluxeRoom"
    }
}

function MoreRoomCard({ Opt }) {
    let str = "/" + Opt.link
    return (
        <Card>
            <Grid container direction="row" spacing={2} justifyContent="space-between">
                <Grid item xs={12}>
                    <CardMedia
                        component="img"
                        alt="Opt"
                        image={Opt.image}
                        title="Opt"
                    />
                </Grid>
                <Grid item xs={12}>
                    <Link style={{textDecoration: "none"}}  to={str}><Typography variant="h5" style={{
                        color: "#a77b5a",
                    }}>{Opt.title}</Typography></Link> 
                </Grid>
                <Grid item xs={12}>
                    <Typography style={{textAlign: "left", padding:"5%"}} variant="body2">{Opt.content}</Typography>
                </Grid>
                <Grid item xs={12}>
                    <RoomEquip equip={Opt.equip} area={Opt.area}/>
                </Grid>
            </Grid>
        </Card>
    )
}


export default function MoreRoom() {
    return (
        <Grid container direction="row" justifyContent="center">
            <Grid item xs={12}>
                <Box sx={{
                    marginY: "10%",
                    bgcolor: "#f8f8f8"
                }}>
                    <Grid container direction="column" spacing={5}>
                        <Grid item xs={12}>
                            <Typography style={{fontWeight: "400"}} variant="h4">More Rooms</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container spacing={2} direction="row" justifyContent="space-around" alignItems="flex-start">
                                <Grid item xs={10} sm={10} lg={4}>
                                    <MoreRoomCard Opt={MoreRooms.o1} />
                                </Grid>
                                <Grid item xs={10} sm={10} lg={4}>
                                    <MoreRoomCard Opt={MoreRooms.o2} />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
        </Grid>
    )
}
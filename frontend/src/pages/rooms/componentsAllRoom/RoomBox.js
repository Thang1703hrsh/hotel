import RoomDesc from './RoomDesc'
import RoomImage from './RoomImage'
import RoomEquip from './RoomEquip'
import { Card, Grid } from '@material-ui/core'


export default function RoomBox({ Room }) {
    return (
        <Grid container
            direction="row"
            justifyContent="center">
            <Grid item xs={10}>
                <Card style={{
                    marginTop: "5%",
                    boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)"
                }}>
                    <Grid container direction="row" spacing={2} alignItems="center" justifyContent="space-between">
                        <Grid item xs={12} sm={12} md={12} lg={4}><RoomImage RoomImage={Room.img} /></Grid>
                        <Grid item xs={12} sm={7} md={7} lg={5}><RoomDesc Name={Room.name} Desc={Room.description} link={Room.link} /></Grid>
                        <Grid item xs={12} sm={5} md={5} lg={3}><RoomEquip equip={Room.equip} area={Room.area} /></Grid>
                    </Grid>
                </Card>
            </Grid>
        </Grid>

    );
}
import RoomDesc from './RoomDesc'
import RoomImage from './RoomImage'
import RoomEquip from './RoomEquip'
import { Card, Grid } from '@material-ui/core'

export default function RoomBoxRevert({ Room, Equips }) {
    return (
        <Grid container
            direction="row"
            justifyContent="center"
            >
            <Grid item xs={10}>
                <Card style={{
                    marginTop: "5%",
                    boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
                }}>
                    <Grid container spacing={2} alignItems="center" justifyContent="space-between">
                        <Grid style={{paddingLeft: "3%"}} item xs={12} sm={7} md={7} lg={5}><RoomDesc Name={Room.name} Desc={Room.description} /></Grid>
                        <Grid item xs={12} sm={5} md={5} lg={3}><RoomEquip number={Room.number} equip={Equips} area={Room.square} /></Grid>
                        <Grid item xs={12} sm={12} md={12} lg={4}><RoomImage RoomImage={Room.picture} /></Grid>
                    </Grid>
                </Card>
            </Grid>
        </Grid>
    );
}
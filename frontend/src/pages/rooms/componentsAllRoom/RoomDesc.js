import { Box} from "@material-ui/core";
import { Typography } from "@material-ui/core";
import {  Link } from "react-router-dom";


export default function RoomDesc({ Name, Desc, link }) {
    let str = "/" + link
    return (
            <Box sx={{
                textAlign: "left",
                padding:"2%"
            }}>
                <Link style={{textDecoration: "none"}}  to={str}><Typography variant="h6" style={{
                    color: "#a77b5a",
                }}>{Name}</Typography></Link> 
                <Typography variant="body1">{Desc}</Typography>
            </Box>
    );
}
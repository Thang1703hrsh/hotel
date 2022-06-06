import { CardMedia } from "@material-ui/core";

export default function RoomImage({ RoomImage }) {
    return (
            <CardMedia height="400px"
                component="img"
                alt="Banner"
                image={RoomImage}
                title="Banner" />
    );
}
import { CardMedia } from "@material-ui/core";

export default function RoomImage({ RoomImage }) {
    return (
            <CardMedia
                component="img"
                alt="Banner"
                image={RoomImage}
                title="Banner" />
    );
}
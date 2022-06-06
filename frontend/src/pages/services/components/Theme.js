import { createTheme } from "@material-ui/core/styles";

const themeRooms = createTheme()

themeRooms.typography.h1 = {
    fontWeight:"700",
    [themeRooms.breakpoints.up('md')]: {
        fontSize: '3rem',
    },
    [themeRooms.breakpoints.up('lg')]: {
        fontSize: '4rem',
    },
    [themeRooms.breakpoints.down('sm')]: {
        fontSize: '2rem',
    },
    [themeRooms.breakpoints.down('xs')]: {
        fontSize: '1.3rem',
    },
};

themeRooms.typography.h2 = {
    fontWeight:"400",
    [themeRooms.breakpoints.up('md')]: {
        fontSize: '1.5rem',
    },
    [themeRooms.breakpoints.up('lg')]: {
        fontSize: '2rem',
    },
    [themeRooms.breakpoints.down('sm')]: {
        fontSize: '1.5rem',
    },
    [themeRooms.breakpoints.down('xs')]: {
        fontSize: '1rem',
    },
}

themeRooms.typography.h3 = {
    fontWeight:"100",
    [themeRooms.breakpoints.up('md')]: {
        fontSize: '2rem',
    },
    [themeRooms.breakpoints.up('lg')]: {
        fontSize: '2.5rem',
    },
    [themeRooms.breakpoints.down('sm')]: {
        fontSize: '1.5rem',
    },
    [themeRooms.breakpoints.down('xs')]: {
        fontSize: '1rem',
    },
}

themeRooms.typography.h4 = {
    fontWeight:"500",
    [themeRooms.breakpoints.up('md')]: {
        fontSize: '2rem',
    },
    [themeRooms.breakpoints.up('lg')]: {
        fontSize: '2rem',
    },
    [themeRooms.breakpoints.down('sm')]: {
        fontSize: '1.7rem',
    },
    [themeRooms.breakpoints.down('xs')]: {
        fontSize: '1.5rem',
    },
}

themeRooms.typography.h5 = {
    fontWeight:"600",
    [themeRooms.breakpoints.up('md')]: {
        fontSize: '1.3rem',
    },
    [themeRooms.breakpoints.up('lg')]: {
        fontSize: '1.4rem',
    },
    [themeRooms.breakpoints.down('sm')]: {
        fontSize: '1rem',
    },
    [themeRooms.breakpoints.down('xs')]: {
        fontSize: '0.8rem',
    },
}

themeRooms.typography.h6 = {
    fontWeight: "400",
    [themeRooms.breakpoints.up('md')]: {
        fontSize: '0.9rem',
    },
    [themeRooms.breakpoints.up('lg')]: {
        fontSize: '1.2rem',
    },
    [themeRooms.breakpoints.down('sm')]: {
        fontSize: '0.9rem',
    },
    [themeRooms.breakpoints.down('xs')]: {
        fontSize: '0.7rem',
    },
};

themeRooms.typography.body1 = {
    fontWeight: "400",
    [themeRooms.breakpoints.up('md')]: {
        fontSize: '1.1rem',
    },
    [themeRooms.breakpoints.up('lg')]: {
        fontSize: '1.1rem',
    },
    [themeRooms.breakpoints.down('sm')]: {
        fontSize: '1rem',
    },
    [themeRooms.breakpoints.down('xs')]: {
        fontSize: '0.6rem',
    },
};

themeRooms.typography.body2 = {
    fontWeight: "400",
    [themeRooms.breakpoints.up('md')]: {
        fontSize: '0.9rem',
    },
    [themeRooms.breakpoints.up('lg')]: {
        fontSize: '1rem',
    },
    [themeRooms.breakpoints.down('sm')]: {
        fontSize: '0.8rem',
    },
    [themeRooms.breakpoints.down('xs')]: {
        fontSize: '0.7rem',
    },
};

export default themeRooms;

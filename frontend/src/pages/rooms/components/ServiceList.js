import Term from '../images1/Term.png'
import IconCouch from '@mui/icons-material/Weekend'
import IconWifi from '@mui/icons-material/Wifi'
import IconCoffee from '@mui/icons-material/Coffee'
import IconKingBed from '@mui/icons-material/KingBed'
import IconTwinBed from '@mui/icons-material/Bed';
import IconAC from '@mui/icons-material/AcUnit'

const EquipmentList = {
    Lounge: {
      title: 'CLUB LOUNGE ACCESS',
      icon: IconCouch
    },
    Wifi: {
      title: 'WIFI',
      icon: IconWifi
    },
    Breakfast:{
        title: 'BREAKFAST FOR 2',
        icon: IconCoffee
    },
    KingBed: {
        title: 'KING BED',
        icon: IconKingBed
    },
    AirConditioner:{
        title: 'AIR CONDITIONER',
        icon: IconAC,
    },
    TwinBed: {
        title: "TWIN BED",
        icon: IconTwinBed
    }
}

export const Services = [
    {
        name: "CLUB KING ROOM",
        services: [
            EquipmentList.Lounge,
            EquipmentList.Wifi,
            EquipmentList.KingBed,
            EquipmentList.AirConditioner,
            EquipmentList.Breakfast
        ]
    },
    {
        name: "CLUB TWIN ROOM",
        services: [
            EquipmentList.Lounge,
            EquipmentList.Wifi,
            EquipmentList.TwinBed,
            EquipmentList.AirConditioner,
            EquipmentList.Breakfast
        ]
    },
    {
        name: "THIRD PERSON SUPPLEMENTS CLUB",
        services: [
            EquipmentList.Lounge,
            EquipmentList.Wifi,
            EquipmentList.AirConditioner,
            EquipmentList.Breakfast
        ]
    },
    {
        name: "SUPERIOR KING DELUXE",
        services: [
            EquipmentList.Wifi,
            EquipmentList.KingBed,
            EquipmentList.AirConditioner,
        ]
    },
    {
        name: "SUPERIOR TWIN DELUXE",
        services: [
            EquipmentList.Wifi,
            EquipmentList.TwinBed,
            EquipmentList.AirConditioner,
        ]
    },
    {
        name: "THIRD PERSON SUPPLEMENTS SUPERIOR",
        services: [
            EquipmentList.Wifi,
            EquipmentList.AirConditioner,
        ]
    },
    {
        name: "DELUXE KING ROOM",
        services: [
            EquipmentList.Wifi,
            EquipmentList.KingBed,
            EquipmentList.AirConditioner,
        ]
    },
    {
        name: "DELUXE TWIN ROOM",
        services: [
            EquipmentList.Wifi,
            EquipmentList.TwinBed,
            EquipmentList.AirConditioner,
        ]
    },
    {
        name: "DELUXE CORNER KING ROOM",
        services: [
            EquipmentList.Wifi,
            EquipmentList.KingBed,
            EquipmentList.AirConditioner,
        ]
    },
    {
        name: "THIRD PERSON SUPPLEMENTS DELUXE",
        services: [
            EquipmentList.Lounge,
            EquipmentList.Wifi,
            EquipmentList.AirConditioner,
            EquipmentList.Breakfast
        ]
    },
]

export const ThirdPersonSuperior = {
    number: null,
    name: "THIRD PERSON SUPPLEMENTS SUPERIOR",
    description: "Free of charge with children 5 years old or younger. With Children between 6 and 11 years old, if without breakfast: 22.50 USD++ per child per night, With breakfast: 30.00 USD++ per child per night. In case children 12 years old or older, and adults: Without breakfast: 45.00 USD++ per person per night, With breakfast: 60.00 USD++ per person per night. Each room with maximum number of occupants per room: 3 persons including children. Supplements are subject to 5% service charge and 10% tax.",
    picture: Term,
    square: 0,
    equip: [
        "WIFI", "AIR CONDITIONER"
    ]
}
export const ThirdPersonClub = {
    number: null,
    name: "THIRD PERSON SUPPLEMENTS CLUB",
    description: "Free of charge with children 5 years old or younger. With Children between 6 and 11 years old, if without breakfast: 22.50 USD++ per child per night, With breakfast: 30.00 USD++ per child per night. In case children 12 years old or older, and adults: Without breakfast: 45.00 USD++ per person per night, With breakfast: 60.00 USD++ per person per night. Each room with maximum number of occupants per room: 3 persons including children. Supplements are subject to 5% service charge and 10% tax.",
    picture: Term,
    square: 0,
    equip: [
        "WIFI", "AIR CONDITIONER"
    ]
}
export const ThirdPersonDeluxe = {
    number: null,
    name: "THIRD PERSON SUPPLEMENTS DELUXE",
    description: "Free of charge with children 5 years old or younger. With Children between 6 and 11 years old, if without breakfast: 22.50 USD++ per child per night, With breakfast: 30.00 USD++ per child per night. In case children 12 years old or older, and adults: Without breakfast: 45.00 USD++ per person per night, With breakfast: 60.00 USD++ per person per night. Each room with maximum number of occupants per room: 3 persons including children. Supplements are subject to 5% service charge and 10% tax.",
    picture: Term,
    square: 0,
    equip: [
        "WIFI", "AIR CONDITIONER"
    ]
}
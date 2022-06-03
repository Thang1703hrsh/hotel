import ImageDeluxeKing from '../images3/DeluxeKing.png'
import ImageDeluxeTwin from '../images3/DeluxeTwin.png'
import ImageDeluxeCorner from '../images3/DeluxeCorner.png'
import ImageDeluxeTerm from '../images3/Term.png'
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


export const RoomList = {

    DeluxeKingRoom: {
        name: "DELUXE KING ROOM",
        description: "Enjoy fantastic views with floor to ceiling windows and treat yourself to the premier Saigon city life! InterContinental Saigon Hotel designed to capture the essence of both classical and contemporary essence of Vietnam. Non smoking rooms only.",
        img: ImageDeluxeKing,
        area: '38 SQUARE METRES',
        equip: [
            EquipmentList.Wifi,
            EquipmentList.KingBed,
            EquipmentList.AirConditioner,
        ]
    },
    DeluxeTwinRoom: {
        name: "DELUXE TWIN ROOM",
        description: "Looking out across magnificent panoramic view of Saigon skyline. Relax in the comfort of this spacious 38sqm twin bed room at InterContinental Saigon Hotel offering floor to ceiling windows, high speed internet, separate bath and shower, safe box, mini bar and more. Non smoking rooms only.",
        img: ImageDeluxeTwin,
        area: '38 SQUARE METRES',
        equip: [
            EquipmentList.Wifi,
            EquipmentList.TwinBed,
            EquipmentList.AirConditioner,
        ]
    },
    DeluxeCornerRoom: {
        name: "DELUXE CORNER KING ROOM",
        description: "Experience Saigon life in our spacious corner rooms that unveil both the colonial and modern day views of this vibrant city. Together with warm decor and abundant natural light from our signature floor to ceiling windows, our 39sqm rooms at InterContinental Saigon Hotel offer diverse media solution and well appointed amenities. Non smoking rooms only.",
        img: ImageDeluxeCorner,
        area: '39 SQUARE METRES',
        equip: [
            EquipmentList.Wifi,
            EquipmentList.KingBed,
            EquipmentList.AirConditioner,
        ]
    },
    ThirdPerson: {
        name: "THIRD PERSON SUPPLEMENTS",
        description: "Free of charge with children 5 years old or younger. With Children between 6 and 11 years old, if without breakfast: 22.50 USD++ per child per night, With breakfast: 30.00 USD++ per child per night. In case children 12 years old or older, and adults: Without breakfast: 45.00 USD++ per person per night, With breakfast: 60.00 USD++ per person per night. Each room with maximum number of occupants per room: 3 persons including children. Supplements are subject to 5% service charge and 10% tax.",
        img: ImageDeluxeTerm,
        area: '0 SQUARE METRES',
        equip: [
            EquipmentList.Lounge,
            EquipmentList.Wifi,
            EquipmentList.AirConditioner,
            EquipmentList.Breakfast
        ]
    }
}
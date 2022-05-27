import ImageSuperKing from '../images2/King.png'
import ImageSuperTwin from '../images2/Twin.png'
import ImageSuperTerm from '../images2/Term.png'
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

    SuperiorKingRoom: {
        name: "SUPERIOR KING DELUXE",
        description: "Our spacious and elegant rooms at InterContinental Saigon Hotel provide more than just comfortable accommodation with complimentary high speed internet as well as panoramic view to the tree-lined streets next to Notre Dame Cathedral. Non smoking rooms only.",
        img: ImageSuperKing,
        area: '38 SQUARE METRES',
        equip: [
            EquipmentList.Wifi,
            EquipmentList.KingBed,
            EquipmentList.AirConditioner,
        ]
    },
    SuperiorTwinRoom: {
        name: "SUPERIOR TWIN DELUXE",
        description: "Have a restful stay in our superior rooms at InterContinental Saigon Hotel offering terrific views over Saigon streets and featuring elegant interiors with modern flair and smart technology such as flat screen TVs. Take care of business with high-speed Internet or Wi-Fi available for a charge in your separate work corner. Non smoking rooms only.",
        img: ImageSuperTwin,
        area: '38 SQUARE METRES',
        equip: [
            EquipmentList.Wifi,
            EquipmentList.TwinBed,
            EquipmentList.AirConditioner,
        ]
    },
    ThirdPerson: {
        name: "THIRD PERSON SUPPLEMENTS",
        description: "Free of charge with children 5 years old or younger. With Children between 6 and 11 years old, if without breakfast: 22.50 USD++ per child per night, With breakfast: 30.00 USD++ per child per night. In case children 12 years old or older, and adults: Without breakfast: 45.00 USD++ per person per night, With breakfast: 60.00 USD++ per person per night. Each room with maximum number of occupants per room: 3 persons including children. Supplements are subject to 5% service charge and 10% tax.",
        img: ImageSuperTerm,
        area: '0 SQUARE METRES',
        equip: [
            EquipmentList.Wifi,
            EquipmentList.AirConditioner,
        ]
    }
}
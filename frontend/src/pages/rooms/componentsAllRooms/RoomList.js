import KingRoom from '../img/king.jpg'
import TwinRoom from '../img/twin.jpg'
import PlusKing from '../img/plus-king.jpg'
import IconCouch from '@mui/icons-material/Weekend'
import IconWifi from '@mui/icons-material/Wifi'
import IconCoffee from '@mui/icons-material/Coffee'
import IconKingBed from '@mui/icons-material/KingBed'
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
}

export const RoomList = {
    PlusKingRoom: {
        name: "SUPERIOR PLUS KING ROOM",
        description: "Superior Plus King rooms offer exclusive space to relax, along with stunning views of cosmopolitan Saigon.",
        img: PlusKing,
        area: '38-39 SQUARE METRES',
        equip: [
            EquipmentList.Lounge,
            EquipmentList.KingBed,
            EquipmentList.Breakfast,
            EquipmentList.Wifi,
            EquipmentList.AirConditioner
        ],
        link: "PlusKingRoom"
    },
    SuperiorKingRoom: {
        name: "SUPERIOR KING ROOM",
        description: "Looking out across magnificent panoramic views of Saigon, this well-appointed 38 sqm room offers the perfect balance of privacy and luxury.",
        img: KingRoom,
        area: '38 SQUARE METRES',
        equip: [
            EquipmentList.KingBed,
            EquipmentList.Wifi,
            EquipmentList.AirConditioner
        ],
        link: "SuperiorKingRoom"
    },
    SuperiorTwinRoom: {
        name: "SUPERIOR TWIN ROOM",
        description: "Ideal for both business and leisure travellers, timeless luxury and functional amenities unite, all with a stunning view of the city.",
        img: TwinRoom,
        area: '38-39 SQUARE METRES',
        equip: [
            EquipmentList.KingBed,
            EquipmentList.Wifi,
            EquipmentList.AirConditioner
        ],
        link: "SuperiorTwinRoom"
    }
}
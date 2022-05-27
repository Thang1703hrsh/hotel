import ImageClub from '../images/club-small.png'
import ImageSuper from '../images/super-small.png'
import ImageDeluxe from '../images/deluxe-small.png'
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
    ClubRoom: {
        name: "CLUB INTERCONTINENTAL ROOMS",
        description: "Club InterContinental rooms offer exclusive space to relax, along with stunning views of cosmopolitan Saigon. You'll also enjoy benefits like complimentary pressing service, complimentary Wi-Fi and local calls. These premium rooms include daily breakfasts at Club InterContinental Lounge or Market 39 restaurant, afternoon tea as well as signature cocktails at our exclusive Club InterContinental Lounge.",
        img: ImageClub,
        area: '38-39 SQUARE METRES',
        equip: [
            EquipmentList.Lounge,
            EquipmentList.KingBed,
            EquipmentList.Breakfast,
            EquipmentList.Wifi,
            EquipmentList.AirConditioner
        ],
        link: "ClubRoom"
    },
    SuperiorRoom: {
        name: "SUPERIOR ROOMS",
        description: "Looking out across magnificent panoramic views of Saigon, this well-appointed 38 sqm room offers the perfect balance of privacy and luxury. Combining classic design elements with modern technological amenities, our Superior rooms at InterContinental Saigon Hotel include an expansive list of services and comforts for a premium travel experience.",
        img: ImageSuper,
        area: '38 SQUARE METRES',
        equip: [
            EquipmentList.KingBed,
            EquipmentList.Wifi,
            EquipmentList.AirConditioner
        ],
        link: "SuperiorRoom"
    },
    DeluxeRoom: {
        name: "DELUXE ROOMS",
        description: "Ideal for both business and leisure travellers, timeless luxury and functional amenities unite, all with a stunning view of the city. Take advantage of the 24-hour in-room dining service, laundry service and personal business centre, which includes an in-room telephone line and exclusive access to the fax and printer in the Business Centre at InterContinental Saigon Hotel.",
        img: ImageDeluxe,
        area: '38-39 SQUARE METRES',
        equip: [
            EquipmentList.KingBed,
            EquipmentList.Wifi,
            EquipmentList.AirConditioner
        ],
        link: "DeluxeRoom"
    }
}
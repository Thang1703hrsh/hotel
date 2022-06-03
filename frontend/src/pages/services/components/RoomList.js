import ImageFitness from '../images/Service1.png'
import ImagePool from '../images/Service2.png'
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

    Fitness: {
        name: "FITNESS FACILITIES",
        description: "Open 24 hours a day and spanning over 100 square metres of InterContinental Saigon Hotel's third floor, our fully equipped fitness facility gives you everything you need to comfortably work out at any time of the day and everyday in the center of Ho Chi Minh city. Framed by floor-to-ceiling windows and flooded with natural light, this is an area where health reigns.",
        img: ImageFitness,
    },
    Pool: {
        name: "POOL",
        description: "Adjacent to the fitness centre, take a dip in InterContinental Saigon Hotel's expansive outdoor swimming pool, complete with deck chairs for lounging and an attendant on staff for drinks and small bites. From 6AM to 9PM, enjoy laps in this 20-metre long beauty, complete with a view of the flanking high rises for a mix of privacy and excitement, right in the heart of Ho Chi Minh city.",
        img: ImagePool,
    }
}
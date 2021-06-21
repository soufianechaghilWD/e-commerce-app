import Fashion from '../pics/fashion.jpg'
import Electronics from '../pics/electronic.jpg'
import Home from "../pics/home.jpg"
import Sports from '../pics/sports.jpg'

const header__data = {
    "Fashion": {
        hoverFunc: true,
        pic: Fashion,
        header: "Fashion",
        lisNum: 4,
        sub1: 'Scarves & Shawls',
        sub2: "Hats & Caps",
        sub3: "Belts & Accessories",
        sub4: "Baby Clothing",
        lis1: [
            "Other Scarves & Shawls",
            "Silk Scarves",
            "Fur Scarves",
            "Fur Shawls",
            "Knitted Scarves",
            "Knitted Shawls",
        ],
        lis2: [
            "Berets",
            "Sports Caps",
            "Straw Hats",
            "Baby Hats & Caps",
            "Bonnets",
            "Bucket Hats",
        ],
        lis3: [
            "Beaded Belts",
            "Belt Buckles",
            "Belt Chains",
            "Chain Belts",
            "Fabric Belts",
            "Genuine Leather Belts",
        ],
        lis4: [
            "Baby T-Shirts",
            "Baby bibs",
            "Baby clothing sets",
            "Baby dresses",
            "Baby hoodies&swearshirts",
            "Baby jackets&outwears",
        ]
    },
    "Electronics": {
        hoverFunc: true,
        pic: Electronics,
        header: "Electronics",
        lisNum: 3,
        sub1: 'Camera, Photo & Accessories',
        sub2: " Computer Hardware & Software",
        sub3: "Chargers,Batteries & Power Supplies",
        lis1: [
            "Action & Sports Camera",
            "Action & Sports Camera Accessory",
            "Baby & Pet Monitor",
            "Backgrounds",
            "Battery Grip",
            "Camera Filters",
        ],
        lis2: [
            "All in One Computers",
            "Blank Disks",
            "CPUs",
            "Computer Cases & Towers",
            "Desktops",
            "Fans & Cooling",
        ],
        lis3: [
            "Battery Accessories",
            "Battery Case",
            "Battery Charger",
            "Charger & Adapter",
            "Charging Stand & Holder",
            "Charging Station & Power Station",
        ]
    },
    "Homes": {
        hoverFunc: true,
        pic: Home,
        header: "Homes",
        lisNum: 3,
        sub1: 'Garden Supplies',
        sub2: "Home Decor",
        sub3: "Bathroom Products",
        lis1: [
            "Garden Buildings",
            "BBQ",
            "Garden Landscaping & Decking",
            "Garden Pots & Planters",
            "Household Thermometers",
            "Mailboxes"
        ],
        lis2: [
            "Artificial Plants and Flowers",
            "Blinds, Shades & Shutters",
            "Candles & Home Fragrance",
            "Clocks",
            "Curtain Poles, Tracks & Accessories",
            "Decorative Accents",
        ],
        lis3:[
            "Basins",
            "Bath Mats",
            "Bath Pillows",
            "Bathroom Sets",
            "Other Bath & Toilet Supplies",
            "Shower Caps",
        ]
    },
    "Sports": {
        color: '#DE0085',
        hoverFunc: true,
        pic: Sports,
        header: "Sports",
        lisNum: 4,
        sub1: 'Fitness & Body Building',
        sub2: "Indoor Soprts",
        sub3: "Boats & Ships",
        sub4: 'Gambling',
        lis1: [
            "Balance Training",
            "Boxing",
            "Cardio Training",
            "Dance Pads(Old)",
            "Fitness Accessories",
            "Fitness Balls(Old)",
        ],
        lis2: [
            "Air Hockey",
            "Board Game",
            "Bowling",
            "Chess Games",
            "Coin Operated Games",
            "Darts",
        ],
        lis3: [
            "Barge",
            "Cabin Cruiser",
            "Cargo Ship",
            "Fishing Vessel",
            "Other Boats",
            "Parts & Accessories",
            "Passenger Ship"
        ],
        lis4: [
            "Bingo",
            "Dice",
            "Gambling Tables",
            "Other Gambling Products",
            "Playing Cards",
            "Poker Chips"
        ]
    }
}

export default header__data
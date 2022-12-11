import stars2 from './assets/tradehistoryassets/2stars.svg';
import stars5 from './assets/tradehistoryassets/5stars.svg';
import stars4 from './assets/tradehistoryassets/4stars.svg';
import shoes from './assets/tradehistoryassets/item-shoes.svg';
import macbook from './assets/tradehistoryassets/item-macbook.svg';
import iphone from './assets/tradehistoryassets/item-iphone.svg';
import dress from './assets/tradehistoryassets/item-dress.svg';

import up_item from './assets/mytradesassets/uploadItem.svg';
import trade_usericon from './assets/mytradesassets/trade-usericon.svg';
import trade_otherusericon from './assets/mytradesassets/trade-otherusericon.svg';
import tradearrow from './assets/mytradesassets/tradearrow.svg';
import mtiphone from './assets/mytradesassets/mytradeitem-iphone.svg';
import trade_otherusericon2 from './assets/mytradesassets/trade-otherusericon2.svg';
import adidas from './assets/mytradesassets/adidas-shoes.svg';
import blackdress from './assets/mytradesassets/blackdress.svg';
import checkbtn from './assets/mytradesassets/checkbtn.svg';
import xbtn from './assets/mytradesassets/xbtn.svg';

import './mytrades.css'


export const links = [
  {
    id: 1,
    url: '/',
    text: 'home',
  },
  {
    id: 2,
    url: '/tradehistory',
    text: 'Trade History',
  },
  {
    id: 3,
    url: '/my-trades',
    text: 'My Trades',
  },
  {
    id: 4,
    url: '/my-items',
    text: 'My Items',
  },
];

export const itemslist = [
  {
    id: 1,
    item: dress,
    name: 'Black Dress with flower patterns'
  },

  {
    id: 2,
    item: macbook,
    name: 'Macbook PRO (13-inch)'
  },

  {
    id: 3,
    item: shoes,
    name: 'Adidas shoes (Aqua Blue)'
  },

  {
    id: 4,
    item: iphone,
    name: 'Apple Iphone 14 Pro'
  }
]

export const history = [
  {
    id: 1,
    tradenum: 'Trade #93764',
    date: 'Nov 08 (12:34pm)',
    trader: 'Lilia Smithin',
    message: 'Converse Black To Nike Aqua Color',
    stars: <img src={stars2} className="stars" alt="star" 
    height={30}
    />,
    item: <img src={shoes} className="item-img" alt="shoes" 
    height={150}
    />
  },

  {
    id: 2,
    tradenum: 'Trade #76354',
    date: 'May 11 (9:01am)',
    trader: 'Alynn Lyle Laurence',
    message: 'Apple Iphone To MacBook Pro',
    stars: <img src={stars5} className="stars" alt="star" 
    height={30}
    />,
    item: <img src={macbook} className="item-img" alt="macbook" 
    height={150}
    />
  },

  {
    id: 3,
    tradenum: 'Trade #35711',
    date: 'Sept 03 2021 (10:27pm)',
    trader: 'Robert Downerie',
    message: 'Macbook Pro To Apple Iphone',
    stars: <img src={stars2} className="stars" alt="star" 
    height={30}
    />,
    item: <img src={iphone} className="item-img" alt="iphone" 
    height={150}
    />
  },

  {
    id: 4,
    tradenum: 'Trade #11433',
    date: 'June 11 2021 (4:22am)',
    trader: 'Magica Mike',
    message: 'Fubu shirt To Black Flora Dress',
    stars: <img src={stars4} className="stars" alt="star" 
    height={30}
    />,
    item: <img src={dress} className="item-img" alt="dress" 
    height={150}
    />
  }
]


export const my_trades = [
  {
    
    id: 1,
    yourIcon: <img src={trade_usericon} className="own-icon" alt="yourPicture" 
    style={{height: 30, borderRadius: 400/ 2}} 
    />,
    yourName: '(You)',
    yourItem: <img src={up_item} className="item-img" alt="upload" 
    height={150}/>,
    arrow: <img src={tradearrow} className="tradearrowicon" alt="upload" 
    height={75}/>,
    otherUserIcon: <img src={trade_otherusericon} className="otheruser-icon" alt="otheruserPicture" 
    style={{height: 30, borderRadius: 400/ 2}} 
    />,
    otherUserName: 'Kaye F.',
    otherUserItem: <img src={mtiphone} className="item-img" alt="iphone" 
    height={150}
    />,
    button: <button className='offer'>OFFER</button>
  },

  {
    id: 2,
    yourIcon: <img src={trade_usericon} className="own-icon" alt="yourPicture" 
    style={{height: 30, borderRadius: 400/ 2}} 
    />,
    yourName: '(You)',
    yourItem: <img src={adidas} className="item-img" alt="adidas" 
    height={150}/>,
    arrow: <img src={tradearrow} className="tradearrowicon" alt="upload" 
    height={75}/>,
    otherUserIcon: <img src={trade_otherusericon2} className="otheruser-icon" alt="otheruserPicture" 
    style={{height: 30, borderRadius: 400/ 2}} 
    />,
    otherUserName: 'Amanda G.',
    otherUserItem: <img src={blackdress} className="item-img" alt="dress" 
    height={150}
    />,
    checkicon: <img src={checkbtn} className="check-btn" alt="dress" 
    height={45}
    />,
    button: <button className='counter'>COUNTER</button>,
    xicon: <img src={xbtn} className="x-btn" alt="dress" 
    height={45}
    />
  }
]
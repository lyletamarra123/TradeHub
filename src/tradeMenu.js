
// import './tradeMenucss.css';

// const TradeMenu = () => {
//     return (
//         <>
//             <section className="trade-section">
//                 <div className="searchbar">
//                     <input type="text" placeholder="Search.." name="search" className="search-box"></input>
//                     <button className="search-btn"><i class="fa fa-search"></i></button>
//                 </div>
//                 <br></br>
//                 <br></br>
//                 <section className='category'>
//                     <div className='category-btn'>
//                         <button className='items-btn'>ITEM LIST</button>
//                         <button className='people-btn'>PEOPLE</button>
//                     </div>
//                 </section>
//             </section>
//         </>
//     )
// };

// export default TradeMenu;

import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ItemsList from './item-list.js';

import './trademenuX.css';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    
    <Box className='outer-box' sx={{ width: 'fit-content', margin: 2, pl: 50}}>
      <Box className='innerupper-box' sx={{ borderBottom: 1, borderColor: 'divider', width: 'fit-content'}}>
        <div className="searchbar">
            <input type="text" placeholder="Search.." name="search" className="search-box"></input>
            <button className="search-btn"><i class="fa fa-search"></i></button>
        </div>
        <br></br>
        <br></br>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" >
          <Tab className='tabs' label="Item List" {...a11yProps(0)} />
          <Tab className='tabs' label="People" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0} className='tab1'>
        <ItemsList/>
      </TabPanel>
      <TabPanel value={value} index={1} className='tab2'>
        <p>There are no available people right now.</p>
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </Box>
  );
}
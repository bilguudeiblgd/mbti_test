import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import EnneagramTabItem from './EnneagramTabItem';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
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
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

export default function EnneagramTab() {
    const [value, setValue] = React.useState(0);
    let viewportWidth;
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
            <Box
                sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex' }}
            >
                <Tabs
                    orientation={"horizontal"}
                    variant="scrollable"
                    value={value}
                    onChange={handleChange}

                    TabIndicatorProps={{ style: { background: '#faaf40' } }}
                    aria-label="Vertical tabs example"
                    sx={{ borderBottom: 1, borderColor: '#faaf40 ' }}
                >
                    <Tab label="Enneagram 1" {...a11yProps(0)} />
                    <Tab label="Enneagram 2" {...a11yProps(1)} />
                    <Tab label="Enneagram 3" {...a11yProps(2)} />
                    <Tab label="Enneagram 4" {...a11yProps(3)} />
                    <Tab label="Enneagram 5" {...a11yProps(4)} />
                    <Tab label="Enneagram 6" {...a11yProps(5)} />
                    <Tab label="Enneagram 7" {...a11yProps(6)} />
                    <Tab label="Enneagram 8" {...a11yProps(7)} />
                    <Tab label="Enneagram 9" {...a11yProps(8)} />
                </Tabs>
            </Box>
            <TabPanel className={"w-full"} value={value} index={0}>
                <EnneagramTabItem value={value} />
            </TabPanel>
            <TabPanel className={"w-full"} value={value} index={1}>
                <EnneagramTabItem value={value} />
            </TabPanel>
            <TabPanel className={"w-full"} value={value} index={2}>
                <EnneagramTabItem value={value} />
            </TabPanel>
            <TabPanel className={"w-full"} value={value} index={3}>
                <EnneagramTabItem value={value} />
            </TabPanel>
            <TabPanel className={"w-full"} value={value} index={4}>
                <EnneagramTabItem value={value} />
            </TabPanel>
            <TabPanel className={"w-full"} value={value} index={5}>
                <EnneagramTabItem value={value} />
            </TabPanel>
            <TabPanel className={"w-full"} value={value} index={6}>
                <EnneagramTabItem value={value} />
            </TabPanel>
            <TabPanel className={"w-full"} value={value} index={7}>
                <EnneagramTabItem value={value} />
            </TabPanel>
            <TabPanel className={"w-full"} value={value} index={8}>
                <EnneagramTabItem value={value} />
            </TabPanel>
        </div>


    );
}

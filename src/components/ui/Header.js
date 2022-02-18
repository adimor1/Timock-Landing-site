import {
    AppBar,
    Button,
    IconButton,
    List,
    ListItem,
    ListItemText,
    makeStyles,
    Menu,
    MenuItem,
    SwipeableDrawer,
    Tab,
    Tabs,
    Toolbar,
    useMediaQuery,
    useScrollTrigger,
    useTheme
} from "@material-ui/core";
import React, { useEffect, useMemo, useState } from "react";
import logo from '../../assets/logo.svg'
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";

function ElevationScroll(props) {
    const { children } = props;
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
};

const useStyle = makeStyles(theme => ({
    toolbarMargin: {
        ...theme.mixins.toolbar,
        marginBottom: "3em",
        [theme.breakpoints.down("md")]: {
            marginBottom: "2em"
        },
        [theme.breakpoints.down('xs')]: {
            marginBottoms: "1em"
        }
    },
    logoContainer: {
        padding: 0,
        "&:hover": {
            backgroundColor: "transparent"
        }
    },
    tabContainer: {
        marginLeft: 'auto',
        marginTop:"2em",
    },
    tab: {
        ...theme.typography.tab,
        minWidth: 10,
        marginLeft: "25px",
        fontSize: "30px",
                
    },
    button: {
        ...theme.typography.estimate,
        borderRadius: "50px",
        marginLeft: "80px",
        marginTop:"1em",
        marginRight: "25px",
        fontSize:"30px",

        "&:hover":{
            backgroundColor:theme.palette.secondary.light
          }
    },
    menu: {
        backgroundColor: theme.palette.common.blue,
        color: "white",
        borderRadius: "0px"
    },
    menuItem: {
        ...theme.typography.tab,
        opacity: 0.7,
        "&:hover": {
            opacity: 1
        }
    },
    drawerIcon: {
        fontSize: "50px",
    },
    drawerIconContainer: {
        marginLeft: "auto",
        "&:hover": {
            backgroundColor: "transparent"
        }
    },
    drawer: {
        backgroundColor: theme.palette.common.blue

    },
    drawerItem: {
        ...theme.typography.tab,
        fontFamily: "Raleway",
        textTransform: "none",
        fontWeight: 700,
        fontSize: "1rem",
        color: "white"
    },
    drawerItemEstimate: {
        backgroundColor: theme.palette.common.orange
    },
    drawerItemSelected: {
        "& .MuiListItemText-root": {
            opacity: 1
        }
    },
    appbar: {
        zIndex: theme.zIndex.modal + 1,
        height:"9em",
        centerTitle: true,

    }
}))

export default function Header(props) {
    const classes = useStyle();
    const theme = useTheme();
    const iOS = typeof navigator !== 'undefined' && /iPad|iPhone|iPod/
        .test(navigator.userAgent);
    const matches = useMediaQuery(theme.breakpoints.down("md"));

    const [openDrawer, setOpenDrawer] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const [openMenu, setOpenMenu] = useState(false);

    const handleChange = (e, newValue) => {
        props.setValue(newValue);
    };

    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
        setOpenMenu(true);
    }

    const handleClose = (e) => {
        setAnchorEl(null);
        setOpenMenu(false);
    }

    const handelMenuItemClick = (e, i) => {
        setAnchorEl(null);
        setOpenMenu(false);
        props.setSelectedIndex(i);
    }

    const menuOptions = useMemo(
        () => [
            { name: "Services", link: "/services", activeIndex: 1, selectedIndex: 0 },
            {
                name: "Custom Software Development",
                link: "/customsoftware",
                activeIndex: 1,
                selectedIndex: 1,
            },
            {
                name: "IOS/Android App Development",
                link: "/mobileapps",
                activeIndex: 1,
                selectedIndex: 2,
            },
            {
                name: "Website Development",
                link: "/websites",
                activeIndex: 1,
                selectedIndex: 3,
            },
        ],
        []
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const routes = [
        { name: "Home", link: "/", activeIndex: 0 },
        { name: "Services", link: "/services", activeIndex: 1, ariaOwns: anchorEl ? "simple-menu" : undefined, ariaPopup: anchorEl ? "true" : undefined, mouseOver: (event) => handleClick(event) },
        { name: "The Revolution", link: "/therevolution", activeIndex: 2 },
        { name: "About us", link: "/about", activeIndex: 3 },
        { name: "Contact Us", link: "/contact", activeIndex: 4 },
    ];

    useEffect(() => {
        [...menuOptions, ...routes].forEach(route => {
            switch (window.location.pathname) {
                case `${route.link}`:
                    if (props.value !== route.activeIndex) {
                        props.setValue(route.activeIndex);
                        if (route.selectedIndex && route.selectedIndex !== props.selectedIndex) {
                            props. setSelectedIndex(route.selectedIndex)
                        }
                    }
                    break;
                    case '/estimate':
                        props.setValue(5);
                        break;
                default:
                    break;
            }
        })

    }, [props.value, menuOptions, props.selectedIndex, routes, props]);

    const tabs = (
        <React.Fragment>

            <Tabs
                indicatorColor="primary"
                value={props.value}
                onChange={handleChange}
                className={classes.tabContainer}>
                {routes.map((route, index) => (
                    <Tab
                        key={`${route}${index}`}
                        className={classes.tab}
                        component={Link}
                        to={route.link}
                        label={route.name}
                        aria-owns={route.ariaOwns}
                        aria-haspopup={route.ariaPopup}
                        onMouseOver={route.mouseOver} />
                ))}

            </Tabs>
            <Button
                variant="contained"
                color="secondary"
                className={classes.button}
                component={Link}
                to='/estimate' 
                onClick={()=>props.setValue(5)}>
                Free Estimate
            </Button>
            <Menu
                id="simple-menu"
                
                anchorEl={anchorEl}
                open={openMenu}
                onClose={handleClose}
                MenuListProps={{ onMouseLeave: handleClose }}
                classes={{ paper: classes.menu }}
                elevation={0}
                keepMounted
                style={{ zIndex: 1302 }}
            >
                {menuOptions.map((option, i) => (
                    <MenuItem
                        key={`${option}${i}`}
                        component={Link}
                        to={option.link}
                        classes={{ root: classes.menuItem }}
                        onClick={(event) => {
                            handelMenuItemClick(event, i);
                            props.setValue(1);
                            handleClose();
                        }}
                        selected={i === props.selectedIndex && props.value === 1} >
                        {option.name}
                    </MenuItem>
                ))}
            </Menu>
        </React.Fragment>
    );

    const drawer = (
        <React.Fragment>
            <SwipeableDrawer d
                isableBackdropTransition={!iOS}
                disableDiscovery={iOS}
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
                onOpen={() => setOpenDrawer(true)}
                classes={{ paper: classes.drawer }}
            >
                <div className={classes.toolbarMargin} />
                <List disablePadding>
                    {routes.map(route => (
                        <ListItem
                            divider
                            key={`${route}${route.activeIndex}`}
                            button
                            component={Link}
                            to={route.link}
                            selected={props.value === route.activeIndex}
                            classes={{ selected: classes.drawerItemSelected }}
                            onClick={() => {
                                setOpenDrawer(false);
                                props.setValue(route.activeIndex)
                            }}
                        >
                            <ListItemText
                                className={classes.drawerItem}
                                disableTypography>
                                {route.name}
                            </ListItemText>
                        </ListItem>
                    ))}
                    <ListItem
                        onClick={
                            () => {
                                setOpenDrawer(false);
                                props.setValue(5);
                            }}
                        divider
                        button
                        classes={{
                            root: classes.drawerItemEstimate,
                            selected: classes.drawerItemSelected
                        }}
                        component={Link}
                        to="/estimate"
                        selected={props.value === 5}>
                        <ListItemText className={classes.drawerItem}>
                            Free Estimate
                        </ListItemText>
                    </ListItem>
                </List>
            </SwipeableDrawer>
            <IconButton className={classes.drawerIconContainer}
                onClick={() => setOpenDrawer(!openDrawer)}
                disableRipple>
                <MenuIcon className={classes.drawerIcon} />
            </IconButton>
        </React.Fragment>
    )

    return (
        <React.Fragment>
            <ElevationScroll>
                <AppBar position="fixed" className={classes.appbar} color="white">
                    <Toolbar disableGutters>
                        <Button disableRipple component={Link} to='/' onClick={() => props.setValue(0)} className={classes.logoContainer}>
                        
                        </Button>
                        {matches ? drawer : tabs}
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <div className={classes.toolbarMargin} />
        </React.Fragment>
    )
}
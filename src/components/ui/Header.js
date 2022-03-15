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
import logo from '../../assets/logo.png'
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
     
        [theme.breakpoints.down("md")]: {
            marginBottom: "2em"
        },
        [theme.breakpoints.down('xs')]: {
            marginBottoms: "1em"
        }
    },
    logo: {
        height: "3.5em",
        marginLeft: "1em",
        marginTop:"1em",
        [theme.breakpoints.down("md")]: {
            height: "3em"
        },
        [theme.breakpoints.down('xs')]: {
            height: "3.5em"
        }
    },
    logoContainer: {

        "&:hover": {
            backgroundColor: "transparent"
        }
    },
    tabContainer: {
        marginLeft: 'auto',
        marginTop:"1em",
    },
    tab: {
        ...theme.typography.tab,
        minWidth: 10,
      
        marginRight:"1em",
        fontSize: "25px",
                
    },
    button: {
        ...theme.typography.estimate,
        borderRadius: "50px",
        marginLeft: "80px",
        marginRight: "25px",
        fontSize:"25px",

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
        
        height:"6em",
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

        ],
        []
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const routes = [
        { name: "Home", link: "/", activeIndex: 0 },
        { name: "Our Technologies", link: "/technologies", activeIndex:1 },
        { name: "About us", link: "/about", activeIndex: 2 },
        { name: "Contact Us", link: "/contact", activeIndex: 3 },
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

                <AppBar position="fixed" className={classes.appbar} color="white">
                    <Toolbar disableGutters>
                        <Button disableRipple component={Link} to='/' onClick={() => props.setValue(0)} className={classes.logoContainer}>
                        <img
                                alt="company logo"
                                className={classes.logo}
                                src={logo} />
                        </Button>
                        {matches ? drawer : tabs}
                    </Toolbar>
                </AppBar>
       
            <div className={classes.toolbarMargin} />
        </React.Fragment>
    )
}
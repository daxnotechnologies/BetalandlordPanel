import React, { useState } from "react";
import SportsTennisIcon from "@mui/icons-material/SportsTennis";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import NewReleasesIcon from "@mui/icons-material/NewReleases";
import LogoutIcon from "@mui/icons-material/Logout";
import logo from "./logo.png";
import {
  Card,
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { navlink } from "./style";
import { Box } from "@mui/system";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { Link, Outlet } from "react-router-dom";

import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ApartmentIcon from "@mui/icons-material/Apartment";
import PaymentsIcon from "@mui/icons-material/Payments";

export default function Navbar() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const [openUser, setOpenUser] = React.useState(false);

  const handleClickUser = () => {
    setOpenUser(!openUser);
  };

  return (
    <>
      <div className="flex flex-col  items-center md:items-start font-Poppins ">
        <Box sx={{ backgroundColor: "#fff", boxShadow: 3 }}>
          <div className="  w-[250px] ">
            <div className="ml-5  mt-10 mb-5 text-2xl mb-20">
              <img src={logo} width="150px" style={{ marginBottom: 25 }} />
            </div>

            <ul className=" my-2 text-xl font-small">
              <div className="flex flex-col">
                {/* <ListItemButton>
                  <a href="/Dashboard" style={navlink}>
                    <li
                      style={{
                        fontSize: 14,
                        marginBottom: 5,
                      }}
                    >
                      <DashboardIcon className="mr-2" /> Dashboard
                    </li>
                  </a>
                </ListItemButton> */}

                <ListItemButton>
                  <a href="/ManageBookings" style={navlink}>
                    <li
                      style={{
                        fontSize: 14,
                        marginBottom: 5,
                      }}
                    >
                      <CalendarMonthIcon className="mr-2" /> Manage Bookings
                    </li>
                  </a>
                </ListItemButton>
                <ListItemButton>
                  <a
                    href="/UserReviews"
                    className="flex space-x-4 space-y-7"
                    style={navlink}
                  >
                    <li
                      style={{
                        fontSize: 14,
                        marginBottom: 5,
                      }}
                    >
                      <SportsTennisIcon className="mr-2" /> User Reviews
                    </li>
                  </a>
                </ListItemButton>
                <ListItemButton>
                  <a href="/AllProperties" style={navlink}>
                    <li
                      style={{
                        fontSize: 14,
                      }}
                    >
                      <ApartmentIcon className="mr-2" /> All Properties
                    </li>
                  </a>
                </ListItemButton>

                <ListItemButton onClick={handleClickUser}>
                  <ListItemIcon>
                    <InboxIcon sx={{ color: "#205075" }} />
                  </ListItemIcon>
                  <ListItemText
                    style={{
                      fontSize: 14,
                      marginBottom: 5,
                      color: "#205075",
                    }}
                    primary="All Users"
                  />
                  {openUser ? (
                    <ExpandLess sx={{ color: "#205075" }} />
                  ) : (
                    <ExpandMore sx={{ color: "#205075" }} />
                  )}
                </ListItemButton>
                <Collapse in={openUser} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItemButton>
                      <a
                        href="/PendingUsers"
                        className="flex space-x-4 space-y-7"
                        style={navlink}
                      >
                        <li
                          style={{
                            fontSize: 14,
                          }}
                        >
                          <PersonIcon className="ml-2" /> Pending Vendors{" "}
                        </li>
                      </a>
                    </ListItemButton>
                    <ListItemButton>
                      <a href="/Vendors" style={navlink}>
                        <li
                          style={{
                            fontSize: 14,
                          }}
                        >
                          <PersonIcon className="ml-2" /> Vendors{" "}
                        </li>
                      </a>
                    </ListItemButton>
                    <ListItemButton>
                      <a href="/Users" style={navlink}>
                        <li
                          style={{
                            fontSize: 14,
                          }}
                        >
                          <PersonIcon className="ml-2" /> Users{" "}
                        </li>
                      </a>
                    </ListItemButton>

                    <ListItemButton>
                      <a href="/Admins" style={navlink}>
                        <li
                          style={{
                            fontSize: 14,
                            marginBottom: 23,
                          }}
                        >
                          <PersonIcon className="ml-2" /> Admins{" "}
                        </li>
                      </a>
                    </ListItemButton>
                  </List>
                </Collapse>
                <ListItemButton>
                  <a href="/ManageBookingsVendor" style={navlink}>
                    <li
                      style={{
                        fontSize: 14,
                        marginBottom: 5,
                      }}
                    >
                      <CalendarMonthIcon className="mr-2" /> Manage Bookings
                    </li>
                  </a>
                </ListItemButton>
                <ListItemButton>
                  <a href="/AllPropertiesVendor" style={navlink}>
                    <li
                      style={{
                        fontSize: 14,
                        marginBottom: 5,
                      }}
                    >
                      <ApartmentIcon className="mr-2" /> All Properties
                    </li>
                  </a>
                </ListItemButton>
                <ListItemButton>
                  <a href="/PaymentsFromAdmin" style={navlink}>
                    <li
                      style={{
                        fontSize: 14,
                        marginBottom: 5,
                      }}
                    >
                      <PaymentsIcon className="mr-2" /> Payments From Admin
                    </li>
                  </a>
                </ListItemButton>
                <ListItemButton>
                  <a href="/GuestDetails" style={navlink}>
                    <li
                      style={{
                        fontSize: 14,
                        marginBottom: 5,
                      }}
                    >
                      <PersonIcon className="mr-2" /> Guest Details
                    </li>
                  </a>
                </ListItemButton>
                <ListItemButton>
                  <a
                    href="/"
                    className="flex space-x-4 space-y-7"
                    style={navlink}
                  >
                    <li
                      style={{
                        fontSize: 15,
                      }}
                    >
                      <LogoutIcon className="mr-2" />
                      Logout
                    </li>
                  </a>
                </ListItemButton>
              </div>
            </ul>
          </div>
        </Box>
      </div>
    </>
  );
}

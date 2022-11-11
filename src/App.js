import Navbar from "./Componetns/Navbar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Componetns/Dashboard";
import AllUsers from "./Componetns/Vendors";
import "bootstrap/dist/css/bootstrap.min.css";
import UserReviews from "./Componetns/UserReviews";
import ManageBookings from "./Componetns/ManageBookings";
import BookingHistory from "./Componetns/BookingHistory";
import Vendors from "./Componetns/Vendors";
import Users from "./Componetns/Users";
import Login from "./Componetns/LogIn";
import Admins from "./Componetns/Admin";
import AllHotels from "./Componetns/AllHotels";
import AllEventSpace from "./Componetns/AllEventSpace";
import AllShortLet from "./Componetns/AllShortLet";
import PendingUsers from "./Componetns/PendingUsers";
import ViewVendors from "./Componetns/ViewVendor";
import AllProperties from "./Componetns/AllProperties";
import GuestDetails from "./Componetns/GuestDetails";
import PaymentsFromAdmin from "./Componetns/PaymentsFromAdmin";
import ManageBookingsVendor from "./Componetns/ManageBookingsVendor";
import AllPropertiesVendor from "./Componetns/AllPropertiesVendor";

function App() {
  return (
    <>
      <div className="flex">
        <Navbar />

        <div className="w-full">
          <Router>
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route exact path="/Dashboard" element={<Dashboard />} />
              <Route exact path="/Vendors" element={<Vendors />} />
              <Route exact path="/Users" element={<Users />} />
              <Route exact path="/UserReviews" element={<UserReviews />} />
              <Route exact path="/Admins" element={<Admins />} />
              <Route exact path="/AllHotels" element={<AllHotels />} />
              <Route exact path="/AllEventSpace" element={<AllEventSpace />} />
              <Route exact path="/AllProperties" element={<AllProperties />} />

              <Route exact path="/AllShortLet" element={<AllShortLet />} />
              <Route exact path="/PendingUsers" element={<PendingUsers />} />
              <Route exact path="/ViewVendors" element={<ViewVendors />} />
              <Route
                exact
                path="/CompletedBookings"
                element={<BookingHistory />}
              />

              <Route
                exact
                path="/ManageBookings"
                element={<ManageBookings />}
              />
              <Route exact path="/GuestDetails" element={<GuestDetails />} />

              <Route
                exact
                path="/PaymentsFromAdmin"
                element={<PaymentsFromAdmin />}
              />
              <Route
                exact
                path="ManageBookingsVendor"
                element={<ManageBookingsVendor />}
              />
              <Route
                exact
                path="/AllPropertiesVendor"
                element={<AllPropertiesVendor />}
              />
            </Routes>
          </Router>
        </div>
      </div>
    </>
  );
}

export default App;

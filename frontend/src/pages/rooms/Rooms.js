
import {
    BrowserRouter as Router,
    Route,
} from "react-router-dom";

import PlusKingRoom from './PlusKingRoom';
import SuperiorKingRoom from './SuperiorKingRoom'
import SuperiorTwinRoom from "./SuperiorTwinRoom";
import AllRooms from "./AllRooms";
import ScrollToTop from "./ScrollToTop";

export default function Rooms() {
    return (
        <Router>
            <div className="App">
                <ScrollToTop/>
                <Route exact path="/rooms">
                    <AllRooms />
                </Route>
                <Route exact path="/PlusKingRoom">
                    <PlusKingRoom/>
                </Route>
                <Route exact path="/SuperiorKingRoom">
                    <SuperiorKingRoom/>
                </Route>
                <Route exact path="/SuperiorTwinRoom">
                    <SuperiorTwinRoom/>
                </Route>
            </div>
        </Router>

    );
}
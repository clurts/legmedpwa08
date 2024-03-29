import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Location from "./pages/Location";
import Gyro from "./pages/Gyro";
import MyMap from "./pages/MyMap";
import Localbs from "./pages/Localbs";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="/location" element={<Location />} />
            <Route path="/gyro" element={<Gyro />} />
            <Route path="/map" element={<MyMap />} />
            <Route path="/localbase" element={<Localbs />} />
        </Route>
    )
);

import NotFound from "./NotFound";
import Dashboard from "./Dashboard";

export default [{
    title: "Dashboard",
    mount: "/",
    component: Dashboard,
}, {
    title: "404",
    mount: "*",
    component: NotFound,
    hidden: true
}];
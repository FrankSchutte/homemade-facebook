import NotFound from "./NotFound";
import Dashboard from "./Timeline";
import Login from "./Login";
import Profile from "./Profile";
import Add from "./Add";

export default [{
    title: "Timeline",
    mount: "/",
    component: Dashboard,
}, {
    title: "Login",
    mount: "/login",
    component: Login,
},{
    title: "Profile",
    mount: "/profile/:user",
    component: Profile,
},{
    title: "Add Post",
    mount: "/add",
    component: Add,
}, {
    title: "404",
    mount: "*",
    component: NotFound,
    hidden: true
}];
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


const NavigationSidebar = () => {
    const location = useLocation();
    const { pathname } = location;
    const parts = pathname.split('/');
    return (
        <div className="list-group">
            <Link to="/tuiter" href="/" className={`${parts.length < 3 ? 'active' : ''} list-group-item`}>
                <i className="bi bi-twitter"></i>
            </Link >
            <Link to="/tuiter/home" href="/" className={`${parts[2] === 'home' ? 'active' : ''} list-group-item`}>
                <i className="bi bi-house-door"></i>
                Home
            </Link >

            <Link to="/tuiter/explore" href="/" className={`${parts[2] === 'explore' ? 'active' : ''} list-group-item`}>
                <i className="bi bi-hash"></i>
                Explore
            </Link >

            <Link to="/tuiter/notifications" href="/" className={`${parts[2] === 'notifications' ? 'active' : ''} list-group-item`}>
                <i className="bi bi-app-indicator"></i>
                Notifications
            </Link >

            <Link to="/tuiter/messages" href="/" className={`${parts[2] === 'messages' ? 'active' : ''} list-group-item`}>
                <i className="bi bi-envelope"></i>
                Messages
            </Link >

            <Link to="/tuiter/bookmarks" href="/" className={`${parts[2] === 'bookmarks' ? 'active' : ''} list-group-item`}>
                <i className="bi bi-bookmark"></i>
                Bookmarks
            </Link >

            <Link to="/tuiter/lists" href="/" className={`${parts[2] === 'lists' ? 'active' : ''} list-group-item`}>
                <i className="bi bi-list"></i>
                Lists
            </Link >

            <Link to="/tuiter/profile" href="/" className={`${parts[2] === 'profile' ? 'active' : ''} list-group-item`}>
                <i className="bi bi-person"></i>
                Profile
            </Link >

            <Link to="/tuiter/more" href="/" className={`${parts[2] === 'more' ? 'active' : ''} list-group-item`}>
                <i className="bi bi-three-dots"></i>
                More
            </Link >
        </div>
    )
}

export default NavigationSidebar;
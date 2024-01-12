import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <div>Home section</div>
            <Link to={'/about'}>About </Link>
        </div>

    )
}

export default Home;
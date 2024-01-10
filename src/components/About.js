import useOnlineStatus from "../utils/useOnlineStatus";

const About = () => {

    const onlineStatus = useOnlineStatus();
    console.log(onlineStatus, "hi")

    console.log("bye")

    if(!onlineStatus){
        return <h1>You are offline</h1>;
    }

    return (
        <div>
            {/* <div>Hii</div> */}
            <div>This is about hi page.</div>
        </div>
    )
}

export default About;
import gif from "./img/loading.gif";
import "./loading.scss";

const Loading = () => {
    return (
        <div className="gif-loading">
            <img src={gif} alt="Loading" />
        </div>
    )
}

export default Loading;
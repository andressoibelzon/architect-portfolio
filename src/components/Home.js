import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Banner } from "./Banner";
import { Gallery } from './Gallery';


export const Home = () => {
    return (
        <div>
        <Banner />
        <Gallery />
        </div>
    )
}

import Navbar from "./Navbar";

const MarvelPage = ({data}) => {
    return ( 
        <div>
            <Navbar/>
            <h1>{data.name}</h1>
        </div>
     );
}
 
export default MarvelPage;
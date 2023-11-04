import webDesigns from "../webDesigns"
import { Link } from "react-router-dom";

function Portfolio() {
    return(
        <div>
            <h2>Website Designs</h2>
            <ul  style={{padding: '0', display: 'flex', justifyContent: 'space-around'}} className='wedDesigns'>
                {webDesigns.map((designs) => {
                    return(
                            <li key={designs.title}>
                            <h3>{designs.title}</h3>
                            <p>{designs.brief}</p>
                            <Link to={`/designs/${designs.id}`}><img style={{width:'400px', minWidth: '300px'}} src={designs.mainImg}/></Link>
                            </li>
                        
                    )
                })}
                </ul>
        </div>
    )
}

export default Portfolio;
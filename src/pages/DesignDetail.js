import '../style/Header.css'
import { useParams } from "react-router-dom";
import webDesigns from "../webDesigns";

function DesignDetail() {
    const { designsId } = useParams();
    const project = webDesigns.find((p) => p.id === designsId);
    console.log(designsId);

    return (
        <div>
            <h1>{project.title}</h1>
            <div className="mainDesc" >
                <div>
                    <h2>Web Design</h2>
                <p>{project.description}</p>
                </div>
                <img src={project.mainImg} />
            </div>

            <div className='mainDesc'>
                <img src={project.mockupImg}/>
                <div>
                <h2 >Mockup</h2>
                <p>{project.mockupDesc}</p>
                </div>

            </div>

            <div className="mainDesc" >
                <div>
                <h2>Branding</h2>
                <p>{project.brandDesc}</p>
                </div>
                <img src={project.brandImg} />
            </div>
        </div>
    )
}

export default DesignDetail;
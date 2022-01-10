import { tutorialData } from '../../../utils/constant';
import {Link} from 'react-router-dom';

const Tutorial = ({ sectionname }) => {
    return (
        <>
            <div className="row" style={{ width: '100%', padding: '20px 50px' }} >
                <div className="col-md-12 mt-4 text-center" >
                    <h2> {sectionname} </h2>
                </div>
                {
                    tutorialData.map((item, i) => {
                        return (
                            <div className="col-md-3" key={i} >
                                <div className="card">
                                    <img className="card-img-top" src={item?.url} alt="Card image cap" />
                                    <div className="card-body">
                                        <h5 className="card-title">{item?.heading}</h5>
                                        <p className="card-text">S{item?.text}</p>
                                        <Link to="/cources/react" className="btn btn-primary">{item?.btnText}</Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }




            </div>
        </>
    )
}

export default Tutorial;
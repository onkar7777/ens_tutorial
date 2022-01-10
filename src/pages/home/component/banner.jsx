import { bannerImages } from '../../../utils/constant';

const Banner = () => {
    return (
        <div id="carouselExampleIndicators" className="carousel slide" style={{ height: '400px' }} data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner" style={{ height: '400px' }}>
                {
                    bannerImages.map((item, i) => {
                        return (
                            <div className={`carousel-item ${item?.active}`} key={i} >
                                <img className="d-block w-100" src={item?.url} alt="First slide" />
                            </div>
                        )
                    })
                }


            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    )
}

export default Banner;
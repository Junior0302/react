import { Link } from 'react-router-dom';
import aboutShape from '../../../assets/img/features/about-shape.png';
import about4 from '../../../assets/img/features/about-img4.jpg';
import SectionTitle from '../SectionTitle/SectionTitle';

const AboutGame = () => {
    return (
        <div className="row align-items-center pt-130">
            <div className="col-lg-12 col-md-12">
                <div className="best-gaming">
                    <div className="about-shape">
                        <img src={aboutShape} alt="About Shape" />
                    </div>
                    <div className="row">
                    <div className="col-lg-7 col-12">
    <div className="about-content s-about-content wow fadeInLeft animated" data-animation="fadeInRight" data-delay=".4s">
        <SectionTitle titlefirst='Nous sommes la meilleure entreprise' titleSec='de jeux' />
        <p>Nous sommes passionnés par les jeux et nous nous engageons à fournir les meilleures expériences de jeu pour nos joueurs. Nous offrons une large sélection de jeux de qualité supérieure pour tous les goûts.</p>
        <div className="slider-btn2 mt-20">
            <Link to={'/a-propos'} className="btn ss-btn">{'En savoir plus'}</Link>
        </div>
    </div>
</div>
                        <div className="col-lg-5">
                            <div className="about-right-image wow fadeInRight" data-wow-delay=".4s">
                                <img src={about4} alt={'About Image'} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AboutGame;
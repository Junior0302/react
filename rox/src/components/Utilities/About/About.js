import { Link } from 'react-router-dom';
import aboutBgImg from '../../../assets/img/bg/about-bg.png';
import experienceImg from '../../../assets/img/features/experience-years.png';
import features1 from '../../../assets/img/features/about-img1.jpg';
import features2 from '../../../assets/img/features/about-img2.jpg';
import features3 from '../../../assets/img/features/about-img3.png';
import SectionTitle from '../SectionTitle/SectionTitle';

const About = () => {
    return (
        <section id="about" className="about-area about-p pt-70 pb-140 p-relative" style={{ background: `url(${aboutBgImg}) no-repeat center center / cover` }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="s-about-img p-relative wow fadeInLeft" data-wow-delay=".4s">
                            <div className="experience-years wow fadeInDown" data-wow-delay=".4s">
                                <img src={experienceImg} alt="Experience Years" />
                                <span>{'10'}</span>
                            </div>
                            <img src={features1} alt="About Image" />
                            <div className="about-image2 wow fadeInUp" data-wow-delay=".4s">
                                <img src={features2} alt="About Image" />
                            </div>
                            <div className="about-image3 wow fadeInUp" data-wow-delay=".6s">
                                <img src={features3} alt="About Image" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="about-content s-about-content wow fadeInRight" data-wow-delay=".4s">
                            <SectionTitle
                             titlefirst={'Nous sommes la meilleure entreprise'}
                             titleSec={'de jeux'}
                                className={'about-title second-title'}
                            />
                           <p><b>Bienvenue sur notre site web dédié aux voyages et aux aventures en plein air.</b></p>
<p>Nous sommes une entreprise passionnée par les voyages et les expériences en plein air. Nous croyons que chaque voyage est une opportunité d'apprendre, de grandir et de se connecter avec la nature et les autres cultures.</p>
<div className="about-content3 mt-30">
    <div className="row">
        <div className="col-md-12">
            <ul className="green">
                <li>{'Nous offrons une variété de circuits touristiques pour tous les goûts.'}</li>
                <li>{'Nos guides expérimentés vous emmèneront dans les endroits les plus étonnants et les plus beaux.'}</li>
                <li>{'Nous nous engageons à offrir des expériences de voyage sûres, amusantes et inoubliables.'}</li>
            </ul>
        </div>
    </div>
</div>
                            <div className="slider-btn2 mt-30">
                            <Link to={'/a-propos'} className="btn ss-btn">{'En savoir plus'}</Link>


</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
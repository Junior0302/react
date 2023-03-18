import React from "react";

import mapImg from '../../../assets/img/bg/map-contact.png';
import contactHeader from '../../../assets/img/bg/contant-hd.png';
import Form from "../../Utilities/Form/Form";

import { Link } from "react-router-dom";


const branceAddress = [
    {
        branceName: 'FRANCE PARIS',
        location: 'SAINT PET',
        openingTime: '',
        email: 'gamaplbox@gmail.com',
        phone: '(1200)-0989-568-331'
    },
    {
        branceName: 'FRANCE LYON',
        location: 'CITE L44',
        openingTime: '',
        email: 'gamabox@gmail.com',
        phone: '(1200)-0989-568-331'
    },
]

const ContactUs = () => {

    return (
        <React.Fragment>

            <section className="breadcrumb-area d-flex align-items-center" style={{ background: `url(${contactHeader})` }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-12 col-lg-12">
                            <div className="breadcrumb-wrap text-left">
                                <div className="breadcrumb-title">
                                    <h2>{'Contact Us'}</h2>
                                    <div className="breadcrumb-wrap">
                                        <nav aria-label="breadcrumb">
                                            <ol className="breadcrumb">
                                                <li className="breadcrumb-item">
                                                    <Link to={'/'}>{'Home'}</Link>
                                                </li>
                                                <li className="breadcrumb-item active" aria-current="page">{'Contact Us'}</li>
                                            </ol>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="contact-map" className="contact-map p-relative fix" style={{ background: `url(${mapImg}) no-repeat` }}>
                <div className="container">
                    <div className="row"></div>
                </div>
            </section>

            <section id="contact" className="contact-area after-none contact-bg pt-120 pb-120 p-relative fix">
    <div className="container">
        <div className="row">
            <div className="col-lg-6">
                <div className="contact-info wow fadeInLeft animated" data-animation="fadeInRight" data-delay=".4s">
                    <div className="section-title center-align">
                        <h2>
                            {'Adresse'} <br /> <span>{'informations'}</span>
                        </h2>
                        <p>{"N'hésitez pas à nous contacter si vous avez des questions ou des commentaires. Nous sommes là pour vous aider et répondre à toutes vos demandes dans les plus brefs délais."}</p>
                    </div>
                    <div className="row mt-50">
                        {
                            branceAddress.map((data, index) => {
                                const { branceName, location, openingTime, email, phone, } = data;
                                return (
                                    <div className="col-lg-6 contact_info" key={index}>
                                        <h4>{branceName}</h4>
                                        <p>{location}</p>
                                        <p>{openingTime}</p>
                                        <p>{email}</p>
                                        <p>{phone}</p>
                                    </div>
                            );
                        })
                    }
                </div>
            </div>
        </div>
        <div className="col-lg-6">
            <div className="contact-bg02 wow fadeInRight animated">
                <div className="section-title center-align">
                    <h2>
                        {'Contactez-nous'}<br /> <span>{'Informez-nous'}</span>
                    </h2>
                    <p>{"Nous sommes impatients d'avoir de vos nouvelles! Si vous avez des préoccupations ou des commentaires à partager, veuillez remplir le formulaire de contact ci-dessous et nous vous répondrons dans les plus brefs délais."}</p>
                </div>
                <Form />
            </div>
        </div>
    </div>
</div>
</section>
        </React.Fragment>
    );

}

export default ContactUs;
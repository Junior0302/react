import ServiceItem from './service';
const services = [
    {
    icon: 'flaticon-degrees',
    title: 'Diffusion en direct',
    description: 'Nous offrons une diffusion en direct pour que vous puissiez suivre vos jeux préférés en temps réel.'
    },
    {
    icon: 'flaticon-archery',
    title: 'Actualités de jeux',
    description: "Restez informé des dernières nouvelles et des tendances de l'industrie du jeu avec notre section d'actualités de jeux."
    },
    {
    icon: 'flaticon-competition',
    title: 'Compétition',
    description: "Nous organisons des compétitions pour les joueurs de tous niveaux, afin que vous puissiez mettre vos compétences à l'épreuve et gagner des prix incroyables."
    },
    ]

const Services = () => {
    return (
        <section id="services" className="services-area what-story pb-90 fix">
            <div className="container">
                <div className="row">
                    {
                        services.map((service, index) => {
                            return <ServiceItem
                                key={index}
                                icon={service.icon}
                                title={service.title}
                                description={service.description} />
                        })
                    }
                </div>
            </div>
        </section>
    );
}

export default Services;
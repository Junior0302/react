import SectionTitle from "../SectionTitle/SectionTitle";
import img1 from '../../../assets/img/gallery/protfolio-img01.png'
import img2 from '../../../assets/img/gallery/protfolio-img02.png'
import img3 from '../../../assets/img/gallery/protfolio-img03.png'
import GameCard from "./GameCard";

const TrendingData = [
    {
    id: '1',
    thumb: img1,
    tag: 'Origine',
    label: 'Officier lapin',
    description: "Découvrez le nouveau personnage d'Origin, l'Officier Lapin, avec ses capacités uniques et son design adorable."
    },
    {
    id: '2',
    thumb: img2,
    tag: 'Nouveau',
    label: 'Wonderland',
    description: 'Explorez le monde féerique de Wonderland, le dernier jeu de notre entreprise. Découvrez des environnements magnifiques et des personnages incroyables.'
    },
    {
    id: '3',
    thumb: img3,
    tag: 'Origine',
    label: 'Wraith',
    description: "Découvrez les compétences mystérieuses et puissantes de Wraith, l'un des personnages les plus populaires d'Origine."
    },
    ]
const TrendingGames = () => {
    return (
        <section id="work" className="pt-120 pb-65" style={{ background: '#1a0e22' }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        {/* Section title */}
                        <SectionTitle
                            titlefirst={'Trending'}
                            titleSec={'Games'}
                            className={'text-center'} />
                    </div>

                    <GameCard TrendingData={TrendingData} />

                </div>
            </div>
        </section>
    );
}
export default TrendingGames;
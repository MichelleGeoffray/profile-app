import img from '../assets/headshot-woman.png';
import '../styles/card.css';

const Card2 = () => {
    const name = 'Eva Smith';
    const title = 'UX Designer';
    const email = 'eva@blah.com';
    return (
        <div className="profile-card">
            <div className="profile-card__img">
                <img src={img} alt={name} />
            </div>
            <div className="profile-card__content">
                <p><strong>{name}</strong></p>
                <p>{title}</p>
                <p><a href={`mailto:${email}`}>{email}</a></p>
            </div>
        </div>
    );
}
export default Card2;
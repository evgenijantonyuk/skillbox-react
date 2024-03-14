import './TermCard.css';

// export const TermCard = (props) => {
//     return (
//         <div className="term-card">
//             <h2 className="term-card__title">{props.title}</h2>
//             <p className="term-card__description">{props.description}</p>
//         </div>
//     );
// };
//              ЛИБО
export const TermCard = ({title, description}) => {
    return (
        <div className="term-card">
            <h2 className="term-card__title">{title}</h2>
            <p className="term-card__description">{description}</p>
        </div>
    );
};

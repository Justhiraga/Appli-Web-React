import Star from "../atoms/star";
import "./rating.css";

export default function Rating({ rating }) {
    return (
        <div className="rating">{Array.from({ length: 5 }).map((_, index) => <Star active={index < rating} key={index} />)}</div>
    );
}
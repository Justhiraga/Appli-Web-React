import Star from "../atoms/star";
import "./rating.css";

export default function Rating({ rating }) {
    return (
        <div className="rating">{Array.from({ length: rating }).map((_, index) => <Star key={index} />)}</div>
    );
}
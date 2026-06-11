import Tag from "../atoms/Tag";
export default function Tags({tags}) {
    return (
        <ul className="tags">{tags.map((tag) => <Tag tag={tag} key={tag} />)}</ul>
    );
}
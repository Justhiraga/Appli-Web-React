import Tag from "../atoms/tag";
export default function Tags({tags}) {
    return (
        <ul className="tags">{tags.map((tag) => <Tag tag={tag} key={tag} />)}</ul>
    );
}
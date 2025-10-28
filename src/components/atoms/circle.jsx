import'./circle.css'
export default function Circle({img}) {
    return (
        <div className="circle">{<img src={img} alt="host Image" />}</div>
    );
}
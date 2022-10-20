export default function ChildComponent(props) {
    return (
        <div style={{display: "flex", alignItems: "center"}}>
            <h3>{props.name}</h3>
            <h2>{props.family}</h2>
        </div>
    );
}
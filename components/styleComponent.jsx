export default function StyleComponent(props) {
    const appliedClass =  props.num >= 0 ? "blue" : "red";
    
    return (
        <div>
            <h1 style={{
                backgroundColor: props.num >= 0 ? "#2D2" : "#D22",
                color: props.color,
                textAlign: props.right ? "right" : "left"
            }}>
                Texto #01
            </h1>
            <h2 className={appliedClass}>Text #02</h2>
        </div>
    );
}
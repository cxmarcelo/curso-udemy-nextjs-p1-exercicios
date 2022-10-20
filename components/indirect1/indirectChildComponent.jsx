export default function IndirectChildComponent(props) {
    console.log(props)
    return (
        <div>
            <h1>Filho #1</h1>
            <button onClick={props.func}>Falar com o compoent pai</button>
            <button onClick={() => props.func("Passei a info", "info 2", 10)}>
                Falar com o compoent pai #v2
                </button>
        </div>
    );
}
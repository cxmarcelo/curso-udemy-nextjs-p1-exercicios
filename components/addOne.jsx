export default function AddOne(props) {
    //props é somente leitura
    //props.num++; -> erro

    return (
        <div>
            <h1>{props.num}</h1>
        </div>
    );
}
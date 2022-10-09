export default function Title(props) {

    return props.small ? (
        <>
            <p>{props.primaryText}</p>
            <p>{props.description}</p>
        </>
    ) : (
        <>
            <h1>{props.primaryText}</h1>
            <h2>{props.description}</h2>
        </>
    );

}
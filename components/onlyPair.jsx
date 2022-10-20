export default function OnlyPair(props) {
    const numPair = props.num % 2 === 0;

    return (
        <div>
            {numPair?
                <h1>{props.num}</h1>
                :
                null
            }
        </div>
    )


    //return props.num % 2 === 0 ? <h1>{props.num}</h1> : null;


    /*
    if(props.num % 2 === 0) {
        return <h1>{props.num}</h1>
    } else {
        return null;
    }
    */
}
export default function jsx4() {
    const subTitle = "I'm on JavaScript";
    const nodeH5 = (<h5>Node h5</h5>);

    return (
        <div>
            <h1>
                Integração JS e JSX
            </h1>
            <h2>{subTitle}</h2>
            <h3>{test()}</h3>
            <h4>{3*3}</h4>
            {nodeH5}
        </div>
    )
}


function test() {
    return "I'm a function";
}
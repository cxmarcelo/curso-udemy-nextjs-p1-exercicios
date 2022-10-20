export default function buttonComponent() {


    function action2() {
        console.log("action 2")
    }

    function action5(e) {
        console.log(e);
    }

    return (
        <div>
            <button onClick={action}>Click #01</button>
            <button onClick={action2}>Click #02</button>
            <button onClick={function() {
                console.log("action 3")
            }}>Click #03</button>
            <button onClick={() => console.log("action 4") }>
                Click #04
            </button>
            <button onClick={action5}>
                Click #05
            </button>
            <button onClick={e => action5(e.altKey)}>
                Click #05 V2
            </button>

            <div>
                <input onChange={(e) => console.log(e.target.value)}/>
            </div>
        </div>
    );
}

function action() {
    console.log("action 1")
}
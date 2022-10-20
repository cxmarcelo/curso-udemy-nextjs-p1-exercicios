import IndirectChildComponent from "./indirectChildComponent";

export default function IndirectParentComponent(props) {

    function talkToMe(param, param1, param2) {
        console.log(param, param1, param2)
    }

    return (
        <div>
            <IndirectChildComponent func={talkToMe}></IndirectChildComponent>
        </div>
    );
}
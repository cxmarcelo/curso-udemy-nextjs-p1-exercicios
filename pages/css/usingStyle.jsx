import StyleComponent from "../../components/styleComponent";

export default function usingStyle() {
    return (
        <div>
            <StyleComponent num={4} color="#000">
            </StyleComponent>
            <StyleComponent num={-3} color="#fff" right>
            </StyleComponent>
        </div>

    );
}
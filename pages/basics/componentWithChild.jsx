import Item from "../../components/item";
import ListComponent from "../../components/listComponent";

export default function componentWithChild() {
    return (
        <div>
            <ListComponent>
                <Item content="Teste 4"></Item>
                <Item content="Teste 5"></Item>
                <Item content="Teste 6"></Item>
            </ListComponent>
        </div>
    );
}
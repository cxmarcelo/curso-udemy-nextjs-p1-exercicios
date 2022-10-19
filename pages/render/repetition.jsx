export default function Repetition() {
    const nameList = [
        "João",
        "Maria",
        "Ana",
        "Bia",
        "Daniel",
    ]

    function renderListMap() {
        return nameList.map((name, index) => <li key={index}> {name} </li>)
    };

    return (
        <ul>
            {renderListMap()}
        </ul>
    );
}

function renderList() {
    const itens = [];

    for (let index = 0; index < nameList.length; index++) {
        const student = nameList[index];
        itens.push(<li key={index}>{student}</li>)
    }
    return itens;
};

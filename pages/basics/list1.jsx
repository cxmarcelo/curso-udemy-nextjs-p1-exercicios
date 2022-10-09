export default function list1() {
    return (
        <div>
            {generateList()}
        </div>
    );
}

function generateList(last = 10) {
    let spanList = [];
    for (let index = 0; index < last; index++) {
        spanList.push((<span>{index},</span>));
    }
    return spanList;
}
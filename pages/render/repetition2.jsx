import productList from "../../data/productList";

export default function Repetition2() {
    const border = {
        border: "1px solid #000"
    }

    function renderRows() {


        return productList.map(product => {
            return <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
            </tr>
        });
    }

    return (
        <div>
            <table style={border}>
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Nome</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {renderRows()}
                </tbody>
            </table>
        </div>
    );
}
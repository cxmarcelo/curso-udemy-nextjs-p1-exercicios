import If from "../../components/ifComponent";

export default function conditional2(){
    const num = 4;
    //No react não tem diretivas como no angular ou vue para fazer condicional
    //nesse caso é necessário criar algo como esse component If
    return (
        <div>
            <If test={num % 2 == 0}>
                <h1>
                    O número: {num} é par.
                </h1>
            </If>
            <If test={num % 2 == 1}>
                <h1>
                    O número: {num} é impar.
                </h1>
            </If>
        </div>
    )
}
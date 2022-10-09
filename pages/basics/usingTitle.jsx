import Title from "../../components/title"

export default function usingTitle() {
    return (
        <div>
            <Title primaryText="Página de cadastro" description="Incluir, alter e excluir"></Title>
            <Title primaryText="Página de Login" description="Informe email e senha" small></Title>
            <Title primaryText="Página de Login" description="Informe email e senha" small={true}></Title>
        </div>
    )
}
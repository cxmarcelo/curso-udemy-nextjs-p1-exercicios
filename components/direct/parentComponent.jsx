import ChildComponent from "./childComponent";

export default function ParentComponent(props) {
    return (
        <div>
            <h1>Família {props.family}</h1>
            <ChildComponent name="Ana" family={props.family}></ChildComponent>
            <ChildComponent name="João" family={props.family}></ChildComponent>
            <ChildComponent {...props} name="Pedro"></ChildComponent>
        </div>
    );

    //inverter a ordem do props faz diferença, o props sobreescreve todas as props duplicadas.
    //<ChildComponent name="Pedro" {...props}></ChildComponent>
    //nesse caso name sobreescreve a prop duplicada
    //<ChildComponent {...props} name="Pedro"></ChildComponent>
}
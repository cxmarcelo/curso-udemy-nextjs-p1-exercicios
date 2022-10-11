import BoardRow from "../../components/board-challenge/board-row";

export default function Board(props) {
    return (
        <div style={{backgroundColor: "#444", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: "100vw", height: "100vh"}}>
            <BoardRow ></BoardRow>
            <BoardRow black></BoardRow>
            <BoardRow></BoardRow>
            <BoardRow black></BoardRow>
            <BoardRow></BoardRow>
            <BoardRow black></BoardRow>
            <BoardRow></BoardRow>
            <BoardRow black></BoardRow>
        </div>
    );
}
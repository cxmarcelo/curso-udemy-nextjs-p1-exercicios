import styles from '../../styles/BoardRow.module.css'
import SubDivison from "./subDivision";

export default function BoardRow(props) {
    return (
        <div className={styles.row}>
            <SubDivison black={props.black}></SubDivison>
            <SubDivison black={!props.black}></SubDivison>
            <SubDivison black={props.black}></SubDivison>
            <SubDivison black={!props.black}></SubDivison>
            <SubDivison black={props.black}></SubDivison>
            <SubDivison black={!props.black}></SubDivison>
            <SubDivison black={props.black}></SubDivison>
            <SubDivison black={!props.black}></SubDivison>
        </div>
    )
}
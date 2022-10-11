import styles from '../../styles/SubDivison.module.css'

export default function SubDivison(props) {
    return (
        <div 
            style={{
                backgroundColor: props.black ? "#000" : "#fff"
            }}
            className={styles.square}>
        </div>
    );
}
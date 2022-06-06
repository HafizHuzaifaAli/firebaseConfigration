import CircularProgress from '@mui/material/CircularProgress';
export default function Button(props) {
    return(
        <button type="button" disabled={props.loader}  style={{width: `${props.width}`}} onClick={props.onClick}  className={props.class} to={props.destination}>{props.loader && <CircularProgress />} {props.text}</button>
    )
    
}
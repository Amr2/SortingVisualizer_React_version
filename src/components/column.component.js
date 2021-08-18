export default function Column(props){
    return (
        <div className={`colm`} style={{ height:`${props.length+10}%`}}>
            <span>{props.length}</span>
        </div>
    )
}
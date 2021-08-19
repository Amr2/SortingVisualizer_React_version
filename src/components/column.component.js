export default function Column(props){
    return (
        <div className={`colm`} style={{ height:`${props.length+10}%`}}>
            <p>{props.length}</p>
        </div>
    )
}
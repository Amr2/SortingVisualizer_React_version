import Column from "./column.component";

export default function ColumnCont(props){
    return(
        <div className="cont" ref={props.Colum_cont}>
            {props.Columns_arr.map( (elem,indx) =>{
                return (<Column key={elem+100+"asdvzxncpoiq2e"+indx} 
                length ={elem}/>)
            })}
        </div>
    )
}
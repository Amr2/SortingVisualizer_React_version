export default function NavBar(props){
    return(
        <div className="nav-bar">
            <h1>Sorting Visualizer</h1>
            <div className="options">
                <button className="btn" onClick={()=> {props.sort(props.Columns_arr)}}>Sort</button>
                <button className="btn" onClick ={()=> {
                    props.creat_Columns_arr( ()=> props.Random_arr(20))
                }}>Generat</button>
                <button className="btn">Stop</button>
            </div>
        </div>
    )
}
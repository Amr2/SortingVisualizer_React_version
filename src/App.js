// Hooks
import { useState , useRef } from "react";

// components
import NavBar from "./components/navbar.component";
import ColumnCont from "./components/columncont.component";
import Sorted from "./components/sorted.component";

// styles
import "./styles/style.scss";

// utils
import { Random_arr, insertionSort } from "./utils/utils";

function App() {
  // decleration of states
  // the genrated array
  let [Columns_arr, creat_Columns_arr] = useState(()=>Random_arr(20));
  
  // to ref to the columns Container
  const Colum_cont = useRef(null);

  // sorting Functions
  const Insertion_Animator_fun = (arr)=>{
    // console.log(arr);
    let steps = insertionSort(arr)[2];
    // console.log(insertionSort(arr)[1]);
    steps.map( (step,indx) => {
      if(step.state === "arrow"){
        setTimeout(()=>{
          [...Colum_cont.current.children].forEach(element => {
            element.classList.remove("arrow")
          });
          Colum_cont.current.children[step.index].classList.add("arrow")
      }, indx*300)
      }
      
      if(step.state === "comp_sorted"){
        setTimeout(()=>{
          // console.log("test", step);
          Colum_cont.current.children[step.index[1]].classList.add("complete");
          Colum_cont.current.children[step.index[0]].classList.add("complete");
          Colum_cont.current.children[step.index[1]].innerHTML=`<p>${step.index[2]}</p>`;
          Colum_cont.current.children[step.index[1]].style.height=`${step.index[2]+10}%`;
          setTimeout(()=>{
            // console.log("workimg" , step);
            Colum_cont.current.children[step.index[0]].classList.remove("complete");
            Colum_cont.current.children[step.index[1]].classList.remove("complete");
          },150);
      }, (1+indx)*300)
      }

      if(step.state === "swap"){
        setTimeout(()=>{
          // console.log("test", step);
          Colum_cont.current.children[step.index[1]].classList.add("swaping");
          Colum_cont.current.children[step.index[0]].classList.add("swaping");
          Colum_cont.current.children[step.index[1]].innerHTML=`<p>${step.index[2]}</p>`;
          Colum_cont.current.children[step.index[1]].style.height=`${step.index[2]+10}%`;
          setTimeout(()=>{
            // console.log("workimg" , step);
            Colum_cont.current.children[step.index[0]].classList.remove("swaping");
            Colum_cont.current.children[step.index[1]].classList.remove("swaping");
          },150);
      }, indx*300)
      }

      if(step.state === "unsorted"){
        setTimeout(()=>{
          // console.log("test", step);
          Colum_cont.current.children[step.index[0]].classList.add("active");
          setTimeout(()=>{
            // console.log("workimg" , step);
            Colum_cont.current.children[step.index[0]].classList.remove("active");
          },150);
      }, indx*300)
      }

      if(indx === steps.length-1){
        setTimeout(()=>{
          [...Colum_cont.current.children].forEach(element => {
            element.classList.remove("arrow")
          });
          },indx*300)}

      return "done"
    })
  }

  const [sorting_method , set_SortingMethod] = useState(()=>Insertion_Animator_fun)

  return (
    <main>
      <NavBar Columns_arr={Columns_arr} creat_Columns_arr={creat_Columns_arr} Random_arr={Random_arr} sort={sorting_method}/>
      <ColumnCont Columns_arr={Columns_arr} Colum_cont={Colum_cont}  />
      <Sorted sort_fun={insertionSort} Columns_arr={Columns_arr} />
    </main>
  );
}

export default App;

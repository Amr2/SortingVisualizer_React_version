export const Random_arr = (len)=>{
    let arr =[];
    for (let i = 0 ; i < len ; i++){
        arr.push(Math.floor(Math.random()*70)+10)
    }
    return arr;
}


export const insertionSort =(arr)=>{
    let n = arr.length;
    let sorted_arr = [...arr];
    let animations = []
        for (let i = 1; i < n; i++) {
            // Choosing the first element in our unsorted subarray
            let current = sorted_arr[i];
            animations.push({
                state:"arrow",
                index:i
            })
            animations.push({state:"unsorted", index:[i]})
            // The last element of our sorted subarray
            let j = i-1; 
            while ((j > -1) && (current < sorted_arr[j])) {
                sorted_arr[j+1] = sorted_arr[j];
                animations.push({
                    state:"swap",
                    index:[j , j+1 ,Number(sorted_arr[j])]
                })
                j--;
            }
            sorted_arr[j+1] = current;
            animations.push({state:"comp_sorted", index:[i,j+1,Number(current)]})
        }
    return [arr , sorted_arr , animations];
}
function todayIs() {
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const daysOfWeek = ["Sunday","Monday","Tuesday","wednesday","Thursday","Friday","Saturday"];
    
    let date = new Date();  
    let today = daysOfWeek[date.getDay()];
    let dateOfMonth = date.getDate();
    let month = months[date.getMonth()];
    let year = date.getFullYear();
    
    return 'Today is ' + today + ' the ' + dateOfMonth + ' of ' + month + ',' + year;
}

// console.log(todayIs());
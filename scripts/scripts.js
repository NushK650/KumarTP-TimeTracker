const timeButtons = document.querySelectorAll('.time-btn');
const dailyBtn = document.getElementById('dailyBtn');
const weeklyBtn = document.getElementById('weeklyBtn');
const monthlyBtn = document.getElementById('monthlyBtn');
let workHours = document.getElementById('workHours');
let workPrevious = document.getElementById('workPrevious');




function getData(){
    return fetch('../data.json')
    .then( response => response.json())
    .then( data => {
        console.log(data)
        return data
    })   
}
getData();



timeButtons.forEach(button => {
    button.addEventListener('click', () => {
        
        timeButtons.forEach(btn => btn.classList.remove('active'));
        
        
        button.classList.add('active');
    });
});

dailyBtn.addEventListener('click', function(){
    
    
    getData();
    const workDailyHours = Data[0].timeframes.daily.current;
    const workDailyPrevious = Data[0].timeframes.daily.previous;
        console.log(workDailyHours);  
        console.log(workDailyPrevious);  
        
        
        
   
     
        
    
});
weeklyBtn.addEventListener('click',function(){

});

monthlyBtn.addEventListener('click', function(){

});
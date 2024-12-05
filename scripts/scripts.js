// elements
const timeButtons = document.querySelectorAll(".time-btn");
const dailyBtn = document.getElementById("dailyBtn");
const weeklyBtn = document.getElementById("weeklyBtn");
const monthlyBtn = document.getElementById("monthlyBtn");
// variables
let workHours = document.getElementById("workHours");
let workPrevious = document.getElementById("workPrevious");

let playHours = document.getElementById("playHours");
let playPrevious = document.getElementById("playPrevious");

let studyHours = document.getElementById("studyHours");
let studyPrevious = document.getElementById("studyPrevious");

let exerciseHours = document.getElementById("exerciseHours");
let exercisePrevious = document.getElementById("exercisePrevious");

let socialHours = document.getElementById("socialHours");
let socialPrevious = document.getElementById("socialPrevious");

let selfCareHours = document.getElementById("selfCareHours");
let selfCarePrevious = document.getElementById("selfCarePrevious");

let apiData = "";

// functions
async function asycnGetData() {
  const promise = await fetch("./data.json");
  const data = await promise.json();
  console.log(data);
  apiData = data;
}
asycnGetData();

// buttons
timeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    timeButtons.forEach((btn) => btn.classList.remove("active"));

    button.classList.add("active");
  });
});

dailyBtn.addEventListener("click", function () {
  // work
  const workDailyHours = apiData[0].timeframes.daily.current;
  const workDailyPrevious = apiData[0].timeframes.daily.previous;
  workHours.innerText = workDailyHours;
  workPrevious.innerText = workDailyPrevious;
  // play
  const playDailyHours = apiData[1].timeframes.daily.current;
  const playDailyPrevious = apiData[1].timeframes.daily.previous;
  playHours.innerText = playDailyHours;
  playPrevious.innerText = playDailyPrevious;
  // study
  const studyDailyHours = apiData[2].timeframes.daily.current;
  const studyDailyPrevious = apiData[2].timeframes.daily.previous;
  studyHours.innerText = studyDailyHours;
  studyPrevious.innerText = studyDailyPrevious;
  // exercise
  const exerciseDailyHours = apiData[3].timeframes.daily.current;
  const exerciseDailyPrevious = apiData[3].timeframes.daily.previous;
  exerciseHours.innerText = exerciseDailyHours;
  exercisePrevious.innerText = exerciseDailyPrevious;
  // social
  const socialDailyHours = apiData[4].timeframes.daily.current;
  const socialDailyPrevious = apiData[4].timeframes.daily.previous;
  socialHours.innerText = socialDailyHours;
  socialPrevious.innerText = socialDailyPrevious;
  // self care
  const selfCareDailyHours = apiData[5].timeframes.daily.current;
  const selfCareDailyPrevious = apiData[5].timeframes.daily.previous;
  selfCareHours.innerText = selfCareDailyHours;
  selfCarePrevious.innerText = selfCareDailyPrevious;
  
});
weeklyBtn.addEventListener("click", function () {
    // work
  const workWeeklyHours = apiData[0].timeframes.weekly.current;
  const workWeeklyPrevious = apiData[0].timeframes.weekly.previous;
  workHours.innerText = workWeeklyHours;
  workPrevious.innerText = workWeeklyPrevious;
  // play
  const playWeeklyHours = apiData[1].timeframes.weekly.current;
  const playWeeklyPrevious = apiData[1].timeframes.weekly.previous;
  playHours.innerText = playWeeklyHours;
  playPrevious.innerText = playWeeklyPrevious;
  // study
  const studyWeeklyHours = apiData[2].timeframes.weekly.current;
  const studyWeeklyPrevious = apiData[2].timeframes.weekly.previous;
  studyHours.innerText = studyWeeklyHours;
  studyPrevious.innerText = studyWeeklyPrevious;
  // exercise
  const exerciseWeeklyHours = apiData[3].timeframes.weekly.current;
  const exerciseWeeklyPrevious = apiData[3].timeframes.weekly.previous;
  exerciseHours.innerText = exerciseWeeklyHours;
  exercisePrevious.innerText = exerciseWeeklyPrevious;
  // social
  const socialWeeklyHours = apiData[4].timeframes.weekly.current;
  const socialWeeklyPrevious = apiData[4].timeframes.weekly.previous;
  socialHours.innerText = socialWeeklyHours;
  socialPrevious.innerText = socialWeeklyPrevious;
  // self care
  const selfCareWeeklyHours = apiData[5].timeframes.weekly.current;
  const selfCareWeeklyPrevious = apiData[5].timeframes.weekly.previous;
  selfCareHours.innerText = selfCareWeeklyHours;
  selfCarePrevious.innerText = selfCareWeeklyPrevious;
});

monthlyBtn.addEventListener("click", function () {
     // work
  const workMonthlyHours = apiData[0].timeframes.monthly.current;
  const workMonthlyPrevious = apiData[0].timeframes.monthly.previous;
  workHours.innerText = workMonthlyHours;
  workPrevious.innerText = workMonthlyPrevious;
  // play
  const playMonthlyHours = apiData[1].timeframes.monthly.current;
  const playMonthlyPrevious = apiData[1].timeframes.monthly.previous;
  playHours.innerText = playMonthlyHours;
  playPrevious.innerText = playMonthlyPrevious;
  // study
  const studyMonthlyHours = apiData[2].timeframes.monthly.current;
  const studyMonthlyPrevious = apiData[2].timeframes.monthly.previous;
  studyHours.innerText = studyMonthlyHours;
  studyPrevious.innerText = studyMonthlyPrevious;
  // exercise
  const exerciseMonthlyHours = apiData[3].timeframes.monthly.current;
  const exerciseMonthlyPrevious = apiData[3].timeframes.monthly.previous;
  exerciseHours.innerText = exerciseMonthlyHours;
  exercisePrevious.innerText = exerciseMonthlyPrevious;
  // social
  const socialMonthlyHours = apiData[4].timeframes.monthly.current;
  const socialMonthlyPrevious = apiData[4].timeframes.monthly.previous;
  socialHours.innerText = socialMonthlyHours;
  socialPrevious.innerText = socialMonthlyPrevious;
  // self care
  const selfCareMonthlyHours = apiData[5].timeframes.monthly.current;
  const selfCareMonthlyPrevious = apiData[5].timeframes.monthly.previous;
  selfCareHours.innerText = selfCareMonthlyHours;
  selfCarePrevious.innerText = selfCareMonthlyPrevious;
});

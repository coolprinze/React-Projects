import $ from 'jquery';
export const days = (
  ()=>{
    let days =[]; 
    for (let i = 1; i < 32; i++) 
    { days.push(i) } 
    return days
  })();

export const months = ["01", "02", "03", "04", "05", "06", '07', "08", "09", "10", "11", "12"];

export const years = (minYears = 0, maxYears = 100, time = 'past') => {
  let years = [];
  const date = new Date();
  if (time === 'past'){
    for(let i = date.getFullYear() - minYears; i > date.getFullYear() - maxYears; i--){
      years.push(i);
    }
  }else if (time === 'future'){
    for(let i = date.getFullYear() + minYears; i < date.getFullYear() + maxYears; i++){
      years.push(i);
    }
  }
  return years;
};

export const isEmpty = (obj) => {

  for(var key in obj) {
    if(obj.hasOwnProperty(key))
      return false;
  }
  return true;
}

export const title = ["Mr", "Mrs", "Miss", "Dr", "Prof", "Engr", "Chief", "Pastor"];


export const gender = ['male', 'female'];

export const paymentPlans = ['0 Outright', '3 Months', '6 Months', '9 Months', '12 Months'];

export const idType = ['National ID', 'Drivers License', 'Int\'l Passport', 'Voter\'s Card', 'Others'];
  
  
export default ()=> $('.toggle-menu, .menu-item li').click(() => {
  $('#menu').toggleClass('collapse-menu d-sm-block d-md-block col-md-1  col-md-3 col-xs-1 col-xl-2')
  $('#content').toggleClass('col-md-9 col-sm-12 col-md-11 col-xs-11 col-xl-10')
});

export const tokenConfig = getState => {
  // Get Token From State
  // const token = getState().auth.token;
  const token = false;

  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  }

  // If token, add to headers config
  if(token) {
    config.headers['Authorization']= `Token ${token}`
  }

  return config;

}

export const todayIsAfter = dueDate => {
  let date = new Date(dueDate)
  date = (date.getMonth() + 1) + "-" + date.getDate() + "-"  + date.getFullYear()
  date = new Date(date)
  let today = new Date()
  today = (today.getMonth() + 1) + "-" + today.getDate() + "-"  + today.getFullYear()
  today = new Date(today)
  
  return today > date
}

export const todayIsBefore = dueDate => {
  let date = new Date(dueDate)
  date = (date.getMonth() + 1) + "-" + date.getDate() + "-"  + date.getFullYear()
  date = new Date(date)
  let today = new Date()
  today = (today.getMonth() + 1) + "-" + today.getDate() + "-"  + today.getFullYear()
  today = new Date(today)

  return today < date
}

export const todayIs = dueDate => {
  let date = new Date(dueDate)
  date = (date.getMonth() + 1) + "-" + date.getDate() + "-"  + date.getFullYear()
  date = new Date(date).toDateString()
  let today = new Date()
  today = (today.getMonth() + 1) + "-" + today.getDate() + "-"  + today.getFullYear()
  today = new Date(today).toDateString()
  
  return today == date
}
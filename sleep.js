const getSleepHours=(day)=>{
    if(day==='monday'){
      return 8;
        }
        else if(day==='tuesday'){
          return 7;
                }
                else if (day==='wednesday'){
                  return 6;
                }
                else if(day==='thursday'){
                  return 5;
                }
                else if (day==='friday'){
                  return 4;
                }
                else if(day==='saturday'){
                  return 6;
                }
                else {
                return 10;
                }
  
  }
  console.log(getSleepHours('monday'));
  
  const getActualSleepHours=()=> getSleepHours('monday')+getSleepHours('tuesday')+getSleepHours('wednesday')+getSleepHours('thursday')+getSleepHours('friday')+getSleepHours('saturday');
  
  
  console.log(getActualSleepHours());  // this much u get sleep
  
  const getIdealSleepHours=()=>{
    const idealHours= 7;
    return idealHours*7;
  };
  console.log(getIdealSleepHours());   // this much you want 
  
  
  const calculateSleepDebt =()=>{
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  if(actualSleepHours===idealSleepHours){
    console.log('You sleep well for required time');
  }
  else if(actualSleepHours>idealSleepHours){
    console.log('user got more sleep than needed');
  }
  else {
    console.log('The user should get some rest.');
  }
  };
  calculateSleepDebt();
  
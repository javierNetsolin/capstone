const availableTimesByDate = {
    '2024-05-28': ['10:00', '11:00', '12:00'],
    '2024-05-29': ['10:00', '11:00', '12:00'],
    '2024-05-30': ['14:00', '15:00', '16:00'],
    '2024-05-31': ['10:00', '11:00', '12:00'],
    '2024-06-01': ['14:00', '15:00', '16:00'],
    '2024-06-02': ['14:00', '15:00', '16:00'],
    '2024-06-03': ['14:00', '15:00', '16:00'],
    '2024-06-04': ['14:00', '15:00', '16:00'],
    '2024-06-05': ['10:00', '11:00', '12:00'],
    '2024-06-06': ['14:00', '15:00', '16:00'],
    '2024-06-07': ['10:00', '11:00', '12:00'],
    '2024-06-08': ['14:00', '15:00', '16:00'],
    '2024-06-09': ['10:00', '11:00', '12:00'],
    '2024-06-10': ['14:00', '15:00', '16:00'],
    '2024-06-11': ['10:00', '11:00', '12:00'],
    '2024-06-12': ['14:00', '15:00', '16:00'],
    '2024-06-13': ['10:00', '11:00', '12:00'],
    '2024-06-14': ['14:00', '15:00', '16:00'],
    '2024-06-15': ['10:00', '11:00', '12:00'],
    '2024-06-16': ['14:00', '15:00', '16:00'],
    '2024-06-17': ['10:00', '11:00', '12:00'],
    '2024-06-18': ['14:00', '15:00', '16:00'],
    '2024-06-19': ['10:00', '11:00', '12:00'],
    '2024-06-20': ['14:00', '15:00', '16:00'],
  };


  const fetchAPI = (date) => {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            if(availableTimesByDate[date]){
                resolve(availableTimesByDate[date])
            }
            else{
                reject(new Error('No available times for the selected date.'));
            }
        } , 1000)
    })
  }

  const submitAPI = (formData) => {

    availableTimesByDate[formData.date] = availableTimesByDate[formData.date].filter(time => time !== formData.time);

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (formData) {
          resolve(true); // Simulate successful submission
        } else {
          reject(new Error('Form submission failed.'));
        }
      }, 1000); // Simulate API delay
    });
  };

  export{fetchAPI,submitAPI}
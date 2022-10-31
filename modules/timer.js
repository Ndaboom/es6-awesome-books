import { DateTime } from "../vendors/luxon.min.js";

const timerContainer = document.getElementById('timer');

const currentTime = () => {
  let currentTime = DateTime.now();  
  timerContainer.innerHTML = currentTime.toLocaleString(DateTime.DATETIME_MED);
}

export default currentTime; 
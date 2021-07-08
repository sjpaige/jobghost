
const lengthOfWeek = [0,1,2,3,4,5,6];

class Week {
    constructor(today = new Date()) {
        this.today = today;
        this.daysOfWeek = lengthOfWeek.map( dayNumber => new Date(today.setHours(0,0,0) - 1000*60*60*24*dayNumber));
    }
}

export default Week;
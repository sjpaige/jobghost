
const lengthOfWeek = [0,1,2,3,4,5,6];

class Week {
    constructor(today = new Date()) {
        this.today = new Date(today.setHours(0,0,0,0)).getTime();
        this.daysOfWeek = lengthOfWeek.map( dayNumber => (new Date(today.setHours(0,0,0,0) - 1000*60*60*24*dayNumber)).getTime());
    }

    toCompareFormat(day){
        return new Date(day.toDate().setHours(0,0,0,0)).getTime();
    }

    isToday(day){
        return this.today === this.toCompareFormat(day)
    }

    isInWeek(day){
        return this.daysOfWeek.includes(this.toCompareFormat(day))
    }

    toReadable(day){
        return `${new Date(day).toLocaleString('default', {month: 'long', day: 'numeric'})} `
    }
}

export default Week;
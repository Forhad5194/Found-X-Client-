
interface IDate {    
calendar: {
    identifier: string;
};
    
    day : number;
    era :   string;
    month : number;
    year : number;
}


 const dateToISO = (date : IDate) => {
    if(!date) {
        return new Date()
    }
    return new Date(`${date?.month}-${date?.day}-${date?.year}`).toISOString();
}

export default dateToISO;
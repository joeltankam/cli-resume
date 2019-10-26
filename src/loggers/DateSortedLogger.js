module.exports = class DateSortedLogger {
    constructor(data) {
        this.data = DateSortedLogger.ProcessDates(data);
    }

    static ProcessDates(data) {
        const experienceArray = Array.from(data);
        experienceArray.map((element) => {
            const exp = { ...element };
            exp.date.start = new Date(exp.date.start);
            if (exp.date.end !== undefined) {
                exp.date.end = new Date(exp.date.end);
            }
            return element;
        });
        experienceArray.sort((exp1, exp2) => {
            const exp1StartDate = exp1.date.start.getTime();
            const exp2StartDate = exp2.date.start.getTime();
            if (exp1StartDate > exp2StartDate) {
                return -1;
            }
            if (exp2StartDate > exp1StartDate) {
                return 1;
            }
            return 0;
        });
        return experienceArray;
    }
};

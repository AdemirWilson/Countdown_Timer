
document.getElementById("date-input").onchange = () => {
    setInterval(() => {

        const chosen_date = (new Date(document.getElementById("date-input").value)).getTime();
        const date = (new Date).getTime();
        const left_time = format_left_time(chosen_date - date);
        update_html(left_time);

    }, 1000);
};

function format_left_time(date) {
        let days,hours,minutes,seconds;

    if (date < 0) {
        days = 'E';
        hours = 'N'
        minutes = 'D'
        seconds = ':)'
    } else {
        days = Math.floor(date/8.64e+7);
        date = date%8.64e+7;
        hours = Math.floor(date/3.6e+6);
        date = date%3.6e+6;
        minutes = Math.floor(date/60000);
        date = date%60000;
        seconds = Math.floor(date/1000);
        date = date%1000;
    }
    
    return[days, hours, minutes, seconds];
}

function update_html(date) {
    document.getElementById("days").innerHTML = date[0]
    document.getElementById("hours").innerHTML = date[1]
    document.getElementById("minutes").innerHTML = date[2]
    document.getElementById("seconds").innerHTML = date[3]
}
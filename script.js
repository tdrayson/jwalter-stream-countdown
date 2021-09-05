function startCountdown(button){
    
        console.log('Started');
        button.innerHTML="Restart";
    
        const minutes = document.getElementById('minutes');
        const minutesVal = minutes.value;
        var NewTime = new Date(new Date().getTime() + minutesVal * 60000);

        minutes.remove();
        button.remove();
        var timerId =
            countdown(
                NewTime,
                function(ts) {
                document.getElementById('pageTimer').innerHTML = ts.toHTML("strong");
            },
            countdown.HOURS|countdown.MINUTES|countdown.SECONDS);

        
}

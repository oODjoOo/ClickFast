        let count = 0;
        let timeLeft = 5;
        let timerInterval;
        const messages = [
            "Prêt ?",
            "4 secondes C'est Chaud !",
            "3 secondes ACCELERE !",
            "2 secondes avant ta défaite !",
            "1 seconde Noooooon !",
            "Temps écoulé Bien Jouer ;) !"
        ];

        document.getElementById("button-clicker").addEventListener("click", () => {
                if (count === 0) {
                    // Start the timer when the first click happens
                    startTimer();
                }
                count++;
                document.getElementById("counter").innerHTML = count;
            });

        function startTimer() {
            timerInterval = setInterval(() => {
                timeLeft--;
                document.getElementById("timer").innerHTML = timeLeft;
                document.getElementById("message").innerHTML = messages[5 - timeLeft];

                if (timeLeft <= 0) {
                    clearInterval(timerInterval);
                    document.getElementById("button-clicker").disabled = true;
                    alert(`Temps écoulé ! Vous avez cliqué ${count} fois.`);
                    window.location.reload();
                }
            }, 1000);
        }
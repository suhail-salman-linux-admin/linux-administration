document
    .getElementById("surpriseBtn")
    .addEventListener("click", function () {

        const messages = [

            "You are my favorite person. ❤️",

            "Let's make another beautiful memory together. ✨",

            "Every moment with you is special. 💕",

            "One more date? Always. 🥰"

        ];

        const randomMessage =
            messages[
                Math.floor(
                    Math.random() * messages.length
                )
            ];

        document.getElementById("surprise")
            .textContent = randomMessage;

    });

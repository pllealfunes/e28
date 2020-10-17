Vue.component("round-detail", {
    data() {
        return {
        }
    },
    template: "#round-detail",
    props: {
        number: {
            type: Number,
            default: 0
        },
        result: String
    },

});



const app = new Vue({
    el: "#app",
    data: {
        compMove: null,
        playerMove: null,
        moves: ["rock", "paper", "scissors"],
        compOutput: "",
        playerOutput: "",
        result: "",
        playerScore: 0,
        compScore: 0,
        rounds: [],
        round: 1,
        winner: null,
        resultClass: ""

    },
    methods: {
        playGame(event) {
            this.playerMove = event.target.id;
            this.compMove = this.moves[Math.floor((Math.random() * this.moves.length))];
            this.playerOutput = this.playerMove.charAt(0).toUpperCase() + this.playerMove.slice(1);
            switch (true) {
                case this.compMove == "rock" && this.playerMove == "scissors":
                    this.compOutput = "Rock";
                    this.result = "Sorry You Lost";
                    this.resultClass = "lose";
                    this.compScore++;
                    break;
                case this.compMove == "paper" && this.playerMove == "rock":
                    this.compOutput = "Paper";
                    this.result = "Computer Won";
                    this.resultClass = "lose";
                    this.compScore++;
                    break;
                case this.compMove == "scissors" && this.playerMove == "paper":
                    this.compOutput = "Scissors";
                    this.result = "Sorry You Lost";
                    this.resultClass = "lose";
                    this.compScore++;
                    break;
                case this.compMove == "rock" && this.playerMove == "paper":
                    this.compOutput = "Rock";
                    this.result = "You won!";
                    this.resultClass = "win";
                    this.playerScore++;
                    break;
                case this.compMove == "paper" && this.playerMove == "scissors":
                    this.compOutput = "Paper";
                    this.result = "You Won!";
                    this.resultClass = "win";
                    this.playerScore++;
                    break;
                case this.compMove == "scissors" && this.playerMove == "rock":
                    this.compOutput = "Scissors";
                    this.result = "You Won!";
                    this.resultClass = "win";
                    this.playerScore++;
                    break;
                default:
                    this.compOutput = this.playerMove.charAt(0).toUpperCase() + this.playerMove.slice(1);
                    this.result = "It's a Tie!";
                    this.resultClass = "tie";
            }
            this.rounds.push({
                number: this.round++,
                result: this.result,
                playerScore: this.playerScore,
                compScore: this.compScore
            })

        },
        //Clear Score and History
        resetGame() {
            this.rounds = [];
            this.round = 1,
                this.playerScore = 0,
                this.compScore = 0,
                this.result = "",
                this.playerOutput = "",
                this.compOutput = "",
                this.resultClass = ""
        }
    }
});
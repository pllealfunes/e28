let app = new Vue({
    el: '#app',
    data: {
        playerName: '',
        startGame: false,
        mysteryWord: '',
        hint: '',
        guess: '',
        result: false,
        words: [
            ['apple', 'Sometimes red, sometimes delicious'],
            ['washington', 'Rushmore’s left edge'],
            ['pumpkin', 'Halloween’s favorite fruit'],
            ['football', 'Play with your hands or feet, depending on your location']
        ],
        num: null,
        message: null,
        scrambledWord: '',
        win: false,
        lose: true
    },
    methods: {
        submitName() {
            this.startGame = true;
            this.num = this.words[Math.floor((Math.random() * this.words.length))];
            this.mysteryWord = this.num[0];
            this.hint = this.num[1];
        },
        submitGuess() {
            this.result = true;
            if (this.guess === this.mysteryWord) {
                this.message = true;
                this.win = true;
            } else if (this.guess != this.mysteryWord) {
                this.message = false;
                this.lose = true;
            } else {
                this.message = null;
            }
        },
        resetGame() {
            this.num = this.words[Math.floor((Math.random() * this.words.length))];
            if (this.num[0] == this.mysteryWord) {
                this.num = this.words[Math.floor((Math.random() * this.words.length))];
            } else {
                this.mysteryWord = this.num[0];
                this.hint = this.num[1];
                this.guess = '';
                this.result = false;
            }
        }
    },
    computed: {
        displayMysteryWord() {
            let mystery = this.mysteryWord.split('');
            this.scrambledWord = mystery.sort(() => Math.random() - 0.5);
            return this.scrambledWord.join('');
        }
    }
});
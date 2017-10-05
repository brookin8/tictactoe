
var menu = new Vue ({

	el : '#tictactoe',

	data: {

		symbol_toggle: 'O',
		symbol_pick1: '',
		symbol_pick2: '',
		symbol_pick3: '',
		symbol_pick4: '',
		symbol_pick5: '',
		symbol_pick6: '',
		symbol_pick7: '',
		symbol_pick8: '',
		symbol_pick9: '',
		checkForWinVar: false,
		checkForDrawVar: false

	},

	methods: { 
		takeSquare: function(square) {
			if(!this.checkForWinVar)
				if (this.symbol_toggle === 'O') {
					this.symbol_toggle = 'X';
				} else {
					this.symbol_toggle = 'O';
				}
			
		},
		
		newGame: function() {
			this.symbol_toggle = 'O';
			this.symbol_pick1 = '';
			this.symbol_pick2 = '';
			this.symbol_pick3 = '';
			this.symbol_pick4 = '';
			this.symbol_pick5 = '';
			this.symbol_pick6 = '';
			this.symbol_pick7 = '';
			this.symbol_pick8 = '';
			this.symbol_pick9 = '';
			this.checkForWinVar = false;
			this.checkForDrawVar = false;


		},

		checkForWin: function() {
			if(!this.checkForWinVar) { 		
				var win_array = [[0,1,2], [3,4,5], [6,7,8], [0,4,8], [2,4,6], [0,3,6], [1,4,7], [2,5,8]];
				var symbolPick_array = [];
				symbolPick_array.push(this.symbol_pick1, this.symbol_pick2,this.symbol_pick3,this.symbol_pick4,
					this.symbol_pick5,this.symbol_pick6,this.symbol_pick7,this.symbol_pick8,this.symbol_pick9);
				
				for(var i=0;i<win_array.length;i++) {
					if(symbolPick_array[win_array[i][0]]!== '' && symbolPick_array[win_array[i][0]] === symbolPick_array[win_array[i][1]] 
						&& symbolPick_array[win_array[i][0]] === symbolPick_array[win_array[i][2]]) {
							//this.takeSquare();
							this.checkForWinVar = true;
					} else if(!symbolPick_array.includes('')) {
						this.checkForDrawVar = true;
					}
				}
			} 
	
		}
	}

});




function Game(options) {
  this.rows = options;
  this.columns = options;
  this.randColor();
}




Game.prototype.start = function() {
  setInterval(function(){
    //if(cellBackground1 || cellBackground2 || cellBackground3 || cellBackground4 || cellBackground5 || cellBackground6 )
    $("#color_board").empty();
    this.randColor();
  }.bind(this),2000); // To change colors of the color_board at first it needs to remove all colors from the board.

  $('.cellBackground1, .cellBackground2, .cellBackground3, .cellBackground4, .cellBackground5, .cellBackground6  ').on('click', function(){
    alert("hello");
    var background = $(this).addClass('blocked');
});
};


Game.prototype.randColor = function(){
  for (var row = 0; row < this.rows; row++) {
    for (var col = 0; col < this.columns; col++) {
      var newClass = ["cellBackground1", "cellBackground2", "cellBackground3", "cellBackground4", "cellBackground5", "cellBackground6"];
      var selectedColor = newClass[Math.floor(Math.random()* newClass.length)];
      $('#color_board').append($('<div>')
        .addClass(selectedColor)
        .attr('data-row', row)
        .attr('data-col', col)
      );
    }
  }
};

  $(document).ready(function() {
    game = new Game(20);
    game.start();

  });

//     Componenta unei bile

class Ball {
  constructor(color, number, x, y, speed) {
    this.color   = color;
    this.number  = number;
    this.x       = x;
    this.y       = y;
    this.speed   = speed;
  }
  render(){
    var html = `
    <div class="ball ball--${this.color}">
      <div> ${this.number}</div>
      <div> ${this.x}</div>
      <div> ${this.y}</div>
    </div>
    `;
    document.write(html);
  }
}

var Pool_Table = document.getElementById('table');
Pool_Table.innerHTML

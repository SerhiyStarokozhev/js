class Options {
    constructor (height, width, bg, fontSize, textAlign) {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }
    
    func (txt) {
        let div = document.createElement('div');
        
        div.textContent = txt;
        div.style.cssText = `height:${this.height}px;
        background-color:${this.bg};
        width:${this.width}px;
        font-size:${this.fontSize};
        text-align:${this.textAlign};`;
		document.body.appendChild(div);
    }
}

let option = new Options(100, 400, 'green', 55, 'center');

option.func('Академия Верстки');
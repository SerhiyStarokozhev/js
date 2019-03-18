class Options {
    constructor (height = '50px', width = "200px", bg = 'green', fontSize = '20px', textAlign = 'center') {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }
    
    func (txt) {
        let div = document.createElement('div');
        
        div.textContent = txt;
        div.style.cssText = `height:${this.height};
        background-color:${this.bg};
        width:${this.width};
        font-size:${this.fontSize};
        text-align:${this.textAlign};`;
		document.body.appendChild(div);
    }
}

let option = new Options();

option.func('Академия Верстки');
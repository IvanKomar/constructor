import { col,row, css} from '../utils'

class Block {
    constructor(value, options) {
        this.value = value
        this.options = options
    }

    toHtml() {
        throw new Error('method toHtml should be implemented')
    }
}

export class TitleBlock extends Block {
    constructor(value, options) {
        super(value, options)
    }

    toHtml() {
        const {tag = 'h1', styles} = this.options
        return row(col(`<${tag}>${this.value}</${tag}>`), css(styles))
    }
}

export class ImageBlock extends Block {
    constructor(value, options) {
        super(value, options)
    }

    toHtml() {
        const {alt, styles, imageStyles: is } = this.options
        return row(`<img alt="${alt}" style="${css(is)}" src="${this.value}"/>`, css(styles))
    }
}

export class ColumnsBlock extends Block {
    constructor(value, options) {
        super( value, options)
    }

    toHtml() {
        const html = this.value.map(col).join('')
        return row(html, css(this.options.styles))
    }
}

export class TextBlock extends Block {
    constructor(value, options) {
        super(value, options)
    }
    
    toHtml() {
        const temp = css(this.options.styles)
        console.log(this.options.styles)
        return row(col(`<p>${this.value}</p>`), temp)
    }
}
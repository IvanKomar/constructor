export class Site {
    constructor(selector) {
        this.$el = document.querySelector(selector)
    }

    render(model) {
        this.$el.innerHT = ''
        model.forEach((block) => {
            this.$el.insertAdjacentHTML('beforeend', block.toHtml())
        })
    }
}
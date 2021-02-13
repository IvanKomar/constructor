import image from './assets/image.png'
export const model = [
    {
        type: 'title',
        value: 'Website constructor on pure js',
        options: {
            tag: 'h2',
            styles: `background: 'linear-gradient(to right, $ff0099, #493240);'git init`
        }
    },
    {
        type: 'text',
        value: 'Here we go with some text'
    },
    {
        type: 'columns',
        value: [
            'column 1',
            'column 2',
            'column 3',
        ]
    },
    {type: 'image', path: image}
]

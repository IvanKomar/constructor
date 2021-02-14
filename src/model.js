import image from './assets/image.png';
import { ColumnsBlock, ImageBlock, TextBlock, TitleBlock } from './classes/blocks';
export const model = [
	new TitleBlock('Website constructor on pure js', {
		tag: 'h2',
		styles: {
			background: 'linear-gradient(to right, #ff0099, #493240)',
			color: '#fff',
			'text-align': 'center',
			padding: '1.5rem'
		}
	}),
	new ImageBlock(image, {
		styles: {
			padding: '2rem 0',
			display: 'flex',
			'justify-content': 'center'
		},
		imageStyles: {
			alt: 'some pic',
			width: '500px',
			height: 'auto'
		}
	}),
    new ColumnsBlock([ 'App on pure JS without libs', 'SOLID and OOP practice', 'Hello world & Lorem ipsum' ], {
		styles: {
			background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
			color: '#fff',
			'font-weight': 'bold',
			padding: '2rem'
		}
	}),
	new TextBlock('Here we go with some text', {
		styles: {
			background: 'linear-gradient(to left, #f2994a, #f2c94c)',
			padding: '1rem',
			'font-weight': 'bold'
		}
	}),

];

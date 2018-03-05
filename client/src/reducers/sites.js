export default function() {
	return [
		{ name: 'GUESS',
			countries: ['us', 'ca'],
			us: {
				men: {
					viewAll: 'https://shop.guess.com/en/catalog/browse/men/view-all/',
					newArrivals: 'https://shop.guess.com/en/catalog/browse/new-arrivals/men/view-all/',
					denim: 'https://shop.guess.com/en/catalog/browse/denim/men/view-all/',
					tankAndTshirt: 'https://shop.guess.com/en/catalog/browse/men/tanks-t-shirts/view-all/',
					jackets: 'https://shop.guess.com/en/catalog/browse/men/jackets-outerwear/view-all/',
					shirts: 'https://shop.guess.com/en/catalog/browse/men/shirts/view-all/',
					sweaters: 'https://shop.guess.com/en/catalog/browse/men/sweaters/',
					pantsAndShorts: 'https://shop.guess.com/en/catalog/browse/men/pants-shorts/view-all/',
					activewear: 'https://shop.guess.com/en/catalog/browse/men/activewear/',
					underwear: 'https://shop.guess.com/en/catalog/browse/men/underwear/',
					swim: 'https://shop.guess.com/en/catalog/browse/men/swim/'
				},
				women: {
					viewAll: 'https://shop.guess.com/en/catalog/browse/women/view-all/',
					newArrivals: 'https://shop.guess.com/en/catalog/browse/new-arrivals/women/view-all/',
					dresses: 'https://shop.guess.com/en/catalog/browse/women/dresses/view-all/',
					denim: 'https://shop.guess.com/en/catalog/browse/denim/women/view-all/',
					tops: 'https://shop.guess.com/en/catalog/browse/women/tops/view-all/',
					jackets: 'https://shop.guess.com/en/catalog/browse/women/jackets-and-outerwear/view-all/',
					sweaters: 'https://shop.guess.com/en/catalog/browse/women/sweaters/',
					bottoms: 'https://shop.guess.com/en/catalog/browse/women/bottoms/view-all/',
					activewear: 'https://shop.guess.com/en/catalog/browse/women/activewear/',
					swim: 'https://shop.guess.com/en/catalog/browse/women/swimwear/view-all/',
					lingerie: 'https://shop.guess.com/en/catalog/browse/women/lingerie/view-all/'
					}
				},
			ca: {
				men: {},
				women: {}
				}
		},
		{
			name: 'GUESS Factory',
			countries: ['us', 'ca'],
			guessFactory: {
			us: {},
			ca: {}
			}
		},
		{
			name: 'G by GUESS',
			countries: ['us', 'ca'],
			gByGuess: {
			us: {},
			ca: {}
			}
		},
		{
			name: 'Marciano',
			countries: ['us', 'ca'],
			marciano: {
			us: {},
			ca: {}
			}
		}
	]
};
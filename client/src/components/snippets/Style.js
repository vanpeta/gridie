const style = () => {
	return (
			`<!--[if !mso]><!-- -->
		<style type="text/css">
		@media only screen and (max-width: 480px) {
			.MobileCtaTextSize {
			font-size: 2.5vw !important;
			}
		}

		@media only screen and (max-width: 600px) {
			.hide_mobile {
			display: none !important;
			width: 0px !important;
			height: 0px !important;
			visibility: hidden !important;
			overflow: hidden !important;
			font-size: 0px !important;
			line-height: 0px !important;
			}
			.show_for_mobile {
			display: block !important;
			width: auto !important;
			height: auto !important;
			overflow: visible !important;
			position: static !important;
			min-height: 0px !important;
			line-height: normal !important;
			font-size: medium !important;
			}
			.imageMobile {
				width: 100% !important;
			}
		}
		</style>
		<!--<![endif]-->`
	);
}

export default style;
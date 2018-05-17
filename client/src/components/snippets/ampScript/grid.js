import Title from "../Title";
import Paragraph from "../Paragraph";
import CTA from "../CTA";
import ampScript1 from "./ampScript1";
import ampScript2 from "./ampScript2";
import ampScript3 from "./ampScript3";
import ampScript4 from "./ampScript4";
import ampScript5 from "./ampScript5";
import ampScript6 from "./ampScript6";
import ampScript7 from "./ampScript7";
import ampScript8 from "./ampScript8";
import ampScript9 from "./ampScript9";
import ampScript10 from "./ampScript10";
import ampScript11 from "./ampScript11";
import ampScript12 from "./ampScript12";

const ampScript = (props) => {
	console.log(props);
	const url = props.category + '?xml=1'
	const title = props.gridTitle.copy ? Title(props.gridTitle) : "";
	const paragraph = props.paragraph ? Paragraph(props.paragraph) : "";
	const topCTA = props.topCTA ? CTA(props.topCTA, props.category) : '';
	const bottomCTA = props.CTA ? CTA(props.CTA, props.category) : "";
	const script = `<script runat="server" language="ampscript">
			var @GridUrl, @NewArrivalsUrl
			var @GridXML
			var @ProductCount
			var @Product, @rows, @Scene7
			var @ProductTitles, @ProductTitle
			var @ProductPrices, @ProductPrice
			var @ProductUrls, @ProductUrl, @fixedUrl
			var @ProductImageUrls, @ProductImageUrl
			set @GridUrl = '${url}'
			set @GridXML = HTTPGet(@GridUrl)
			set @ProductTitles = BuildRowSetFromXML(@GridXML, "//ProductTitle")
			set @ProductPrices = BuildRowSetFromXML(@GridXML, "//CurrentPrice")
			set @ProductUrls = BuildRowSetFromXML(@GridXML, "//ProductUrl")
			set @ProductImageUrls = BuildRowSetFromXML(@GridXML, "//ProductImageUrl")
			set @ProductCount = RowCount(@ProductTitles)
			set @Scene7 = "?wid=600&hei=807&fmt=pjpeg&pscan=auto&qlt=70,0&op_sharpen=1&resMode=bicub&op_usm=0.1,0.1,5,0&crop=0,136,1684,2261"
			set @NewArrivalsUrl = Substring(@GridUrl, 1, Subtract(Length(@GridUrl), 6))
		</script>`;
	const grid = (props) => {
		switch (props.numberOfProducts) {
      case "1":
        return `<!-- Grid -->
					${script}
					${ampScript1(props)}`;
      case "2":
        return `<!-- Grid -->
					${script}
					${ampScript2(props)}`;
      case "3":
        return `<!-- Grid -->
					${script}
					${ampScript3(props)}`;
      case "4":
        return `<!-- Grid -->
					${script}
					${ampScript4(props)}`;
      case "5":
        return `<!-- Grid -->
					${script}
					${ampScript5(props)}`;
      case "6":
        return `<!-- Grid -->
					${script}
					${ampScript6(props)}`;
      case "7":
        return `<!-- Grid -->
					${script}
					${ampScript7(props)}`;
      case "8":
        return `<!-- Grid -->
					${script}
					${ampScript8(props)}`;
      case "9":
        return `<!-- Grid -->
					${script}
					${ampScript9(props)}`;
			case "10":
				return `<!-- Grid -->
					${script}
					${ampScript10(props)}`;
			case "11":
				return `<!-- Grid -->
					${script}
					${ampScript11(props)}`;
      case "12":
        return `<!-- Grid -->
					${script}
					${ampScript12(props)}`;
      default:
    }
	}
	return title + paragraph + topCTA + grid(props) + bottomCTA;
}

export default ampScript;
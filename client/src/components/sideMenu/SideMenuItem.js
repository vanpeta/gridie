import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { selectSite, fetchImages, selectCategory } from "../../actions/index";

class SideMenuItem extends Component {

	handleClick(event, address, data, sites) {
		event.stopPropagation();
		if (data.value !== "") {
			this.props.callForProducts(data.value);
			this.props.updateSelectedCategory(data.value);
		} else {
			this.props.openSideMenuItem(address, data, sites);
		}
	}

	renderChildren(children, currentAddress) {
		if (children.length > 0) {
			return (
				<ul className="list-unstyled">
					{children.map((child, index) => {
						return <NestedSideMenuItem data={child} key={index} address={[...currentAddress, index]} />;
					})}
				</ul>
			)
		}
	}

	render() {
		const data = this.props.data;
		const currentAddress = this.props.address;
		const children = data.isOpen ? this.renderChildren(data.children, currentAddress) : null;
		return (
			<li 
				className="nav-item"
				onClick={(event) => this.handleClick(event, currentAddress, data, this.props.sites)}
				style={data.style}>
				{data.title}
				{children}
			</li>
		)		
	}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
			openSideMenuItem: selectSite,
			callForProducts: fetchImages,
			updateSelectedCategory: selectCategory
    },
    dispatch
  );
}

function mapStateToProps (state) {
	return { sites: state.sites };
}

const NestedSideMenuItem = connect(mapStateToProps, mapDispatchToProps)(SideMenuItem);

export default NestedSideMenuItem;



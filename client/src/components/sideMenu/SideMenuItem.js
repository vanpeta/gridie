import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { selectSite } from "../../actions/index";

class SideMenuItem extends Component {

	toggle(event, address, data, sites) {
		event.stopPropagation();
		this.props.selectSite(address, data, sites);
	}

	renderChildren(children, currentAddress) {
		// const nextAddress = currentAddress.push()
		if (children.length > 0) {
			return (
				<ul>
					{children.map((child, index) => {
						return <NestedSideMenuItem data={child} key={index} address={[...currentAddress, index]} />;
                // selectSite={this.props.selectSite}
					})}
				</ul>
			)
		}
		// if (this.props.children && this.props.isOpen) {
		// if (children.legth) {
		// 	return (
		// 		this.props.children.map(child => {
		// 			return (
		// 				<li
		// 					key={this.props.children.indexOf(child)}>
		// 						{child.title}
		// 						<ul>
		// 							<SideMenuItem
		// 								children={child.children}
		// 							/>
		// 						</ul>
		// 				</li>
		// 			);
		// 		})
		// 	)
		// }
	}

	render() {
		const data = this.props.data;
		const currentAddress = this.props.address;
		const children = data.isOpen ? this.renderChildren(data.children, currentAddress) : null;
		return (
			<li onClick={(event) => this.toggle(event, currentAddress, data, this.props.sites)}>
				{data.title}
				{children}
			</li>
		)		
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      selectSite
    },
    dispatch
  );
}

function mapStateToProps (state) {
	return {sites: state.sites}
}

const NestedSideMenuItem = connect(mapStateToProps, mapDispatchToProps)(SideMenuItem);

export default NestedSideMenuItem;



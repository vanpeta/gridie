export function selectSite(address, data, sites) {
	console.log('in selectSite > address =', address, data, sites);

	const newSites = [...sites];

	let siteReference = newSites;

	address.forEach(index => {
		if (siteReference.children) {
			siteReference = siteReference.children[index];
		} else {
			siteReference = siteReference[index];
		}
	})

	// siteReference = newSelectedSite;
	siteReference.isOpen = !siteReference.isOpen;
	console.log("newSites=", newSites);

  return {
    type: "SITE_SELECTED",
    payload: newSites
  };
}
export function newImagesAndLinks (newData) {
	return {
		type: 'UPDATE_LINKS_AND_IMAGES',
		payload: newData
	}
}

({

	doInit : function(component) {
		component.find('navService').navigate({
			type: 'standard__component',
			attributes: {
				componentName: 'LightningSharing'
			},
			state: {
				'recordId': component.get('v.recordId')
			}
		});
	}

})
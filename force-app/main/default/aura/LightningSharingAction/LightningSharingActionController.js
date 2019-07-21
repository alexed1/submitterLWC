({

	doInit : function(component) {
		component.find('navService').navigate({
			type: 'standard__component',
			attributes: {
				componentName: 'oldAuraSharingWrapper'
			},
			state: {
				'recordId': component.get('v.recordId')
			}
		});
	}

})
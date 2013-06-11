Tarot.CardController = Ember.ObjectController.extend({
	cardClass: function(){
		var model = this.get('model')
		var cc = model.get('name');

		return cc.underscore();

	}.property()
});
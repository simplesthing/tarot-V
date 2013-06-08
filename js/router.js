Tarot.Router.map(function(){
	this.resource('tarot', {path: '/'})
});

Tarot.TarotRoute = Ember.Route.extend({
	model: function (){
		return Tarot.Card.find();
	}
})
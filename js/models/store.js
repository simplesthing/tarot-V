//new class Store tracks local instances of Tarot.Card
Tarot.Store = DS.Store.extend({
	revision: 12,
	//persist these instances using the built-in DS.FixtureAdapter, 
	//an adapter for using fixture data in the early stages of development before long-term persistence is required.
	adapter: 'DS.FixtureAdapter'
});
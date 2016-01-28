

// spec

var DToUConstraints = {
	temporal: {
		interval:function(s,e) {
			var sm = moment(s), em = moment(e);
			return function() {
				var nowm = moment();
				return em.isAfter(sm) && nowm.isBetween(sm,em);
			};
		},
		dayofWeek:function(day) {
			// day is an integer : 0..6 (todo change to strings)
			return function() { 
				var nowm = new Date();
				return nowm.getDay() == day;
			};
		},
	},
	audience: {
		isPerson:function(personid) {
			return function(context) { return context.reader.id === personid; };
		}
	},
	presentational: {
		isApp:function(appid) {
			return function(context) { return context.app.id == appid; };
		},
		isApp:function(appid) {
			return function(context) { return context.app.id == appid;	};
		},
		minScreenWidth:function(px) {
			return function(context) { return context.screen.width >= px; };
		},
	}
}

var example = {
	// describes the item annotated
	author:'',

	// describes the item being annotated
	src:'', // optional
	srcHash:'', // optional

	constraints: [
		// put a constraint on it for showing only during feb
		DToUConstraints.interval(moment('2016-02-01'), moment('2016-02-28')),
		// put an authorial constraints on it
		DToUConstraints.audience('http://hip.cat/emax')
	]
	// 
	signature:'' // this dtou signed and certified by the author
};

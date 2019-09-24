$(document).ready(function(){
	var grid = $('.customer.cards').drizzle({child:'.card'});

	$('.filter.old').on('click', function(){
		grid.filter('.old');
	});

	$('.filter.new').on('click', function(){
		grid.filter('.new');
	});

	$('.filter.dg-male').on('click', function(){
		grid.filter('[data-gender="male"]');
	});


	$('.filter.dg-female').on('click', function(){
		grid.filter('[data-gender="female"]');
	});

	$('.filter.dr-member').on('click', function(){
		grid.filter('[data-role="member"]');
	});

	$('.filter.dr-captain').on('click', function(){
		grid.filter('[data-role="captain"]');
	});

	$('.filter.dt-juvenile-alligators').on('click', function(){
		grid.filter('[data-team="juvenile-alligators"]');
	});

	$('.filter.dt-spotted-horses').on('click', function(){
		grid.filter('[data-team="spotted-horses"]');
	});

	$('.filter.dt-wary-foxes').on('click', function(){
		grid.filter('[data-team="wary-foxes"]');
	});

	$('.filter.unfilter').on('click', function(){
		grid.unfilter();
	});
	
	$('.filter.rain').on('click', function(){
		grid.rain();
	});

	$('.sort.name-asc').on('click', function(){
		grid.sort('.content .header.name', {order: 'asc'});
	});

	$('.sort.name-desc').on('click', function(){
		grid.sort('.content .header.name', {order: 'desc'});
	});

	$('.sort.stars-asc').on('click', function(){
		grid.sort('[data-stars]', {order: 'asc'});
	});

	$('.sort.stars-desc').on('click', function(){
		grid.sort('[data-stars]', {order: 'desc'});
	});

	$('.sort.wins-asc').on('click', function(){
		grid.sort('.extra.content .wins', {order: 'asc', isNumber: true});
	});

	$('.sort.wins-desc').on('click', function(){
		grid.sort('.extra.content .wins', {order: 'desc', isNumber: true});
	});
});
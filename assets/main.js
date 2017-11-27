var client = ZAFClient.init();

var button = document.querySelector("button");


button.addEventListener("click", function() {

	client.set('ticket.subject', 'Printer Overheating Incident');
	
});
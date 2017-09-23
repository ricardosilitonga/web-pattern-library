$(function() {
	/*
	* Menu utama
	*/
	var menuUtama = $(".sf-menu");

	// Membuat menu responsif dengan membuat kloning menuUtama.
	menuUtama.clone().removeClass().addClass("responsif-menu").prependTo(".kotak-navigasi nav");

	// Penerapan superfish pada menu.
	menuUtama.superfish();

	// Tombol responsif menu.
	$("#tombol-responsif-menu").on("click", function(event) {
		event.preventDefault();

		$(".responsif-menu").slideToggle();
	});
});
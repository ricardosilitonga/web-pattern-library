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


	/*
	* Animasi
	*/

	$("#demo-animasi").find(".demo-kolom").on("click", function(e) {
		// Perhatikan perbedaan operator this pada seleksi elemen jquery berbeda dan javascript
		var $this = $(this);

		$this.addClass("animated " + $this.text());
	});

	/*
	* Tabs
	*/
	$(".tab-link a").on("click", function(e) {
		e.preventDefault();

		// Ambil tab yang dijadikan target
		var targetTab = $(this).attr("href");
		// console.log(targetTab);
		// console.log($(targetTab));

		// Tampilkan tab yang dijadikan target, sementara tab lain disembunyikan.
		$(targetTab).show().siblings().hide();

		// Tambahkan class aktif pada salah satu item dan buang class aktif pada item yang lainnya.
		$(this).parent("li").addClass("aktif").siblings().removeClass("aktif");
	});

	/*
	* Akordion
	*/
	$(".akordion-elemen-judul").on("click", function(e) {
		e.preventDefault();

		// Ambil akordion yang dijadikan target
		var targetAkordion = $(this).attr("href");

		// Sembunyikan semua akordion elemen
		$(".akordion-elemen-judul").removeClass("aktif");
		$(".akordion-elemen-konten").hide();

		// Tampilkan akordion elemen konten yang dijadikan target sebelumnya
		$(this).addClass("aktif");
		$(targetAkordion).show();
	});
});
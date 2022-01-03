class Movie {
	// a) constructor
	// b) "PG" as default when no rating is provided.
	constructor(title, studio, rating = "PG") {
		this.title = title;
		this.studio = studio;
		this.rating = rating;
	}

	// c) get movies with only PG rated
	static getPG(movies) {
		let result = movies.filter((film) => {
			if (film.rating === "PG") return true;
		});
		return result;
	}
}

// d) created given instance
let casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG13");
console.log(casinoRoyale);

class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }
  get title() {
    return this._title;
  }
  get isCheckedOut() {
    return this._isCheckedOut;
  }
  get ratings() {
    return this._ratings;
  }
  toggleCheckOutStatus() {
    this._isCheckedOut = !this._isCheckedOut;
  }
  getAverageRating() {
    const initialValue = 0;
    const ratingSum = this.ratings.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      initialValue
    );
    const ratingsLength = this.ratings.length;
    const avgRating = ratingSum / ratingsLength;
    return avgRating;
  }
  addRating(value) {
    this.ratings.push(value);
  }
  set isCheckedOut(value) {
    this._isCheckedOut = value;
  }
}

class Book extends Media {
  constructor(author, title, pages) {
    super(title);
    this._title = title;
    this._author = author;
    this._pages = pages;
  }
  get author() {
    return this._author;
  }
  get pages() {
    return this._pages;
  }
}

class Movie extends Media {
  constructor(director, title, runTime) {
    super(title);
    this._title = title;
    this._director = director;
    this._runTime = runTime;
  }
  get director() {
    return this._director;
  }
  get runTime() {
    return this._runTime;
  }
}

class CD extends Media {
  constructor(artist, title, songs) {
    super(title);
    this._title = title;
    this._artist = artist;
    this._songs = [];
  }
  get artist() {
    return this._director;
  }
  get songs() {
    return this._runTime;
  }
  addSongs(song) {
    this.songs.push(song);
  }
  shuffle(randomNum) {
    randomNum = Math.floor(Math.random() * this.songs.length);
    return this.songs[randomNum];
  }
}

// Book class tests

// const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);

// historyOfEverything.toggleCheckOutStatus();

// console.log(historyOfEverything.isCheckedOut);

// historyOfEverything.addRating(4);
// historyOfEverything.addRating(5);
// historyOfEverything.addRating(5);

// console.log(historyOfEverything.ratings);

// historyOfEverything.getAverageRating();

// console.log(historyOfEverything.getAverageRating());

// Movie class tests

// const speed = new Movie('Jan de Bont', 'Speed', 116);

// speed.toggleCheckOutStatus();

// console.log(speed.isCheckedOut);

// speed.addRating(1);
// speed.addRating(1);
// speed.addRating(5);

// speed.getAverageRating();

// console.log(speed.getAverageRating());

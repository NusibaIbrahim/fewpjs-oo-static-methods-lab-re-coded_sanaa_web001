class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9- ']+/g, "");
  }
    static titleize(string) {
    const splitStr = string.toLowerCase().split(" ");
    const exceptions = [
<<<<<<< HEAD
      "the",
      "a",
      "an",
      "but",
      "of",
      "and",
      "for",
      "at",
      "by",
      "from",
    ];

    for (let i = 0; i < splitStr.length; i++) {
      if (i > 0 && exceptions.includes(splitStr[i])) continue;
=======
      "and",
      "the",
      "a",
      "an",
      "for",
      "to",
      "but",
      "at",
      "by",
       "of",
      "form"
    ];

    for (let i = 0; i < splitStr.length; i++) {
      if (i > 0 && exceptions.includes(splitStr[i]))
        // if it's an exception skip the capatilization
        continue;

>>>>>>> 8b6f341cff7819d31088e52459aefee4ad0de786
      splitStr[i] =
        splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    const array = splitStr.join(" ");
    array.toString();
<<<<<<< HEAD
    return array;
=======
    console.log(array);
>>>>>>> 8b6f341cff7819d31088e52459aefee4ad0de786
  }
}
Formatter.capitalize("crocodile");
Formatter.capitalize("a");
Formatter.capitalize("alligator");
Formatter.capitalize("BURSTING BALLOON");

Formatter.sanitize("c");
Formatter.sanitize("!");
Formatter.sanitize("ca$@#tching cold");
Formatter.sanitize("Doin' Dishes");
Formatter.sanitize("Entert*ain(i{ng-Elephan^ts");

Formatter.titleize("getting giggles");
Formatter.titleize("where the wild things are");
Formatter.titleize("chicken soup with rice and a few other songs");
Formatter.titleize("Maurice a an but of and for at by from end");
Formatter.titleize("a tale of two cities");
Formatter.titleize("in the night kitchen");
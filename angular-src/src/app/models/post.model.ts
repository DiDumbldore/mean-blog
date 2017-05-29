export class Post {
  title: string;
  id: number;
  types = [];
  stats = [];

  formattedName() {
    return this.title ? 
      this.title[0].toUpperCase() + this.title.substr(1) : "";
  }

//   image() {
//     return "https://rawgit.com/PokeAPI/sprites/master/sprites/pokemon/" + this.id + ".png"
//   }
}
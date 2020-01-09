app.use(express.static('public'))
var friendMatch = [
  {
    name: "Red Ranger",
    photo: "/red-ranger.jpg",
    scores: ["2", "2", "2", "2", "2"]
  }, {
    name: "Black Ranger",
    photo: "/black-ranger.jpg ",
    scores: ["3", "3", "3", "3", "3"]
  }, {
    name: " Blue Ranger",
    photo: "/blue-ranger.jpg",
    scores: ["1", "1", "1", "1", "1"]
  }, {
    name: "Pink Ranger",
    photo: "/pink-ranger.jpg",
    scores: ["3", "3", "3", "3", "1"]
  },

];



module.exports = friendMatch;
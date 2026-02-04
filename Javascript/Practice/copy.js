var copyObject = function (target) {
  const result = {};
  for (let prop in target) {
    result[prop] = target[prop];
  }
  return result;
};

var user = {
  name: "jaenam",
  urls: {
    portfolio: "http://github.com/test",
    blog: "http://blog.com",
    facebook: "http://facebook.com/test",
  },
};

var user2 = copyObject(user);

user2.name = "Jung";
console.log(user.name === user2.name); //false

user.urls.portfolio = "http://portfolio.com";
console.log(user.urls.portfolio === user2.urls.portfolio); //true

user2.urls.blog = "";
console.log(user.urls.blog == user2.urls.blog); //true

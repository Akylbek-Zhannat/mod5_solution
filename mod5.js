(function (global) {
  var dc = {};

  dc.loadHomePage = function () {
    $ajaxUtils.sendGetRequest("categories.json", function (categories) {
      var randomIndex = Math.floor(Math.random() * categories.length);
      var randomCategoryShortName = categories[randomIndex].short_name;

      $ajaxUtils.sendGetRequest("home-snippet.html", function (htmlSnippet) {
        var updatedHtml = htmlSnippet.replace("{{randomCategoryShortName}}", randomCategoryShortName);
        document.querySelector("#main-content").innerHTML = updatedHtml;
      }, false);
    });
  };

  global.$dc = dc;
})(window);

$dc.loadHomePage();

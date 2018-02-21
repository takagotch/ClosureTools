require("google-closure-library");

goog.require("goog.crypt.Sha1");

var sha1 = new goog.crypt.Sha1();
sha1.update("foobar");
var hash = sha1.digest();


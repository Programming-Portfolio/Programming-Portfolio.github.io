var story = document.getElementById("story");
var output = document.getElementById("output");
var input = document.getElementById("user-input");
var color, noun1, noun2, noun3, noun4, verb1, verb2, verb3, adj1, adj2;
var ran_color = ["pink", "gold", "skyblue", "yellow", "orange", "green"];
var ran_noun = ["cookie", "phone", "dog", "tree", "pen", "mouse"];
var ran_nouns = ["cats", "chips", "pillows", "strings", "violins", "keys"];
var ran_verbs = ["watch", "eat", "drive", "paint", "run", "dance"];
var ran_adj = ["smelly", "pretty", "cold", "silky", "grainy", "bright"];

function play() {
  color = document.getElementById("color").value;
  noun1 = document.getElementById("noun-1").value;
  noun2 = document.getElementById("noun-2").value;
  noun3 = document.getElementById("noun-3").value;
  noun4 = document.getElementById("noun-4").value;
  verb1 = document.getElementById("verb-1").value;
  verb2 = document.getElementById("verb-2").value;
  verb3 = document.getElementById("verb-3").value;
  adj1 = document.getElementById("adj-1").value;
  adj2 = document.getElementById("adj-2").value;

  story.innerHTML = "<p>When I am an old " + noun1 + " I shall wear " + color +"<br>With a red hat which doesn't go, and doesn't suit me.<br>And I shall spend my pension on brandy and summer gloves<br>And " + adj1 + " sandals, and say we've no money for butter.<br>I shall " + verb1 + " on the pavement when I'm tired<br>And " + verb2 + " up samples in shops and press alarm bells<br>And run my stick along the public railings<br>And make up for the sobriety of my youth.<br>I shall go out in my slippers in the rain<br>And pick the " + noun2 + " in other people's gardens<br>And learn to spit.</p><p>You can wear " + adj2 + " shirts and grow more fat<br>And eat three pounds of " + noun3 + " at a go<br>Or only bread and pickle for a week<br>And " + verb3 + " pens and pencils and beermats and things in boxes.</p><p>But now we must have clothes that keep us dry<br>And pay our rent and not swear in the " + noun4 + "<br>And set a good example for the children.<br>We must have friends to dinner and read the papers.</p><p>But maybe I ought to practise a little now?<br>So people who know me are not too shocked and surprised<br>When suddenly I am old, and start to wear " + color + ".</p>"
  output.style.display = "block";
  input.style.display = "none";
}

function reset() {
  color = document.getElementById("color").value = "";
  noun1 = document.getElementById("noun-1").value = "";
  noun2 = document.getElementById("noun-2").value = "";
  noun3 = document.getElementById("noun-3").value = "";
  noun4 = document.getElementById("noun-4").value = "";
  verb1 = document.getElementById("verb-1").value = "";
  verb2 = document.getElementById("verb-2").value = "";
  verb3 = document.getElementById("verb-3").value = "";
  adj1 = document.getElementById("adj-1").value = "";
  adj2 = document.getElementById("adj-2").value = "";
  story.innerHTML = "";
  output.style.display = "none";
  input.style.display = "block";
}

function generate() {
  var num = Math.ceil(Math.random() * 5);
  var num2 = Math.ceil(Math.random() * 5);
  var num3 = Math.ceil(Math.random() * 5);
  var num4 = Math.ceil(Math.random() * 5);
  color = document.getElementById("color").value = ran_color[num];
  noun1 = document.getElementById("noun-1").value = ran_noun[num];
  noun2 = document.getElementById("noun-2").value = ran_nouns[num2];
  noun3 = document.getElementById("noun-3").value = ran_nouns[num3];
  noun4 = document.getElementById("noun-4").value = ran_noun[num4];
  verb1 = document.getElementById("verb-1").value = ran_verbs[num];
  verb2 = document.getElementById("verb-2").value = ran_verbs[num2];
  verb3 = document.getElementById("verb-3").value = ran_verbs[num3];
  adj1 = document.getElementById("adj-1").value = ran_adj[num];
  adj2 = document.getElementById("adj-2").value = ran_adj[num2];
}

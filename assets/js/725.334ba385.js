(window.webpackJsonp=window.webpackJsonp||[]).push([[725],{940:function(e,t,a){"use strict";a.r(t);var r=a(0),s=Object(r.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[e._m(0),e._v(" "),e._m(1),e._v(" "),a("p",[e._v("Using the Vue Framework, create an interactive version of the game Scramble.")]),e._v(" "),e._m(2),e._v(" "),a("p",[e._v("When the game begins, the player will be presented with a word that has been scrambled. The player will guess by typing into the provided textbox.")]),e._v(" "),a("p",[e._v("If the guess is correct, the player will earn a point, and a new scrambled word will appear. If the guess is incorrect, the player will receive a strike, and the scrambled word will remain.")]),e._v(" "),a("p",[e._v("A pass button will allow the player to skip on a word and receive a new scrambled word. The player will only have a limited number of passes.")]),e._v(" "),a("p",[e._v("Each time a word is guessed correctly or is passed, the word is removed from the game list and will not appear again during that specific game.")]),e._v(" "),a("p",[e._v("The game is over when the player went through all of the words in the game list, OR the player has received the maximum number of strikes. At which time, the player should be presented with an option to play again.")]),e._v(" "),e._m(3),e._v(" "),a("p",[e._v("The following requirements must be met to complete the assignment successfully:")]),e._v(" "),e._m(4),e._v(" "),e._m(5),e._v(" "),e._m(6),e._v(" "),e._m(7),e._v(" "),e._m(8),e._v(" "),a("Scrimba",{attrs:{id:"/c/cR3EJaTk"}}),e._v(" "),e._m(9),e._v(" "),e._m(10),e._v(" "),a("Youtube",{attrs:{id:"ePDqM5SFopQ"}}),e._v(" "),e._m(11),e._v(" "),a("Youtube",{attrs:{id:"dnyImDGT3Aw"}}),e._v(" "),e._m(12),e._v(" "),a("p",[e._v("Getting started with Scramble can be difficult, so the following are some hints to help you start.")]),e._v(" "),e._m(13),e._v(" "),a("p",[e._v("Vue is a data-oriented framework. So it is important to know what data properties are needed. The following screenshot points out some of the more important data properties needed for the game, but you may want to include more.")]),e._v(" "),e._m(14),e._v(" "),e._m(15),e._v(" "),a("p",[e._v("Scramble is an interactive game. So, you will need to listen for interactions from the user. The following screenshot shows which UI elements will need to use Vue directives to track the user's actions.")]),e._v(" "),e._m(16),e._v(" "),e._m(17),e._v(" "),e._m(18),e._v(" "),e._m(19),e._v(" "),e._m(20)],1)},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"scramble"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#scramble","aria-hidden":"true"}},[this._v("#")]),this._v(" Scramble")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"objective"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#objective","aria-hidden":"true"}},[this._v("#")]),this._v(" Objective")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"game-play"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#game-play","aria-hidden":"true"}},[this._v("#")]),this._v(" Game Play")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"requirements"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#requirements","aria-hidden":"true"}},[this._v("#")]),this._v(" Requirements")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ol",[a("li",[e._v("The repository containing the starter files must be cloned from GitHub. The repository will contain an "),a("code",[e._v("index.html")]),e._v(" file, "),a("code",[e._v("styles.css")]),e._v(" file, and a "),a("code",[e._v("scramble.js")]),e._v(" file. You may change any of the files as necessary.")]),e._v(" "),a("li",[e._v("An array of words must be created. The words should not include spaces or special characters. There must be at least 10 words in the array.")]),e._v(" "),a("li",[e._v("The game should be persistent. The player's progress should be tracked throughout the game and stored to localStorage.")]),e._v(" "),a("li",[e._v("The player must be able to guess by typing into a textbox and hitting enter. Once a guess has been made, correct or incorrect, the textbox should be cleared. Making a guess should "),a("strong",[e._v("NOT")]),e._v(" cause a page refresh.")]),e._v(" "),a("li",[e._v("If the guess is correct, a new scrambled word should appear.")]),e._v(" "),a("li",[e._v("If the guess is incorrect, the current scrambled word should remain.")]),e._v(" "),a("li",[e._v("After each guess, the player should receive a response telling whether the guess was correct or incorrect.")]),e._v(" "),a("li",[e._v("After each guess, the number of points or strikes should be updated and displayed for the player.")]),e._v(" "),a("li",[e._v("If the player clicks on the pass button, and the player has at least pass remaining, the current word should be removed, and the next scrambled word should be displayed.")]),e._v(" "),a("li",[e._v("If the player makes it through the entire list of words "),a("em",[e._v("OR")]),e._v(" receives the maximum number of strikes, the game should end and give the player the option to play again.")]),e._v(" "),a("li",[e._v("If the player chooses to play again, the game should restart the game, clearing all previous points, strikes, or used passes. The restart should be accomplished without a page refresh.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"tips"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tips","aria-hidden":"true"}},[this._v("#")]),this._v(" Tips")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ol",[t("li",[this._v("The provided "),t("code",[this._v("shuffle()")]),this._v(" function can be used to shuffle the words array and scramble the individual words.")]),this._v(" "),t("li",[this._v("The use of frameworks or libraries to enhance user experience is allowed.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"shuffle-function"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#shuffle-function","aria-hidden":"true"}},[this._v("#")]),this._v(" Shuffle Function")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The following screencast shows how to use the provided "),t("code",[this._v("shuffle()")]),this._v(" function.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"example"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example","aria-hidden":"true"}},[this._v("#")]),this._v(" Example")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"warning custom-block"},[t("p",{staticClass:"custom-block-title"},[this._v("NOTE")]),this._v(" "),t("p",[this._v("The example below does not demonstrate the use of the localStorage.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"breakdown"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#breakdown","aria-hidden":"true"}},[this._v("#")]),this._v(" Breakdown")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"hints"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hints","aria-hidden":"true"}},[this._v("#")]),this._v(" Hints")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"_1-getting-a-list-of-data-points"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-getting-a-list-of-data-points","aria-hidden":"true"}},[this._v("#")]),this._v(" 1. Getting a list of data points")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:"/images/mtm6404-scramble-1.png",alt:"What data do we need?"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"_2-listening-for-events"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-listening-for-events","aria-hidden":"true"}},[this._v("#")]),this._v(" 2. Listening for events")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:"/images/mtm6404-scramble-2.png",alt:"What event listeners do we need?"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"_3-saving-to-local-storage"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-saving-to-local-storage","aria-hidden":"true"}},[this._v("#")]),this._v(" 3. Saving to Local Storage")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("When storing complex values, like objects and arrays, the "),a("code",[e._v("JSON.stringify()")]),e._v(" method is required. Furthermore too limit the number of items being stored in Local Storage, create a "),a("code",[e._v("game")]),e._v(" object inside the Vue "),a("code",[e._v("data")]),e._v(" property, which would contain all of the data related to a specific game, including "),a("em",[e._v("points")]),e._v(", "),a("em",[e._v("strikes")]),e._v(", "),a("em",[e._v("remaining passes")]),e._v(", "),a("em",[e._v("current words")]),e._v(", and "),a("em",[e._v("list of words")]),e._v(". Only the "),a("code",[e._v("game")]),e._v(" object would need to be stored to the Local Storage. Remember that you must use "),a("code",[e._v("JSON.parse()")]),e._v(" when retrieving the data from Local Storage.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"rubric"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rubric","aria-hidden":"true"}},[this._v("#")]),this._v(" Rubric")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("table",[a("thead",[a("tr",[a("th",[e._v("Task")]),e._v(" "),a("th",{staticStyle:{"text-align":"center"}},[e._v("Points")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("Properly implement the guess functionality")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("10")])]),e._v(" "),a("tr",[a("td",[e._v("Properly track and display points and strikes")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("5")])]),e._v(" "),a("tr",[a("td",[e._v("Properly implement the pass functionality")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("10")])]),e._v(" "),a("tr",[a("td",[e._v("Properly implement localStorage for a persistent gameplay")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("10")])]),e._v(" "),a("tr",[a("td",[e._v("Properly implement game restart")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("5")])]),e._v(" "),a("tr",[a("td",[e._v("Provide an effective and appealing user experience")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("10")])]),e._v(" "),a("tr",[a("td",[a("strong",[e._v("Total")])]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("strong",[e._v("50")])])])])])}],!1,null,null,null);t.default=s.exports}}]);
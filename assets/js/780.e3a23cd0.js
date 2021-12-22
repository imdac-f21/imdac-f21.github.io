(window.webpackJsonp=window.webpackJsonp||[]).push([[780],{995:function(e,t,i){"use strict";i.r(t);var a=i(0),r=Object(a.a)({},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"content"},[e._m(0),e._v(" "),e._m(1),e._v(" "),i("p",[e._v("For this assignment, you will be demonstrating your understanding of using functions, conditional statements, HTTP variables, and PHP includes by creating a simple interactive fishing game.")]),e._v(" "),e._m(2),e._v(" "),i("p",[e._v("The player will perform actions by typing in the commands into the form text box. The response for each command will be displayed in the response box. The old responses will remain on the page even as new ones come in.")]),e._v(" "),i("p",[e._v("Each action may have certain conditions that must be met for the task to be performed. When a condition is not correct, the game must inform the player what they should do to perform the desired task. After an action has been performed, a status message should be present to the player to explain what happened.")]),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),e._m(5),e._v(" "),e._m(6),e._v(" "),e._m(7),e._v(" "),i("p",[e._v("The player can start or stop a fire. The player will start the fire only if:")]),e._v(" "),e._m(8),e._v(" "),i("p",[e._v("The player will stop the fire only if:")]),e._v(" "),e._m(9),e._v(" "),e._m(10),e._v(" "),e._m(11),e._v(" "),e._m(12),e._v(" "),e._m(13),e._v(" "),e._m(14),e._v(" "),e._m(15),e._v(" "),e._m(16),e._v(" "),e._m(17),e._v(" "),e._m(18),e._v(" "),e._m(19),e._v(" "),i("p",[e._v("The player can do a check on the inventory status. The inventory status should return a list of how many items the player currently has.")]),e._v(" "),e._m(20),e._v(" "),i("p",[e._v("The player can display the instructions on how to play the game.")]),e._v(" "),e._m(21),e._v(" "),i("p",[e._v("The player can clear the current game data by restarting the game. All inventory should be set back to zero.")]),e._v(" "),e._m(22),e._v(" "),i("p",[e._v("The game data should be stored and retrieved from the session. Each time the player enters a command, the game data should be retrieved from and updated to the session.")]),e._v(" "),e._m(23),e._v(" "),i("p",[e._v("The commands received by the player should be sent using the POST method.")]),e._v(" "),e._m(24),e._v(" "),e._m(25),e._v(" "),e._m(26),e._v(" "),e._m(27),e._v(" "),e._m(28),e._v(" "),e._m(29),e._v(" "),e._m(30),e._v(" "),e._m(31),e._v(" "),e._m(32),e._v(" "),e._m(33),e._v(" "),e._m(34),e._v(" "),e._m(35),e._v(" "),e._m(36),e._v(" "),i("p",[e._v("The following requirement must be met to complete the assignment successfully:")]),e._v(" "),e._m(37),e._v(" "),e._m(38),e._v(" "),e._m(39),e._v(" "),i("p",[e._v("A completed version of the assignment can be found at the following:")]),e._v(" "),i("p",[i("a",{attrs:{href:"https://functional-fishing.eisenbraun.ca",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://functional-fishing.eisenbraun.ca"),i("OutboundLink")],1)]),e._v(" "),e._m(40),e._v(" "),e._m(41)])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"function-fishing"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#function-fishing","aria-hidden":"true"}},[this._v("#")]),this._v(" Function Fishing")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"objective"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#objective","aria-hidden":"true"}},[this._v("#")]),this._v(" Objective")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"game-play"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#game-play","aria-hidden":"true"}},[this._v("#")]),this._v(" Game Play")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"actions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#actions","aria-hidden":"true"}},[this._v("#")]),this._v(" Actions")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"fishing"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fishing","aria-hidden":"true"}},[this._v("#")]),this._v(" Fishing")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("When the player goes fishing, they have a "),t("em",[this._v("chance")]),this._v(" of catching a fish. But the player may only go fishing if:")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("The player has at least 1 piece of bait")]),this._v(" "),t("li",[this._v("The fire has been stopped")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"starting-stopping-a-fire"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#starting-stopping-a-fire","aria-hidden":"true"}},[this._v("#")]),this._v(" Starting / Stopping a fire")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("The fire has been stopped")]),this._v(" "),t("li",[this._v("The player has at least 1 piece of wood")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("The fire has been started")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"searching-for-bait"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#searching-for-bait","aria-hidden":"true"}},[this._v("#")]),this._v(" Searching for bait")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The player can search for bait, which will increase the player's bait inventory "),t("strong",[this._v("by one")]),this._v(". The player can go searching for bait if:")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("The fire has been stopped")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"searching-for-wood"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#searching-for-wood","aria-hidden":"true"}},[this._v("#")]),this._v(" Searching for wood")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The player can search for wood, which will increase the player's wood inventory "),t("strong",[this._v("by one")]),this._v(". The player can go searching for wood if:")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("The fire has been stopped")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"eating"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#eating","aria-hidden":"true"}},[this._v("#")]),this._v(" Eating")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The player can eat fish. Each fish will decrease the player's fish inventory "),t("strong",[this._v("by one")]),this._v(". The player can only eat if:")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("The fire has been started")]),this._v(" "),t("li",[this._v("The player has at least 1 fish")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"checking-inventory"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#checking-inventory","aria-hidden":"true"}},[this._v("#")]),this._v(" Checking inventory")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"help"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#help","aria-hidden":"true"}},[this._v("#")]),this._v(" Help")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"restarting-the-game"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#restarting-the-game","aria-hidden":"true"}},[this._v("#")]),this._v(" Restarting the Game")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"game-data"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#game-data","aria-hidden":"true"}},[this._v("#")]),this._v(" Game Data")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"commands"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#commands","aria-hidden":"true"}},[this._v("#")]),this._v(" Commands")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"project-setup"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#project-setup","aria-hidden":"true"}},[this._v("#")]),this._v(" Project Setup")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"_1-clone-the-repository"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-clone-the-repository","aria-hidden":"true"}},[this._v("#")]),this._v(" 1. Clone the Repository")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Clone this repository from GitHub and use the provided file to complete the assignment. "),t("strong",[this._v("Warning: The provided file will throw an error if run as is. The error will be fixed after step 3 is completed.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"_2-include-functional-fishing-php"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-include-functional-fishing-php","aria-hidden":"true"}},[this._v("#")]),this._v(" 2. Include "),t("code",[this._v("functional-fishing.php")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Include "),t("code",[this._v("functional-fishing.php")]),this._v(" inside "),t("code",[this._v("index.php")]),this._v(".")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"_3-create-game-data-in-session"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-create-game-data-in-session","aria-hidden":"true"}},[this._v("#")]),this._v(" 3. Create Game Data in Session")])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ol",[i("li",[e._v("In "),i("code",[e._v("functional-fishing.php")]),e._v(", start a new session")]),e._v(" "),i("li",[e._v("In "),i("code",[e._v("functional-fishing.php")]),e._v(", create the "),i("code",[e._v("createGameData()")]),e._v(" function. The function will create a game data array and store it in session and store it in session under the index "),i("code",[e._v("functional_fishing")]),e._v(". The game data array should contain the following:\n"),i("ol",[i("li",[e._v("The "),i("code",[e._v("response")]),e._v(" array")]),e._v(" "),i("li",[e._v("The number of "),i("code",[e._v("fish")])]),e._v(" "),i("li",[e._v("The number of "),i("code",[e._v("wood")])]),e._v(" "),i("li",[e._v("The number of "),i("code",[e._v("bait")])]),e._v(" "),i("li",[e._v("The status of "),i("code",[e._v("fire")])])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"_4-send-commands-using-the-post-method"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-send-commands-using-the-post-method","aria-hidden":"true"}},[this._v("#")]),this._v(" 4. Send commands using the POST Method")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("In "),t("code",[this._v("index.php")]),this._v(", update the form to submit using the "),t("code",[this._v("POST")]),this._v(" method.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"_5-check-for-the-post-array"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-check-for-the-post-array","aria-hidden":"true"}},[this._v("#")]),this._v(" 5. Check for the "),t("code",[this._v("$_POST")]),this._v(" array")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("In "),t("code",[this._v("functional-fishing.php")]),this._v(", check for the "),t("code",[this._v("$_POST")]),this._v(" array for a player's command.")])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ol",[i("li",[e._v("If a player has entered a command, check If the command matches an existing function (HINT: Use "),i("code",[e._v("function_exists()")]),e._v(").\n"),i("ol",[i("li",[e._v("If so, execute the function and pass the results to the "),i("code",[e._v("updateResponse()")]),e._v(" function.")]),e._v(" "),i("li",[e._v("If not, then add a response to the response array in session, using "),i("code",[e._v("updateResponse()")]),e._v(", telling the user that the command is not valid.")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"requirements"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#requirements","aria-hidden":"true"}},[this._v("#")]),this._v(" Requirements")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"danger custom-block"},[t("p",{staticClass:"custom-block-title"},[this._v("Warning")]),this._v(" "),t("p",[this._v("The web application must be functional and without errors. A non-functional game due to syntax errors or missing functionality will "),t("strong",[this._v("result in a failing grade")]),this._v(".")])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ol",[i("li",[e._v("Create the "),i("code",[e._v("fish()")]),e._v(" function will give the player a chance to catch fish. Each call to the "),i("code",[e._v("fish()")]),e._v(" function will use "),i("strong",[e._v("one")]),e._v(" piece of bait and randomly determine if a fish has been caught. The requirements for fishing are as follows:\n"),i("ol",[i("li",[e._v("The fire must not be going")]),e._v(" "),i("li",[e._v("The player must have at least 1 piece of bait")])])]),e._v(" "),i("li",[e._v("Create the "),i("code",[e._v("eat()")]),e._v(" function will allow the player to eat a fish. Each call to the "),i("code",[e._v("eat()")]),e._v(" function will use "),i("strong",[e._v("one")]),e._v(" fish. The requirements for eating are as follows:\n"),i("ol",[i("li",[e._v("The fire must be going")]),e._v(" "),i("li",[e._v("The player must have at least 1 fish")])])]),e._v(" "),i("li",[e._v("Create the "),i("code",[e._v("fire()")]),e._v(" function will allow the player to start or stop the fire and should have the following requirements:\n"),i("ol",[i("li",[e._v("If the "),i("code",[e._v("fire()")]),e._v(" function is called when the fire is going, it should be turned off the fire.")]),e._v(" "),i("li",[e._v("If the "),i("code",[e._v("fire()")]),e._v(" function is called when the fire is NOT going AND the player has at least 1 piece of wood, the fire should be turned on.")])])]),e._v(" "),i("li",[e._v("Create the "),i("code",[e._v("bait()")]),e._v(" function will allow the player to search for bait as long as the fire is not going.")]),e._v(" "),i("li",[e._v("Create the "),i("code",[e._v("wood()")]),e._v(" function will allow the player to search for wood as long as the fire is not going.")]),e._v(" "),i("li",[e._v("Create the "),i("code",[e._v("inventory()")]),e._v(" function will display the player's current inventory. It should list the amount of fish, bait, wood the player has, and if the fire is going.")]),e._v(" "),i("li",[e._v("Create the "),i("code",[e._v("restart()")]),e._v(" function will allow the player to clear the current game data and restart the game.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"example"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example","aria-hidden":"true"}},[this._v("#")]),this._v(" Example")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"rubric"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rubric","aria-hidden":"true"}},[this._v("#")]),this._v(" Rubric")])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("table",[i("thead",[i("tr",[i("th",[e._v("Criteria")]),e._v(" "),i("th",{staticStyle:{"text-align":"center"}},[e._v("Pts")])])]),e._v(" "),i("tbody",[i("tr",[i("td",[e._v("Create a "),i("code",[e._v("fish()")]),e._v(" function that meets all project requirements.")]),e._v(" "),i("td",{staticStyle:{"text-align":"center"}},[e._v("3")])]),e._v(" "),i("tr",[i("td",[e._v("Create a "),i("code",[e._v("eat()")]),e._v(" function that meets all project requirements.")]),e._v(" "),i("td",{staticStyle:{"text-align":"center"}},[e._v("3")])]),e._v(" "),i("tr",[i("td",[e._v("Create a "),i("code",[e._v("fire()")]),e._v(" function that meets all project requirements.")]),e._v(" "),i("td",{staticStyle:{"text-align":"center"}},[e._v("3")])]),e._v(" "),i("tr",[i("td",[e._v("Create a "),i("code",[e._v("bait()")]),e._v(" function that meets all project requirements.")]),e._v(" "),i("td",{staticStyle:{"text-align":"center"}},[e._v("3")])]),e._v(" "),i("tr",[i("td",[e._v("Create a "),i("code",[e._v("wood()")]),e._v(" function that meets all project requirements.")]),e._v(" "),i("td",{staticStyle:{"text-align":"center"}},[e._v("3")])]),e._v(" "),i("tr",[i("td",[e._v("Create an "),i("code",[e._v("inventory()")]),e._v(" function that meets all project requirements.")]),e._v(" "),i("td",{staticStyle:{"text-align":"center"}},[e._v("3")])]),e._v(" "),i("tr",[i("td",[e._v("Create a "),i("code",[e._v("restart()")]),e._v(" function that meets all project requirements.")]),e._v(" "),i("td",{staticStyle:{"text-align":"center"}},[e._v("2")])]),e._v(" "),i("tr",[i("td",[i("strong",[e._v("Total")])]),e._v(" "),i("td",{staticStyle:{"text-align":"center"}},[i("strong",[e._v("20")])])])])])}],!1,null,null,null);t.default=r.exports}}]);
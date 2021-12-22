(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{299:function(t,e,a){"use strict";a.r(e);var s=a(0),r=Object(s.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),a("p",[t._v("A simple declaration:")]),t._v(" "),t._m(9),t._m(10),t._v(" "),t._m(11),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),a("p",[t._v("This example will set implicitly created rows to a height of 200px")]),t._v(" "),t._m(15),a("p",[t._v("This example will set implicitly created rows to a minimum height of 200px and a maximum height to the item with the most content")]),t._v(" "),t._m(16),t._m(17),t._v(" "),a("ul",[a("li",[t._v("Watch "),a("a",{attrs:{href:"https://www.youtube.com/watch?v=IzebOBaR3I0",target:"_blank",rel:"noopener noreferrer"}},[t._v("CSS Grid and grid auto flow - YouTube"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("Read "),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Auto-placement_in_CSS_Grid_Layout",target:"_blank",rel:"noopener noreferrer"}},[t._v("Auto-placement in CSS Grid Layout - CSS: Cascading Style Sheets | MDN"),a("OutboundLink")],1)])]),t._v(" "),t._m(18),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://drafts.csswg.org/css-grid/#propdef-grid-auto-flow",target:"_blank",rel:"noopener noreferrer"}},[t._v("W3C - CSS Grid Layout Module Level 1"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-columns",target:"_blank",rel:"noopener noreferrer"}},[t._v("grid-auto-columns - CSS: Cascading Style Sheets | MDN"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-flow",target:"_blank",rel:"noopener noreferrer"}},[t._v("grid-auto-flow - CSS: Cascading Style Sheets | MDN"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-rows",target:"_blank",rel:"noopener noreferrer"}},[t._v("grid-auto-rows - CSS: Cascading Style Sheets | MDN"),a("OutboundLink")],1)])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"grid-auto-placement"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#grid-auto-placement","aria-hidden":"true"}},[this._v("#")]),this._v(" Grid Auto Placement")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"preamble"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#preamble","aria-hidden":"true"}},[this._v("#")]),this._v(" Preamble")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Earlier in the module we explicitly place items through the use of "),e("code",[this._v("grid-column")]),this._v(" , "),e("code",[this._v("grid-row")]),this._v(" and "),e("code",[this._v("grid-area")]),this._v(". CSS Grid offers a method to control the placement of grid items automatically.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("By default, grid items will be laid out by row. If rows have been defined using "),e("code",[this._v("grid-template-rows")]),this._v(", then grid will continue to place items in these rows. Otherwise, rows are implicitly created and by default will accommodate the size of the content.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Controlling the behavior of auto placement is accomplished with the "),e("code",[this._v("grid-auto-columns")]),this._v(", "),e("code",[this._v("grid-auto-rows")]),this._v(" and "),e("code",[this._v("grid-auto-flow")]),this._v(" properties.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"grid-auto-flow"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#grid-auto-flow","aria-hidden":"true"}},[this._v("#")]),this._v(" grid-auto-flow")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("This controls the direction of the auto-placement algorithm. Essentially the main-axis. The values available are "),e("code",[this._v("row")]),this._v(", "),e("code",[this._v("column")]),this._v(" and "),e("code",[this._v("dense")]),this._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("row")]),this._v(" and "),e("code",[this._v("column")]),this._v(" are self explanatory but "),e("code",[this._v("dense")]),this._v(" is new. This is a packing algorithm that will attempt to fill in any gaps that appear in the grid by taking items out of the existing DOM order and place them in gaps earlier in the grid.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example","aria-hidden":"true"}},[this._v("#")]),this._v(" Example")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".grid-container")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("grid-template-columns")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("repeat")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 1fr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("grid-auto-flow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" row"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Adding the "),e("code",[this._v("dense")]),this._v(" value:")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".grid-container")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("grid-template-columns")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("repeat")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 1fr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("grid-auto-flow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" row dense"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"grid-auto-rows-and-grid-auto-columns"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#grid-auto-rows-and-grid-auto-columns","aria-hidden":"true"}},[this._v("#")]),this._v(" grid-auto-rows and grid-auto-columns")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("These properties set the size of implicitly created rows or columns. It will accept absolute sizing values, "),e("code",[this._v("fr")]),this._v(", "),e("code",[this._v("auto")]),this._v(" , "),e("code",[this._v("minmax()")]),this._v(" and a few others.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"example-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example-2","aria-hidden":"true"}},[this._v("#")]),this._v(" Example")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".grid-container")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("grid-template-columns")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("repeat")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 1fr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("grid-auto-flow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" row"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("grid-auto-rows")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 200px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".grid-container")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("grid-template-columns")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("repeat")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 1fr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("grid-auto-flow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" row"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("grid-auto-rows")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("minmax")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("200px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" auto"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"further-review"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#further-review","aria-hidden":"true"}},[this._v("#")]),this._v(" Further Review")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"references"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#references","aria-hidden":"true"}},[this._v("#")]),this._v(" References")])}],!1,null,null,null);e.default=r.exports}}]);
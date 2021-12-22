(window.webpackJsonp=window.webpackJsonp||[]).push([[723],{938:function(t,e,a){"use strict";a.r(e);var n=a(0),s=Object(n.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),a("p",[t._v("Use Vue, Vue Components, local storage, and the provided invoice data to create an invoice manager web application. The manager will allow the user to view, filter, create, edit, and delete invoices.")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),a("p",[t._v("Each invoice has a unique number which is used to identify the invoice. New invoices should also have a unique number and should be generated automatically when the user creates a new invoice. Below is a Serial Number generator function that can be used for this project. The function receives a number and returns an alpha serial number with that number of characters.")]),t._v(" "),t._m(9),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),a("Youtube",{attrs:{id:"83ICzosAzzg"}}),t._v(" "),t._m(14),t._v(" "),a("Youtube",{attrs:{id:"xDICoq8E_2Y"}}),t._v(" "),t._m(15),t._v(" "),t._m(16)],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"invoice-manager"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#invoice-manager","aria-hidden":"true"}},[this._v("#")]),this._v(" Invoice Manager")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"objective"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#objective","aria-hidden":"true"}},[this._v("#")]),this._v(" Objective")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"invoice-data"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#invoice-data","aria-hidden":"true"}},[this._v("#")]),this._v(" Invoice Data")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The invoice data can be found in "),e("code",[this._v("invoices.js")]),this._v(". The invoice data is an array of objects, with each object representing a single invoice. An invoice will contain the following data:")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("number: A unique identifier for the invoice")]),this._v(" "),e("li",[this._v("client: The name of the client")]),this._v(" "),e("li",[this._v("amount: The dollar amount for the invoice")]),this._v(" "),e("li",[this._v("status: The status of the invoice. The status will be either 'Draft', 'Pending', or 'Paid'")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The data found in the "),e("code",[this._v("invoices.js")]),this._v(" should not be altered.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"requirements"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#requirements","aria-hidden":"true"}},[this._v("#")]),this._v(" Requirements")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ol",[a("li",[t._v("The web application must consist of a single HTML file.")]),t._v(" "),a("li",[t._v("The web application must use local storage to keep the data persistent and up to date as the user makes changes to the invoices.")]),t._v(" "),a("li",[t._v("The web application must use the provided invoice data when no local storage data is available.")]),t._v(" "),a("li",[t._v("A Vue component should be created to render and display each invoice.")]),t._v(" "),a("li",[t._v("The web application must display all invoices, and all invoice data, when the page loads.")]),t._v(" "),a("li",[t._v("The user should be able to filter invoices by their status.")]),t._v(" "),a("li",[t._v("The user should be able to add new invoices by providing the client's name, invoice amount, and status. The application should automatically generate the number of the invoice. See "),a("a",{attrs:{href:"#serial-number-generator"}},[t._v("Serial Number Generator")]),t._v(".")]),t._v(" "),a("li",[t._v("The user should be able to edit existing invoices by changing the client's name, invoice amount, and/or status.")]),t._v(" "),a("li",[t._v("The user should be able to delete existing invoices.")]),t._v(" "),a("li",[t._v("The web application must use at least one custom event.")]),t._v(" "),a("li",[t._v("The web application must use at least one Vue transition.")]),t._v(" "),a("li",[t._v("The web application should cause no page refreshes.")]),t._v(" "),a("li",[t._v("The web application may use any public CSS framework or library, such as Bootstrap or Animate.css.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"serial-number-generator"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#serial-number-generator","aria-hidden":"true"}},[this._v("#")]),this._v(" Serial Number Generator")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("serialNumber")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("length")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" numbers "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" randomNumber "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Math"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("floor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Math"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("random")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("92")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("65")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("65")]),t._v("\n    numbers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("String"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fromCharCode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("randomNumber"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" numbers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("join")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("iframe",{staticStyle:{width:"100%"},attrs:{height:"300",scrolling:"no",title:"Serial Number Generator",src:"https://codepen.io/IMD/embed/qBmWGKE?defaultTab=js%2Cresult&editable=true&theme-id=light",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"}},[this._v("\n  See the Pen "),e("a",{attrs:{href:"https://codepen.io/IMD/pen/qBmWGKE"}},[this._v("\n  Serial Number Generator")]),this._v(" by IMD ("),e("a",{attrs:{href:"https://codepen.io/IMD"}},[this._v("@IMD")]),this._v(")\n  on "),e("a",{attrs:{href:"https://codepen.io"}},[this._v("CodePen")]),this._v(".\n")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"hints"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hints","aria-hidden":"true"}},[this._v("#")]),this._v(" Hints")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[t._v("Create an array containing the different invoice status options: ['Draft', 'Pending', 'Paid']")]),t._v(" "),a("li",[t._v("Use a select box to display the different invoice status options. The user can use the select box to change how the invoices can be filtered.")]),t._v(" "),a("li",[t._v("Use multiple props to pass invoice data to the invoice component. Do not pass the entire invoice object.")]),t._v(" "),a("li",[t._v("Create a copy of the invoice data inside the invoice component. This will prevent any unintended manipulation of the root data.")]),t._v(" "),a("li",[t._v("Include the invoice edit form as part of the invoice component.")]),t._v(" "),a("li",[t._v("Use custom events to change invoice data from the invoice component.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example","aria-hidden":"true"}},[this._v("#")]),this._v(" Example")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"breakdown"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#breakdown","aria-hidden":"true"}},[this._v("#")]),this._v(" Breakdown")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"rubric"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rubric","aria-hidden":"true"}},[this._v("#")]),this._v(" Rubric")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",[a("thead",[a("tr",[a("th",[t._v("Task")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Points")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("Creates and uses an invoice component to display each invoice")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("5")])]),t._v(" "),a("tr",[a("td",[t._v("Updates the invoice data in the root component and local storage when the user makes changes to an invoice data")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("4")])]),t._v(" "),a("tr",[a("td",[t._v("Deletes the invoice data in the root component and local storage when the user deletes an invoice")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("4")])]),t._v(" "),a("tr",[a("td",[t._v("Adds a new invoice the invoice data in the root component and local storage, when the user adds an invoice")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("2")])]),t._v(" "),a("tr",[a("td",[t._v("Filters invoices by their status, when the user updates the filter value")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("2")])]),t._v(" "),a("tr",[a("td",[t._v("Uses local storage to keep the invoice data persistent across browser sessions.")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("2")])]),t._v(" "),a("tr",[a("td",[t._v("Uses at least one Vue transition to add an animated transition.")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("1")])]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("Total")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("strong",[t._v("20")])])])])])}],!1,null,null,null);e.default=s.exports}}]);
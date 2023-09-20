import React from "https://esm.sh/react@17.0.1";
import ReactDOM from "https://esm.sh/react-dom@17.0.1";

// Importing Libraries so React works on CodePen

// Markdown Library work
marked.setOptions({
  breaks: true,
  highlight: function (code) {
    return Prism.highlight(code, Prism.languages.javascript, "javascript");
  } });


// Rendering Markdown Library
const renderer = new marked.Renderer();
renderer.link = function (href, title, text) {
  return '<a target="_blank" href="${href}">${text}</a>';
};

// Test Markdown Text
const defaultContent = `
# Welcome
## sub-heading

Heres some code, \` <div></div> \`

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  const multiLineCode = (text) => {
		if(text) {
			return text
		}
	}
\`\`\`

You can also make text **bold**... whoa!

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

1. And there are numbered lists too.

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;

// Editor
const Editor = ({ content, handleTextAreaChange }) => /*#__PURE__*/
React.createElement("textarea", { id: "editor", value: content, onChange: handleTextAreaChange });


// Previewer
const Preview = ({ content }) => /*#__PURE__*/
React.createElement("div", {
  id: "preview",
  dangerouslySetInnerHTML: {
    __html: marked(content, { renderer: renderer }) } });




// App Layout
const App = () => {
  // Generate Textarea content
  const [content, setContent] = React.useState(defaultContent);

  // textarea listener
  const handleTextAreaChange = event => {
    setContent(event.target.value);
  };

  return /*#__PURE__*/(
    React.createElement("div", { className: "main" }, /*#__PURE__*/
    React.createElement("div", { className: "content" }, /*#__PURE__*/
    React.createElement("h2", null, "Editor"), /*#__PURE__*/
    React.createElement(Editor, { content: content, handleTextAreaChange: handleTextAreaChange })), /*#__PURE__*/


    React.createElement("div", { className: "content" }, /*#__PURE__*/
    React.createElement("h2", null, "Preview"), /*#__PURE__*/
    React.createElement(Preview, { content: content }))));



};

// Rendering React app to HTML
ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("app"));
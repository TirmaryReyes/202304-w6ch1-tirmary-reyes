import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*,
::before,
::after {
  box-sizing: border-box;
}

html {
  font-family: monospace;
  
}

body {
  margin: 0;
  padding: 10%;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
  font: inherit;
}

h1{
  font-size: 1.5rem;
  font-weight: bold;
}

ul {
  list-style: none;
  padding-left: 0;
  margin: 0;
}

il{
  list-style: none;
}

button {
  font: inherit;
  border: none;
  background-color: transparent;
  cursor: pointer;
}

input {
  font: inherit;
  border: none;
}

a {
  text-decoration: none;
  color: inherit;
}

img {
  max-width: 100%;
}
`;

export default GlobalStyle;

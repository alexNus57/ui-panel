import { configure, addDecorator } from "@storybook/react";
//import { withInfo } from "@storybook/addon-info";

// automatically import all files ending in *.stories.tsx
const req = require.context("../.stories", true, /\.stories\.tsx$/);

function loadStories() {
// TO DO: убрать as any
//  addDecorator(withInfo as any);
  req.keys().forEach(req);
}

configure(loadStories, module);

# Styles using ITCSS

* **Settings** – Layer used with preprocessors and contain font, breakpoints, colors definitions, etc. It’s important not to output any CSS in this layer.
* **Tools** – Layer used for mixins and functions. It’s important not to output any CSS in this layer.
* **Generic** – Layer used to reset and/or normalize styles, box-sizing definition, etc. This is the first layer which generates actual CSS.
* **Elements** – Layer used for styling for bare HTML elements (like H1, A, etc.). These come with default styling from the browser so we can redefine them here.
* **Objects** – Layer used for class-based selectors which define undecorated design patterns, for example media object known from [OOCSS](http://oocss.org/). However, we rather not use this layer, as all the styles of the app should be inside the **Components** layer.
* **Components** – Layer used for specific UI components. This is where the majority of our work takes place and our UI components are often composed of Objects and Components. We keep all our components within its own directort, and its styles should live in that directory as well.
* **Utilities** – Layer for utilities and helper classes with ability to override anything which goes before in the triangle, eg. hide helper class. This layer shouldn't be used unless something aweful happens.

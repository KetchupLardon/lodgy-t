## Process

1. Create the project's architecture by creating the various folders.
2. Import SVG: I couldn't export the SVG from Figma, so I just found some that looked similar and optimized it with [SVG OMG](https://jakearchibald.github.io/svgomg/). Then, in order to use props, convert it to a React component.
3. Fetch the API so I can see if I can get the data. In case other requests from this API are added, I created a class for evolutivity.
4. Integration of the mockup without the logic. The API only gave some of the tasks a name rather than a description. I'm not sure if this was done for the exercise on purpose. As a result, I decided to check if there is no description and then display the name using a condition.
5. Create the accordion's animation and the checkboxes' styles. I would use styles-component or Maerial UI in a larger project, but it seemed pointless to import packages just for one component.
6. Connect the progressbar by converting the number of tasks checked by the user into a percentage.
7. To turn the title section into green, I couldn't find a proper way to check if all tasks per accordion section were checked. I already know how many tasks are in each section, so I can compare the number of checked tasks to the total number of tasks. But I couldn't figure out how to get the number of checked tasks per section. I'm still working on it.

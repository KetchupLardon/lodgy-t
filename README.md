## Process

1. Prepare the architecture of the project by creating the differents folders.
2. Import SVG: I couldn't export the SVG from the Figma so I just found SVG that looks same then use [SVG OMG](https://jakearchibald.github.io/svgomg/) for optimisation. Then transform it into React component for being able to use props.
3. Fetch the API for see if I could receive the datas. I created a class for evolutivity, in case if other requests from this API will be add.
4. Integration of the mockup without the logic. Some of the tasks didn't have description, but name instead. I don't know if it was done in purpose for the exercise or not. So I ended up by using a condition to check if there is a no description, display the name.
5. Create the animation of the accordion and style the checkboxes. In bigger project I would use styles-component or Maerial UI but it felt useless to import packages just for one component.
6. Connect the progressbar by checking the number of tasks that the user checked and convert it into percentage.
7. I didn't find a proper way to check if all tasks per accordion section was checked to turn the title section into green. I already get the amount of tasks per section to compare the number of checked task and the amount of tasks. But didn't find a way to get the number of checked per section. Still working on it.

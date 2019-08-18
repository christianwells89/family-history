This is a simple app to enter family history information that is very much a WORK IN PROGRESS. Its aim is to teach me to use React in a non-trivial application.

After taking over the family historian duties when my grandfather passed away in 2017, I was keen to move his data from the archaic 90s application he was using to something more modern and nice to use. I was disappointed in my efforts to find something that satisfied that, especially with something that was free/open source. So I decided to make my own.

It is striving to store data in GEDCOM X JSON format, so as to be compatible with importing/exporting data from commercial applications of this type.

### Features

The view library is React. Libraries used in conjunction are:

- [x] Ant Design - to handle layout and styling
- [x] Electron - to allow installation natively
- [x] React Router - for routing
- [ ] Redux - to handle state
- [ ] Redux Observable - to handle side effects from actions, and observables are cooler than promises
- [x] Jest - for testing
- [ ] shortid - for short uids on people added
- [ ] Formik - for form controls

Uses yarn workspaces with lerna, but it has some hacks to get "Go to definition" and type checking (without doing a watch and build every time something changes) working in VS Code. Namely, it uses a root `tsconfig.json` file for the whole project with has some paths set up. This means any references inside the editor will resolve to the source code. But each package has its own `tsconfig.build.json` that actually does the building, and in these cases those references will use the normal workspace package. It's brittle and not ideal. [This](https://github.com/microsoft/TypeScript/issues/25376) issue is focused on Typescript supporting common workspace paradigms (especially good now that npm has declared they're going to follow yarn's workspace configs). Need to check this periodically to see when it will be supported.

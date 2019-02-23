This is a simple app to enter family history information that is very much a WORK IN PROGRESS. Its aim is to teach me to use React in a non-trivial application.

After taking over the family historian duties when my grandfather passed away in 2017, I was keen to move his data from the archaic 90s application he was using to something more modern and nice to use. I was disappointed in my efforts to find something that satisfied that, especially with something that was free/open source. So I decided to make my own.

It is striving to store data in GEDCOM X JSON format, so as to be compatible with importing/exporting data from commercial applications of this type.

### Features

The view library is React. Libraries used in conjunction are:

- [x] Ant Design - to handle layout and styling
- [x] Electron - to allow installation natively
- [ ] React Router - for routing
- [ ] Redux - to handle state
- [ ] Redux Thunk - to handle side effects from actions
- [ ] Jest - for testing
- [ ] shortid - for short uids on people added
- [ ] Formik - for form controls

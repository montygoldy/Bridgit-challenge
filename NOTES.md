# Notes

## Assumptions you made during the implementation process.
1. Added two fixed Categories ("vegetables", "fruits") but configurable through config file i.e ADD, DELETE, UPDATE methods.
2. Not going to be a huge list so skipped Virtualised table.

##  Known limitations of your implementation.
1. Pagination.
2. Multi selection for row actions like delete, update etc.
3. Incomplete unit testing.
4. Need to downgrade react version in order to setup enzyme test suite as the latest version is not fully compatible.
5. Basic form validation.
6. Accessibility didn't get the chance to look into it.

## What you liked or didn't like.

### Liked
1. Configurability.
2. Localization as it will detect browser language and switch to english or french for now otherwise always fallback to english.
3. Responsive UI.
4. Reusable components.

### didn't like
1. Missing hooks.

## The challenges you encountered.
1. Make sure correct data is maintained and cached while mixing filters and sorting.

## Anything else you'd like to add.
1. Fun Project.
2. Definately took more than 4 hours.
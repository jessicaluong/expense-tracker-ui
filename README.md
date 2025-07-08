# Expense Tracker UI

## Tech Stack

This app uses React, Vite, TypeScript, Tailwind CSS and shadcn/ui

## Low Fidelity Prototype

This is the initial design. It covers the core requirements and is drawn using https://excalidraw.com/.

<img width="1698" alt="expense-tracker-lfp" src="https://github.com/user-attachments/assets/428cd6c7-b5bb-41e8-becc-778efe799c31" />

## Assumptions

- Categories cannot be added/removed/edited by user
- Data with incorrect categories are ignored by application (not displayed)
- For "basic spending summaries", a total is displayed per category and a grand total is displayed for all expenses

## Extras (Not Added)

These should be added if time allows.

## UI Improvements

These UI additions would provide a better user experience.

- Alert dialog so user can confirm if the delete should happen
- Toast notification to confirm add/delete/edit has happened
- Loading and error states for fetching data

## Optimizations

- React Query instead of manual approach (useEffect + useState) for automatic caching, built-in loading/error state

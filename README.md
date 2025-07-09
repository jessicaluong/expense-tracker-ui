# Expense Tracker UI

<img width="767" alt="preview" src="https://github.com/user-attachments/assets/77e2ec3a-60df-4400-aa4a-52ae1becd8e8" />

## Table of Contents

- [Tech Stack](#stack)
- [Setup and Run Instructions](#setup)
- [Basic Usage Guide](#usage)
- [Initial Design](#design)
- [Assumptions](#assumptions)
- [Bonus Features Implemented](#bonus)
- [Future Improvements](#improvements)

<div id="stack"></div>

## Tech Stack

This app uses React, Vite, TypeScript, Tailwind CSS and shadcn/ui

<div id="setup"></div>

## Setup and Run Instructions

### 1. Clone the Repository

```
git clone https://github.com/jessicaluong/expense-tracker-ui.git
cd expense-tracker-ui
```

### 2. Run Application

```
npm run dev
```

### 3. Open Application

Visit: http://localhost:5173/

<div id="usage"></div>

## Basic Usage Guide

The app displays all expenses. Core features + search and filter functionality (bonus features) are as shown: 

<img width="898" alt="usage" src="https://github.com/user-attachments/assets/3becfeb7-06dd-404a-9eb4-3be972bd14e3" />

Basic spending summaries can be found by scrolling to the bottom of the app: 

<img width="700" alt="summary" src="https://github.com/user-attachments/assets/d73aca5b-466c-4ec3-8d31-4100111d9879" />

<div id="design"></div>

## Initial Design

This is the low fidelity prototype. It covers the core requirements and is drawn using https://excalidraw.com/.

<img width="1698" alt="expense-tracker-lfp" src="https://github.com/user-attachments/assets/428cd6c7-b5bb-41e8-becc-778efe799c31" />

<div id="assumptions"></div>

## Assumptions

### General

- Categories cannot be added/removed/edited by user
- Data coming into the application is correct (but did do a category check i.e., data with incorrect categories are not displayed in expenses or summary)
- For "basic spending summaries", a total is displayed per category and a grand total is displayed for all expenses
- Simple incremental ID (following mock data format), increment starting from max ID in expenses

### Expense Data

See [lib/schema.ts](https://github.com/jessicaluong/expense-tracker-ui/blob/main/src/lib/schema.ts) for Zod schema used for form validation.

- Description is required and max length of 200
- Amount is required, ranges from 1 to 999999.99, and can only have up to 2 decimal places
- No restriction on date (can be set to future)

<div id="bonus"></div>

## Bonus Features Implemented

- Search by description through search bar
- Filter by category

<div id="improvements"></div>

## Future Improvements

These should be added if time allows.

### UI/UX

These additions would provide a better user experience.

- Alert dialog so user can confirm if the delete should happen
- Toast notification to confirm add/delete/edit has happened
- Loading and error states for fetching data

My experience with UI/UX is limited, but this is how I would iterate on the initial design for better user experience.

- Summary in separate dialog instead of under expenses (otherwise need to scroll all the way down to see summary)
- Multiple columns for larger screens (to fit more on the screen at a time) and continue to have one column for smaller screens

### Optimizations

- React Query instead of manual approach (useEffect + useState) for automatic caching, built-in loading/error state

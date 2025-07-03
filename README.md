# Frontend Interview Challenge: Personal Task Manager

## Overview
This is a live coding interview challenge designed for React internship candidates. The challenge involves working with a **Personal Task Manager** application built with **TypeScript**, **React 19**, and **React Router v7**.

## Time Allocation
- **Interns**: Maximum 2 hours
- **Experienced Developers**: Under 1 hour

## Technologies Used
- TypeScript
- React 19
- React Router v7 (library mode)
- Vite
- CSS3

## Getting Started

1. Clone this repository
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`
4. Open your browser to `http://localhost:5173`

## Challenge Structure

This challenge consists of **4 parts** that test different aspects of React development:

### Part 1: Debug React Code (20-30 minutes)
**Location**: `src/routes/index/index.tsx` - `TaskList` component

**Problem**: The `TaskList` component appears to work but has subtle bugs that prevent it from functioning correctly. The code compiles and runs without console errors, but the behavior is wrong.

**Bugs to Find & Fix**:
1. **useEffect Dependency Issue**: The task statistics don't update when tasks change
2. **State Mutation Bug**: Toggling task completion doesn't trigger re-renders properly

**What You Need to Do**:
- Identify why the completed task count doesn't update
- Fix the task toggle functionality so it works correctly
- Ensure proper React state management principles

**Expected Outcome**: Task statistics update correctly and task toggling works as expected.

---

### Part 2: Fix CSS Layout Issues (15-20 minutes)
**Location**: `src/routes/index/index.css`

**Problem**: The CSS has multiple layout issues that make the interface look broken and unprofessional.

**Issues to Fix**:
1. **Navigation Layout**: Category navigation should be properly aligned using flexbox
2. **Controls Layout**: Search and filter controls should be side-by-side, not stacked
3. **Task Card Layout**: Task cards should use flexbox for proper content/action alignment
4. **Responsive Issues**: Mobile layout should work correctly

**What You Need to Do**:
- Fix the `.category-nav` to use proper flexbox layout
- Fix the `.task-controls` to display search and filter side-by-side
- Fix the `.task-card` to properly align content and actions
- Ensure responsive design works on mobile devices

**Expected Outcome**: Clean, professional layout that matches modern web design standards.

---

### Part 3: Implement Search and Filter Logic (30-40 minutes)
**Location**: `src/routes/index/index.tsx` - `TaskManager` component

**Problem**: The search and filter functionality is scaffolded but not implemented. The `getFilteredTasks()` function currently returns all tasks regardless of search term or filter selection.

**What You Need to Do**:
- Implement the `getFilteredTasks()` function to:
  - Filter tasks by search term (case-insensitive title matching)
  - Filter tasks by completion status (all/completed/pending)
  - Combine both filters correctly
  - Handle edge cases (empty search, no results, etc.)

**Requirements**:
- Search should be case-insensitive and match task titles
- Filter dropdown should work correctly:
  - "All Tasks": Show all tasks
  - "Completed": Show only completed tasks  
  - "Pending": Show only incomplete tasks
- Both search and filter should work together
- Handle empty states gracefully

**Expected Outcome**: Fully functional search and filtering system.

---

### Part 4: Add New Feature with Routing (40-50 minutes)
**Location**: `src/routes/category/index.tsx`

**Problem**: The category page exists but doesn't filter tasks by category. You need to implement the category filtering logic and add a new feature.

**What You Need to Do**:

#### 4a. Implement Category Filtering
- Complete the `getCategoryTasks()` function to:
  - Filter tasks by the `categoryId` from URL parameters
  - Apply search term filtering within the category
  - Apply completion status filtering
  - Handle invalid categories gracefully

#### 4b. Add New Task Creation Feature
Create a new component/form that allows users to:
- Add new tasks to the current category
- Include task title and category
- Validate input (non-empty title)
- Update the task list immediately
- Style the form consistently with the existing design

**Requirements**:
- Category filtering must work correctly with URL parameters
- Search and filter should work within categories
- New task form should be user-friendly and validated
- All new functionality should be properly typed with TypeScript
- Maintain consistent styling with the rest of the application

**Expected Outcome**: Fully functional category pages with task filtering and new task creation.

---

## Evaluation Criteria

### Part 1 - Debugging (25%)
- [ ] Identifies useEffect dependency issue
- [ ] Fixes state mutation problem
- [ ] Demonstrates understanding of React lifecycle
- [ ] Code follows React best practices

### Part 2 - CSS (20%)
- [ ] Fixes flexbox layout issues
- [ ] Implements responsive design correctly
- [ ] Maintains visual consistency
- [ ] Uses modern CSS practices

### Part 3 - Logic Implementation (25%)
- [ ] Implements correct filtering logic
- [ ] Handles edge cases appropriately
- [ ] Code is clean and readable
- [ ] Uses proper TypeScript types

### Part 4 - Feature Development (30%)
- [ ] Implements category filtering correctly
- [ ] Creates functional new task form
- [ ] Integrates new features seamlessly
- [ ] Demonstrates React Router understanding
- [ ] Maintains code quality and consistency

## Tips for Success

1. **Read the comments**: Each part has detailed comments explaining what needs to be done
2. **Test frequently**: Use the browser to verify your changes work correctly
3. **Think about edge cases**: What happens with empty inputs, invalid data, etc.?
4. **Use TypeScript**: Take advantage of type checking to catch errors early
5. **Ask questions**: If something is unclear, don't hesitate to ask for clarification

## Bonus Points

- Clean, readable code with good naming conventions
- Proper error handling and edge case management
- Accessibility considerations (ARIA labels, keyboard navigation)
- Performance optimizations (useMemo, useCallback where appropriate)
- Additional features that enhance user experience

## Project Structure

```
src/
├── types/
│   └── Task.ts              # TypeScript interfaces
├── routes/
│   ├── index/
│   │   ├── index.tsx        # Main task manager (Parts 1 & 3)
│   │   └── index.css        # Broken CSS to fix (Part 2)
│   └── category/
│       ├── index.tsx        # Category page (Part 4)
│       └── category.css     # Category page styles
└── main.tsx                 # App entry point with routing
```

## Common Pitfalls to Avoid

1. **Don't overthink Part 1**: The bugs are subtle but common React mistakes
2. **CSS specificity**: Make sure your CSS changes actually apply
3. **State management**: Don't mutate state directly, always use setState
4. **TypeScript**: Pay attention to type errors and warnings
5. **Testing**: Always test your changes in the browser

Good luck! 🚀

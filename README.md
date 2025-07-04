# Frontend Interview Challenge: Personal Task Manager

## Overview
This is a live coding interview challenge designed for React internship candidates. The challenge involves working with a **Personal Task Manager** application built with **TypeScript**, **React 19**, and **React Router v7**.

## Time Allocation
- Maximum 2 hours
- **Do as much as you can. There is no pass or fail!**
- **Remember: This is a learning experience, not a test. We want to see your thought process and problem-solving approach.**

## Resources & Guidelines
**You are encouraged to use any resources you need, including:**
- 🌐 **Google** and other search engines
- 📚 **Documentation** (React, TypeScript, MDN, etc.)
- 💻 **Stack Overflow** and other developer forums
- 🔍 **Browser Developer Tools** for debugging

**❌ However, please DO NOT use AI tools** (ChatGPT, Copilot, Claude, etc.) during this challenge.

We want to see your authentic problem-solving approach and how you work with real-world development resources.

## Technologies Used
- TypeScript
- React 19
- React Router v7 (library mode)
- Vite
- CSS3

## Getting Started

1. The url you see in the `Program Output` on the right, you can open in a new tab to make it easier to work with
2. You can press `F12` or right click and press `Inspect Element` to open the DevTools to make it easier to work with.

## Challenge Structure

This challenge consists of **4 parts** that test different aspects of React development:

### Part 1: Debug React Code (25-35 minutes)
**Locations**: `src/routes/index/index.tsx` and `src/app.tsx`

**Problem**: There are two subtle but critical bugs that prevent the task management from working correctly. The code compiles and runs without console errors, but the behavior is wrong.

#### Part 1a: Toggle Function Bug (15-20 minutes)
**Location**: `src/app.tsx` - Focus on the `toggleTask` function

**Bug to Find & Fix**:
- Clicking on tasks doesn't actually toggle their completion status
- This is a classic React state mutation bug that's very common for beginners

**What You Need to Do**:
- Examine the `toggleTask` function in `src/app.tsx`
- Identify why the current approach doesn't work in React
- Fix the function to properly update state

**💡 Hint**: Think about how React detects state changes and what happens when you modify objects directly.

#### Part 1b: TaskList Component Bug (10-15 minutes)
**Location**: `src/routes/index/index.tsx` - Focus on the `TaskList` component

**Bug to Find & Fix**:
- The completed task count display (`Completed: 2 / 6`) doesn't update when you toggle tasks
- The useEffect hook has a dependency issue that prevents it from re-running when tasks change

**What You Need to Do**:
- Examine the `useEffect` in the `TaskList` component
- Identify why the completed count doesn't update when tasks change
- Fix the issue so the count updates properly

**💡 Hint**: Consider what data the useEffect needs to recalculate the completed count.

**If you can't figure out the state mutation issue, you can skip it and move on to Part 2** - but this is a fundamental React concept worth understanding!

---

### Part 2: Fix CSS Layout Issues (15-20 minutes)

**Location**: `src/routes/index/index.css`

**Problem**: The CSS has multiple layout issues that make the interface look broken and unprofessional.

**Issues to Fix**:

1. **Navigation Layout**: Category navigation should be properly aligned
2. **Controls Layout**: Search and filter controls should be side-by-side, not stacked
3. **Task Card Layout**: Task cards should properly align content and actions
4. **Responsive Issues**: Mobile layout should work correctly

**What You Need to Do**:

- Fix the `.category-nav` to use proper layout alignment
- Fix the `.task-controls` to display search and filter side-by-side
- Fix the `.task-card` to properly align content and actions
- Ensure responsive design works on mobile devices

**💡 Tips**:

- Consider modern CSS layout techniques for alignment
- Check the browser's developer tools to see how elements are currently positioned
- Test on different screen sizes

**If you can't figure out all the CSS issues, focus on the most obvious ones first** - even partial improvements are
valuable!

**Expected Outcome**: Clean, professional layout that matches modern web design standards.

Desktop:
![Desktop Layout](https://imagedelivery.net/gEF-8D7iucWTdKd-kv_ghw/a8f08609-0c67-4479-29e3-3613e2887a00/highquality)
*(If images don't load,
click [here](https://imagedelivery.net/gEF-8D7iucWTdKd-kv_ghw/a8f08609-0c67-4479-29e3-3613e2887a00/highquality) to view
desktop layout directly)*

Mobile:
![Mobile Layout](https://imagedelivery.net/gEF-8D7iucWTdKd-kv_ghw/37775987-534f-4928-3a1f-17749e5a3100/highquality)
*(If images don't load,
click [here](https://imagedelivery.net/gEF-8D7iucWTdKd-kv_ghw/37775987-534f-4928-3a1f-17749e5a3100/highquality) to view
mobile layout directly)*
---

### Part 3: Implement Search and Filter Logic (30-40 minutes)
**Location**: `src/routes/index/index.tsx` - `TaskManager` component

**Problem**: The search and filter functionality is scaffolded but not implemented. The `filteredTasks` variable (using `useMemo`) currently returns all tasks regardless of search term or filter selection.

**What You Need to Do**:
- Look for the `filteredTasks` variable that uses `useMemo`
- Implement the filtering logic inside the `useMemo` to:
  - Filter tasks by search term (case-insensitive title matching)
  - Filter tasks by completion status (all/completed/pending)
  - Combine both filters correctly

**Requirements**:
- Search should be case-insensitive and match task titles
- Filter dropdown should work correctly:
  - "All Tasks": Show all tasks
  - "Completed": Show only completed tasks  
  - "Pending": Show only incomplete tasks
- Both search and filter should work together

**💡 Tips**:
- Start with just the search functionality, then add the filter
- Consider how to create a new filtered array from the original tasks
- Remember that "pending" means incomplete tasks

**If the logic gets complex, implement one filter at a time** - search first, then status filter, then combine them.

**Expected Outcome**: Fully functional search and filtering system.

---

### Part 4: Add New Feature (40-50 minutes)
**Location**: `src/routes/category/index.tsx`

**Problem**: The category page exists but doesn't filter tasks by category. You need to implement the category filtering logic and add a new feature.

**This is the most complex part - don't worry if you can't complete everything!**

**What You Need to Do**:

#### 4a. Implement Category Filtering (Focus on this first)
- Look for the `categoryTasks` variable that uses `useMemo` function in the CategoryPage component
- Implement the filtering logic to:
  - Filter tasks by the category from URL parameters
  - Apply search term filtering within the category (similar to Part 3)
  - Apply completion status filtering (similar to Part 3)

**💡 Tips for 4a**:
- Start with just category filtering, then add search and status filters
- Consider how to access URL parameters in React Router
- The category filtering is similar to the search filtering from Part 3

**If you can't figure out the filtering logic, you can skip it and move on to 4b** - they're independent features.

#### 4b. Add New Task Creation Feature (Advanced - Optional)
**This is the most challenging part - only attempt if you have time and feel confident!**

Create a new component/form that allows users to:
- Add new tasks to the current category
- Include task title and category
- Validate input (non-empty title)
- Update the task list immediately
- Style the form consistently with the existing design

**If you can't figure out the new task creation, that's totally fine** - focus on getting the filtering working first!

**Requirements**:
- Category filtering must work correctly with URL parameters
- Search and filter should work within categories
- New task form should be user-friendly and validated (if you attempt it)
- All new functionality should be properly typed with TypeScript
- Maintain consistent styling with the rest of the application

**Expected Outcome**: At minimum, functional category filtering. New task creation is a bonus!

---

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
├── app.tsx                  # Main app component with state management and routing
└── main.tsx                 # App entry point
```

**Key Architecture Notes**:
- **State Management**: Tasks and the toggle function are managed in `app.tsx` using simple `useState`
- **Props Passing**: State is passed down to components as props (no complex state management)
- **Routing**: React Router setup is in `app.tsx`
- **Simple & Clean**: The architecture is intentionally simple for learning purposes

## Common Pitfalls to Avoid

1. **Don't overthink Part 1**: The bugs are subtle but common React mistakes
2. **CSS specificity**: Make sure your CSS changes actually apply
3. **State management**: Don't mutate state directly, always use setState
4. **TypeScript**: Pay attention to type errors and warnings
5. **Testing**: Always test your changes in the browser

## Final Reminders

**🌟 Remember: This is about learning, not perfection!**

- **Do as much as you can** - partial solutions are valuable
- **Ask questions** if you're stuck - we're here to help
- **Focus on understanding** over completing everything
- **Your thought process matters** more than perfect code
- **If something is too complex, skip it** and move to the next part

**The goal is to see how you approach problems, not to test your memorization of React APIs.**

Good luck, and most importantly - **have fun coding!** 🚀

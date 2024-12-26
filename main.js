import { addTask, sortTasksByPriority, getTasksDueWithin, scheduleReminders } from './tasks.js';

// Add sample tasks
addTask({ title: "Submit Report", dueTime: 5, priority: "High" });
addTask({ title: "Prepare Meeting Slides", dueTime: 15, priority: "Medium" });

// Sort tasks
sortTasksByPriority();

// Display tasks due within the next 10 minutes
getTasksDueWithin(10);

// Schedule reminders
scheduleReminders();
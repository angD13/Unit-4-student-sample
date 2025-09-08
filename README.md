### **Project Idea** 

Elective Dashboard that can show all electives taught by a certain teacher, by credit type or by grade level.

*I am approaching this exploration from the mindset of a student who did really well with the planning parts of the U3 project but not so well with the coding parts and will most definitely jump between AI Creative Modes.*

---

Started by creating a quick, simple user persona: 

*Trinity \- a sophomore who wants electives from favorite teachers and needs 1 more math credit*

### ---

### **Problem statement**

Next, I turned the persona into a problem statement

*How might we design a dashboard that helps students like Trinity filter electives by teacher, credit type, and grade appropriateness?*

---

### **Schema** 

Next I wanted to design the schema. This answers:

* What fields/pieces of info will each record have  
* What type of data goes in each field  
* What ranges or allowed values make sense

Fields i think matter for Trinity’s persona and problem statement:

* Elective Name  
* Teacher  
* Grade level  
* Credit type  
* description

I created this schema: (as I was filling in this table, i decided to add periods offered)

| Field | Data Type | Example Value | Notes / Use in App |
| ----- | ----- | ----- | ----- |
| **name** | String | “Dog Walking” |  |
| **teacher** | String | “Ms. Walker” |  |
| **gradeLevel** | Array of strings | \[“9”, “10”\] |  |
| **creditType** | Array of strings | \[“Math”\], \[“Science”, “Elective”\] |  |
| **periodsOffered** | Array of numbers | \[2, 6\] |  |
| **description** | String | “Learn how to …” |  |

---

### **Wireframes**

Now that i have defined the schema and what data fields will exist, next i want to translate this into UI elements and sketch a simple layout. 

just drew it out 

![electives wireframe](https://github.com/user-attachments/assets/195b3d96-61bf-49d2-af75-3cda076458ef)


(Assemble) Again, windsurf didn’t duplicate my wireframe exactly but it was good enough for now and I actually liked the design it gave me with the filters being down the left hand side instead of at the top so I didn’t do any reprompting to adjust. 

---

### **Small seed dataset**

I decided to start small and expand later if time.

I prompted ai to provide a sample json dataset

---

### **prototype**

I think it is now time to build. I will use assemble mode to have Windsurf create the HTML/CSS from the wireframe. 

Windsurf did a pretty good job but left off the periods offered dropdown so i added that myself. If i was a student though, perhaps I would have continued to just use assemble mode and re-prompt windsurf to add that for me.

Since the student i’m pretending to be had trouble with the coding last time, i decided to try to do a small test loop to confirm my array of objects is set up correctly by printing each elective’s name to the browser console. 

(Remix) At this point, i decided to prompt windsurf to provide me with comments in my js file with the tasks i needed to do in order to make my app functional. From here, i will decide which parts of my code to complete using the different AI modes \- assemble, navigate and remix. 

Windsurf added 12 TODOs … going through them to determine which ones i will code myself and which i will get help from the AI

(Navigate) I asked the AI for help with the first function that would populate the teacher filter dropdown menu \- but i told it to not give me code cause i want to code it myself. I asked for just descriptions of what i need to do and examples.

From there, i was able to code all of the populateFilter functions myself.

(Assemble/Navigate) I got help with sorting each filter drop down options by chatting with the AI. 

(Navigate) I decided to complete my displayElectives function myself and get debugging help from the AI. 

I started the displayElectives function myself but then decided to switch to Remix mode and get AI to provide me with step by step comments for what i needed to do in this function. 

This Remix mode worked well for me for that last function, so i decided to use it again for the next function i needed. 

I continued to use remix mode for most of the remaining functions. I did end up going into Assemble mode to code almost all the progress bar though as I wasn’t confident with how to implement the visualization of the number of classes. 

**Final Notes and Insights:**

* Bridging from array methods → explicit loops  
  * In Unit 3, students relied heavily on built-in methods like .filter() and .map()  
  * In Unit 4, they need to write explicit for loops for things like counting electives for the progress bar or checking membership in arrays (e.g., gradeLevels.includes())  
  * Aha: Students may not immediately see why loops matter if built-ins exist, so lessons should surface when/why a for loop is more transparent or flexible  
* Chaining multiple filters  
  * The dashboard requires layered filtering (teacher and grade and credit type and period)  
  * Aha: Students need practice structuring conditionals inside filters/loops, combining AND logic, and debugging why results “disappear.” This layering wasn’t emphasized in Units 1–3  
* Connecting schema → UI  
  * Schema design choices (arrays for gradeLevels, multiple creditTypes) directly affect filter logic and dropdown population  
  * Aha: Students need explicit teaching that “data structure drives user interface”. Without that, dropdowns may feel “magic” rather than intentional  
* Transparency / explainability  
  * The applied filters chips and progress bar embody Unit 4’s fairness/agency goals  
  * Aha: Students will need scaffolding on how to render system state back to the user — not just filter silently but show “Filtered by → Teacher: X, Grade: 10.” That’s a new skill  
* Edge cases and defaults  
  * Handling “All Teachers” (value \= "") and empty states (“No electives match your filters”) are crucial  
  * Aha: Students may not have built the habit of designing for “nothing matches” in earlier units. Unit 4 lessons should emphasize defensive coding and user feedback  
* DOM state and events  
  * Students have to wire event listeners for multiple dropdowns and a clear button.  
  * Aha: Unlike Unit 3 (data-focused), Unit 4 requires deliberate state management: resetting filters, syncing UI state, re-rendering. Lessons should spotlight how event-driven code keeps UI and data consistent  
* Comment scaffolds / TODO roadmaps  
  * The student role I was playing leaned on Windsurf’s ability to insert TODO comments with explanations BUT I still went back to Navigate *and* Assemble mode  
  * Aha: The tool should recognize which mode students are wanting to use based on the prompts they give it  
* Test loops early  
  * You confirmed your dataset with a “tiny test loop” printing elective names  
  * Aha: Tooling could provide a “data previewer” or sandbox for students to sanity-check their arrays before wiring them into UI code  
* Visualization support  
  * The progress bar was intimidating to implement for the student role I was playing  
  * Aha: Students may need either prebuilt CSS snippets or a simplified progress bar component they can drop in, then focus on wiring loop-based percentages  
* Debugging helpers  
  * Aha: Tooling that logs the intermediate filtered arrays, or provides a “filter debugger,” could lower frustration and highlight the logic process

  

---


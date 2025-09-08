const electives = [
    {
      "name": "Digital Photography",
      "teacher": "Ms. Alvarez",
      "gradeLevels": ["10", "11", "12"],
      "creditTypes": ["Elective", "Art"],
      "periodsOffered": [2, 6],
      "description": "Camera basics, composition, and editing."
    },
    {
      "name": "Robotics I",
      "teacher": "Mr. Chen",
      "gradeLevels": ["9", "10"],
      "creditTypes": ["Elective", "Science"],
      "periodsOffered": [1, 4],
      "description": "Intro to sensors, motors, and microcontrollers."
    },
    {
      "name": "Robotics II",
      "teacher": "Mr. Chen",
      "gradeLevels": ["10", "11", "12"],
      "creditTypes": ["Elective", "Science"],
      "periodsOffered": [3],
      "description": "Advanced builds, competitions, and strategies."
    },
    {
      "name": "Math for Games",
      "teacher": "Ms. Patel",
      "gradeLevels": ["10", "11", "12"],
      "creditTypes": ["Elective", "Math"],
      "periodsOffered": [5, 7],
      "description": "Vectors, probability, and balancing mechanics."
    },
    {
      "name": "Creative Writing",
      "teacher": "Mr. Ramos",
      "gradeLevels": ["9", "10", "11", "12"],
      "creditTypes": ["Elective", "English"],
      "periodsOffered": [2, 8],
      "description": "Poetry, fiction, and peer workshops."
    },
    {
      "name": "Sports Medicine",
      "teacher": "Coach Lee",
      "gradeLevels": ["11", "12"],
      "creditTypes": ["Elective", "Science"],
      "periodsOffered": [6],
      "description": "Injury prevention, taping, and basic anatomy."
    },
    {
      "name": "AP Computer Science Principles",
      "teacher": "Ms. Davis",
      "gradeLevels": ["10", "11", "12"],
      "creditTypes": ["Elective", "Science", "CTE"],
      "periodsOffered": [1, 3],
      "description": "Computing ideas, data, and the internet."
    },
    {
      "name": "Yearbook",
      "teacher": "Ms. Alvarez",
      "gradeLevels": ["10", "11", "12"],
      "creditTypes": ["Elective", "Art"],
      "periodsOffered": [4],
      "description": "Layout, photography, and publication deadlines."
    },
    {
      "name": "Personal Finance",
      "teacher": "Mr. Ramos",
      "gradeLevels": ["11", "12"],
      "creditTypes": ["Elective", "Math"],
      "periodsOffered": [7],
      "description": "Budgeting, credit, savings, and taxes."
    },
    {
      "name": "Intro to Theater",
      "teacher": "Ms. Patel",
      "gradeLevels": ["9", "10", "11", "12"],
      "creditTypes": ["Elective", "Art"],
      "periodsOffered": [5],
      "description": "Acting basics, staging, and performance."
    }
  ];

  // ====== Test the data structure ======
  console.log("Total electives: ", electives.length);
  console.log("First elective: ", electives[0]);
  console.log("Last elective: ", electives[electives.length - 1]);

  
  // ====== Test Loop: Print elective names ======
  for (const elective of electives) {
    console.log(elective.name);
  }

  // === TODO 1: Initialize the dashboard when the page loads ===
  // Why this matters: This will set up the initial state of the dashboard
  // How to test: Check that all filter dropdowns are populated and the table shows all electives
  // Function to initialize the dashboard
function initializeDashboard() {
    // 1. Populate all filter dropdowns
    populateTeacherFilter();
    populateGradeFilter();
    populateCreditTypeFilter();
    populatePeriodsFilter();
    
    // 2. Display all electives in the table
    displayElectives(electives);

    
    
    // 3. Initialize the progress bar
    updateProgressBar(electives.length);

    //    - Each dropdown should call handleFilterChange when changed
    document.getElementById('filter-teacher').addEventListener('change', handleFilterChange);
    document.getElementById('filter-grade').addEventListener('change', handleFilterChange);
    document.getElementById('filter-credit').addEventListener('change', handleFilterChange);
    document.getElementById('filter-period').addEventListener('change', handleFilterChange);
    document.getElementById('clear-filters').addEventListener('click', clearAllFilters);
  }
  
  // Call initializeDashboard when the page loads
  document.addEventListener('DOMContentLoaded', initializeDashboard);

  // === TODO 2: Create a function to populate the teacher dropdown ===
  // Why this matters: Users need to filter electives by teacher
  // How to test: The teacher dropdown should contain all unique teacher names from the electives array
  function populateTeacherFilter() {
    // Will be implemented in TODO 2
    console.log('Populating teacher filter...');
    //grab teacher filter element from the DOM
    const teacherSelect = document.getElementById('filter-teacher');

    //clear existing options
    teacherSelect.innerHTML = '';

    //add default option
    const defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.textContent = 'All Teachers';
    teacherSelect.appendChild(defaultOption);
    
    //use Set to collect teacher names
    const teachers = new Set();
    electives.forEach(elective => {
      teachers.add(elective.teacher);
    });
    
    //sort teachers
    const sortedTeachers = Array.from(teachers).sort();

    //loop through names and add them as options
    sortedTeachers.forEach(teacher => {
      const option = document.createElement('option');
      option.value = teacher;
      option.textContent = teacher;
      teacherSelect.appendChild(option);
    });
    console.log('Teacher filter populated with', sortedTeachers.size, 'teachers');
  }

  // === TODO 3: Create a function to populate the grade level dropdown ===
  // Why this matters: Users need to filter electives by grade level
  // How to test: The grade dropdown should show all unique grade levels (9-12)
  function populateGradeFilter() {
    // Will be implemented in TODO 3
    console.log('Populating grade filter...');
    //grab grade filter element from the DOM
    const gradeSelect = document.getElementById('filter-grade');

    //clear existing options
    gradeSelect.innerHTML = '';

    //add default option
    const defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.textContent = 'All Grades';
    gradeSelect.appendChild(defaultOption);
    
    //use Set to collect grade levels
    const grades = new Set();
    electives.forEach(elective => {
      elective.gradeLevels.forEach(grade => {
        grades.add(grade);
      });
    });

    //sort grades
    const sortedGrades = Array.from(grades).sort((a, b) => a - b);

    //loop through names and add them as options
    sortedGrades.forEach(grade => {
      const option = document.createElement('option');
      option.value = grade;
      option.textContent = grade;
      gradeSelect.appendChild(option);
    });
    console.log('Grade filter populated with', sortedGrades.size, 'grades');
  }

  // === TODO 4: Create a function to populate the credit type dropdown ===
  // Why this matters: Users need to filter by different credit types
  // How to test: The credit type dropdown should show all unique credit types
  function populateCreditTypeFilter() {
    // Will be implemented in TODO 4
    console.log('Populating credit type filter...');
    //grab credit type filter element from the DOM
    const creditTypeSelect = document.getElementById('filter-credit');

    //clear existing options
    creditTypeSelect.innerHTML = '';

    //add default option
    const defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.textContent = 'All Credit Types';
    creditTypeSelect.appendChild(defaultOption);
    
    //use Set to collect credit types
    const creditTypes = new Set();
    electives.forEach(elective => {
      elective.creditTypes.forEach(creditType => {
        creditTypes.add(creditType);
      });
    });

    //sort credit types
    const sortedCreditTypes = Array.from(creditTypes).sort();

    //loop through names and add them as options
    sortedCreditTypes.forEach(creditType => {
      const option = document.createElement('option');
      option.value = creditType;
      option.textContent = creditType;
      creditTypeSelect.appendChild(option);
    });
    console.log('Credit type filter populated with', sortedCreditTypes.size, 'credit types');
  }

  // === TODO 5: Create a function to populate the periods dropdown ===
  // Why this matters: Users need to filter by class periods
  // How to test: The periods dropdown should show numbers 1-8 (or the actual periods in your data)
  function populatePeriodsFilter() {
    // Will be implemented in TODO 5
    console.log('Populating periods filter...');//grab teacher filter element from the DOM
    const periodsSelect = document.getElementById('filter-period');

    //clear existing options
    periodsSelect.innerHTML = '';

    //add default option
    const defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.textContent = 'All Periods';
    periodsSelect.appendChild(defaultOption);
    
    //use Set to collect periods
    const periods = new Set();
    electives.forEach(elective => {
      elective.periodsOffered.forEach(period => {
        periods.add(period);
      });
    });

    //sort periods
    const sortedPeriods = Array.from(periods).sort((a, b) => a - b);

    //loop through names and add them as options
    sortedPeriods.forEach(period => {
      const option = document.createElement('option');
      option.value = period;
      option.textContent = period;
      periodsSelect.appendChild(option);
    });
    console.log('Periods filter populated with', sortedPeriods.size, 'periods');
  }

  // === TODO 6: Create a function to display electives in the table ===
  // Why this matters: This shows the filtered results to the user
  // How to test: The table should update whenever filters change
  function displayElectives(electivesToShow) {
    const tbody = document.getElementById('elective-rows');
    tbody.innerHTML = '';
        // 1. Get a reference to the table body where we'll add the rows
        //    (You've already done this with the 'tbody' variable)
        
        // 2. Clear any existing rows from the table
        //    (You've already done this with tbody.innerHTML = '')
        
        // 3. Check if there are no electives to show
        //    - If not, add a "No electives found" message
        //    - Make sure to create a proper table row and cell for this message
    if (electivesToShow.length === 0) {
        const row = document.createElement('tr');
        const cell = document.createElement('td');
        cell.colSpan = 5;
        cell.textContent = 'No electives match selected filters';
        cell.style.textAlign = 'center';
        row.appendChild(cell);
        tbody.appendChild(row);
        return;
        }
        
        // 4. If there are electives to show:
        //    a. Loop through each elective in electivesToShow
        //    b. For each elective:
        //       i. Create a new table row element
        //       ii. Create table cells (td) for each piece of data:
        //           - Elective name
        //           - Teacher
        //           - Grades (join the array with commas)
        //           - Credit Types (join the array with commas)
        //           - Periods (join the array with commas)
        //       iii. Append all cells to the row
        //       iv. Append the row to the table body
    electivesToShow.forEach(elective => {
        const row = document.createElement('tr');
        const nameCell = document.createElement('td');
        nameCell.textContent = elective.name;
        row.appendChild(nameCell);

        const teacherCell = document.createElement('td');
        teacherCell.textContent = elective.teacher;
        row.appendChild(teacherCell);

        const gradeCell = document.createElement('td');
        gradeCell.textContent = elective.gradeLevels.join(', ');
        row.appendChild(gradeCell);

        const creditsCell = document.createElement('td');
        creditsCell.textContent = elective.creditTypes.join(', ');
        row.appendChild(creditsCell);

        const periodsCell = document.createElement('td');
        periodsCell.textContent = elective.periodsOffered.join(', ');
        row.appendChild(periodsCell);

        tbody.appendChild(row);
    }) 
        // 5. Add any necessary classes to the rows for styling
        //    (e.g., alternating row colors)
        
        // 6. Update the progress bar with the count of visible electives
        //    (You already have the updateProgressBar function for this)
    updateProgressBar(electivesToShow.length);
    
    
    // Will be implemented in TODO 6
    console.log('Displaying electives:', electivesToShow.length);
  }

  // === TODO 7: Create a function to handle filter changes ===
  // Why this matters: This makes the filters interactive
  // How to test: Changing any filter should update the table and applied filters section
  function handleFilterChange() {
    // 1. Get the current values from all filter dropdowns
    //    - teacher filter
    //    - grade filter
    //    - credit type filter
    //    - period filter
    const teacherFilter = document.getElementById('filter-teacher').value;
    const gradeFilter = document.getElementById('filter-grade').value;
    const creditTypeFilter = document.getElementById('filter-credit').value;
    const periodFilter = document.getElementById('filter-period').value;

    console.log('Current filter selections: ', {teacherFilter, gradeFilter, creditTypeFilter, periodFilter});

    // 2. Filter the electives array based on the selected values
    //    - Start with all electives
    //    - Filter by teacher if one is selected
    //    - Filter by grade if one is selected
    //    - Filter by credit type if one is selected
    //    - Filter by period if one is selected
    //    (Use array.filter() for each condition)
    let filteredElectives = electives;

    if (teacherFilter !== '') {
        filteredElectives = filteredElectives.filter(elective => elective.teacher === teacherFilter);
    }

    if (gradeFilter !== '') {
        filteredElectives = filteredElectives.filter(elective => elective.gradeLevels.includes(gradeFilter));
    }

    if (creditTypeFilter !== '') {
        filteredElectives = filteredElectives.filter(elective => elective.creditTypes.includes(creditTypeFilter));
    }

    if (periodFilter !== '') {
        filteredElectives = filteredElectives.filter(elective => elective.periodsOffered.includes(Number(periodFilter)));
    }

    // 3. Update the displayed electives by calling displayElectives()
    //    - Pass the filtered array to displayElectives()
    displayElectives(filteredElectives);

    // 4. Update the applied filters display
    //    - Show which filters are currently active
    //    - This will be a separate function (TODO 8)
    updateAppliedFiltersDisplay(teacherFilter, gradeFilter, creditTypeFilter, periodFilter);

    // 5. Update the progress bar
    //    - Show what percentage of electives match the current filters
    //    - Use the updateProgressBar() function
    updateProgressBar(filteredElectives.length);
}

  // === TODO 8: Create a function to update the applied filters display ===
  // Why this matters: Users should see which filters are active
  // How to test: The applied filters section should show active filters as chips
  function updateAppliedFiltersDisplay(teacher, grade, creditType, period) {
    // 1. Get a reference to the container where filters will be displayed
    //    - Use getElementById to find the 'filters-applied' container
    //    - Clear any existing content in the container
    const filtersContainer = document.getElementById('filters-applied');
    filtersContainer.innerHTML = '';

    // 2. Create a heading for the applied filters section
    //    - Create an h3 element
    //    - Set its text content to "Applied Filters:"
    //    - Append it to the container
    const heading = document.createElement('h3');
    heading.textContent = 'Applied Filters:';
    filtersContainer.appendChild(heading);

    // 3. Create a function to generate a filter chip
    //    - Takes a label (e.g., "Teacher: Ms. Smith")
    //    - Creates a span element with appropriate classes
    //    - Sets the text content
    //    - Returns the created element
    function createFilterChip(label) {
        const chip = document.createElement('span');
        chip.textContent = label;
        chip.classList.add('filter-tag');
        return chip;
    }
    
    // 4. For each active filter (teacher, grade, creditType, period):
    //    a. Check if the filter has a value
    //    b. If it does, create a chip using the function from step 3
    //    c. Append the chip to the container
    if (teacher) {
        filtersContainer.appendChild(createFilterChip(`Teacher: ${teacher}`));
    }
    if (grade) {
        filtersContainer.appendChild(createFilterChip(`Grade: ${grade}`));
    }
    if (creditType) {
        filtersContainer.appendChild(createFilterChip(`Credit Type: ${creditType}`));
    }
    if (period) {
        filtersContainer.appendChild(createFilterChip(`Period: ${period}`));
    }


    // 5. If no filters are active, display "No filters applied"
    //    - Check if the container is empty
    //    - If empty, create a message element and append it
    if ( !teacher && !grade && !creditType && !period) {
        const message = document.createElement('p');
        message.textContent = 'No filters applied';
        filtersContainer.appendChild(message);
    }

    // 6. Add styling classes to the container and chips
    //    - Add a class for the container to enable flex layout
    //    - Style the chips with background color, padding, and rounded corners
    //    - Add some margin between chips
    filtersContainer.classList.add('filter-chips');
}

  // === TODO 9: Implement the clear filters functionality ===
  // Why this matters: Users need to reset all filters easily
  // How to test: Clicking 'Clear Filters' should reset all dropdowns and show all electives
  function clearAllFilters() {
    // 1. Reset all filter dropdowns to their default/empty state
    //    - Set the value of each select element to an empty string
    //    - This includes: teacher, grade, credit type, and period filters
    document.getElementById('filter-teacher').value = '';
    document.getElementById('filter-grade').value = '';
    document.getElementById('filter-credit').value = '';
    document.getElementById('filter-period').value = '';

    // 2. Clear any applied filters display
    //    - Call updateAppliedFiltersDisplay with all empty values
    //    - This will show "No filters applied"
    updateAppliedFiltersDisplay('', '', '', '');

    // 3. Show all electives in the table
    //    - Call displayElectives with the full electives array
    displayElectives(electives);

    // 4. Reset the progress bar
    //    - Call updateProgressBar with the total number of electives
    updateProgressBar(electives.length);

    // 5. Optional: Add visual feedback
    //    - You could briefly highlight the clear button or show a toast message
}

// 6. Add event listener to the clear filters button
//    - Get the clear filters button by ID
//    - Add a click event listener that calls clearAllFilters


  // === TODO 10: Update the progress bar based on filter results ===
  // Why this matters: Visual feedback on how many electives match the filters
  // How to test: As filters are applied, the progress bar should update accordingly
  function updateProgressBar(visibleCount) {
        // 1. Get the progress bar fill element
        //    - Use document.getElementById to find the progress-fill element
        const progressBarFill = document.getElementById('progress-fill');
        
        // 2. Calculate the percentage of visible electives
        //    - Divide visibleCount by total number of electives
        //    - Multiply by 100 to get a percentage
        //    - Use Math.round() to avoid decimal places
        //    - Ensure the percentage is between 0 and 100
        const percentage = Math.round((visibleCount / electives.length) * 100);
        
        // 3. Update the width of the progress bar fill
        //    - Set the width style property of the fill element
        progressBarFill.style.width = `${percentage}%`;
        
        // 4. Update the progress label text
        //    - Get the progress label element
        //    - Update its text content to show the count and percentage
        //    - Example: "5 of 10 electives (50%)"
        const progressLabel = document.getElementById('progress-label');
        progressLabel.textContent = `${visibleCount} of ${electives.length} electives (${percentage}%)`;
                
        // 5. Add visual feedback for extreme values (optional)
        //    - Change color based on percentage (e.g., red for low, green for high)
        //    - This can be done by adding/removing CSS classes
        if (percentage < 20) {
            progressBarFill.classList.add('low');
            progressBarFill.classList.remove('high');
        } else if (percentage > 80) {
            progressBarFill.classList.add('high');
            progressBarFill.classList.remove('low');
        } else {
            progressBarFill.classList.remove('low', 'high');
        }
    
    
    // Will be implemented in TODO 10
    console.log('Updating progress bar. Visible electives:', visibleCount);
  }

  // === TODO 11: Add event listeners for filter changes ===
  // Why this matters: Makes the dashboard interactive
  // How to test: Changing any filter should trigger the appropriate functions

  // === TODO 12: Initialize the dashboard on page load ===
  // Why this matters: The dashboard should be ready to use as soon as the page loads
  // How to test: The page should be fully functional immediately after loading

  

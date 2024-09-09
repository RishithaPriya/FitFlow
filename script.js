document.getElementById('workoutForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const exercise = document.getElementById('exercise').value;
    const duration = document.getElementById('duration').value;
    const calories = document.getElementById('calories').value;

    // Check if all fields are filled
    if (exercise === '' || duration === '' || calories === '') {
        alert('Please fill in all fields');
        return;
    }

    // Create a new workout item
    const workoutItem = document.createElement('li');
    workoutItem.textContent = `${exercise} - ${duration} minutes - ${calories} calories burned`;

    // Add the workout item to the workout list
    document.getElementById('workoutList').appendChild(workoutItem);

    // Clear form fields
    document.getElementById('exercise').value = '';
    document.getElementById('duration').value = '';
    document.getElementById('calories').value = '';
});

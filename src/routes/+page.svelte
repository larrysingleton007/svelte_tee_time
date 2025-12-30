<script lang="ts">
	import CourseList from '$lib/CourseList.svelte';
	import { golfCourses } from '$lib/golfCourses';

	let selectedDate: string = '';
	let selectedTime: string = '';
</script>

<div class="container">
	<header>
		<h1>⛳ Tee Time Registration System</h1>
		<h2> Like the Highlander, there can be only one perfect tee time</h2>
		<p>Find and book your perfect golf course in Omaha, Nebraska</p>
	</header>

	<div class="search-section">
		<div class="search-form">
			<div class="form-group">
				<label for="date">Select Date:</label>
				<input 
					type="date" 
					id="date" 
					bind:value={selectedDate}
				/>
			</div>

			<div class="form-group">
				<label for="time">Select Time (Optional):</label>
				<select id="time" bind:value={selectedTime}>
					<option value="">Any Time</option>
					<option value="06:30">6:30 AM</option>
					<option value="07:00">7:00 AM</option>
					<option value="07:30">7:30 AM</option>
					<option value="08:00">8:00 AM</option>
					<option value="08:30">8:30 AM</option>
					<option value="09:00">9:00 AM</option>
					<option value="09:30">9:30 AM</option>
					<option value="13:00">1:00 PM</option>
					<option value="13:30">1:30 PM</option>
					<option value="14:00">2:00 PM</option>
					<option value="14:30">2:30 PM</option>
					<option value="15:00">3:00 PM</option>
					<option value="15:30">3:30 PM</option>
					<option value="16:00">4:00 PM</option>
				</select>
			</div>
		</div>

		{#if selectedDate}
			<div class="results-info">
				<p>
					Showing courses with available tee times for
					<strong>{new Date(selectedDate + 'T00:00:00').toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</strong>
					{#if selectedTime}
						at <strong>{selectedTime}</strong>
					{/if}
				</p>
			</div>
		{/if}
	</div>

	<CourseList courses={golfCourses} {selectedDate} {selectedTime} />
</div>

<style>
	:global(body) {
		margin: 0;
		padding: 0;
		background: #f5f5f5;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
			Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
		color: #333;
	}

	.container {
		max-width: 1400px;
		margin: 0 auto;
		padding: 0;
	}

	header {
		background: linear-gradient(135deg, #27ae60 0%, #229954 100%);
		color: white;
		padding: 3rem 2rem;
		text-align: center;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
	}

	header h1 {
		margin: 0 0 0.5rem 0;
		font-size: 2.5rem;
		font-weight: 700;
	}

	header p {
		margin: 0;
		font-size: 1.1rem;
		opacity: 0.95;
	}

	.search-section {
		background: white;
		padding: 2rem;
		margin: 2rem 1rem;
		border-radius: 8px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
		max-width: 600px;
		margin-left: auto;
		margin-right: auto;
	}

	.search-form {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1.5rem;
		margin-bottom: 1.5rem;
	}

	.form-group {
		display: flex;
		flex-direction: column;
	}

	.form-group label {
		margin-bottom: 0.5rem;
		font-weight: 600;
		color: #2c3e50;
		font-size: 0.95rem;
	}

	.form-group input,
	.form-group select {
		padding: 0.75rem;
		border: 2px solid #ddd;
		border-radius: 4px;
		font-size: 1rem;
		font-family: inherit;
		transition: border-color 0.3s ease;
	}

	.form-group input:focus,
	.form-group select:focus {
		outline: none;
		border-color: #27ae60;
		box-shadow: 0 0 0 3px rgba(39, 174, 96, 0.1);
	}

	.results-info {
		background: #e8f5e9;
		padding: 1rem;
		border-radius: 4px;
		border-left: 4px solid #27ae60;
		color: #2c5f2d;
		margin-top: 1rem;
	}

	.results-info p {
		margin: 0;
		font-size: 0.95rem;
	}

	@media (max-width: 600px) {
		.search-form {
			grid-template-columns: 1fr;
		}

		header h1 {
			font-size: 1.75rem;
		}

		header p {
			font-size: 0.95rem;
		}
	}
</style>

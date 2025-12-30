<script lang="ts">
	import { browser } from '$app/environment';
	import type { GolfCourse } from '$lib/golfCourses';

	export let courses: GolfCourse[] = [];
	export let selectedDate: string = '';
	export let selectedTime: string = '';

	function hasAvailableSlot(course: GolfCourse): boolean {
		if (!selectedDate) return false;
		const slotForDate = course.availableSlots.find((slot) => slot.date === selectedDate);
		if (!slotForDate) return false;
		if (!selectedTime) return true;
		const hasTime = slotForDate.times.includes(selectedTime);
		if (course.id === 1) {
			console.log(`Course ${course.name}: selectedTime="${selectedTime}", availableTimes=${slotForDate.times}, match=${hasTime}`);
		}
		return hasTime;
	}

	function getAvailableTimes(course: GolfCourse): string[] {
		if (!selectedDate) return [];
		const slotForDate = course.availableSlots.find((slot) => slot.date === selectedDate);
		return slotForDate?.times ?? [];
	}

	function formatTime(time: string): string {
		const [hours, minutes] = time.split(':');
		const hour = parseInt(hours);
		const ampm = hour >= 12 ? 'PM' : 'AM';
		const displayHour = hour % 12 || 12;
		return `${displayHour}:${minutes} ${ampm}`;
	}

	let filteredCourses: GolfCourse[] = [];

	$: if (browser) {
		console.log('Reactive block running:', { selectedDate, selectedTime, courses: courses.length });
		filteredCourses = courses.filter(hasAvailableSlot);
		console.log('After filter:', filteredCourses.length);
	}

</script>

<div class="courses-container">
	{#if selectedDate === ''}
		<p class="no-courses">Select a date to see available tee times</p>
	{:else if filteredCourses.length === 0}
		<p class="no-courses">No courses available for the selected date and time</p>
	{:else}
		<div class="table-wrapper">
			<table>
				<thead>
					<tr>
						<th>Course Name</th>
						<th>Rating</th>
						<th>Par</th>
						<th>Holes</th>
						<th>Phone</th>
						<th>Available Times</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{#each filteredCourses as course (course.id)}
						<tr>
							<td class="course-name">{course.name}</td>
							<td class="rating">★ {course.rating}</td>
							<td>{course.par}</td>
							<td>{course.holes}</td>
							<td class="phone">{course.phone}</td>
							<td class="times">
								{getAvailableTimes(course)
									.map(formatTime)
									.join(', ')}
							</td>
							<td class="action">
								<button class="book-btn">Book</button>
							</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	{/if}
</div>

<style>
	.courses-container {
		padding: 2rem 1rem;
	}

	.no-courses {
		text-align: center;
		color: #666;
		font-size: 1.1rem;
		padding: 2rem;
	}

	.table-wrapper {
		max-width: 1400px;
		margin: 0 auto;
		background: white;
		border-radius: 8px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
		overflow-x: auto;
	}

	table {
		width: 100%;
		border-collapse: collapse;
		font-size: 0.95rem;
	}

	thead {
		background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
		border-bottom: 2px solid #dee2e6;
	}

	th {
		padding: 1rem;
		text-align: left;
		font-weight: 600;
		color: #2c3e50;
		white-space: nowrap;
	}

	td {
		padding: 1rem;
		border-bottom: 1px solid #dee2e6;
	}

	tbody tr {
		transition: background-color 0.2s ease;
	}

	tbody tr:hover {
		background: #f8f9fa;
	}

	tbody tr:last-child td {
		border-bottom: none;
	}

	.course-name {
		font-weight: 600;
		color: #2c3e50;
	}

	.rating {
		color: #ff9800;
		font-weight: 600;
	}

	.phone {
		font-size: 0.9rem;
		color: #555;
	}

	.times {
		font-size: 0.9rem;
		color: #27ae60;
		font-weight: 500;
	}

	.action {
		text-align: center;
	}

	.book-btn {
		padding: 0.5rem 1rem;
		background: #3498db;
		color: white;
		border: none;
		border-radius: 4px;
		font-weight: 600;
		cursor: pointer;
		transition: background 0.3s ease;
		font-size: 0.9rem;
	}

	.book-btn:hover {
		background: #2980b9;
	}

	@media (max-width: 768px) {
		.table-wrapper {
			margin-left: -1rem;
			margin-right: -1rem;
			border-radius: 0;
		}

		th,
		td {
			padding: 0.75rem 0.5rem;
			font-size: 0.85rem;
		}

		th {
			white-space: normal;
		}
	}
</style>

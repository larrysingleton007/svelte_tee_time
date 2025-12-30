<script lang="ts">
	import { browser } from '$app/environment';
	import type { GolfCourse } from '$lib/golfCourses';
	import holeInOneGif from '$lib/assets/Golfing Hole In One GIF.gif';

	export let courses: GolfCourse[] = [];
	export let selectedDate: string = '';
	export let selectedTime: string = '';

	let showModal = false;
	let bookedCourse: GolfCourse | null = null;
	let bookedTimeSlot: string = '';

	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape') {
			closeModal();
		}
	}

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

	function formatDate(dateStr: string): string {
		const date = new Date(dateStr + 'T00:00:00');
		return date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
	}

	function handleBookClick(course: GolfCourse, timeSlot?: string) {
		bookedCourse = course;
		bookedTimeSlot = timeSlot || selectedTime || getAvailableTimes(course)[0] || '';
		showModal = true;
	}

	function closeModal() {
		showModal = false;
		bookedCourse = null;
		bookedTimeSlot = '';
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
								<button class="book-btn" on:click={() => handleBookClick(course)}>Book</button>
							</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	{/if}
</div>

<!-- Booking Confirmation Modal -->
{#if showModal && bookedCourse}
	<div class="modal-backdrop" on:click={closeModal} role="presentation">
		<div class="modal" on:click|stopPropagation on:keydown={handleKeydown} role="dialog" aria-labelledby="modal-title" aria-modal="true" tabindex="0">
			<div class="modal-content">
				<div class="modal-header">
					<h2 id="modal-title">✅ Booking Confirmed!</h2>
					<button class="close-btn" on:click={closeModal} aria-label="Close booking confirmation">×</button>
				</div>
				<div class="modal-body">
					<div class="animation-container">
						<img src={holeInOneGif} alt="Hole in one celebration" class="celebration-gif" />
					</div>
					<p class="confirmation-message">Your tee time has been successfully booked!</p>
					<div class="booking-details">
						<div class="detail-row">
							<span class="detail-label">Course:</span>
							<span class="detail-value">{bookedCourse.name}</span>
						</div>
						<div class="detail-row">
							<span class="detail-label">Date:</span>
							<span class="detail-value">{formatDate(selectedDate)}</span>
						</div>
						<div class="detail-row">
							<span class="detail-label">Time:</span>
							<span class="detail-value">{formatTime(bookedTimeSlot)}</span>
						</div>
						<div class="detail-row">
							<span class="detail-label">Phone:</span>
							<span class="detail-value">{bookedCourse.phone}</span>
						</div>
						<div class="detail-row">
							<span class="detail-label">Par / Holes:</span>
							<span class="detail-value">{bookedCourse.par} / {bookedCourse.holes}</span>
						</div>
					</div>
					<p class="confirmation-note">A confirmation email has been sent to your registered email address.</p>
				</div>
				<div class="modal-footer">
					<button class="close-modal-btn" on:click={closeModal}>Close</button>
				</div>
			</div>
		</div>
	</div>
{/if}

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

	/* Modal Styles */
	.modal-backdrop {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 0.5);
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 1000;
		animation: fadeIn 0.3s ease;
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	.modal {
		background: white;
		border-radius: 8px;
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
		max-width: 500px;
		width: 90%;
		animation: slideUp 0.3s ease;
	}

	@keyframes slideUp {
		from {
			transform: translateY(20px);
			opacity: 0;
		}
		to {
			transform: translateY(0);
			opacity: 1;
		}
	}

	.modal-content {
		display: flex;
		flex-direction: column;
		height: 100%;
	}

	.modal-header {
		padding: 1.5rem;
		border-bottom: 2px solid #e9ecef;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.modal-header h2 {
		margin: 0;
		color: #27ae60;
		font-size: 1.5rem;
	}

	.close-btn {
		background: none;
		border: none;
		font-size: 2rem;
		cursor: pointer;
		color: #999;
		padding: 0;
		width: 2rem;
		height: 2rem;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: color 0.2s;
	}

	.close-btn:hover {
		color: #333;
	}

	.modal-body {
		padding: 1.5rem;
		flex: 1;
	}

	.confirmation-message {
		text-align: center;
		font-size: 1.1rem;
		color: #2c3e50;
		margin: 0 0 1.5rem 0;
		font-weight: 600;
	}

	.booking-details {
		background: #f8f9fa;
		border-radius: 6px;
		padding: 1.5rem;
		margin-bottom: 1.5rem;
	}

	.detail-row {
		display: flex;
		justify-content: space-between;
		padding: 0.75rem 0;
		border-bottom: 1px solid #e9ecef;
	}

	.detail-row:last-child {
		border-bottom: none;
	}

	.detail-label {
		font-weight: 600;
		color: #2c3e50;
	}

	.detail-value {
		color: #555;
		text-align: right;
	}

	.confirmation-note {
		text-align: center;
		font-size: 0.9rem;
		color: #666;
		margin: 1rem 0 0 0;
		font-style: italic;
	}

	.modal-footer {
		padding: 1rem 1.5rem;
		border-top: 1px solid #e9ecef;
		display: flex;
		justify-content: center;
	}

	.close-modal-btn {
		padding: 0.75rem 2rem;
		background: #27ae60;
		color: white;
		border: none;
		border-radius: 4px;
		font-weight: 600;
		cursor: pointer;
		font-size: 1rem;
		transition: background 0.3s ease;
	}

	.close-modal-btn:hover {
		background: #229954;
	}

	/* Animation Container */
	.animation-container {
		height: 200px;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 1.5rem;
	}

	.celebration-gif {
		max-width: 100%;
		max-height: 100%;
		border-radius: 8px;
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

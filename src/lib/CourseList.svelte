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

	let sortBy: 'name' | 'rating' | null = 'rating';
	let sortDirection: 'asc' | 'desc' = 'desc';

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

	function handleSort(column: 'name' | 'rating') {
		if (sortBy === column) {
			sortDirection = sortDirection === 'asc' ? 'desc' : 'asc';
		} else {
			sortBy = column;
			sortDirection = 'asc';
		}
	}

	function getSortedCourses(courses: GolfCourse[]): GolfCourse[] {
		if (!sortBy) return courses;

		const sorted = [...courses];
		sorted.sort((a, b) => {
			let aValue: string | number = '';
			let bValue: string | number = '';

			if (sortBy === 'name') {
				aValue = a.name;
				bValue = b.name;
			} else if (sortBy === 'rating') {
				aValue = a.rating;
				bValue = b.rating;
			}

			if (typeof aValue === 'string') {
				return sortDirection === 'asc' 
					? aValue.localeCompare(bValue as string)
					: (bValue as string).localeCompare(aValue);
			} else {
				return sortDirection === 'asc' 
					? (aValue as number) - (bValue as number)
					: (bValue as number) - (aValue as number);
			}
		});

		return sorted;
	}

	let filteredCourses: GolfCourse[] = [];

	$: if (browser) {
		console.log('Reactive block running:', { selectedDate, selectedTime, courses: courses.length, sortBy, sortDirection });
		let filtered = courses.filter(hasAvailableSlot);
		filteredCourses = getSortedCourses(filtered);
		console.log('After filter:', filteredCourses.length);
	}

</script>

<div class="py-16 px-4">
	{#if selectedDate === ''}
		<div class="max-w-2xl mx-auto">
			<div class="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg border-2 border-dashed border-blue-200 p-12 text-center">
				<div class="text-5xl mb-4">📅</div>
				<h3 class="text-2xl font-bold text-gray-800 mb-2">Ready to Book Your Tee Time?</h3>
				<p class="text-lg text-gray-600">Select a date above to see available</p>
				<p class="text-lg text-gray-600"> golf courses and tee times in Omaha</p>
				<div class="mt-6 text-sm text-gray-500">
					<p>🏌️ Choose your preferred date and time</p>
					<p>⭐ Courses are sorted by rating (highest first)</p>
					<p>📞 Contact information included</p>
				</div>
			</div>
		</div>
	{:else if filteredCourses.length === 0}
		<div class="max-w-2xl mx-auto">
			<div class="bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg border-2 border-dashed border-amber-200 p-12 text-center">
				<div class="text-5xl mb-4">⛳</div>
				<p class="text-center text-lg font-semibold text-gray-700">No courses available for the selected date and time</p>
				<p class="text-center text-sm text-gray-600 mt-2">Try selecting a different date or time slot</p>
			</div>
		</div>
	{:else}
		<div class="max-w-7xl mx-auto bg-white rounded-lg shadow overflow-x-auto">
			<table class="w-full text-sm border-collapse">
				<thead>
					<tr class="bg-gradient-to-b from-gray-50 to-gray-100 border-b-2 border-gray-300">
						<th class="px-4 py-4 text-left font-semibold text-gray-800 whitespace-nowrap cursor-pointer select-none hover:bg-gray-300 transition-colors" on:click={() => handleSort('name')} on:keydown={(e) => e.key === 'Enter' && handleSort('name')} role="button" tabindex="0">
							<div class="flex items-center gap-2">
								Course Name
								{#if sortBy === 'name'}
									<span class="text-xs text-blue-500 font-bold">{sortDirection === 'asc' ? '▲' : '▼'}</span>
								{/if}
							</div>
						</th>
						<th class="px-4 py-4 text-left font-semibold text-gray-800 whitespace-nowrap cursor-pointer select-none hover:bg-gray-300 transition-colors" on:click={() => handleSort('rating')} on:keydown={(e) => e.key === 'Enter' && handleSort('rating')} role="button" tabindex="0">
							<div class="flex items-center gap-2">
								Rating
								{#if sortBy === 'rating'}
									<span class="text-xs text-blue-500 font-bold">{sortDirection === 'asc' ? '▲' : '▼'}</span>
								{/if}
							</div>
						</th>
						<th class="px-4 py-4 text-left font-semibold text-gray-800 whitespace-nowrap">Par</th>
						<th class="px-4 py-4 text-left font-semibold text-gray-800 whitespace-nowrap">Holes</th>
						<th class="px-4 py-4 text-left font-semibold text-gray-800 whitespace-nowrap">Phone</th>
						<th class="px-4 py-4 text-left font-semibold text-gray-800 whitespace-nowrap">Available Times</th>
						<th class="px-4 py-4 text-left font-semibold text-gray-800 whitespace-nowrap">Action</th>
					</tr>
				</thead>
				<tbody>
					{#each filteredCourses as course (course.id)}
						<tr class="border-b border-gray-300 hover:bg-gray-50 transition-colors last:border-b-0">
							<td class="px-4 py-4 font-semibold text-gray-800">{course.name}</td>
							<td class="px-4 py-4 text-amber-500 font-semibold">★ {course.rating}</td>
							<td class="px-4 py-4">{course.par}</td>
							<td class="px-4 py-4">{course.holes}</td>
							<td class="px-4 py-4 text-sm text-gray-600">{course.phone}</td>
							<td class="px-4 py-4 text-sm text-green-600 font-medium">
								{getAvailableTimes(course)
									.map(formatTime)
									.join(', ')}
							</td>
							<td class="px-4 py-4 text-center">
								<button class="px-4 py-2 bg-blue-500 text-white rounded font-semibold text-sm hover:bg-blue-600 transition-colors" on:click={() => handleBookClick(course)}>Book</button>
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
	<div class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 animate-fadeIn" on:click={closeModal} role="presentation">
		<div class="bg-white rounded-lg shadow-2xl max-w-md w-11/12 animate-slideUp" on:click|stopPropagation on:keydown={handleKeydown} role="dialog" aria-labelledby="modal-title" aria-modal="true" tabindex="0">
			<div class="flex flex-col h-full">
				<div class="p-6 border-b-2 border-gray-200 flex justify-between items-center">
					<h2 id="modal-title" class="text-2xl font-semibold text-green-600 m-0">✅ Booking Confirmed!</h2>
					<button class="bg-none border-none text-2xl cursor-pointer text-gray-400 p-0 w-8 h-8 flex items-center justify-center hover:text-gray-700" on:click={closeModal} aria-label="Close booking confirmation">×</button>
				</div>
				<div class="p-6 flex-1">
					<div class="h-52 flex items-center justify-center mb-6">
						<img src={holeInOneGif} alt="Hole in one celebration" class="max-w-full max-h-full rounded" />
					</div>
					<p class="text-center text-lg text-gray-800 m-0 mb-6 font-semibold">Your tee time has been successfully booked!</p>
					<div class="bg-gray-50 rounded p-6 mb-6">
						<div class="flex justify-between py-3 border-b border-gray-200">
							<span class="font-semibold text-gray-800">Course:</span>
							<span class="text-gray-600 text-right">{bookedCourse.name}</span>
						</div>
						<div class="flex justify-between py-3 border-b border-gray-200">
							<span class="font-semibold text-gray-800">Address:</span>
							<span class="text-gray-600 text-right">{bookedCourse.address}</span>
						</div>
						<div class="flex justify-between py-3 border-b border-gray-200">
							<span class="font-semibold text-gray-800">Date:</span>
							<span class="text-gray-600 text-right">{formatDate(selectedDate)}</span>
						</div>
						<div class="flex justify-between py-3 border-b border-gray-200">
							<span class="font-semibold text-gray-800">Time:</span>
							<span class="text-gray-600 text-right">{formatTime(bookedTimeSlot)}</span>
						</div>
						<div class="flex justify-between py-3 border-b border-gray-200">
							<span class="font-semibold text-gray-800">Phone:</span>
							<span class="text-gray-600 text-right">{bookedCourse.phone}</span>
						</div>
						<div class="flex justify-between py-3">
							<span class="font-semibold text-gray-800">Par / Holes:</span>
							<span class="text-gray-600 text-right">{bookedCourse.par} / {bookedCourse.holes}</span>
						</div>
					</div>
					<p class="text-center text-sm text-gray-600 m-0 mt-4 italic">A confirmation email has been sent to your registered email address.</p>
				</div>
				<div class="p-4 border-t border-gray-200 flex justify-center">
					<button class="px-8 py-3 bg-green-600 text-white rounded font-semibold cursor-pointer text-base transition-colors hover:bg-green-700" on:click={closeModal}>Close</button>
				</div>
			</div>
		</div>
	</div>
{/if}

<style>
	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
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

	:global {
		.animate-fadeIn {
			animation: fadeIn 0.3s ease;
		}

		.animate-slideUp {
			animation: slideUp 0.3s ease;
		}
	}

	@media (max-width: 768px) {
		:global(.table-wrapper) {
			margin-left: -1rem;
			margin-right: -1rem;
			border-radius: 0;
		}
	}
</style>

export interface GolfCourse {
    id: number;
    name: string;
    address: string;
    phone: string;
    website?: string;
    par: number;
    holes: number;
    rating: number;
    availableSlots: { date: string; times: string[] }[];
}

export const golfCourses: GolfCourse[] = [
    {
        id: 1,
        name: 'Dodge Park Golf Club',
        address: '1717 N. 188th St, Omaha, NE 68118',
        phone: '(402) 445-2000',
        website: 'https://dodgeparkgolf.com',
        par: 72,
        holes: 18,
        rating: 4.3,
        availableSlots: [
            { date: '2025-12-31', times: ['07:00', '07:30', '08:00', '14:00', '14:30'] },
            { date: '2026-01-01', times: ['08:00', '08:30', '09:00', '15:00', '15:30'] },
            { date: '2026-01-03', times: ['07:30', '08:00', '08:30', '13:30', '14:00'] },
            { date: '2026-01-04', times: ['08:00', '08:30', '09:00', '14:00', '14:30'] },
            { date: '2026-01-10', times: ['07:00', '07:30', '08:00', '15:00', '15:30'] },
            { date: '2026-01-11', times: ['08:00', '08:30', '09:00', '09:30', '14:00'] },
            { date: '2026-01-17', times: ['07:30', '08:00', '08:30', '14:30', '15:00'] },
            { date: '2026-01-18', times: ['08:00', '09:00', '09:30', '14:00', '15:00'] },
            { date: '2026-01-24', times: ['07:00', '07:30', '08:00', '13:30', '14:00'] },
            { date: '2026-01-25', times: ['08:00', '08:30', '09:00', '14:30', '15:00'] },
            { date: '2026-01-31', times: ['07:30', '08:00', '08:30', '14:00', '14:30'] }
        ]
    },
    {
        id: 2,
        name: 'Omaha Country Club',
        address: '4400 R St, Omaha, NE 68117',
        phone: '(402) 733-1223',
        website: 'https://omahacc.com',
        par: 72,
        holes: 18,
        rating: 4.7,
        availableSlots: [
            { date: '2025-12-31', times: ['06:30', '07:00', '15:00'] },
            { date: '2026-01-01', times: ['07:00', '07:30', '08:00', '08:30'] }
        ]
    },
    {
        id: 3,
        name: 'Applewood Golf Course',
        address: '222 Fort Omaha Rd, Omaha, NE 68110',
        phone: '(402) 444-4666',
        par: 71,
        holes: 18,
        rating: 4.2,
        availableSlots: [
            { date: '2025-12-31', times: ['07:30', '08:00', '08:30', '13:30', '14:00', '14:30'] },
            { date: '2026-01-01', times: ['08:00', '09:00', '09:30', '14:00', '14:30'] }
        ]
    },
    {
        id: 4,
        name: 'Standing Bear Lake Golf Club',
        address: '12500 Cornhusker Rd, Ashland, NE 68003',
        phone: '(402) 944-1222',
        par: 72,
        holes: 18,
        rating: 4.5,
        availableSlots: [
            { date: '2025-12-31', times: ['07:00', '08:00', '14:00', '15:00'] },
            { date: '2026-01-01', times: ['07:30', '08:30', '09:00', '15:00', '15:30', '16:00'] }
        ]
    },
    {
        id: 5,
        name: 'Shadow Ridge Golf Course',
        address: '15151 W Maple Rd, Omaha, NE 68116',
        phone: '(402) 493-8900',
        par: 72,
        holes: 18,
        rating: 4.4,
        availableSlots: [
            { date: '2025-12-31', times: ['07:30', '08:30', '13:00', '14:30'] },
            { date: '2026-01-01', times: ['08:00', '09:00', '09:30', '14:00'] }
        ]
    },
    {
        id: 6,
        name: 'Prairie View Golf Course',
        address: '2750 S 168th St, Omaha, NE 68130',
        phone: '(402) 896-3322',
        par: 70,
        holes: 18,
        rating: 4.1,
        availableSlots: [
            { date: '2025-12-31', times: ['06:30', '07:30', '08:30', '14:00', '15:00'] },
            { date: '2026-01-01', times: ['07:00', '08:00', '09:00', '14:30', '15:30'] }
        ]
    },
    {
        id: 7,
        name: 'Lakewood Golf Club',
        address: '10151 Giles Rd, Papillion, NE 68046',
        phone: '(402) 339-0770',
        par: 72,
        holes: 18,
        rating: 4.6,
        availableSlots: [
            { date: '2025-12-31', times: ['07:00', '08:00', '15:00'] },
            { date: '2026-01-01', times: ['08:00', '08:30', '09:00', '09:30', '15:00'] }
        ]
    },
    {
        id: 8,
        name: 'Indian Creek Golf Club',
        address: '1800 E Belvidere Blvd, Fremont, NE 68025',
        phone: '(402) 721-1990',
        par: 72,
        holes: 18,
        rating: 4.3,
        availableSlots: [
            { date: '2025-12-31', times: ['07:30', '14:00', '14:30'] },
            { date: '2026-01-01', times: ['07:00', '08:00', '09:00', '14:00', '15:00'] }
        ]
    },
    {
        id: 9,
        name: 'Tanoan Country Club',
        address: '8701 S 180th St, Gretna, NE 68028',
        phone: '(402) 332-3131',
        par: 72,
        holes: 18,
        rating: 4.8,
        availableSlots: [
            { date: '2025-12-31', times: ['06:30', '07:00', '15:00'] },
            { date: '2026-01-01', times: ['07:30', '08:00', '08:30', '15:30'] }
        ]
    },
    {
        id: 10,
        name: 'Quarry Oaks Golf Club',
        address: '3000 Capehart Rd, Ashland, NE 68003',
        phone: '(402) 944-7177',
        par: 71,
        holes: 18,
        rating: 4.5,
        availableSlots: [
            { date: '2025-12-31', times: ['08:00', '14:00', '14:30', '15:30'] },
            { date: '2026-01-01', times: ['08:00', '09:00', '09:30', '14:30', '15:00'] }
        ]
    },
    {
        id: 11,
        name: 'Iron Horse Golf Club',
        address: '10325 S 180th St, Gretna, NE 68028',
        phone: '(402) 332-6000',
        par: 72,
        holes: 18,
        rating: 4.6,
        availableSlots: [
            { date: '2025-12-31', times: ['07:00', '08:00', '13:30'] },
            { date: '2026-01-01', times: ['07:30', '08:30', '09:00', '14:00', '14:30'] }
        ]
    },
    {
        id: 12,
        name: 'Grand Prairie Country Club',
        address: '1333 W 140th Ave, Bennington, NE 68007',
        phone: '(402) 238-4200',
        par: 72,
        holes: 18,
        rating: 4.4,
        availableSlots: [
            { date: '2025-12-31', times: ['07:30', '14:00', '14:30'] },
            { date: '2026-01-01', times: ['08:00', '08:30', '09:00', '14:00', '15:00'] }
        ]
    },
    {
        id: 13,
        name: 'Riverside Country Club',
        address: '1101 S 190th St, Omaha, NE 68130',
        phone: '(402) 896-9500',
        par: 70,
        holes: 18,
        rating: 4.2,
        availableSlots: [
            { date: '2025-12-31', times: ['06:30', '07:30', '15:00'] },
            { date: '2026-01-01', times: ['07:00', '08:00', '09:00', '14:00', '15:00'] }
        ]
    },
    {
        id: 14,
        name: 'Old Settler Golf Club',
        address: '25500 W Mission Ave, Kansas City, KS 66111',
        phone: '(913) 287-6000',
        par: 72,
        holes: 18,
        rating: 4.5,
        availableSlots: [
            { date: '2025-12-31', times: ['07:00', '13:30', '14:00'] },
            { date: '2026-01-01', times: ['08:00', '08:30', '14:00', '14:30'] }
        ]
    },
    {
        id: 15,
        name: 'Deer Creek Golf Course',
        address: '20001 S St, Omaha, NE 68135',
        phone: '(402) 896-4700',
        par: 71,
        holes: 18,
        rating: 4.3,
        availableSlots: [
            { date: '2025-12-31', times: ['07:30', '08:30', '14:00', '15:00'] },
            { date: '2026-01-01', times: ['08:00', '09:00', '14:30', '15:30'] }
        ]
    },
    {
        id: 16,
        name: 'Skyline Country Club',
        address: '2002 N 144th Ave, Omaha, NE 68142',
        phone: '(402) 571-1190',
        par: 70,
        holes: 18,
        rating: 4.2,
        availableSlots: [
            { date: '2025-12-31', times: ['07:00', '08:00', '13:00', '14:00'] },
            { date: '2026-01-01', times: ['07:30', '08:30', '09:00', '14:00', '15:00'] }
        ]
    },
    {
        id: 17,
        name: 'Nebraska National Golf Club',
        address: '2850 Fort Crook Rd S, Bellevue, NE 68005',
        phone: '(402) 293-1100',
        par: 72,
        holes: 18,
        rating: 4.7,
        availableSlots: [
            { date: '2025-12-31', times: ['06:30', '07:00', '15:00'] },
            { date: '2026-01-01', times: ['07:30', '08:00', '08:30', '15:00', '15:30'] }
        ]
    },
    {
        id: 18,
        name: 'Three Creek Golf Club',
        address: '17000 Valley View Dr, Greenwood, NE 68010',
        phone: '(402) 359-2000',
        par: 72,
        holes: 18,
        rating: 4.4,
        availableSlots: [
            { date: '2025-12-31', times: ['07:30', '08:30', '14:30'] },
            { date: '2026-01-01', times: ['08:00', '09:00', '09:30', '14:00', '15:00'] }
        ]
    },
    {
        id: 19,
        name: 'Links Golf Course',
        address: '1515 Elk St, Ashland, NE 68003',
        phone: '(402) 944-6000',
        par: 71,
        holes: 18,
        rating: 4.3,
        availableSlots: [
            { date: '2025-12-31', times: ['07:00', '14:00', '15:00'] },
            { date: '2026-01-01', times: ['08:00', '08:30', '09:00', '14:30', '15:30'] }
        ]
    },
    {
        id: 20,
        name: 'Wildwood Golf Course',
        address: '4500 Wildwood Dr, Council Bluffs, IA 51501',
        phone: '(712) 322-5055',
        par: 70,
        holes: 18,
        rating: 4.1,
        availableSlots: [
            { date: '2025-12-31', times: ['07:30', '08:30', '13:30', '14:30'] },
            { date: '2026-01-01', times: ['08:00', '09:00', '14:00', '15:00'] }
        ]
    },
    {
        id: 21,
        name: 'Chalaco Golf Club',
        address: '2500 Chalco Rd, Omaha, NE 68130',
        phone: '(402) 331-1660',
        par: 72,
        holes: 18,
        rating: 4.2,
        availableSlots: [
            { date: '2025-12-31', times: ['07:00', '08:00', '14:00'] },
            { date: '2026-01-01', times: ['07:30', '08:30', '09:30', '14:30'] }
        ]
    },
    {
        id: 22,
        name: 'Mahoney State Park Golf Course',
        address: '28500 West Park Hwy, Ashland, NE 68003',
        phone: '(402) 944-2523',
        par: 71,
        holes: 18,
        rating: 4.0,
        availableSlots: [
            { date: '2025-12-31', times: ['08:00', '14:00', '14:30'] },
            { date: '2026-01-01', times: ['08:00', '09:00', '09:30', '15:00'] }
        ]
    },
    {
        id: 23,
        name: 'Country Club of Plattsmouth',
        address: '9009 Chicago Ave, Plattsmouth, NE 68048',
        phone: '(402) 296-7888',
        par: 70,
        holes: 18,
        rating: 4.1,
        availableSlots: [
            { date: '2025-12-31', times: ['07:30', '13:30', '14:30'] },
            { date: '2026-01-01', times: ['07:00', '08:00', '09:00', '14:00', '15:00'] }
        ]
    },
    {
        id: 24,
        name: 'Granite Creek Golf Club',
        address: '17500 Industrial Rd, Omaha, NE 68137',
        phone: '(402) 896-4000',
        par: 72,
        holes: 18,
        rating: 4.5,
        availableSlots: [
            { date: '2025-12-31', times: ['07:00', '08:00', '14:30', '15:00'] },
            { date: '2026-01-01', times: ['08:00', '09:00', '09:30', '14:00'] }
        ]
    },
    {
        id: 25,
        name: 'Sycamore Creek Golf Course',
        address: '3501 N 156th Ave, Omaha, NE 68116',
        phone: '(402) 496-9565',
        par: 71,
        holes: 18,
        rating: 4.2,
        availableSlots: [
            { date: '2025-12-31', times: ['07:30', '08:30', '14:00', '14:30'] },
            { date: '2026-01-01', times: ['08:00', '09:00', '14:30', '15:30'] }
        ]
    },
    {
        id: 26,
        name: 'Valley View Golf Course',
        address: '1515 Valley View Dr, Omaha, NE 68130',
        phone: '(402) 896-2000',
        par: 70,
        holes: 18,
        rating: 4.0,
        availableSlots: [
            { date: '2025-12-31', times: ['06:30', '07:30', '13:30', '14:30'] },
            { date: '2026-01-01', times: ['07:00', '08:00', '09:00', '14:00', '15:00'] }
        ]
    },
    {
        id: 27,
        name: 'Willow Springs Golf Club',
        address: '5600 Willow Springs Ln, Omaha, NE 68118',
        phone: '(402) 333-4455',
        par: 72,
        holes: 18,
        rating: 4.4,
        availableSlots: [
            { date: '2025-12-31', times: ['07:00', '14:00', '15:00'] },
            { date: '2026-01-01', times: ['08:00', '08:30', '09:00', '14:30', '15:00'] }
        ]
    },
    {
        id: 28,
        name: 'Shoreline Golf Course',
        address: '4000 Fort St, Council Bluffs, IA 51503',
        phone: '(712) 322-7888',
        par: 70,
        holes: 18,
        rating: 4.2,
        availableSlots: [
            { date: '2025-12-31', times: ['07:30', '08:30', '14:30'] },
            { date: '2026-01-01', times: ['07:00', '08:00', '09:00', '14:00', '15:00'] }
        ]
    },
    {
        id: 29,
        name: 'Mullen Golf Club',
        address: '2020 Mullen Ave, Omaha, NE 68110',
        phone: '(402) 555-0100',
        par: 71,
        holes: 18,
        rating: 4.3,
        availableSlots: [
            { date: '2025-12-31', times: ['08:00', '13:30', '14:30'] },
            { date: '2026-01-01', times: ['08:00', '09:00', '09:30', '14:00', '15:30'] }
        ]
    },
    {
        id: 30,
        name: 'Westgate Golf Course',
        address: '8888 West Center Rd, Omaha, NE 68124',
        phone: '(402) 555-0200',
        par: 72,
        holes: 18,
        rating: 4.5,
        availableSlots: [
            { date: '2025-12-31', times: ['07:00', '08:00', '15:00', '15:30'] },
            { date: '2026-01-01', times: ['07:30', '08:30', '09:00', '14:00', '15:00'] }
        ]
    }
];

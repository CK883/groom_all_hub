import common from '../common'

export default {
  mock: [{ nameEN: 'All', value: '' }],
  entries: [
    { nameEN: '5', value: 5 },
    { nameEN: '10', value: 10 },
    { nameEN: '15', value: 15 },
    { nameEN: '20', value: 20 },
    { nameEN: '50', value: 50 },
    { nameEN: '100', value: 100 }
  ],
  leadGroupState: [
    { nameEN: 'Soon', value: 'Soon' },
    { nameEN: 'On Process', value: 'On Process' },
    { nameEN: 'Expired', value: 'Expired' }
  ],
  leadGroupStatus: [
    { nameEN: 'Active', value: true },
    { nameEN: 'Inactive', value: false }
  ],
  leadGroupFileType: [{ nameEN: 'Excel', value: 'excel' }],
  contactStatus: [
    { nameEN: 'Contactable', value: 'Contactable' },
    { nameEN: 'Uncontactable', value: 'Uncontactable' }
  ],
  years: [
    { nameAD: 2024, nameBE: 2567 },
    { nameAD: 2025, nameBE: 2568 },
    { nameAD: 2026, nameBE: 2569 },
    { nameAD: 2027, nameBE: 2570 },
    { nameAD: 2028, nameBE: 2571 },
    { nameAD: 2029, nameBE: 2572 },
    { nameAD: 2030, nameBE: 2573 }
  ],
  months: [
    { nameEN: 'January', nameTH: 'มกราคม', value: 1 },
    { nameEN: 'February', nameTH: 'กุมภาพันธ์', value: 2 },
    { nameEN: 'March', nameTH: 'มีนาคม', value: 3 },
    { nameEN: 'April', nameTH: 'เมษายน', value: 4 },
    { nameEN: 'May', nameTH: 'พฤษภาคม', value: 5 },
    { nameEN: 'June', nameTH: 'มิถุนายน', value: 6 },
    { nameEN: 'July', nameTH: 'กรกฎาคม', value: 7 },
    { nameEN: 'August', nameTH: 'สิงหาคม', value: 8 },
    { nameEN: 'September', nameTH: 'กันยายน', value: 9 },
    { nameEN: 'October', nameTH: 'ตุลาคม', value: 10 },
    { nameEN: 'November', nameTH: 'พฤศจิกายน', value: 11 },
    { nameEN: 'December', nameTH: 'ธันวาคม', value: 12 }
  ],
  dayOfWeek: [
    { fullName: 'Sunday', shotName: 'Sun' },
    { fullName: 'Monday', shotName: 'Mon' },
    { fullName: 'Tuesday', shotName: 'Tue' },
    { fullName: 'Wednesday', shotName: 'Wed' },
    { fullName: 'Thursday', shotName: 'Thu' },
    { fullName: 'Friday', shotName: 'Fri' },
    { fullName: 'Saturday', shotName: 'Sat' }
  ],
  time: [
    { name: '08:00', value: 8.0 },
    { name: '08:30', value: 8.5 },
    { name: '09:00', value: 9.0 },
    { name: '09:30', value: 9.5 },
    { name: '10:00', value: 10.0 },
    { name: '10:30', value: 10.5 },
    { name: '11:00', value: 11.0 },
    { name: '11:30', value: 11.5 },
    { name: '12:00', value: 12.0 },
    { name: '12:30', value: 12.5 },
    { name: '13:00', value: 13.0 },
    { name: '13:30', value: 13.5 },
    { name: '14:00', value: 14.0 },
    { name: '14:30', value: 14.5 },
    { name: '15:00', value: 15.0 },
    { name: '15:30', value: 15.5 },
    { name: '16:00', value: 16.0 },
    { name: '16:30', value: 16.5 },
    { name: '17:00', value: 17.0 },
    { name: '17:30', value: 17.5 },
    { name: '18:00', value: 18.0 },
    { name: '18:30', value: 18.5 },
    { name: '19:00', value: 19.0 },
    { name: '19:30', value: 19.5 },
    { name: '20:00', value: 20.0 }
  ],
  campaignType: [
    { label: 'ทั้งหมด', name: 'all', value: '' },
    { label: 'motor', name: 'motor', value: 'Motor' },
    { label: 'non-motor', name: 'non-motor', value: 'Non-Motor' }
  ],
  campaignStatus: [
    { label: 'ทั้งหมด', name: 'all', value: '' },
    { label: 'เปิดใช้งาน', name: 'active', value: true },
    { label: 'ปิดใช้งาน', name: 'inactive', value: false }
  ]
}

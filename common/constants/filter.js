export default {
    leadGroupView: [
        { name: 'uniqueId', label: 'unique ID', placeholder: '', variable: 'uniqueId', class: '' },
        { name: 'leadName', label: 'Lead Name', placeholder: '', variable: 'leadName', class: '' },
        { name: 'phone', label: 'Phone', placeholder: '', variable: 'phone', class: '' },
        { name: 'email', label: 'Email', variable: 'email', class: '' },
        { name: 'TotalAmountDue', label: 'Total Amount Due', placeholder: '', variable: 'amountDue', class: '' },
        // { name: 'assignTo',label: 'Assign To', variable: 'assignTo', class: '' },
        // { name: 'contactStatus',label: 'Contact Status', variable: 'contactStatus', class: '' },
        // { name: 'endDate',label: 'End Date', variable: 'endDate', class: '' },
        // { name: 'state',label: 'State', variable: 'state', class: '' },
    ],
    leadGroupIndex: [
        { name: 'title', label: 'Name', placeholder: '', variable: 'title', class: 'col-span-1' },
        // { name: 'status',label: 'Status', variable: 'isActive' class: '' },
        { name: 'startDate', label: 'Start Date', placeholder: '', variable: 'startDate', class: '' },
        { name: 'endDate', label: 'End Date', placeholder: '', variable: 'endDate', class: '' },
        { name: 'state', label: 'State', placeholder: '', variable: 'state', class: '' },
    ],
    ticketIndex: [
        { name: 'openDate', label: 'วันที่เปิด Ticket', placeholder: '', variable: 'openDate', class: '', },
        { name: 'agentName', label: 'Agent', placeholder: '', variable: 'AgentName', class: '', },
        { name: 'leadGroup', label: 'Lead Group', placeholder: '', variable: 'leadGroup', class: '', },
        { name: 'leadName', label: 'Lead', placeholder: 'Lead Name...', variable: 'leadName', class: '' },
        { name: 'carRegistration', label: 'ทะเบียนรถ', placeholder: '', variable: 'carRegistration', class: '' },
        { name: 'typeofWork', label: 'ประเภทงาน', placeholder: '', variable: 'typeofWork', class: '' },
        { name: 'insuranceType', label: 'ประเภทงาน', placeholder: '', variable: 'insuranceType', class: '' },
        { name: 'status', label: 'สถานะ', placeholder: '', variable: 'status', class: '' },
        { name: 'protectionDate', label: 'วันที่คุ้มครอง', placeholder: '', variable: 'protectionDate', class: '' },
        { name: 'appointmentDate', label: 'วันที่นัดหมาย', placeholder: '', variable: 'appointmentDate', class: '' },
    ] ,
    ScriptIndex: [
        { name: 'subject', label: 'Subject', placeholder: 'subject', variable: 'subject', class: '', },
        { name: 'category', label: 'Category', placeholder: '', variable: 'category', class: '', },
        { name: 'status', label: 'Status', placeholder: '', variable: 'status', class: '', },
    ],
    campaigIndex: [
        { variable: 'type', name: 'ประเภท', example: '', type: 'select', default: '', option: 'campaignType', class: '' },
        { variable: 'isActive', name: 'สถานะ', example: '', type: 'select', default: '', option: 'campaignIsActive', class: '' },
        { variable: 'dateFrom', name: 'ช่วงวันที่เริ่มต้น', example: '', type: 'startDate', default: '', class: 'col-span-2' },
        { variable: 'dateTo', name: 'ช่วงวันที่สิ้นสุด', example: '', type: 'endDate', default: '', class: 'col-span-2' },      
    ]
}
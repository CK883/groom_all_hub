export default {
  navMenus: [
    {
      name: 'Dashboard',
      path: 'dashboard',
      icon: 'bi-house',
      type: 'single',
      isActive: true,
      key: 'dashboard'
    },
    {
      name: 'To-do List',
      path: 'to-do-list',
      icon: 'bi-bell',
      type: 'single',
      isActive: true,
      key: 'list',
    },
    {
      name: 'Ticket',
      path: 'ticket',
      icon: 'bi-file-check',
      type: 'single',
      isActive: true,
      key: 'ticket'
    },
    {
      name: 'Campaign',
      path: 'campaign',
      icon: 'bi-flag',
      type: 'single',
      isActive: true,
      key: 'campaign'
    },
    {
      name: 'Contact',
      path: 'contact',
      icon: 'bi-people',
      type: 'single',
      isActive: true,
      key: 'contact'
    },
    {
      name: 'Knowledge Base',
      path: 'knowledgeBase',
      icon: 'bi-book',
      type: 'single',
      isActive: true,
      key: 'knowledge'
    },
    {
      name: 'Script',
      path: 'script',
      icon: 'bi-card-list',
      type: 'single',
      isActive: true,
      key: 'script'
    },
    {
      name: 'Management',
      path: 'management',
      icon: 'bi-nut',
      type: 'multiple',
      isActive: true,
      key: 'management',
      subList: [
        {
          name: 'ทีม Telesales',
          slug: 'management',
          isActive: true,
          subList: [
            {
              name: 'User Telesales',
              path: 'management/users/user-telesales',
              slug: 'management-users-user-telesales',
              isActive: true
            },
            {
              name: 'Permission Telesales',
              path: 'management/role-permission/permission-telesales',
              slug: 'management-role-permission-permission-telesales',
              isActive: true
            }
          ]
        },
        {
          name: 'ทีม Inbound',
          slug: 'management',
          isActive: true,
          subList: [
            {
              name: 'User Inbound',
              path: 'management/users/user-inbound',
              slug: 'management-users-user-inbound',
              isActive: true
            },
            {
              name: 'Permission Inbound',
              path: 'management/role-permission/permission-inbound',
              slug: 'management-role-permission-permission-inbound',
              isActive: true
            }
          ]
        },
        {
          name: 'ทีม V-Station',
          slug: 'management',
          isActive: true,
          subList: [
            {
              name: 'User V-Station',
              path: 'management/users/user-v-station',
              slug: 'management-users-user-v-station',
              isActive: true
            },
            {
              name: 'Permission V-Station',
              path: 'management/role-permission/permission-v-station',
              slug: 'management-role-permission-permission-v-station',
              isActive: true
            }
          ]
        },
        {
          name: 'คอมมิชชั่น',
          slug: 'management',
          isActive: true,
          subList: [
            {
              name: 'ตั้งค่าคอมมิชชั่น',
              path: 'management/commission',
              slug: 'management-commission',
              isActive: true
            }
          ]
        }
      ]
    },
    {
      name: 'Master Data',
      path: 'master-data',
      icon: 'bi-hdd',
      type: 'multiple',
      isActive: true,
      key: 'masterData',
      subList: [
        {
          name: 'ทั่วไป',
          slug: 'master-data',
          isActive: true,
          subList: [
            {
              name: 'หมวดหมู่ของ content',
              path: 'master-data/content',
              slug: 'master-data-content',
              isActive: true
            },
            {
              name: 'แท็กของสคริปต์',
              path: 'master-data/script-tag',
              slug: 'master-data-script-tag',
              isActive: true
            }
          ]
        },
        {
          name: 'V-Station',
          slug: 'master-data',
          isActive: true,
          subList: [
            {
              name: 'ข้อมูลสาขา',
              path: 'master-data/branch-data',
              slug: 'master-data-branch-data',
              isActive: true
            }
          ]
        },
        {
          name: 'ticket',
          slug: 'master-data',
          isActive: true,
          subList: [
            {
              name: 'สถานะของ Ticket',
              path: 'master-data/ticket-status',
              isActive: true
            },
            {
              name: 'สถานะหมายเหตุ',
              path: 'master-data/ticket-remark',
              isActive: true
            },
            {
              name: 'เจ้าหน้าที่ติดต่อกลับ',
              path: 'master-data/agent-callback',
              slug: 'master-data-agent-callback',
              isActive: true
            },
            {
              name: 'ช่องทางการติดต่อ',
              path: 'master-data/contact',
              slug: 'master-data-contact',
              isActive: true
            },
            {
              name: 'ของสมนาคุณ',
              path: 'master-data/freebies',
              slug: 'master-data-freebies',
              isActive: true
            }
          ]
        },
        {
          name: 'Motor',
          slug: 'master-data',
          isActive: true,
          subList: [
            {
              name: 'ผลิตภัณฑ์ Motor',
              path: 'master-data/product-motor/motor',
              slug: 'master-data-product-motor-motor',
              isActive: true
            },
            {
              name: 'ข้อมูลรถ',
              path: 'master-data/product-motor/car',
              slug: 'master-data-product-motor-car',
              isActive: true
            }
          ]
        },
        {
          name: 'Non-Motor',
          slug: 'master-data',
          isActive: true,
          subList: [
            {
              name: 'ผลิตภัณฑ์ Non-Motor',
              path: 'master-data/product-non-motor',
              slug: 'master-data-product-non-motor',
              isActive: true
            }
          ]
        },
        {
          name: 'Commission',
          slug: 'master-data',
          isActive: true,
          subList: [
            {
              name: 'เงื่อนไขการคำนวน Commission',
              path: 'master-data/commission',
              slug: 'master-data-commission',
              isActive: true
            }
          ]
        }
      ]
    },
    {
      name: 'รายการ',
      path: 'report',
      icon: 'bi-bar-chart',
      type: 'multiple',
      isActive: true,
      key: 'report',
      subList: [
        {
          name: 'รายงาน',
          path: 'lead-report',
          isActive: true,
          subList: [
            {
              name: 'รายงานยอดขายภาคสมัครใจ',
              path: 'report/sale-report',
              isActive: true,
            },
            {
              name: 'รายงานสรุป Telesales Performance',
              path: 'report/telesale-performance-report',
              isActive: true,
            },
            {
              name: 'แบบฟอร์มบันทึกงานขาย Telesales',
              path: 'report/telesale-sale-form',
              isActive: true,
            },
            {
              name: 'รายงานแจก Lead ของแต่ละเดือน',
              path: 'report/monthly-lead-report',
              isActive: true,
            },
            {
              name: 'รายงานสรุปยอดขาย Telesales ของแต่ละเดือน (รายบุคคล)',
              path: 'report/telesales-personal-sale-report',
              isActive: true,
            },
            {
              name: 'ใบปะหน้าค่าส่งเสริมการตลาดของแต่ละเดือน',
              path: 'report/marketing-report',
              isActive: true,
            },
            {
              name: 'รายงานประจำวันของแต่ละเดือน',
              path: 'report/monthly-daily-report',
              isActive: true,
            },
            {
              name: 'การใช้โทรศัพท์ แผนกขายและบริการ',
              path: 'report/sale-service-phone-use-report',
              isActive: true,
            },
            {
              name: 'Report V-Station',
              path: 'report/v-station-report',
              isActive: true,
            }
          ]
        }
      ]
    }
  ]
}

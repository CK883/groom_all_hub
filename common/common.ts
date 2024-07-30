import dayjs from 'dayjs'
import 'dayjs/locale/th'
import buddhistEra from 'dayjs/plugin/buddhistEra'
import navBarMenu from '~/common/constants/navBarMenu'
import { useSystemStore } from '~/store/systemStore'
export default {
  prePermission() {
    const permissionJson = localStorage.getItem('permission')
    if (permissionJson) {
      const permission = JSON.parse(permissionJson)
      // permission.contact.editRelationship = false
      return permission
    } else {
      // จัดการกรณีที่ไม่พบค่า 'permission' ใน localStorage
      console.log('ไม่พบข้อมูล permission')
      return {}
    }
  },
  convertTitleName: (value: string) => {
    const systemStore = useSystemStore()
    const titleName = systemStore.title
    const title = titleName.find((item: any) => item.value === value)
    if (title) {
      return title.label
    } else {
      return ''
    }
  },
  filterSideBarMenu: (s: any) => {
    const token = localStorage.getItem('accessToken')
    if (!_isNil(token)) {
      const tokenPerMission = localStorage.getItem('permission')
      const parserPerMission = JSON.parse(tokenPerMission || '{}')
      if (parserPerMission) {
        navBarMenu.navMenus.forEach((menu) => {
          if (parserPerMission?.[menu.key]?.accessAll !== undefined) {
            menu.isActive = parserPerMission?.[menu.key]?.accessAll
          }
        })
      }
    }
  },

  optionTitleName: () => {
    return [
      { nameEN: 'Mr.', nameTH: 'นาย', value: 'นาย' },
      { nameEN: 'Mrs.', nameTH: 'นาง', value: 'นาง' },
      { nameEN: 'Miss', nameTH: 'นางสาว', value: 'นางสาว' }
    ]
  },
  optionEntriesDropdown: () => {
    return [
      { nameEN: '10', value: 10 },
      { nameEN: '20', value: 20 },
      { nameEN: '50', value: 50 },
      { nameEN: '100', value: 100 }
    ]
  },
  convertDate(value: string, type: string) {
    if (!value) return ''
    dayjs.locale('th')
    dayjs.extend(buddhistEra)
    const date = dayjs(value)
    if (type === 'time') return date.format('HH:mm')
    if (type === 'date') return date.format('MMM DD, YYYY')
    if (type === 'date-format') return date.format('DD-MM-YYYY')
    if (type === 'date-time') return date.format('MMM DD, YYYY HH:mm')
    if (type === 'fullDate-time') return date.format('DD/MM/YYYY HH:mm')
    if (type === 'fullDate-time-thai') return date.format('DD MMMM BB, HH:mm')
    if (type === 'Date-time-thai') return date.format('DD MMM BB, HH:mm')
    if (type === 'Date-thai') return date.format('DD MMM BB')
    if (type === 'fullDate-thai') return date.format('DD MMMM, BB')
    if (type === 'date-string') return date.format('dddd DD/MM/YYYY HH:mm')
    if (type === 'date-input') return date.format('YYYY-MM-DD')
    if (type === 'date-shot') return date.format('DD/MM/YYYY')
  },
  convertInputDate(value: string) {
    const date = dayjs(value)
    return date.format('YYYY-MM-DD')
  },
  convertTodayInput() {
    const today = dayjs()
    return today.format('YYYY-MM-DD')
  },
  convertIsoDate(dateInput: string) {
    return new Date(dateInput).toISOString()
  },
  removeEmpty(obj: any) {
    Object.keys(obj).forEach((key) => {
      if (_isObject(obj[key])) this.removeEmpty(obj[key])
      if (
        _isNumber(obj[key]) ||
        _isBoolean(obj[key]) ||
        _isArray(obj[key]) ||
        _isDate(obj[key])
      ) {
      } else if (_isNil(obj[key]) || _isEmpty(obj[key])) {
        delete obj[key]
      }
    })
    return obj
  },

  currencyFormatted(currency: number) {
    const formatter = new Intl.NumberFormat('th-TH', {
      style: 'currency',
      currency: 'THB', // Specify currency code (USD, EUR, etc.)
      minimumFractionDigits: 2 // Set number of decimal places
    })
    return formatter.format(currency)
  },
  amountFormatted(currency: any) {
    const formatter = Number(currency).toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })
    return formatter
  },
  validateNumber: (event) => {
    let keyCode = event.keyCode
    if (keyCode < 48 || keyCode > 57) {
      event.preventDefault()
    }
  },
  reportFormatSeconds(s) {
    if (s < 0) {
      s = s * -1
      return `-${[
        Number.parseInt(s / 60 / 60),
        Number.parseInt((s / 60) % 60),
        Number.parseInt(s % 60)
      ]
        .join(':')
        .replace(/\b(\d)\b/g, '0$1')}`
    } else {
      return [
        Number.parseInt(s / 60 / 60),
        Number.parseInt((s / 60) % 60),
        Number.parseInt(s % 60)
      ]
        .join(':')
        .replace(/\b(\d)\b/g, '0$1')
    }
  },
  generateComponentId(id: string) {
    return id
  },

  //make number as commas and decimal
  removeComma(numbers: any) {
    let numArr = _split(numbers, ',')
    return _join(numArr, '')
  },
  setDecimal(value:any){
    const dataTmp = _toNumber(this.removeComma(value))
    if (!_isNaN(dataTmp)) {
      const dataTmp2 = dataTmp.toFixed(2)
      return this.setComma(dataTmp2.toString())
    } else {
      return '0'
    }
  },
  digitDecimal(state: any) {
    const dataTmp = _toNumber(this.removeComma(state.target.value))
    if (!_isNaN(dataTmp)) {
      const dataTmp2 = dataTmp.toFixed(2)
      return this.setComma(dataTmp2.toString())
    } else {
      return '0'
    }
  },
  setComma(data: any) {
    let Num = ''
    Num = data.replace(/,/g, '')
    let x = Num.split('.')
    let x1 = x[0]
    let x2 = x.length > 1 ? '.' + x[1] : ''
    const rgx = /(\d+)(\d{3})/
    while (rgx.test(x1)) x1 = x1.replace(rgx, '$1' + ',' + '$2')
    return x1 + x2
  },
  NumbersOnly(evt: any) {
    evt = evt ? evt : window.event
    let charCode = evt.which ? evt.which : evt.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57) && charCode !== 46) {
      evt.preventDefault()
    } else {
      return true
    }
  },
  joinText (list:any , joinMark: any){
    if ( list.length > 0 ){
      return _join( list , joinMark)
    }
    else{
      return '-'
    }

  },
  setNumberValue(event: any) {}
}

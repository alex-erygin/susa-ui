import { DatePipe } from '@angular/common'

export default class ChartPoint {
  constructor(date: Date, name: string, value: number) {
    this.date = date ?? null
    this.name = name
    this.value = value

    const options = {  year: 'numeric', month: 'numeric', day: 'numeric' }

    this.point_label = this.date.toLocaleDateString("ru-RU", options)
  }

  date?: Date
  name: string
  value: number
  point_label: string
}

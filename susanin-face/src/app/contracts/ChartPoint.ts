export default class ChartPoint {
  constructor(date: Date, name: string, value: number) {
    this.date = date ?? null
    this.name = name
    this.value = value
  }

  date?: Date
  name: string
  value: number
}

import RoadmapItemDto from "./RoadmapItemDto";

export default class RoadmapItem{
  constructor(private item: RoadmapItemDto) {
    this.id = item.id;
    this.description = item.description
    this.name = item.name
    this.status = item.status
    this.customer = item.customer
    this.executor = item.executor
    this.approved = item.approved
    this.readiness = item.readiness
    this.url = item.url

    if (item.created) {
      this.created = new Date(item.created);
    }

    if (item.started) {
      this.started = new Date(item.started);
    }

    if (item.plannedComplete) {
      this.plannedComplete = new Date(item.plannedComplete);
    }

    if (item.factComplete) {
      this.factComplete = new Date(item.factComplete);
    }
  }

  id: number
  created?: Date
  name: string
  description: string
  status: string
  customer: string
  executor: string
  approved: boolean
  readiness: number
  started?: Date
  plannedComplete?: Date
  factComplete?: Date
  url: string
}

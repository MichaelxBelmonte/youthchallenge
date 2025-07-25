import roadmapData from '@/data/roadmap.json'

export interface RoadmapItem {
  id: string
  date: string
  title: string
  description: string
  status: 'completed' | 'in-progress' | 'current' | 'pending'
  icon: string
}

export function getRoadmapData(): RoadmapItem[] {
  return roadmapData as RoadmapItem[]
} 
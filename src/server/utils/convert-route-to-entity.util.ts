const mapping: Record<string, string> = {
  feedbacks: 'feedback',
  guardians: 'guardian',
  lessons: 'lesson',
  students: 'student',
  tasks: 'task',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}

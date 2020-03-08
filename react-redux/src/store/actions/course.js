/* Retorna umm objeto e tem um fomato padrão */
export function toggleLesson(module, lesson) {
  return {
    type: "TOGGLE_LESSON",
    module,
    lesson
  };
}


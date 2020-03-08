/* Caso você queira lidar com avatar, nome, perfil... */
const INITIAL_STATE = {
    activeLesson: {},
    activeModule: {},
    modules: [
      {
        id: 1,
        title: "Iniciando com React",
        lessons: [
          { id: 1, title: "Primeira aula" },
          { id: 2, title: "Segunda aula" }
        ]
      },
      {
        id: 2,
        title: "Aprendendo com redux",
        lessons: [
          { id: 3, title: "Terceira aula" },
          { id: 4, title: "Quarta aula" }
        ]
      }
    ]
  };
  
  /* createStore precisa de um parâmetro obrigatório. Esse parâmetro é uma funtion que retorna o estado inicial da aplicação. Essa função se chama reducer */
  /* A function reducer armazena dados e pode manipula-lo */
  /* Ainda sobre a function reducer. Temos actions que são ações que a gente repassa do redux indica ações do o usuario ou ações da aplicação */
  /* recebemos dois parâmetros quando uma action é disparada. O state simboliza o estado antes da alteração e o action */
  /* reducer é um nome genérico. O melhor é trocar o nome reducer por um nome mais próximo de sua aplicação*/
  export default function course(state = INITIAL_STATE, action) {
    if (action.type === 'TOGGLE_LESSON'){
        return {...state, activeLesson: action.lesson, activeModule: action.module}
    }
    return state;
  }
import React from "react";

import { connect } from "react-redux";

import { bindActionCreators } from "redux";

import * as CourseActions from "../../store/actions/course";

/* dispatch vai disparar actios para o redux e essas actions serão ouvidas por todos os redux da aplicações  */
const Sidebar = ({ modules, toggleLesson }) => (
  <aside>
    {modules.map(module => (
      <div key={module.id}>
        <h1>{module.title}</h1>
        <ul>
          {module.lessons.map(lesson => (
            <li key={lesson.id}>
              {lesson.title}
              <button onClick={() => toggleLesson(module, lesson)}>
                Toggle
              </button>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </aside>
);

const mapStateToProps = state => ({
  modules: state.course.modules
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CourseActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);

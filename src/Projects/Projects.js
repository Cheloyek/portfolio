import React from "react";
import style from './Projects.module.css'
import styleContainer from './../common/styles/Container.module.css'
import Project from "./Project/Project";

const Projects = () => {
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <h2 className={style.title}>My projects</h2>
                <div className={style.projects}>
                    <Project title={'Project 1'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}/>
                    <Project title={'Project 2'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}/>
                </div>
            </div>
        </div>
    );
}


export default Projects;
